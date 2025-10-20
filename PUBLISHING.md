# Publishing Guide for PagePDF

Quick reference guide for publishing PagePDF to Chrome Web Store and Microsoft Edge Add-ons.

## Pre-Publishing Checklist

### Required Materials

- [x] Extension package (`./package.sh` creates zip file)
- [ ] Screenshots (1280x800 or 640x400) - at least 3
- [ ] Promotional images (optional but recommended)
  - Small tile: 440x280
  - Large tile: 920x680
  - Marquee: 1400x560
- [ ] Privacy policy URL (host PRIVACY.md online)
- [ ] Support/homepage URL
- [x] Store listing description (see STORE_LISTING.md)

### Testing

- [ ] Test extension in Chrome
- [ ] Test extension in Edge
- [ ] Test on at least 10 different websites
- [ ] Verify all features work
- [ ] Check for console errors
- [ ] Test with images removed
- [ ] Test with links options
- [ ] Verify settings persist

## Chrome Web Store

### Account Setup

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with Google account
3. **Pay $5 one-time developer registration fee**
4. Accept Developer Agreement

### Submission Steps

1. **Create Package**
   ```bash
   ./package.sh
   ```

2. **Upload Extension**
   - Click "New Item"
   - Upload `pagepdf-v1.0.0.zip`
   - Wait for validation

3. **Fill Store Listing**
   - **Product details**
     - Name: `PagePDF - Smart Content Printer`
     - Summary: See STORE_LISTING.md (132 chars max)
     - Description: See STORE_LISTING.md
     - Category: Productivity
     - Language: English (add more as needed)

   - **Graphic assets**
     - Upload icon (already in package)
     - Upload screenshots (min 1, max 5)
     - Upload promotional images (optional)

   - **Additional fields**
     - Official URL: Your GitHub repo
     - Homepage URL: Your GitHub repo
     - Support URL: GitHub issues page

4. **Privacy**
   - Privacy policy: URL where PRIVACY.md is hosted
   - Permissions: Listed automatically from manifest
   - Single purpose: "Extract and format web page content for PDF printing"
   - Justify permissions: See STORE_LISTING.md

5. **Distribution**
   - Visibility: Public
   - Regions: All regions
   - Pricing: Free

6. **Submit for Review**
   - Click "Submit for Review"
   - Review time: 1-3 business days typically

### Post-Submission

- Monitor email for review status
- Respond to reviewer feedback promptly
- Once approved, extension goes live immediately

## Microsoft Edge Add-ons

### Account Setup

1. Go to [Partner Center](https://partner.microsoft.com/dashboard)
2. Sign in with Microsoft account
3. **Registration is FREE**
4. Complete developer profile

### Submission Steps

1. **Prepare Package**
   ```bash
   ./package.sh
   ```

2. **Submit Extension**
   - Go to [Edge Add-ons Dashboard](https://partner.microsoft.com/dashboard/microsoftedge/)
   - Click "Submit new extension"
   - Upload `pagepdf-v1.0.0.zip`

3. **Availability**
   - Markets: Select markets (or all)
   - Visibility: Public
   - Pricing: Free

4. **Properties**
   - Category: Productivity > Document Management
   - Display name: `PagePDF - Smart Content Printer`
   - Short description: See STORE_LISTING.md
   - Long description: See STORE_LISTING.md
   - Keywords: See STORE_LISTING.md
   - Support website: GitHub issues URL
   - Privacy policy: URL where PRIVACY.md is hosted

5. **Store Listings**
   - Upload screenshots (min 1, max 10)
   - Upload promotional images (optional)
   - Additional store assets

6. **Certification**
   - Age rating: Everyone
   - Compliance: Confirm all checkboxes
   - Notes for certification: (optional)

7. **Submit**
   - Review all information
   - Click "Publish"
   - Certification time: 2-7 business days typically

### Post-Submission

- Monitor Partner Center for status
- Check email for certification status
- Address any compliance issues

## Hosting Privacy Policy

You need to host PRIVACY.md publicly. Options:

### Option 1: GitHub Pages (Recommended)

1. Create a repo or use existing
2. Enable GitHub Pages in settings
3. URL: `https://yourusername.github.io/pagepdf/PRIVACY.html`

### Option 2: GitHub Gist

1. Create a new Gist with PRIVACY.md content
2. Make it public
3. Use raw URL

### Option 3: Your Website

Host PRIVACY.md on your personal website

## Update Process

When releasing updates:

1. **Update Version**
   ```json
   // manifest.json
   "version": "1.0.1"
   ```

2. **Update Changelog**
   ```markdown
   // CHANGELOG.md
   ## [1.0.1] - 2025-XX-XX
   ### Fixed
   - Bug fix description
   ```

3. **Create Package**
   ```bash
   ./package.sh
   ```

4. **Upload to Stores**
   - Chrome: Go to dashboard → Edit → Upload new version
   - Edge: Go to dashboard → Update → Upload new version

5. **Review Time**
   - Updates typically reviewed faster than initial submission
   - Chrome: 1-2 days
   - Edge: 2-5 days

## Marketing Tips

### After Publishing

1. **GitHub Release**
   - Create GitHub release with version tag
   - Link to store listings

2. **Social Media**
   - Announce on Twitter, LinkedIn, Reddit
   - Share in relevant communities
   - Post on Product Hunt (optional)

3. **Get Reviews**
   - Ask users to leave reviews
   - Respond to feedback
   - Address negative reviews promptly

4. **Update Regularly**
   - Fix bugs quickly
   - Add requested features
   - Keep extension maintained

## Common Issues

### Rejected Submissions

**Reasons:**
- Missing privacy policy
- Insufficient permission justification
- Misleading description
- Low-quality screenshots
- Broken functionality

**Solution:**
- Read rejection reason carefully
- Fix the issues
- Resubmit

### Review Taking Too Long

- Chrome: Usually 1-3 days, can escalate after 7 days
- Edge: Usually 2-7 days, be patient

### Can't Upload Package

- Check ZIP structure (no nested folders)
- Manifest must be at root level
- All referenced files must exist
- Icons must be valid PNG files

## Resources

### Chrome Web Store

- [Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Program Policies](https://developer.chrome.com/docs/webstore/program-policies/)
- [Best Practices](https://developer.chrome.com/docs/webstore/best-practices/)
- [Branding Guidelines](https://developer.chrome.com/docs/webstore/branding/)

### Microsoft Edge Add-ons

- [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/)
- [Policies](https://docs.microsoft.com/microsoft-edge/extensions-chromium/store-policies/developer-policies)
- [Publish Guide](https://docs.microsoft.com/microsoft-edge/extensions-chromium/publish/publish-extension)

## Quick Commands

```bash
# Create package for submission
./package.sh

# Check package contents
unzip -l pagepdf-v1.0.0.zip

# Test package
# Load the ZIP file in Chrome/Edge to verify it works

# Git commands for releases
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Support Channels

After publishing, monitor:

- [ ] Store reviews (Chrome/Edge)
- [ ] GitHub issues
- [ ] Support email
- [ ] Social media mentions

---

**Author:** Yongqiang Duan
**Version:** 1.0.0
**Last Updated:** October 20, 2025

**Good luck with your store submission! 🚀**
