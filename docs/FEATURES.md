# PagePDF Features

## 🎯 Core Features

### Smart Content Detection
The extension uses a sophisticated multi-strategy algorithm to identify the main content of any webpage:

1. **Semantic HTML5 Recognition**
   - Automatically detects `<main>`, `<article>`, and `[role="main"]` elements
   - Prioritizes semantic markup for accurate content extraction

2. **Common Pattern Matching**
   - Recognizes standard content containers:
     - `.main-content`, `.content`, `.post-content`
     - `.article-content`, `.entry-content`
     - `.markdown-body` (GitHub, GitLab)
     - `.docs-content` (documentation sites)

3. **Intelligent Heuristics**
   - Analyzes page structure when semantic tags aren't available
   - Scores elements based on:
     - Text content length
     - Number of paragraphs
     - Heading hierarchy
   - Automatically filters out:
     - Navigation menus
     - Headers and footers
     - Sidebars
     - Advertisements
     - Comment sections
     - Related posts sections

## 🎨 User Experience

### Beautiful Modern UI
- **Gradient design** with purple/blue theme
- **Intuitive controls** with clear labels
- **Real-time status updates** showing extraction progress
- **Smooth animations** for better feedback
- **Responsive layout** that works on any screen size

### Customization Options

#### Remove Images
- Toggle to create text-only PDFs
- Perfect for:
  - Printing articles for reading
  - Reducing file size
  - Focusing on text content
  - Accessibility needs

#### Keep Hyperlinks
- Choose to preserve or remove links
- When enabled:
  - Links stay clickable in digital PDFs
  - URLs are printed in parentheses (print view)
- When disabled:
  - Links become plain text
  - Cleaner appearance

### Preferences Persistence
- Settings are automatically saved
- Your preferences persist across sessions
- No need to reconfigure each time

## 📄 PDF Generation

### Professional Formatting
The generated PDFs include:

- **Clean typography**
  - System fonts for readability
  - Proper line spacing (1.6)
  - Justified text alignment

- **Structured headings**
  - H1: 24px, with bottom border
  - H2: 20px, with subtle underline
  - H3-H6: Progressively smaller
  - Proper spacing and hierarchy

- **Enhanced code blocks**
  - Syntax highlighting preserved
  - Gray background for distinction
  - Monospace font (Courier New)
  - Proper padding and borders

- **Styled lists**
  - Proper indentation
  - Consistent spacing
  - Support for nested lists

- **Table formatting**
  - Clean borders
  - Header highlighting
  - Proper cell padding
  - Responsive width

- **Blockquotes**
  - Left border accent
  - Gray background
  - Italic styling

- **Images** (when included)
  - Responsive sizing
  - Centered alignment
  - Subtle shadows
  - Rounded corners

### Document Metadata
Each PDF includes:
- **Page title** as main heading
- **Source URL** for reference
- **Generation timestamp**
- **PagePDF footer** with details

### Print Optimization
- **A4 page size** by default
- **2cm margins** for comfortable reading
- **Page break handling** for long content
- **Link annotations** showing URLs in print
- **No-print classes** to hide UI elements

## 🔧 Technical Features

### Browser Compatibility
- **Chrome**: Full support (Manifest V3)
- **Microsoft Edge**: Full support (Chromium-based)
- **Brave**: Should work (Chromium-based)
- **Opera**: Should work (Chromium-based)

### Performance
- **Fast extraction**: Content identified in milliseconds
- **Efficient rendering**: Minimal DOM manipulation
- **Background processing**: Doesn't block the main thread
- **Low memory footprint**: Cleans up after use

### Security & Privacy
- **No data collection**: Zero telemetry
- **Local processing**: Everything runs in your browser
- **No external requests**: No API calls, no tracking
- **No permissions abuse**: Only requests what's needed:
  - `activeTab`: To read current page content
  - `scripting`: To inject extraction code
  - `downloads`: To save PDFs (future feature)

### Reliability
- **Error handling**: Graceful fallbacks for edge cases
- **Content validation**: Ensures content exists before processing
- **Automatic cleanup**: Removes temporary tabs and resources
- **Status feedback**: Always informs you of progress

## 🌐 Website Compatibility

### Excellent Support For:
- ✅ Documentation sites (ReadTheDocs, GitBook, Docusaurus)
- ✅ Blog platforms (Medium, WordPress, Ghost)
- ✅ News websites
- ✅ GitHub README files and wikis
- ✅ Academic papers and articles
- ✅ Wikipedia articles
- ✅ Tutorial websites
- ✅ Stack Overflow questions

### May Need Adjustment:
- ⚠️ Single-page applications (SPAs) with complex routing
- ⚠️ Sites with heavy JavaScript rendering
- ⚠️ Paywalled content (respects access restrictions)
- ⚠️ Sites with non-standard layouts

## 🔮 Future Enhancements (Ideas)

### Planned Features:
- [ ] Custom CSS themes for PDF output
- [ ] Direct PDF download (bypassing print dialog)
- [ ] Manual content selection mode
- [ ] Save preferences per domain
- [ ] Batch processing multiple pages
- [ ] Table of contents generation
- [ ] Page number insertion
- [ ] Watermark support
- [ ] Keyboard shortcuts
- [ ] Context menu integration (right-click)

### Advanced Ideas:
- [ ] OCR for images
- [ ] Translation before printing
- [ ] Annotation tools
- [ ] Cloud save integration
- [ ] Sharing capabilities
- [ ] Browser sync for settings
- [ ] Dark mode PDF theme
- [ ] Custom paper sizes

## 📊 Comparison with Alternatives

### vs. Browser Print Function
- ✅ Removes clutter automatically
- ✅ Better content detection
- ✅ Professional formatting
- ✅ Consistent output across sites

### vs. Reader Mode + Print
- ✅ More control over content
- ✅ Better styling options
- ✅ Customizable output
- ✅ Works on more sites

### vs. Online PDF Converters
- ✅ No privacy concerns
- ✅ Works offline
- ✅ No file size limits
- ✅ No ads or upsells
- ✅ Instant processing

### vs. Print-to-PDF Extensions
- ✅ Smarter content detection
- ✅ Modern UI
- ✅ Open source
- ✅ Active development

## 💡 Use Cases

### For Students:
- Print lecture notes from online courses
- Save research articles without clutter
- Create clean study materials
- Archive important documentation

### For Professionals:
- Print technical documentation
- Save API references
- Archive important articles
- Create clean reports from web content

### For Readers:
- Print articles for offline reading
- Save blog posts without ads
- Create reading collections
- Archive favorite content

### For Developers:
- Print GitHub documentation
- Save Stack Overflow answers
- Archive tutorials
- Document API endpoints

## 🎓 Best Practices

### For Best Results:
1. Use on well-structured websites
2. Test with different content types
3. Adjust settings per use case
4. Preview before saving
5. Check page orientation in print dialog

### Tips & Tricks:
- Use "Remove images" for faster printing
- Keep hyperlinks for reference PDFs
- Test on similar sites to find patterns
- Use the test page to verify functionality
- Bookmark frequently used settings

---

**PagePDF** - Making web content printing simple, clean, and efficient.
