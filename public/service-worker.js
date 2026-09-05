// Minimal service-worker stub for offline shell caching. Replace/extend with Workbox for production.
const CACHE_NAME = "gelephu-pwa-v1";
const URLS_TO_CACHE = ["/", "/_next/static/*", "/offline.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).catch(() => caches.match("/offline.html"));
    })
  );
});
