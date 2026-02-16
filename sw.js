const CACHE_NAME = 'amak-kiosk-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/flashpage.html',
  '/language-page-sample.html',
  '/new-menu-sample.html',
  '/cart-page.html',
  '/customize-item.html',
  '/payment-page.html',
  '/payment-success.html',
  '/translations.js',
  '/manifest.json',
  '/icon.png',
  '/logo old.png',
  '/wood.png',
  '/cartfont.png',
  '/dpfont.png',
  '/languagefont.png',
  '/pmfont.png',
  '/carapembayaranfont.png',
  '/trolifont.png',
  '/dpmfont.png',
  '/pbfont.png',
  '/drinkfont.png',
  '/noodfont.png',
  '/sidefont.png',
  '/ricefont.png',
  '/minumanfont.png',
  '/mmfont.png',
  '/sampinganfont.png',
  '/nasifont.png',
  '/ubahsuaifont.png',
  '/custfont.png',
  '/card.png',
  '/touch N Go.png',
  '/cash.png',
  '/qr.png',
  '/dineInn.png',
  '/takeAwayy.png'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});
