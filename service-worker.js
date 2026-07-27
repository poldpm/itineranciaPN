// ============================================================
// SERVICE WORKER — Itinerància Parc Natural
// ------------------------------------------------------------
// Dues memòries cau separades:
//   - CACHE_SHELL: l'app (fitxers petits: html, css, js, icones...).
//     Puja aquesta versió CADA cop que canvien els fitxers de l'app.
//   - CACHE_MAPES: els mapes (imatges grans). Puja aquesta versió
//     NOMÉS si canvien les imatges dels mapes.
//
// Així, en actualitzar l'app, NO es tornen a baixar els mapes
// (es baixen un sol cop i es conserven), i l'actualització és ràpida.
// ============================================================

const CACHE_SHELL = 'itinerancia-pn-v8';
const CACHE_MAPES = 'itinerancia-pn-mapes-v1';

const SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './dades.js',
  './mapa.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/logo-parc.png'
];

const MAPES = [
  './images/mapa-coll-meianell.jpg',
  './images/mapa-collada-fonda.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const shell = await caches.open(CACHE_SHELL);
    await shell.addAll(SHELL);
    const mapes = await caches.open(CACHE_MAPES);
    await Promise.all(MAPES.map(async (u) => {
      if (!(await mapes.match(u))) {
        try { await mapes.add(u); } catch (e) { /* es reintentarà en obrir el mapa */ }
      }
    }));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys
        .filter((k) => k !== CACHE_SHELL && k !== CACHE_MAPES)
        .map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('script.google.com')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((resp) => {
        return caches.open(CACHE_SHELL).then((cache) => {
          cache.put(event.request, resp.clone());
          return resp;
        });
      }).catch(() => cached);
    })
  );
});

// ---- Background Sync (Android/Chrome) ----
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-registres') {
    event.waitUntil(avisarClients());
  }
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'sync-registres-periodic') {
    event.waitUntil(avisarClients());
  }
});

function avisarClients() {
  return self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    .then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ tipus: 'sync-pendents' });
      });
    });
}
