# Navigation Troubleshooting Guide

## Common Issues When Uploading to Git

### 1. CSS Not Loading
**Symptoms:** Navigation appears unstyled or broken
**Solutions:**
- Check if `styles.css` file is in the same directory as HTML files
- Verify the CSS link in HTML: `<link rel="stylesheet" href="styles.css">`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### 2. Tailwind CSS Conflicts
**Symptoms:** Some styles work, others don't
**Solutions:**
- CSS now uses `!important` declarations to override Tailwind
- All navigation styles are properly scoped
- Fallback JavaScript styles are included

### 3. File Path Issues
**Symptoms:** Images or CSS not loading
**Solutions:**
- Ensure all files are in the same directory
- Check file permissions (should be readable)
- Verify file names match exactly (case-sensitive)

### 4. Mobile Menu Not Working
**Symptoms:** Hamburger menu doesn't respond
**Solutions:**
- JavaScript function `toggleMobileMenu()` is included
- CSS classes `.nav-menu.active` are properly defined
- Test on different devices/browsers

## File Structure
```
LimitedEdgeBudget/
├── index.html
├── styles.css
├── logo.jpg
├── budget-overview.html
├── presentation-slides.html
├── pre-production.html
├── production.html
├── post-production.html
├── marketing.html
├── contingency.html
├── investor-benefits.html
└── teaser-pilot.html
```

## Testing Checklist
- [ ] All HTML files load without errors
- [ ] CSS file loads properly
- [ ] Logo image displays correctly
- [ ] Navigation dropdowns work on hover
- [ ] Mobile menu toggles properly
- [ ] Active states show correctly
- [ ] All links navigate to correct pages

## Emergency Fix
If navigation still doesn't work, the JavaScript fallback will apply basic styles automatically when the page loads.

## Contact
If issues persist, check:
1. Browser console for errors
2. Network tab for failed requests
3. File permissions and paths
4. Git repository structure
