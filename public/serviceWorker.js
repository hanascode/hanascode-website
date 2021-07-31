const cacheName = "myOfflineCache";
const staticAssets = ["./", "./index.html"]; 

self.addEventListener("install", async () => {
	const cache = await caches.open(cacheName);
	await cache.addAll(staticAssets);

	return self.skipWaiting();
});

self.addEventListener("activate", () => {
	self.clients.claim();
});

self.addEventListener("fetch", async event => {
	const request = event.request;
	const url = new URL(request.url);
	url.origin === location.origin
		? event.respondWith(checkCache(request))
		: event.respondWith(checkNetwork(request));
});

async function checkCache(request) {
	const cache = await caches.open(cacheName);
	const cachedData = await cache.match(request);
	return cachedData || fetch(request);
}

async function checkNetwork(request) {
	const cache = await caches.open(cacheName);
	try {
		const freshData = await fetch(request);
		await cache.put(request, freshData.clone());
		return freshData;
	}
	catch (error) {
		const cachedData = await cache.match(request);
		return cachedData;
	}
}