console.log('SW: Hola mundo')
// const CACHE_NAME = "v1_demo_web_pwa"

// // //Ficheros a cachear en la app
// let urlsToCache =[
//     './',
//     './css/styles.css',
//     './img/favicon.png',
//     './image/logo.svg'
// ]
// var self = this;
// // //Eventos
// // //Instala sw y guada en caché recursos estáticos
// self.addEventListener('install', e=>{
//     e.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache=>{
//                 return cache.addAll(urlsToCache)
//                 .then(()=>{
//                     window.skipWaiting();
//                 })
//                 .catch(err=>{
//                     console.log("No se ha registrado el caché", err)
//                 })
//             })
//     )
// })

// //Activa el sw
// self.addEventListener('activate', e=>{
//     const cacheWhiteList = [CACHE_NAME];

//     e.waitUntil(
//         caches.keys()
//             .then(cacheNames=>{
//                 return Promise.all(
//                     cacheNames.map(cacheName => {
//                         if(cacheWhiteList.indexOf(cacheName) === -1){
//                             return caches.delete(cacheName);
//                         }
//                     })
//                 )
//             })
//             .then(()=>{
//                 window.clients.claim();
//             })
//     )
// })

// // Evento fetch
// self.addEventListener('fetch', e=>{
//     e.respondWith(
//         caches.match(e.request)
//             .then(res=>{
//                 if(res){
//                     return res;
//                 }
//                 return fetch(e.request);
//             })
//     )
// })