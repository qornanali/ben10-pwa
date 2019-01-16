const CACHE_NAME = "omnitrix-pwa-cache";
var urlsToCache = [
  "/",
  "/nav-menus.html",
  "/index.html",
  "/pages/aliens.html",
  "/pages/origin.html",
  "/pages/modes.html",
  "/pages/users.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/js/nav.js"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
