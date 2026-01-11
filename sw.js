const CACHE_NAME = 'alpha-v5.1';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      './', 
      './index.html', 
      './manifest.json',
      'https://api.dicebear.com/7.x/initials/svg?seed=A&backgroundColor=000000&fontSize=60&fontWeight=700'
    ]))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
