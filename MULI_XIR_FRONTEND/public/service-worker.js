const CACHE_NAME = 'react-pwa-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalar
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activar
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch (cache first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          return res
        })
        .catch(() => {
          return new Response(
            JSON.stringify({ error: 'Sin conexión' }),
            { headers: { 'Content-Type': 'application/json' } }
          )
        })
    )
  }
})

