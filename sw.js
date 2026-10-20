const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  './',
  './index.html'
];

// Simpan fail ke dalam telefon/komputer
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Buka fail dari simpanan jika tiada internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});