# Changelog

All notable changes to PagePDF extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-20

### Added
- Initial release of PagePDF extension
- Smart content detection using 3-tier algorithm
  - Semantic HTML5 recognition
  - Common pattern matching
  - Intelligent heuristics
- Clean PDF generation from web pages
- Customizable options
  - Remove images toggle
  - Keep hyperlinks toggle
- Modern popup UI with red theme
- Content extraction that excludes:
  - Navigation menus
  - Sidebars
  - Advertisements
  - Headers and footers
  - Related posts sections
- Professional PDF formatting
  - Clean typography
  - Structured headings
  - Enhanced code blocks
  - Formatted lists and tables
- User preference persistence using chrome.storage
- Support for Chrome and Microsoft Edge (Manifest V3)
- Privacy-focused: zero data collection, local processing only
- Universal compatibility with most websites

### Technical
- Manifest V3 compliance
- Service worker background script
- Content script injection
- Data URL approach for PDF generation
- Chrome Storage API for settings

### Documentation
- Comprehensive README
- Installation guide
- Debugging guide
- Features documentation
- Test page included

---

## Future Releases

See [GitHub Issues](https://github.com/yourusername/pagepdf/issues) for planned features and bug reports.

### Planned Features
- Direct PDF download (bypass print dialog)
- Custom CSS themes for output
- Manual content selection mode
- Save preferences per domain
- Keyboard shortcuts
- Context menu integration
- Dark mode PDF theme
- Batch processing multiple pages
