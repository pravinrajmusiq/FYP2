# AMAK Kiosk - Complete Installation Guide
## Samsung A8 Tablet (1920x1200) - Full Kiosk Mode Setup

---

## 📋 Table of Contents
1. [Deploy to GitHub Pages](#step-1-deploy-to-github-pages)
2. [Access from Samsung Tablet](#step-2-access-from-samsung-tablet)
3. [Install as PWA](#step-3-install-as-pwa)
4. [Enable Kiosk Mode](#step-4-enable-kiosk-mode)
5. [Testing & Verification](#step-5-testing--verification)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Step 1: Deploy to GitHub Pages

### Option A: Using GitHub Desktop (Easiest)

1. **Open GitHub Desktop**
   - File → New Repository → "Choose Existing Folder"
   - Select your `Project0026` folder

2. **Initial Commit**
   - Summary: "Initial kiosk setup"
   - Click "Commit to main"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private" (or keep private if you prefer)
   - Click "Publish Repository"

4. **Enable GitHub Pages**
   - Go to your repository on GitHub.com
   - Click "Settings"
   - Scroll to "Pages" (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 2-3 minutes for deployment

5. **Get Your URL**
   - URL will be: `https://YOUR-USERNAME.github.io/Project0026/`
   - Copy this URL - you'll need it for the tablet

### Option B: Using Git Command Line

```bash
cd C:\Users\thivy\Project0026

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial kiosk setup"

# Create repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

---

## 📱 Step 2: Access from Samsung Tablet

1. **Open Chrome on Samsung A8 Tablet**
   - Make sure Chrome is updated to latest version

2. **Navigate to Your Site**
   - Go to: `https://YOUR-USERNAME.github.io/Project0026/`
   - The kiosk should load and fit perfectly

3. **Test the Display**
   - Everything should fit without scrolling
   - Resolution: 1920x1200 (landscape)
   - All pages should display correctly

---

## 💾 Step 3: Install as PWA (Progressive Web App)

### Method 1: Chrome Install Prompt

1. **Look for Install Icon**
   - In Chrome address bar, look for ⊕ (plus) icon or download icon
   - Click it
   - Select "Install"
   - Confirm installation

### Method 2: Chrome Menu Install

1. **Open Chrome Menu**
   - Tap the three dots (⋮) in top-right corner
   - Select "Add to Home screen" or "Install app"
   - Name it "AMAK Kiosk"
   - Tap "Add" or "Install"

2. **Verify Installation**
   - You'll see the AMAK Kiosk icon on your home screen
   - The icon should match your `icon.png` file

3. **Launch the App**
   - Tap the icon on home screen
   - App should open in fullscreen mode (no browser UI)
   - Perfect fit for 1920x1200 resolution

---

## 🔒 Step 4: Enable Kiosk Mode (Lock Down Tablet)

### Option A: Using Samsung Knox (Best for Samsung Devices)

1. **Download Samsung Kiosk App**
   - Go to Galaxy Store or Google Play
   - Search "Samsung SureLock" or "Samsung Knox Kiosk"
   - Install the app

2. **Configure Kiosk Mode**
   - Open the kiosk app
   - Set PIN/Password for admin access
   - Select "Single App Mode"
   - Choose "AMAK Kiosk" as the locked app
   - Enable "Auto-start on boot"
   - Disable hardware buttons (optional)

3. **Advanced Settings**
   - Disable notification shade
   - Disable navigation bar
   - Set screen timeout to "Never"
   - Enable "Stay awake while charging"

### Option B: Using Third-Party Kiosk Apps

1. **Install Kiosk Browser or Fully Kiosk Browser**
   - Download from Google Play Store
   - Popular options:
     - Fully Kiosk Browser (Recommended)
     - Kiosk Browser Lockdown
     - SureLock Kiosk Lockdown

2. **Configure Fully Kiosk Browser (Recommended)**
   - Install Fully Kiosk Browser
   - Open settings
   - **Website URL**: `https://YOUR-USERNAME.github.io/Project0026/`
   - **Display Settings**:
     - Enable "Fullscreen Mode"
     - Enable "Hide System UI"
     - Screen orientation: "Landscape"
     - Screen Saver: OFF
   - **Advanced Settings**:
     - Disable "Pull-down notification shade"
     - Enable "Restart on crash"
     - Enable "Launch on boot"
     - Set password for settings access

3. **Lock Screen**
   - Enable "Kiosk Mode" in app settings
   - Set admin password
   - Enable "Device Administrator" when prompted

### Option C: Using Android Kiosk Mode (Free)

1. **Set Up User Pinning**
   - Go to Settings → Security → Screen pinning
   - Enable "Screen pinning"
   - Enable "Ask for PIN before unpinning"

2. **Pin the AMAK Kiosk App**
   - Open AMAK Kiosk app
   - Tap Recent Apps button (square button)
   - Find AMAK Kiosk app card
   - Tap the pin icon at top of the card
   - Confirm pinning
   - App is now locked - can't exit without PIN

---

## ✅ Step 5: Testing & Verification

### Display Tests

1. **Home Page (index.html)**
   - ✅ Logo and video visible at top
   - ✅ Carousel images centered
   - ✅ Start Order button visible at bottom
   - ✅ No scrolling needed

2. **Language Page**
   - ✅ All 4 language buttons visible
   - ✅ Fits perfectly without scrolling

3. **Menu Page**
   - ✅ Categories at top visible
   - ✅ Food items scrollable (intentional)
   - ✅ Cart and Back buttons visible at bottom

4. **Cart Page**
   - ✅ Cart items visible and scrollable
   - ✅ Total section visible
   - ✅ PAY HERE and BACK buttons fully visible at bottom
   - ✅ No need to scroll to see buttons

5. **Customization Page**
   - ✅ Item details at top
   - ✅ Customization options visible
   - ✅ Total price updates live
   - ✅ Notification badge shows add-ons
   - ✅ Buttons visible at bottom

6. **Payment Page**
   - ✅ Payment methods grid (2x2) visible
   - ✅ Order summary visible
   - ✅ Buttons visible at bottom
   - ✅ Everything fits without scrolling

7. **Payment Success Page**
   - ✅ Thank you message visible
   - ✅ Order number card centered
   - ✅ Auto-redirect after 5 seconds
   - ✅ Clean layout without scrolling

### Functional Tests

- ✅ Touch response is accurate
- ✅ All buttons are clickable
- ✅ Cart adds/removes items correctly
- ✅ Price calculations are accurate
- ✅ Language switching works
- ✅ Page transitions are smooth
- ✅ Offline mode works (PWA cache)

---

## 🔧 Troubleshooting

### Issue: PWA Install Button Not Showing

**Solution:**
- Ensure you're using HTTPS (GitHub Pages provides this)
- Clear browser cache
- Make sure `manifest.json` and `sw.js` are loading
- Check browser console for errors

### Issue: Page Doesn't Fit Screen

**Solution:**
- Verify tablet resolution: Settings → Display → Screen resolution
- Should be 1920x1200 (landscape)
- Clear browser cache and reload
- Make sure zoom level is 100% in Chrome

### Issue: Can't Exit Kiosk Mode

**Solution:**
- **Screen Pinning**: Hold Back + Recent Apps, enter PIN
- **Fully Kiosk**: Tap 10 times quickly in corner, enter password
- **Knox Kiosk**: Use admin PIN to access settings

### Issue: App Doesn't Auto-Start on Boot

**Solution:**
- Enable "Auto-start" in kiosk app settings
- Add app to "Allowed apps to run on startup"
- Check battery optimization settings (disable for kiosk app)

### Issue: Screen Turns Off

**Solution:**
- Settings → Display → Screen timeout → Never
- Settings → Developer Options → Stay awake (while charging)
- Keep tablet plugged in during operation

### Issue: Service Worker Not Caching

**Solution:**
```javascript
// Clear cache and re-register
// Open browser console and run:
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
});
caches.keys().then(function(names) {
  for (let name of names) caches.delete(name);
});
// Then reload the page
```

---

## 📊 Optimal Settings for Samsung A8 Tablet

### Display Settings
- Resolution: 1920 x 1200 (landscape)
- Brightness: 100% (or auto)
- Blue light filter: OFF
- Screen timeout: Never
- Navigation bar: Hide in fullscreen apps

### Developer Options
- USB debugging: ON (for testing)
- Stay awake: ON (while charging)
- Force GPU rendering: ON (for smoother animations)

### Battery Settings
- Power mode: High performance
- Battery optimization: OFF for kiosk app
- Adaptive battery: OFF

### Network Settings
- WiFi: Always ON
- Mobile data: OFF (unless needed)
- Airplane mode: OFF

---

## 🎯 Quick Reference Commands

### Update Kiosk Content
```bash
# Make your changes, then:
git add .
git commit -m "Update kiosk content"
git push origin main
# Wait 2-3 minutes for GitHub Pages to update
```

### Force PWA Update on Tablet
```javascript
// In browser console:
location.reload(true); // Hard reload
```

### Clear All Data and Reinstall
1. Uninstall PWA from home screen
2. Clear Chrome data: Settings → Apps → Chrome → Storage → Clear Data
3. Visit site again
4. Reinstall PWA

---

## 📞 Support Checklist

✅ All pages optimized for Samsung A8 (1920x1200)  
✅ No scrolling needed on any page (except menu items)  
✅ PWA manifest configured  
✅ Service worker caching content  
✅ Fullscreen mode enabled  
✅ Landscape orientation locked  
✅ Touch-optimized button sizes  
✅ Offline functionality ready  
✅ Auto-redirect after payment  
✅ Multi-language support  

---

## 🎉 You're All Set!

Your kiosk is now ready for deployment! Follow these steps in order, and you'll have a fully functional, installable kiosk running in true kiosk mode on your Samsung A8 tablet.

**Your Kiosk Features:**
- ✨ Installable PWA (works offline)
- 📱 Perfect fit for Samsung A8 (1920x1200)
- 🔒 Lockable in kiosk mode
- 🌐 Multi-language (EN, MS, TA, ZH)
- 🛒 Full ordering system with cart
- 💳 Payment processing
- 🎨 Beautiful UI with no scrolling needed

**Need Help?**
- Check browser console for errors (F12)
- Verify all images and resources are loading
- Test in regular Chrome before installing as PWA
- Make sure tablet is in landscape orientation

Good luck with your kiosk deployment! 🚀

