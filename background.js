// Background service worker for the extension

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'generatePDF') {
    generatePDF(request.data)
      .then((result) => sendResponse(result))
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true; // Will respond asynchronously
  }
});

async function generatePDF(contentData) {
  try {
    // Create a clean HTML document with the extracted content
    const htmlContent = createPrintableHTML(contentData);

    // Create a data URL instead of blob URL (works in service workers)
    const dataUrl =
      'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);

    // Create a new tab with the content
    const tab = await chrome.tabs.create({
      url: dataUrl,
      active: true, // Make it active so print dialog works better
    });

    // Wait for the tab to load
    await new Promise((resolve) => {
      chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
        if (tabId === tab.id && info.status === 'complete') {
          chrome.tabs.onUpdated.removeListener(listener);
          resolve();
        }
      });
    });

    // Small delay to ensure content is rendered
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Execute print command
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        window.print();
      },
    });

    // Don't close the tab immediately - let user finish printing
    // They can close it manually after saving the PDF

    return {
      success: true,
      message:
        "PDF generation initiated. Use your browser's print dialog to save.",
    };
  } catch (error) {
    console.error('Error generating PDF:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

function createPrintableHTML(contentData) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(contentData.title)}</title>
  <style>
    @media print {
      @page {
        margin: 2cm;
        size: A4;
      }
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: white;
    }

    .header {
      border-bottom: 2px solid #667eea;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }

    .page-title {
      font-size: 28px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 10px 0;
    }

    .page-url {
      font-size: 12px;
      color: #666;
      word-break: break-all;
    }

    .content {
      font-size: 14px;
    }

    .content h1 {
      font-size: 24px;
      margin: 30px 0 15px 0;
      color: #1a1a1a;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 8px;
    }

    .content h2 {
      font-size: 20px;
      margin: 25px 0 12px 0;
      color: #2a2a2a;
    }

    .content h3 {
      font-size: 18px;
      margin: 20px 0 10px 0;
      color: #3a3a3a;
    }

    .content h4, .content h5, .content h6 {
      font-size: 16px;
      margin: 15px 0 8px 0;
      color: #4a4a4a;
    }

    .content p {
      margin: 12px 0;
      text-align: justify;
    }

    .content ul, .content ol {
      margin: 12px 0;
      padding-left: 30px;
    }

    .content li {
      margin: 6px 0;
    }

    .content pre {
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.4;
    }

    .content code {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 13px;
    }

    .content pre code {
      background: none;
      padding: 0;
    }

    .content blockquote {
      border-left: 4px solid #667eea;
      margin: 15px 0;
      padding: 10px 20px;
      background: #f9f9f9;
      font-style: italic;
    }

    .content img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 20px auto;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .content table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13px;
    }

    .content table th,
    .content table td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }

    .content table th {
      background: #f5f5f5;
      font-weight: 600;
    }

    .content a {
      color: #667eea;
      text-decoration: none;
    }

    .content a:hover {
      text-decoration: underline;
    }

    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 11px;
      color: #999;
      text-align: center;
    }

    @media print {
      .no-print {
        display: none !important;
      }

      body {
        padding: 0;
      }

      .content a {
        color: #333;
      }

      .content a::after {
        content: " (" attr(href) ")";
        font-size: 10px;
        color: #666;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="page-title">${escapeHtml(contentData.title)}</h1>
    <div class="page-url">${escapeHtml(contentData.url)}</div>
  </div>

  <div class="content">
    ${contentData.html}
  </div>

  <div class="footer">
    Generated by PagePDF • ${new Date().toLocaleDateString()} • ${escapeHtml(
    contentData.url
  )}
  </div>
</body>
</html>`;
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeFilename(filename) {
  // Remove or replace invalid filename characters
  return filename
    .replace(/[<>:"/\\|?*]/g, '-')
    .replace(/\s+/g, '_')
    .substring(0, 100); // Limit length
}

// Install/update handler
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    console.log('PagePDF extension installed!');
  } else if (details.reason === 'update') {
    console.log('PagePDF extension updated!');
  }
});
