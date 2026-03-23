self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/TikTok-coin-/',
        '/TikTok-coin-/index.html',
        '/TikTok-coin-/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
