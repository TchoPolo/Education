/* Service worker : rend l'outil utilisable sans connexion une fois la page ouverte une fois.
   Changer VERSION à chaque mise en ligne pour que les navigateurs prennent la nouvelle version. */
var VERSION = "complice-v1.0.0";
var FICHIERS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.map(function (n) {
        if (n !== VERSION) { return caches.delete(n); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Réseau d'abord pour disposer de la dernière version, cache en secours hors ligne. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") { return; }
  e.respondWith(
    fetch(e.request).then(function (rep) {
      var copie = rep.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copie); });
      return rep;
    })["catch"](function () {
      return caches.match(e.request).then(function (r) {
        return r || caches.match("./index.html");
      });
    })
  );
});
