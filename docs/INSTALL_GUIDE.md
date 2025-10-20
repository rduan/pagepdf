# Quick Installation Guide

## 🚀 Install in 3 Easy Steps

### Step 1: Prepare the Extension

The extension is ready to use! All necessary files are in place.

**Optional**: Generate better icons by running:
```bash
# Using Python (recommended)
pip install Pillow
python3 generate_icons.py

# OR using ImageMagick
brew install imagemagick
bash create_icons.sh
```

### Step 2: Load in Chrome/Edge

#### For Chrome:
1. Open Chrome
2. Go to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in top-right)
4. Click **"Load unpacked"**
5. Select the `pagepdf` folder
6. Done! ✅

#### For Microsoft Edge:
1. Open Edge
2. Go to `edge://extensions/`
3. Enable **"Developer mode"**
4. Click **"Load unpacked"**
5. Select the `pagepdf` folder
6. Done! ✅

### Step 3: Test It!

1. Open the included `test-page.html` in your browser, or navigate to any website (like https://docs.datahub.com/docs/architecture/architecture)
2. Click the PagePDF extension icon in your browser toolbar
3. Click **"Print Main Content to PDF"**
4. The extension will extract the main content and open the print dialog
5. Save as PDF!

## 📖 Usage Tips

- **Remove images**: Check the "Remove images" option for text-only PDFs
- **Keep hyperlinks**: Keep this checked to preserve clickable links in the PDF
- **Best results**: Works great on article pages, documentation sites, and blogs
- **Not working?**: Some heavily dynamic sites may need manual content selection

## 🐛 Troubleshooting

**Extension doesn't appear after loading:**
- Refresh the extensions page
- Check for any error messages in red

**Can't find main content:**
- The page might have unusual structure
- Try a different page to verify the extension works

**Icons look pixelated:**
- Run the icon generation scripts (see Step 1)

## 📁 Project Structure

```
pagepdf/
├── manifest.json       # Extension config (Manifest V3)
├── popup.html/css/js   # Extension UI and logic
├── content.js          # Content extraction script
├── background.js       # Background service worker
├── icons/              # Extension icons (all sizes)
├── test-page.html      # Test page to try the extension
└── README.md          # Full documentation
```

## 🎯 Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Customize the extension to your needs
- Test on your favorite websites
- Report issues or contribute improvements

---

**Need Help?** Check the full README.md for comprehensive documentation and troubleshooting.
