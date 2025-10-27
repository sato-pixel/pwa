const CACHE_NAME = 'pwa-sample-v1';
const FILES_TO_CACHE = [
'./',
'./index.html',
'./manifest.webmanifest',
'./icons/icon-192.png',
'./icons/icon-512.png'
];


self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
);
});


self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => response || fetch(event.request))
);
});