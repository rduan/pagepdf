# Debugging Guide for PagePDF

## Quick Fix for "Nothing Happens" Issue

The extension has been updated to fix the storage permission issue. Follow these steps:

### Step 1: Reload the Extension in Edge

1. Go to `edge://extensions/`
2. Find "PagePDF - Smart Content Printer"
3. Click the **reload icon** (circular arrow)
4. You should see "storage" listed under permissions now

### Step 2: Check for Errors

#### View Popup Console:
1. Click the PagePDF icon to open the popup
2. Right-click anywhere in the popup
3. Select **"Inspect"**
4. Go to the **Console** tab
5. Try clicking "Print Main Content to PDF" again
6. Watch for any red error messages

#### View Background Script Console:
1. Go to `edge://extensions/`
2. Find PagePDF
3. Click **"Inspect views: service worker"** (or similar)
4. Check the Console for errors

#### View Page Console:
1. On the webpage you want to print
2. Press `F12` or `Cmd + Option + I`
3. Go to Console tab
4. Try the extension again
5. Look for any error messages

## Common Issues and Solutions

### Issue 1: Storage Permission Error
**Symptom**: Nothing happens when clicking the button

**Solution**:
- Make sure manifest.json includes `"storage"` permission ✅ (Fixed!)
- Reload the extension after the update

### Issue 2: Can't Access the Page
**Symptom**: Error about not being able to access the page

**Solution**:
- The extension doesn't work on browser internal pages (chrome://, edge://)
- Try on a regular webpage instead
- Use the included `test-page.html` file

### Issue 3: Can't Find Main Content
**Symptom**: "Could not identify main content" error

**Solution**:
- The page might have unusual structure
- Try on a different page to verify extension works
- Check test-page.html first

### Issue 4: Print Dialog Doesn't Appear
**Symptom**: New tab opens but print dialog doesn't show

**Solution**:
- Browser might block auto-print
- Manually press `Cmd + P` (Mac) or `Ctrl + P` (Windows)
- Check browser settings for print permissions

## Step-by-Step Testing

### Test 1: Basic Functionality
```
1. Open test-page.html in Edge
2. Click PagePDF icon
3. Should see purple popup
4. Click "Print Main Content to PDF"
5. Should see status messages:
   - "Extracting main content..."
   - "Generating PDF..."
   - "PDF saved successfully!"
6. New tab should open with clean content
7. Print dialog should appear
```

### Test 2: Real Website
```
1. Go to: https://docs.datahub.com/docs/architecture/architecture
2. Click PagePDF icon
3. Follow same steps as Test 1
4. Should extract only the central documentation content
5. Should exclude sidebars, navigation, etc.
```

### Test 3: Options
```
1. Open any article page
2. Click PagePDF icon
3. Check "Remove images"
4. Click "Print Main Content to PDF"
5. Result should have no images
```

## Debug Commands

### View All Extension Files
```bash
cd /Users/richard.duan/Documents/play/my/pagepdf
ls -la
```

### Check Manifest
```bash
cat manifest.json | grep -A 10 permissions
```

### View Popup Code
```bash
cat popup.js | head -30
```

## What to Check in Console

### Expected Console Output (Normal):
```
No errors
PagePDF content script loaded
```

### Common Errors You Might See:

**Error**: `Unchecked runtime.lastError: The message port closed before a response was received`
**Cause**: Background script not responding
**Fix**: Check background.js console for errors

**Error**: `Cannot access chrome://... page`
**Cause**: Trying to use extension on internal browser page
**Fix**: Use on regular webpage

**Error**: `Cannot read properties of undefined`
**Cause**: Missing permission or API not available
**Fix**: Check manifest.json has all required permissions

## Manual Testing Checklist

- [ ] Extension loads without errors in edge://extensions/
- [ ] Icon appears in toolbar
- [ ] Popup opens when clicking icon
- [ ] Popup shows purple gradient UI
- [ ] Checkboxes are functional
- [ ] Status messages appear when clicking button
- [ ] New tab opens with content
- [ ] Content is properly formatted
- [ ] Print dialog appears

## Getting Help

If you're still having issues:

1. **Check the console** (most important!)
2. **Share the error message** from the console
3. **Try the test-page.html** to isolate the issue
4. **Test on multiple websites** to see if it's site-specific
5. **Restart Edge** and try again

## Contact & Support

Report issues with:
- Edge version: (check in `edge://settings/help`)
- Operating system: macOS 24.6.0
- Error message from console
- Steps to reproduce
- Which page you were trying to print

## Recent Fixes

### Fix 1: Storage Permission (Resolved ✅)
- Added missing `storage` permission to manifest.json
- Extension can now save user preferences

### Fix 2: Document Not Defined Error (Resolved ✅)
- Fixed `escapeHtml` function in background.js
- Service workers don't have access to DOM, so replaced `document.createElement()` with manual string escaping

### Fix 3: URL.createObjectURL Not Available (Resolved ✅)
- `URL.createObjectURL()` is not available in service workers
- Changed from Blob URL to Data URL approach
- Now uses `data:text/html;charset=utf-8,` + encoded HTML
- Extension should now work properly!

---

**Updated**: Extension now has proper error handling, storage permissions, and service worker compatibility! 🎉
