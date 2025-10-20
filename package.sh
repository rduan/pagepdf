#!/bin/bash
# Package script for PagePDF extension
# Creates a ZIP file ready for Chrome Web Store / Edge Add-ons submission

set -e

echo "📦 Packaging PagePDF Extension..."
echo "=================================="

# Get version from manifest.json
VERSION=$(grep -o '"version": "[^"]*"' manifest.json | cut -d'"' -f4)
echo "Version: $VERSION"

# Define package name
PACKAGE_NAME="pagepdf-v${VERSION}.zip"

# Files to include in the package
FILES=(
  "manifest.json"
  "popup.html"
  "popup.css"
  "popup.js"
  "content.js"
  "background.js"
  "icons/"
)

# Optional files (include if they exist)
OPTIONAL_FILES=(
  "LICENSE"
  "PRIVACY.md"
)

# Remove old package if exists
if [ -f "$PACKAGE_NAME" ]; then
  echo "Removing old package..."
  rm "$PACKAGE_NAME"
fi

# Create temporary directory
TEMP_DIR="temp_package"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Copy required files
echo "Copying files..."
for file in "${FILES[@]}"; do
  if [ -e "$file" ]; then
    if [ -d "$file" ]; then
      cp -r "$file" "$TEMP_DIR/"
    else
      cp "$file" "$TEMP_DIR/"
    fi
    echo "  ✓ $file"
  else
    echo "  ✗ $file (missing - this will cause errors!)"
    exit 1
  fi
done

# Copy optional files
for file in "${OPTIONAL_FILES[@]}"; do
  if [ -e "$file" ]; then
    cp "$file" "$TEMP_DIR/"
    echo "  ✓ $file"
  fi
done

# Create ZIP package
echo ""
echo "Creating ZIP package..."
cd "$TEMP_DIR"
zip -r "../$PACKAGE_NAME" . -q
cd ..

# Cleanup
rm -rf "$TEMP_DIR"

# Get file size
SIZE=$(du -h "$PACKAGE_NAME" | cut -f1)

echo ""
echo "=================================="
echo "✅ Package created successfully!"
echo ""
echo "Package: $PACKAGE_NAME"
echo "Size: $SIZE"
echo ""
echo "Next steps:"
echo "1. Test the packaged extension by loading $PACKAGE_NAME"
echo "2. Submit to Chrome Web Store: https://chrome.google.com/webstore/devconsole"
echo "3. Submit to Edge Add-ons: https://partner.microsoft.com/dashboard"
echo ""
echo "📋 Submission Checklist:"
echo "  - Update store listing description"
echo "  - Prepare screenshots (1280x800 or 640x400)"
echo "  - Prepare promotional images"
echo "  - Set up privacy policy URL"
echo "  - Set pricing (free)"
echo "  - Choose category (Productivity)"
echo ""
