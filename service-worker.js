self.addEventListener('install', event => {
    // Instalación del Service Worker
    event.waitUntil(
        caches.open('mi-cache').then(cache => {
            return cache.addAll([
                '/Prueba1-de-PWA/',
                '/Prueba1-de-PWA/index.html',
                '/Prueba1-de-PWA/manifest.json',
                '/Prueba1-de-PWA/icon-192x192.png',
                '/Prueba1-de-PWA/icon-512x512.png'
            ]);
        }).catch(error => {
            console.error('Fallo al cargar caché:', error);
        })
    );
});

self.addEventListener('fetch', event => {
    // Intercepta las solicitudes y responde con recursos en caché o del servidor
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(error => {
            console.error('Error en fetch:', error);
        })
    );
});



/*
self.addEventListener('install', event => {
    console.log('Service Worker instalado.');
});

self.addEventListener('fetch', event => {
    console.log('Interceptando solicitud:', event.request.url);
});
*/
