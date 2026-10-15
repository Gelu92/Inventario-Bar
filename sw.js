// Service worker: the app always loads its newest files when online,
// and keeps a copy so it also works offline.
var VERSION = '9';
var CACHE = 'inventario-bar-v' + VERSION;
var ASSETS = [
  './', './index.html', './app.css?v=' + VERSION, './app.js?v=' + VERSION, './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './maskable-512.png', './apple-touch-icon.png'
];
var LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    // 'reload' skips the browser's own cache, so the copy is really the new version;
    // files are added one by one so a single missing file cannot break the app
    return Promise.all(ASSETS.map(function (u) { return c.add(new Request(u, { cache: 'reload' })).catch(function () { }); })).then(function () {
      return Promise.all(LIBS.map(function (u) { return c.add(new Request(u, { mode: 'cors' })).catch(function () { }); }));
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin === location.origin) {
    // the app's own files: network first (always the newest), saved copy when offline
    var fresh = req.mode === 'navigate' ? new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : new Request(req, { cache: 'no-cache' });
    e.respondWith(fetch(fresh).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req.mode === 'navigate' ? './index.html' : req, copy); }); }
      return res;
    }).catch(function () {
      return caches.match(req.mode === 'navigate' ? './index.html' : req).then(function (hit) {
        return hit || caches.match(req, { ignoreSearch: true });
      });
    }));
    return;
  }
  // fonts and PDF libraries: saved copy first, they never change
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});
