importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "adidas-github-io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.408805dacab8273eb86e3863da0ff35d.css",
    "revision": "6e8478bdefbe0c3a22ae19097a61536d"
  },
  {
    "url": "/_nuxt/app.5b0e5e8849226b536673.js",
    "revision": "429a06c73b76eb57abd595e87c65456b"
  },
  {
    "url": "/_nuxt/lang-en.2bfb8d8c8bd39aa6424e.js",
    "revision": "7e4cdd41ac5b50334495787ef2b3995c"
  },
  {
    "url": "/_nuxt/layouts/content.7f67cb0da41cbb0719ce.js",
    "revision": "9a201057dbf94bde43bf006e743a832e"
  },
  {
    "url": "/_nuxt/layouts/default.069a0f9a75ca12a17f79.js",
    "revision": "ed03fe902e8793ed6e6e22c0abec8f41"
  },
  {
    "url": "/_nuxt/layouts/sidebar.453d9961bae5e7baf057.js",
    "revision": "4d05ead0bce490cb349334526a7f84f1"
  },
  {
    "url": "/_nuxt/manifest.0b03c2ddf23be2e188d5.js",
    "revision": "b55426b4ec4463df4e84ad1d9f55c98a"
  },
  {
    "url": "/_nuxt/pages/contributing/_document.341afb7896c8bb8958c6.js",
    "revision": "8afe3ad9fc717fdbb3db7c191174d044"
  },
  {
    "url": "/_nuxt/pages/contributing/index.1c5707787f919084fe51.js",
    "revision": "b593c0df5dcce80edb64c67d902aae4b"
  },
  {
    "url": "/_nuxt/pages/index.fe662e0a8eaaba29764a.js",
    "revision": "edc281aced132921f316caaaef28c503"
  },
  {
    "url": "/_nuxt/pages/legal-notice.fc6431610d4add31dacc.js",
    "revision": "b53197ad80f3e58a68169893f7ff4233"
  },
  {
    "url": "/_nuxt/pages/privacy-notice.cda536ab650d8c77426f.js",
    "revision": "203aa85e6876c318938c39667775bb0a"
  },
  {
    "url": "/_nuxt/vendor.a2392965564cf040474d.js",
    "revision": "bf39491cb1be159958a9aa2256de4697"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

