// Service Worker minimale per PWA su GitHub Pages

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  clients.claim();
  console.log("Service Worker attivo");
});

// Nessuna cache aggressiva: evita problemi su GitHub Pages
self.addEventListener("fetch", event => {
  // Lascia passare tutte le richieste senza interferire
  return;
});
