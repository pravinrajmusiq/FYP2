# Ali, Muthu & Ah Hock Ken Mee Kiosk 🍜

A modern, touch-optimized food ordering kiosk system built as a Progressive Web App (PWA) for Samsung A8 tablets (1920x1200).

![Kiosk Preview](icon.png)

## ✨ Features

- **📱 PWA Installable** - Works offline, installable on any device
- **🎯 Tablet Optimized** - Perfect fit for Samsung A8 (1920x1200) in landscape
- **🌐 Multi-Language** - English, Malay, Tamil, Chinese support
- **🛒 Smart Cart System** - Add, remove, customize items with live pricing
- **🎨 Beautiful UI** - Modern design with no scrolling needed
- **💳 Multiple Payment Methods** - Card, Touch 'n Go, Cash, QR
- **⚡ Fast & Smooth** - Optimized performance for touch devices
- **🔒 Kiosk Mode Ready** - Lockable for dedicated kiosk use

## 🚀 Quick Start

### Live Demo
Visit: `https://YOUR-USERNAME.github.io/Project0026/`

### Installation
1. Open in Chrome on Samsung A8 tablet
2. Tap install icon in address bar
3. Add to home screen
4. Launch and enjoy!

## 📋 System Requirements

- **Device**: Samsung Galaxy Tab A8 (or similar 10.5" tablet)
- **Resolution**: 1920 x 1200 (landscape orientation)
- **Browser**: Chrome 90+ or any modern browser
- **Network**: WiFi connection (for initial load, then works offline)

## 🎯 Pages Overview

### 1. Home Page (`index.html`)
- Welcome screen with animated logo
- Promotional video carousel
- Halal certification badge
- "Start Order" button

### 2. Language Selection (`language-page-sample.html`)
- 4 language options: English, Malay, Tamil, Chinese
- Dine-in / Take-away selection
- Back button to home

### 3. Menu Page (`new-menu-sample.html`)
- Category tabs: Noodles, Rice, Drinks, Sides
- Food items with images and prices
- Add to cart functionality
- Cart and back buttons always visible

### 4. Cart Page (`cart-page.html`)
- View all cart items
- Adjust quantities
- Customize items
- Remove items
- Live total calculation
- Proceed to payment

### 5. Customization Page (`customize-item.html`)
- Item details with image
- Add-on options with live pricing
- Notification badge shows selected add-ons
- Total price updates instantly
- Save or cancel changes

### 6. Payment Page (`payment-page.html`)
- 4 payment methods grid
- Order summary
- Total amount display
- Back and Pay buttons

### 7. Success Page (`payment-success.html`)
- Payment confirmation
- Order number display
- Auto-redirect to home after 5 seconds

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (Vanilla JS)
- **PWA**: Service Worker for offline caching
- **Storage**: LocalStorage for cart and settings
- **Responsive**: Media queries optimized for Samsung A8
- **Icons**: Custom PNG icons for all pages

## 📦 Project Structure

```
Project0026/
├── index.html                    # Home page
├── flashpage.html                # Optional flash screen
├── language-page-sample.html     # Language selection
├── new-menu-sample.html          # Menu/ordering page
├── cart-page.html                # Shopping cart
├── customize-item.html           # Item customization
├── payment-page.html             # Payment selection
├── payment-success.html          # Success confirmation
├── translations.js               # Multi-language support
├── manifest.json                 # PWA manifest
├── sw.js                         # Service worker
├── icon.png                      # App icon
├── logo old.png                  # Restaurant logo
├── wood.png                      # Title container background
├── *.png                         # Various UI images and icons
└── KIOSK_INSTALLATION_GUIDE.md  # Detailed setup guide
```

## 🎨 Color Scheme

- **Primary**: `#bf8a47` (Brown/Gold)
- **Secondary**: `#362315` (Dark Brown)
- **Accent**: `#f7b817` (Yellow/Gold)
- **Background**: `#efebce` (Cream)
- **Success**: `#4CAF50` (Green)
- **Error**: `#8B0000` (Dark Red)

## 📱 Samsung A8 Optimizations

All pages are specifically optimized for Samsung A8 tablet (1920x1200):

- ✅ **No scrolling** required on main pages
- ✅ **Compact headers** (8vh height)
- ✅ **Optimized spacing** between elements
- ✅ **Touch-friendly** buttons (minimum 44px)
- ✅ **Readable fonts** (optimized sizes)
- ✅ **Fast loading** (service worker caching)

### Tablet-Specific Features

```css
@media (min-width: 1200px) and (max-width: 1920px) and (min-height: 800px) {
  /* Samsung A8 optimizations */
  body { overflow: hidden; }
  .header-section { height: 8vh; }
  /* ... more optimizations */
}
```

## 🌐 Multi-Language Support

The kiosk supports 4 languages with instant switching:

1. **English** (`en`)
2. **Malay** (`ms`)
3. **Tamil** (`ta`)
4. **Chinese** (`zh`)

Language preference is saved to LocalStorage and persists across sessions.

## 💾 Data Storage

All data is stored locally using `localStorage`:

- `kioskLanguage` - Selected language
- `kioskDiningOption` - Dine-in or take-away
- `amakiosk_cart` - Shopping cart items
- `kioskCartTotal` - Cart total amount
- `lastOrderNumber` - Last generated order number

## 🔒 Kiosk Mode Setup

See **[KIOSK_INSTALLATION_GUIDE.md](KIOSK_INSTALLATION_GUIDE.md)** for detailed instructions on:

- Deploying to GitHub Pages
- Installing as PWA
- Enabling full kiosk mode
- Locking down the tablet
- Troubleshooting tips

## 📸 Screenshots

### Home Screen
*Welcome screen with video carousel and start button*

### Language Selection
*Choose language and dining option*

### Menu Page
*Browse food items by category*

### Cart & Checkout
*Review order, customize items, and proceed to payment*

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "main" branch as source
4. Access at: `https://USERNAME.github.io/REPO-NAME/`

### Alternative Hosting

The kiosk can be hosted on any static hosting service:
- Netlify
- Vercel  
- Firebase Hosting
- AWS S3 + CloudFront

## 🧪 Testing

### Desktop Testing
- Chrome DevTools Device Mode
- Set resolution to 1920x1200
- Test in landscape orientation

### Tablet Testing
- Install Chrome on Samsung A8
- Navigate to deployed URL
- Install as PWA
- Test all user flows

## 📝 Development

### Local Development

1. Clone the repository
2. Open `index.html` in a browser
3. Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000
```

4. Open `http://localhost:8000`

### Making Changes

1. Edit HTML/CSS/JS files
2. Test locally
3. Commit and push to GitHub
4. Wait 2-3 minutes for GitHub Pages to update

## 🐛 Troubleshooting

**PWA not installing?**
- Ensure you're using HTTPS
- Check browser console for errors
- Verify `manifest.json` is loading

**Page doesn't fit screen?**
- Check tablet resolution (should be 1920x1200)
- Clear browser cache
- Verify zoom level is 100%

**Offline mode not working?**
- Check service worker is registered
- Verify cache is loading resources
- Clear cache and reload

See **[KIOSK_INSTALLATION_GUIDE.md](KIOSK_INSTALLATION_GUIDE.md)** for more solutions.

## 📄 License

This project is proprietary software for Ali, Muthu & Ah Hock Ken Mee restaurant.

## 👥 Credits

Developed for Ali, Muthu & Ah Hock Ken Mee restaurant kiosk system.

---

**🍜 Enjoy ordering with AMAK Kiosk!**

For support or questions, please refer to the [Installation Guide](KIOSK_INSTALLATION_GUIDE.md).

