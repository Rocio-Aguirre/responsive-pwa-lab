/* eslint-disable no-restricted-globals */
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

// Puedes desactivar el precaching reemplazand esta línea
precacheAndRoute(self.__WB_MANIFEST);
// por esta otra:
// const desactivarPrecache = self.__WB_MANIFEST;
// para más info: https://cra.link/PWA

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /\_, skip.
    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) =>
      url.origin === self.location.origin && url.pathname.endsWith(".png"), // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
      cacheName: "images",
      plugins: [
        // Ensure that once this runtime cache reaches a maximum size the
        // least-recently used images are removed.
        new ExpirationPlugin({ maxEntries: 50 }),
      ],
    })
  );
  self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });

console.log('SW: Hola mundo')

// const CACHE_NAME = "v1_demo_web_pwa"

// //Ficheros a cachear en la app
// let urlsToCache =[
//     './',
//     './css/styles.css',
//     './img/favicon.png',
//     './image/logo.svg'
// ]
// var self = this;
// //Eventos
// //Instala sw y guada en caché recursos estáticos
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