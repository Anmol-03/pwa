const staticCacheName = 'site-static';
const assets = [
    '/',
    './index.html',
    './assets/js/app.js',
    './assets/js/script.js',
    './assets/css/styles.css',
    './assets/css/style-prefix.css',
    './assets/images/banner-1.jpg',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
    'https://fonts.gstatic.com'
];
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});
// if there is change in the code of the service worker then only the new service worker 
// will be installed 
// activate service workers
self.addEventListener('activate', evt => {
    // console.log('Service Worker has been activated ');
    // new service worker will only be active when the older service worker all
    // instances have been closed 
});
// fetch events when we try to get something from server like css files,json files ,image 
// from server
// Browser-> fetch request -> fetch event -> server
// server-> server response-> fetch event-> browser


// fetch event 
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});