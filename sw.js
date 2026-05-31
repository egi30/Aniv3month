self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  // simple network-first strategy for this static demo
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
