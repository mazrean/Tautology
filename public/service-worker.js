!(function() {
  'use strict';
  const e = [
      'service-worker-index.html',
      'favicon.png',
      'global.css',
      'icon.jpg',
      'logo-192.png',
      'logo-512.png',
      'manifest.json',
    ],
    t = new Set(e);
  self.addEventListener('install', t => {}),
    self.addEventListener('activate', e => {}),
    self.addEventListener('fetch', e => {});
})();
