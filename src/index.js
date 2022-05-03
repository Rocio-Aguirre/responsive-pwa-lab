import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as sw from "./swRegistration";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// sw.register();
// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('./sw.js')
//                           // .then(res=> console.log('ServiceWorker cargado correctamente', res))
//                           // .catch(err=>console.log('ServiceWorker no se ha podido registrar', err))
// }

sw.register({
  onUpdate: async (registration) => {
    // Corremos este código si hay una nueva versión de nuestra app
    // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload();
    }
  },
});
