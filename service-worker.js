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
  "/js/nav.js",
  "/assets/images/albedo.png",
  "/assets/images/azmuth.jpg",
  "/assets/images/ben-tennyson.png",
  "/assets/images/diamondhead.png",
  "/assets/images/fourarms.jpg",
  "/assets/images/ghostfreak.png",
  "/assets/images/greymatter.png",
  "/assets/images/gwen-tennyson.jpg",
  "/assets/images/heatblast.png",
  "/assets/images/max-tennyson.png",
  "/assets/images/omnitrix-active.png",
  "/assets/images/omnitrix-favicon.png",
  "/assets/images/omnitrix-recharge.jpg",
  "/assets/images/ripjaw.png",
  "/assets/images/stinkfly.png",
  "/assets/images/upgrade.jpg",
  "/assets/images/vilgax.jpg",
  "/assets/images/wildmutt.png",
  "/assets/images/xlr8.png"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Using assets from cache: ", response.url);
          return response;
        }
 
        console.log("ServiceWorker: Loading assets from server: ", event.request.url);
        return fetch(event.request);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " has been deleted");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
