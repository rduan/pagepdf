# PagePDF - Smart Content Printer

<div align="center">

![PagePDF Icon](icons/icon128.png)

**Print clean PDFs from web pages by automatically extracting main content and removing clutter.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](CHANGELOG.md)
[![Chrome](https://img.shields.io/badge/Chrome-Compatible-brightgreen.svg)](https://www.google.com/chrome/)
[![Edge](https://img.shields.io/badge/Edge-Compatible-brightgreen.svg)](https://www.microsoft.com/edge)

[Install](#-quick-start) • [Features](#-features) • [Documentation](docs/) • [Contributing](CONTRIBUTING.md)

</div>

---

## 🌟 Features

- **Smart Content Detection** - Automatically identifies and extracts the main content from web pages
- **Clean PDF Output** - Generates professional PDFs without navigation, ads, or sidebars
- **Multiple Detection Strategies** - Uses semantic HTML5, common patterns, and intelligent heuristics
- **Customizable Options**
  - Remove images (text-only mode)
  - Include/exclude hyperlinks
  - Settings persist across sessions
- **Beautiful UI** - Modern, red-themed popup interface
- **Universal Compatibility** - Works with most websites including documentation, blogs, and articles
- **Privacy-Focused** - Zero data collection, all processing happens locally
- **Lightweight** - Fast and efficient, minimal resource usage

## 📋 Use Cases

Perfect for:
- Documentation pages (ReadTheDocs, GitBook, Docusaurus)
- Blog articles (Medium, WordPress, Ghost)
- News articles
- Research papers and academic content
- Wikipedia articles
- GitHub/GitLab README files and wikis
- Stack Overflow questions and answers
- Tutorial websites
- Any webpage where you want just the main content

## 🚀 Quick Start

### Installation

#### Chrome / Edge (Developer Mode)

1. Download or clone this repository
2. Open your browser's extensions page:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
3. Enable **"Developer mode"** (toggle in top-right)
4. Click **"Load unpacked"**
5. Select the `pagepdf` folder
6. The extension icon will appear in your toolbar

#### Chrome Web Store / Edge Add-ons (Coming Soon)

The extension will be available on:
- Chrome Web Store
- Microsoft Edge Add-ons

### Usage

1. Navigate to any webpage
2. Click the **PagePDF icon** in your toolbar
3. (Optional) Adjust settings:
   - ☑️ **Keep hyperlinks** - Preserve clickable links
   - ☐ **Remove images** - Text-only PDF
4. Click **"Print Main Content to PDF"**
5. Your browser's print dialog opens with clean, formatted content
6. Select **"Save as PDF"** and save

## 🔧 Technical Details

### Content Detection

PagePDF uses a three-tier intelligent detection system:

1. **Semantic HTML5** - Looks for `<main>`, `<article>`, `[role="main"]`
2. **Pattern Matching** - Identifies common content containers (`.main-content`, `.article-content`, etc.)
3. **Heuristic Analysis** - Scores elements by text length, paragraphs, and heading structure

### Technology Stack

- Manifest V3 (latest Chrome extension standard)
- Service Workers for background processing
- Content Scripts for page analysis
- Chrome Storage API for settings
- Data URLs for PDF generation

### Permissions

| Permission  | Purpose                                   |
| ----------- | ----------------------------------------- |
| `activeTab` | Access current tab content for extraction |
| `scripting` | Inject content detection script           |
| `storage`   | Save user preferences locally             |

[Full technical documentation →](docs/)

## 📚 Documentation

- [Installation Guide](docs/INSTALL_GUIDE.md) - Detailed installation instructions
- [Features](docs/FEATURES.md) - Complete feature list with examples
- [Debugging](docs/DEBUGGING.md) - Troubleshooting common issues
- [Privacy Policy](PRIVACY.md) - Our commitment to your privacy
- [Contributing](CONTRIBUTING.md) - How to contribute to the project
- [Changelog](CHANGELOG.md) - Version history and updates

## 🐛 Troubleshooting

**Extension doesn't work?**
- Reload the extension: Go to extensions page → Click reload icon
- Check console for errors: Right-click popup → Inspect → Console
- Try on `test-page.html` included in the repo

**Can't find main content?**
- Some sites have unusual structures
- Try on different websites to verify the extension works
- Check [supported sites list](docs/FEATURES.md#website-compatibility)

**Print dialog doesn't appear?**
- Browser may block auto-print
- Manually press `Cmd + P` (Mac) or `Ctrl + P` (Windows)

[More troubleshooting →](docs/DEBUGGING.md)

## 🔒 Privacy & Security

**Your privacy is our priority:**

✅ **Zero data collection** - No analytics, no tracking, no telemetry
✅ **Local processing** - Everything happens in your browser
✅ **No external requests** - No API calls to external servers
✅ **Open source** - Full code transparency
✅ **Minimal permissions** - Only what's absolutely necessary

[Read full privacy policy →](PRIVACY.md)

## 🤝 Contributing

Contributions are welcome! Whether it's bug reports, feature requests, or code contributions.

**Ways to contribute:**
- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 🔧 Submit pull requests

[Contributing guidelines →](CONTRIBUTING.md)

## 📦 Building for Distribution

To create a package for Chrome Web Store / Edge Add-ons:

```bash
./package.sh
```

This creates a `pagepdf-v1.0.0.zip` file ready for store submission.

[Store listing details →](STORE_LISTING.md)

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright © 2025 Yongqiang Duan

## 🙏 Acknowledgments

- Inspired by reader mode features in modern browsers
- Built with Chrome Extensions Manifest V3
- Designed with privacy and simplicity in mind

## 📧 Contact & Support

**Author:** Yongqiang Duan

**Support:**
- 📖 Check the [documentation](docs/)
- 🐛 [Report issues](https://github.com/yourusername/pagepdf/issues)
- 💬 [Discussions](https://github.com/yourusername/pagepdf/discussions)

---

<div align="center">

**Made with ❤️ for better web printing**

[⭐ Star this project](https://github.com/yourusername/pagepdf) • [🐛 Report Bug](https://github.com/yourusername/pagepdf/issues) • [✨ Request Feature](https://github.com/yourusername/pagepdf/issues)

</div>
