const CACHE_NAME = 'alpha-v_dicebear_icon';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['./', './index.html', './manifest.json']))
  );
  self.skipWaiting(); // <--- Esto obliga a la nueva versión a activarse de inmediato
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
