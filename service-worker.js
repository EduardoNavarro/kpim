/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["/components/client-card/client-card.html","96abd7889da5c26ef66f6b4a8b4c571e"],["/components/client-card/client-detail.html","cfe8f0f4aabda894a5f1d18e1ed91f61"],["/components/client-card/client-service.html","759576a669b486068b5c099b989ad7a3"],["/components/client-card/clients-page.html","7097eabd9b0f4fdf843b50d5d03ba57a"],["/components/client-card/index.html","473b754a06e521c93b478ada451fcf14"],["/components/filter-box-demo.html","e583bff7d32143955cc4ff07a04640cd"],["/components/filter-box.html","9a2cf8c43416c06de05681b4dd4bfd13"],["/components/login/login-form.html","95187568c4339b9a51d58d9be50d1a67"],["/components/paper-scaffold/demo.html","5d132e2b5eac4e62ce611983208b4eff"],["/components/paper-scaffold/index.html","e1fbb316bed43bfb9d9bc54a9f24e47b"],["/components/paper-scaffold/metadata.html","d8cc869e18649f2419a3ae50e34124bd"],["/components/paper-scaffold/paper-scaffold.html","0ae89ecd4f5bc519794a1f3b1ee098ff"],["/components/product-add.html","1117aa402258e4b14cfe952b628da73a"],["/components/product-card.html","731f3ea67e5efc52199a1d38e17477c9"],["/components/product-crud.html","cf757fa24978b5c23abc5411c3a5861c"],["/components/product-order-card.html","af025f326a28020cc8cc72a71a7e2494"],["/components/product-order-list.html","51594dc9111b922cda0a162c09374f09"],["/components/product-type/demo.html","eac8a229aa63545d4933ce33f76dc7c5"],["/components/product-type/product-type-card.html","0c962b3c2b54e3e318376707245de842"],["/components/product-type/product-type-crud.html","9e0fddec5b5aa1ef1f1b6abf98fab2ae"],["/components/product-type/product-type-form-demo.html","ffd317008d7ceb5daca7453d39faf6ab"],["/components/product-type/product-type-form.html","04cf6ca1b0990cb27f8dc77ed2388470"],["/components/services/auth-service/auth-service.html","dccc21001e1603b34e0f688de449c21c"],["/components/services/auth-service/demo.html","9adadfc88d1aa8045915bb289ddf16b2"],["/components/services/district-service/demo.html","ae6230d7b53f70ccb8914b44af7af4fb"],["/components/services/district-service/district-service.html","75dfc933dbca1a629b37867d632221ab"],["/components/services/locality-service/demo.html","1479c4a456167b9761139e61104342f4"],["/components/services/locality-service/locality-service.html","4555edcd6121e37d97bbba1a279adb4b"],["/components/services/post-service.html","9954a166636bdb11f2fb634b82958c13"],["/components/services/product-type-service/demo.html","4ea44306237e90bc1082fadbc1e9c352"],["/components/services/product-type-service/product-type-service.html","46520283fec5a81c0157426c0f40c36a"],["/components/services/province-service/demo.html","49180f474d93be1cabc657883b59b69e"],["/components/services/province-service/province-service.html","ad999873129b0d95168bae62bbefb1f5"],["/components/services/section-service/demo.html","71108316fa0cca3cb63f1b6c2f58a7ee"],["/components/services/section-service/section-service.html","20f2c10eabae7f3d141c89e995b311d4"],["/components/services/services.js","48d98f21949bd429cf6822e51cb39dc6"],["/components/services/user-service/demo.html","4e2c5b868dd998752650083a36c1bb80"],["/components/services/user-service/user-service.html","fef72bbe688e523c559c84ece4bfb050"],["/components/user-crud/user-card.html","9f38890b920d5ab3c14049c84a114a3c"],["/components/user-crud/user-crud.html","97acea219abe37c8283aa4c4977645f3"],["/components/user-crud/user-form.html","cb29c318a66be41a46b3a403d69402fd"],["/elements/app-theme.html","cfbac2963309d5f4f640d6ab3565a996"],["/elements/elements.html","4434cf29746b8117754f988bcc280808"],["/elements/my-greeting/my-greeting.html","52e4a483d1b7e382a3def33f89aca52b"],["/elements/my-list/my-list.html","9346189ffa653259abd8e837b00a194a"],["/elements/routing.html","2eb6e776d2cfdeb62d2f4a5de979899c"],["/images/touch/apple-touch-icon.png","6875a9195f04377b3a5ffcd0a979e22c"],["/images/touch/chrome-touch-icon-192x192.png","6a0551f0c9b53ca62f3c67a5eaf51846"],["/images/touch/icon-128x128.png","ad7a8966882b6f974b2b5bf31dac1cb3"],["/images/touch/ms-icon-144x144.png","f348014550511fc297d34e1ffc6e7ae5"],["/images/touch/ms-touch-icon-144x144-precomposed.png","f348014550511fc297d34e1ffc6e7ae5"],["/images/user.png","219eaea67aafa864db091919ce3f5d82"],["/index.html","e3df4e525b7e9d4bcb33a984541c2399"],["/scripts/app.js","80d01fde4f594127f547477587a8d03f"],["/service-worker.js","c05ed52954c51073d1c5b69b6aa36490"],["/styles/main.css","ce8dba961991421a1a3b37dc8dda109f"],["/sw-import.js","ecb09f15b64606a322d1f131c1fc67cb"],["/test/index.html","78ce1d94367b43db9684c645d28bf3e9"],["/test/my-greeting-basic.html","b550eade9278646c31717f04a036640e"],["/test/my-list-basic.html","236bb2f2f2512d47bbcbd8fe6fd3e5a3"]];
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

