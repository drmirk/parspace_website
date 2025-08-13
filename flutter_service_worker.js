'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "81cc50ce6a40549aed9ad83f9c079713",
"flutter_bootstrap.js": "48fba3ee703b5d5051fd158a2024d686",
"version.json": "b33af3be0d662a3d8d530499908182d9",
"splash/img/light-2x.png": "388a5f5fb65f2b1043ffc1bde1f1d8b4",
"splash/img/branding-4x.png": "ea8fab26ffdfb8ef4a90272d3250c5e6",
"splash/img/dark-4x.png": "d5608ebc0c31411a53600ebcb104bcef",
"splash/img/branding-dark-1x.png": "ee9d752bbccccc52681fdbbc6f09f48e",
"splash/img/light-3x.png": "93d7e579aca35d978460470728a04098",
"splash/img/dark-3x.png": "93d7e579aca35d978460470728a04098",
"splash/img/light-4x.png": "d5608ebc0c31411a53600ebcb104bcef",
"splash/img/branding-2x.png": "d6718bb2f2f9f09c9eb0f7e169c2c1d4",
"splash/img/branding-3x.png": "1d6b2325ee6a3bc7e6cabde576be0884",
"splash/img/dark-2x.png": "388a5f5fb65f2b1043ffc1bde1f1d8b4",
"splash/img/dark-1x.png": "b1e5469fc8fbc6a69872e76bb24bd3de",
"splash/img/branding-dark-4x.png": "ea8fab26ffdfb8ef4a90272d3250c5e6",
"splash/img/branding-1x.png": "ee9d752bbccccc52681fdbbc6f09f48e",
"splash/img/branding-dark-2x.png": "d6718bb2f2f9f09c9eb0f7e169c2c1d4",
"splash/img/light-1x.png": "b1e5469fc8fbc6a69872e76bb24bd3de",
"splash/img/branding-dark-3x.png": "1d6b2325ee6a3bc7e6cabde576be0884",
"splash/img/dark-2x.gif": "451a6ff6b0a657a55773c733cbca96ed",
"favicon.ico": "0a43fc834bb1a62744bd20dacc1e551a",
"index.html": "be290645f0b95d802d70ae5bb03faf11",
"/": "be290645f0b95d802d70ae5bb03faf11",
"android-chrome-192x192.png": "df8159160c72336d521e9ef3c31cd476",
"delete-account.html": "bbfd89bc41c68196536c4bac021ae029",
"apple-touch-icon.png": "4bbfd33336f5f072746d5b6c532a20ee",
"privacy-policy.html": "7c6be72fa23ae9eb410332fabf25c357",
"main.dart.js": "ed989d6f5a5cd33359635195c2bfb947",
"sqlite3.wasm": "d9fe0deaa4703e3ce03614741774735b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.mjs": "a041d9a5c71d3af2e6614d9ab517f839",
"drift_worker.js": "babb348cf72e6da955c4386f67316e28",
"android-chrome-512x512.png": "d55a292ba073fbef1c888fa8a2814923",
"site.webmanifest": "685a574cb7b4b1eb749fd5327422a9fb",
"icons/Icon-192.png": "38da164298a73f543896b85045ac7963",
"icons/Icon-maskable-192.png": "38da164298a73f543896b85045ac7963",
"icons/Icon-maskable-512.png": "3cf32442246e6af551e5bc6dab82bfa5",
"icons/Icon-512.png": "3cf32442246e6af551e5bc6dab82bfa5",
"manifest.json": "3c994c3692840459d2b2f3bacbaf9bfd",
"main.dart.wasm": "ecc7bf01fe4ec2d19b1feca33da125c6",
"assets/AssetManifest.json": "f0c7fcaa0ef29cf4f9b4142c241e193d",
"assets/NOTICES": "33fb452dfeb572a6ae90b06216e0ad15",
"assets/FontManifest.json": "d3051bb543a1edfe77cc3e5172a85819",
"assets/AssetManifest.bin.json": "d3e57699fac2235bbe95310ed9b0275a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "6a8a2463fddcd591f7cc76c015cb641d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "48bc5402ef339cc11be2b1bec69d37a3",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "6bef9113d2d6cd1b9bb285ee464036fa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ec005bffb95617adeda568f4eb3f5b93",
"assets/fonts/MaterialIcons-Regular.otf": "879bac115a00142c8265b1ef8524e6d5",
"assets/assets/logo_full.png": "8af11be6eb6d07b8f53ba53055c04478",
"assets/assets/small_logo.png": "042e04a5ba00fc06f1ee8bce1b1cc9f4",
"assets/assets/lib.so": "4bceda811ffed78506ad9cf09a53abb8",
"favicon-32x32.png": "92bb4a6c16ec7df138243ff075c77fb2",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
