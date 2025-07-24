# Spectra Prefab Solutions Website

A modern, elegant website for Spectra Prefab Solutions, a company specializing in prefabricated structures. The website features a dark theme with piano black finish and white text, smooth scroll animations, and 3D graphics in the hero section.

## Features

- Responsive design that works on all devices
- Dark theme with elegant piano black finish
- 3D particle animation background in the hero section using Three.js
- Smooth scroll animations
- Product showcase with hover effects
- Contact form with validation
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and CSS animations)
- JavaScript (vanilla JS for DOM manipulation and animations)
- Three.js for 3D graphics (via CDN)
- Font Awesome for icons (via CDN)
- Google Fonts for typography

## How to Run

Since this is a static website, you can simply open the `index.html` file in any modern web browser to view the website locally.

For the best experience, it's recommended to use a local development server. You can use one of the following methods:

### Using Python (if installed)

```bash
# For Python 3.x
python -m http.server

# For Python 2.x
python -m SimpleHTTPServer
```

### Using Node.js (if installed)

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Run the server
http-server
```

Then open your browser and navigate to `http://localhost:8000` or the port indicated in your terminal.

## Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript functionality

## Customization

To customize the website:

1. Replace the Spline scene URL in the `index.html` file with your own Spline creation
2. Update the product images and descriptions
3. Modify the contact information
4. Adjust colors in the CSS `:root` variables to match your brand

## Credits

- 3D graphics powered by [Spline](https://spline.design/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Placeholder images from [Unsplash](https://unsplash.com/)