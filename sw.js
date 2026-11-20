// Service worker tối thiểu để trang cài được thành app (luôn lấy bản mới từ mạng).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
