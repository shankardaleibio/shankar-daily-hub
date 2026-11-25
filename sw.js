"use strict";

const CACHE_NAME = "shankar-daily-hub-v9";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png"
];

/* Install new app cache */
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

/* Remove old app caches */
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});

/* Network first, cache fallback */
self.addEventListener("fetch", event => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(request)
            .then(response => {
                if (response && response.ok) {
                    const copy = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(request, copy))
                        .catch(() => {});
                }

                return response;
            })
            .catch(async () => {
                const cached = await caches.match(request);

                if (cached) {
                    return cached;
                }

                /* Offline navigation fallback */
                if (request.mode === "navigate") {
                    const page = await caches.match("./index.html");

                    if (page) {
                        return page;
                    }
                }

                return new Response(
                    "You are offline. Please reconnect and try again.",
                    {
                        status: 503,
                        statusText: "Offline",
                        headers: {
                            "Content-Type": "text/plain"
                        }
                    }
                );
            })
    );
});
