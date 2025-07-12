# Logo Integration Guide

## Adding the Actual Logo

To replace the current Font Awesome tree icon with your beautiful colorful tree logo:

### Step 1: Prepare the Logo
1. Save your logo as `logo.png` (or `logo.svg` for better quality)
2. Recommended dimensions: 200x200px or higher
3. Ensure the background is transparent (PNG format)

### Step 2: Add Logo to Project
```bash
# Copy your logo file to the project directory
cp path/to/your/logo.png ./logo.png
```

### Step 3: Update HTML
Replace the logo section in `index.html`:

**Current (line ~24):**
```html
<div class="logo">
    <div class="logo-icon">
        <i class="fas fa-tree"></i>
    </div>
    <span>Expats with Roots</span>
</div>
```

**Updated:**
```html
<div class="logo">
    <div class="logo-icon">
        <img src="logo.png" alt="Expats with Roots Logo">
    </div>
    <span>Expats with Roots</span>
</div>
```

### Step 4: Update CSS
Add these styles to `styles.css`:

```css
.logo-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.footer-logo .logo-icon img {
    width: 30px;
    height: 30px;
}
```

### Step 5: Update Footer
Also update the footer logo (around line ~380 in index.html):

```html
<div class="footer-logo">
    <div class="logo-icon">
        <img src="logo.png" alt="Expats with Roots Logo">
    </div>
    <span>Expats with Roots</span>
</div>
```

## Alternative: Using SVG

If you have an SVG version of your logo:

1. Save as `logo.svg`
2. Use the same HTML structure but with `.svg` extension
3. SVG will scale perfectly at any size

## Logo Color Variations

Your logo has beautiful rainbow colors. Consider creating variations:
- `logo-dark.png` for light backgrounds
- `logo-light.png` for dark backgrounds (like the footer)

Then update CSS accordingly:
```css
.header .logo-icon img {
    content: url('logo-dark.png');
}

.footer .logo-icon img {
    content: url('logo-light.png');
}
```

## Testing

After integration:
1. Open `index.html` in browser
2. Check logo displays correctly in header and footer
3. Verify it scales properly on mobile devices
4. Ensure it maintains quality at different sizes

Your colorful tree logo perfectly represents the "Expats with Roots" concept - the vibrant leaves symbolizing the diverse global diaspora, while the strong roots represent the connection to Egypt.
