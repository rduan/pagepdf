// Content script - runs in the context of web pages
// This file is loaded automatically but can also be used for persistent functionality

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'highlightMainContent') {
    highlightMainContent();
    sendResponse({ success: true });
  }
  return true;
});

// Optional: Function to visually highlight the main content
function highlightMainContent() {
  // Find main content using the same logic as extraction
  let mainContent =
    document.querySelector('main') ||
    document.querySelector('article') ||
    document.querySelector('[role="main"]');

  if (!mainContent) {
    const contentSelectors = [
      '.main-content',
      '.content',
      '.post-content',
      '.article-content',
      '.entry-content',
      '#main-content',
      '#content',
      '.markdown-body',
      '.docs-content',
    ];

    for (const selector of contentSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        mainContent = element;
        break;
      }
    }
  }

  if (mainContent) {
    // Add a temporary highlight
    const originalOutline = mainContent.style.outline;
    mainContent.style.outline = '3px solid #667eea';
    mainContent.style.outlineOffset = '2px';

    setTimeout(() => {
      mainContent.style.outline = originalOutline;
    }, 2000);
  }
}

// Initialize
console.log('PagePDF content script loaded');
