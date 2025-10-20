# Contributing to PagePDF

Thank you for your interest in contributing to PagePDF! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and encourage diverse perspectives
- Focus on constructive criticism
- Respect differing viewpoints and experiences

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

1. **Clear title** describing the issue
2. **Steps to reproduce** the bug
3. **Expected behavior** vs actual behavior
4. **Browser and version** (Chrome/Edge)
5. **Extension version**
6. **URL** of the page where it occurred (if public)
7. **Screenshots** if applicable

### Suggesting Features

Feature requests are welcome! Please:

1. Check if the feature already exists or is planned
2. Describe the feature clearly
3. Explain the use case and benefits
4. Consider implementation complexity

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the coding style
   - Test thoroughly
   - Update documentation if needed
4. **Commit with clear messages**
   ```bash
   git commit -m "Add feature: description"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a pull request**

## Development Setup

### Prerequisites

- Google Chrome or Microsoft Edge
- Basic knowledge of JavaScript, HTML, CSS
- Familiarity with browser extensions

### Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/pagepdf.git
   cd pagepdf
   ```

2. Load the extension
   - Open `chrome://extensions/` or `edge://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `pagepdf` directory

3. Make changes
   - Edit source files
   - Reload extension (click reload icon)
   - Test thoroughly

### Project Structure

```
pagepdf/
├── manifest.json          # Extension configuration
├── popup.html/css/js      # Extension UI
├── content.js             # Content extraction
├── background.js          # Background service worker
├── icons/                 # Extension icons
├── docs/                  # Documentation
└── test-page.html         # Test file
```

## Coding Guidelines

### JavaScript

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use arrow functions for callbacks
- Use async/await for asynchronous code
- Add comments for complex logic
- Handle errors gracefully

### Code Style

```javascript
// Good
const extractContent = async (options) => {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// Use descriptive variable names
const removeImages = options.removeImages;

// Add comments for complex logic
// Calculate score based on text length, paragraphs, and headings
const score = textLength + paragraphs * 100 + headings * 50;
```

### HTML/CSS

- Use semantic HTML
- Keep CSS modular and organized
- Use CSS variables for theming
- Ensure responsive design
- Test in both Chrome and Edge

## Testing

### Manual Testing

Test your changes on various websites:

1. **Documentation sites**: ReadTheDocs, GitBook
2. **Blogs**: Medium, WordPress, Ghost
3. **News sites**: BBC, NYTimes
4. **GitHub/GitLab**: README files, wikis
5. **Wikipedia**: Articles
6. **Test page**: Use included `test-page.html`

### Testing Checklist

- [ ] Extension loads without errors
- [ ] Icon appears in toolbar
- [ ] Popup opens correctly
- [ ] Content detection works
- [ ] PDF generation works
- [ ] Options are saved
- [ ] No console errors
- [ ] Works on multiple sites
- [ ] Works in both Chrome and Edge

## Debugging

### Popup Console
```
Right-click popup → Inspect → Console
```

### Background Script Console
```
Extensions page → Inspect views: service worker
```

### Content Script Console
```
F12 on webpage → Console tab
```

## Documentation

When adding features:

- Update `README.md`
- Update `CHANGELOG.md`
- Add to `FEATURES.md` if applicable
- Update `PRIVACY.md` if permissions change

## Commit Messages

Use clear, descriptive commit messages:

```
Good:
- "Add support for custom CSS themes"
- "Fix content detection on single-page apps"
- "Update README with new features"

Bad:
- "Update"
- "Fix bug"
- "Changes"
```

### Commit Message Format

```
<type>: <subject>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## Release Process

1. Update version in `manifest.json`
2. Update `CHANGELOG.md`
3. Create git tag
4. Build package
5. Submit to stores

## Questions?

- Open an issue for questions
- Tag with `question` label
- Provide context for your question

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to PagePDF!**

*Author: Yongqiang Duan*
