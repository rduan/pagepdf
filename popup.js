document.addEventListener('DOMContentLoaded', function () {
  const printBtn = document.getElementById('printBtn');
  const statusDiv = document.getElementById('status');
  const removeImagesCheckbox = document.getElementById('removeImages');
  const includeLinksCheckbox = document.getElementById('includeLinks');

  // Load saved preferences
  try {
    chrome.storage.sync.get(
      ['removeImages', 'includeLinks'],
      function (result) {
        if (chrome.runtime.lastError) {
          console.error('Storage error:', chrome.runtime.lastError);
          return;
        }
        if (result.removeImages !== undefined) {
          removeImagesCheckbox.checked = result.removeImages;
        }
        if (result.includeLinks !== undefined) {
          includeLinksCheckbox.checked = result.includeLinks;
        }
      }
    );
  } catch (error) {
    console.error('Error loading preferences:', error);
  }

  // Save preferences when changed
  removeImagesCheckbox.addEventListener('change', function () {
    chrome.storage.sync.set({ removeImages: this.checked });
  });

  includeLinksCheckbox.addEventListener('change', function () {
    chrome.storage.sync.set({ includeLinks: this.checked });
  });

  printBtn.addEventListener('click', async function () {
    showStatus('Extracting main content...', 'info');
    printBtn.disabled = true;

    try {
      // Get the active tab
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      // Inject and execute the content script
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: extractMainContent,
        args: [removeImagesCheckbox.checked, includeLinksCheckbox.checked],
      });

      if (results && results[0] && results[0].result) {
        const contentData = results[0].result;

        if (contentData.error) {
          showStatus(contentData.error, 'error');
          printBtn.disabled = false;
          return;
        }

        showStatus('Generating PDF...', 'info');

        // Send message to background script to generate PDF
        chrome.runtime.sendMessage(
          {
            action: 'generatePDF',
            data: contentData,
          },
          function (response) {
            if (chrome.runtime.lastError) {
              showStatus('Error: ' + chrome.runtime.lastError.message, 'error');
              printBtn.disabled = false;
              return;
            }
            if (response && response.success) {
              showStatus('PDF saved successfully!', 'success');
              setTimeout(() => {
                window.close();
              }, 1500);
            } else {
              showStatus(
                'Error: ' + (response?.error || 'Unknown error'),
                'error'
              );
              printBtn.disabled = false;
            }
          }
        );
      } else {
        showStatus('Failed to extract content', 'error');
        printBtn.disabled = false;
      }
    } catch (error) {
      showStatus('Error: ' + error.message, 'error');
      printBtn.disabled = false;
    }
  });

  function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = 'status ' + type;
  }
});

// This function will be injected into the page
function extractMainContent(removeImages, includeLinks) {
  try {
    // Strategy 1: Try to find main content using semantic HTML5 tags
    let mainContent =
      document.querySelector('main') ||
      document.querySelector('article') ||
      document.querySelector('[role="main"]');

    // Strategy 2: Look for common content class names
    if (!mainContent) {
      const contentSelectors = [
        '.main-content',
        '.content',
        '.post-content',
        '.article-content',
        '.entry-content',
        '#main-content',
        '#content',
        '.markdown-body', // GitHub and similar
        '.docs-content', // Documentation sites
      ];

      for (const selector of contentSelectors) {
        const element = document.querySelector(selector);
        if (element) {
          mainContent = element;
          break;
        }
      }
    }

    // Strategy 3: Use heuristics to find the element with most text content
    if (!mainContent) {
      let maxScore = 0;
      let bestElement = null;

      const candidates = document.querySelectorAll('div, section, article');

      for (const element of candidates) {
        // Skip navigation, headers, footers, sidebars
        const tagName = element.tagName.toLowerCase();
        const className = element.className.toLowerCase();
        const id = element.id.toLowerCase();

        if (
          className.includes('nav') ||
          className.includes('header') ||
          className.includes('footer') ||
          className.includes('sidebar') ||
          className.includes('menu') ||
          id.includes('nav') ||
          id.includes('header') ||
          id.includes('footer') ||
          id.includes('sidebar')
        ) {
          continue;
        }

        // Calculate score based on text content and structure
        const textLength = element.innerText?.length || 0;
        const paragraphs = element.querySelectorAll('p').length;
        const headings = element.querySelectorAll(
          'h1, h2, h3, h4, h5, h6'
        ).length;

        const score = textLength + paragraphs * 100 + headings * 50;

        if (score > maxScore) {
          maxScore = score;
          bestElement = element;
        }
      }

      mainContent = bestElement;
    }

    if (!mainContent) {
      return {
        error:
          'Could not identify main content. Try selecting the content manually.',
      };
    }

    // Clone the content to avoid modifying the original page
    const clonedContent = mainContent.cloneNode(true);

    // Remove unwanted elements
    const unwantedSelectors = [
      'nav',
      'header',
      'footer',
      'aside',
      '.navigation',
      '.nav',
      '.menu',
      '.sidebar',
      '.advertisement',
      '.ad',
      '.ads',
      '.comment',
      '.comments',
      '.related-posts',
      '.related',
      '[role="navigation"]',
      '[role="complementary"]',
    ];

    unwantedSelectors.forEach((selector) => {
      clonedContent.querySelectorAll(selector).forEach((el) => el.remove());
    });

    // Remove images if requested
    if (removeImages) {
      clonedContent.querySelectorAll('img').forEach((el) => el.remove());
    }

    // Handle links
    if (!includeLinks) {
      clonedContent.querySelectorAll('a').forEach((link) => {
        const text = document.createTextNode(link.textContent);
        link.parentNode.replaceChild(text, link);
      });
    }

    // Get the page title
    const pageTitle = document.title;
    const pageUrl = window.location.href;

    // Get computed styles for the main content
    const styles = window.getComputedStyle(mainContent);

    return {
      html: clonedContent.innerHTML,
      title: pageTitle,
      url: pageUrl,
      success: true,
    };
  } catch (error) {
    return { error: 'Error extracting content: ' + error.message };
  }
}
