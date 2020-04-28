/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "4e180535a86534c7951f34f02e83057f"
  },
  {
    "url": "assets/css/0.styles.293d5c37.css",
    "revision": "b0ee4cd9138865917ff31a9ba5ca1858"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3367da6c.js",
    "revision": "fba3d40762a14b6fa44437df4854c44a"
  },
  {
    "url": "assets/js/11.4825b78f.js",
    "revision": "d1b52aee4333e86c9800bb1f7c9d50dc"
  },
  {
    "url": "assets/js/12.1437f3a3.js",
    "revision": "5e13bc5b884b043be10acc032945875f"
  },
  {
    "url": "assets/js/13.a4058443.js",
    "revision": "b32d939bad11d7192a90c2aa1339a9b2"
  },
  {
    "url": "assets/js/14.dfa8a185.js",
    "revision": "85d8f80006dfbc410c8fe682a2617a88"
  },
  {
    "url": "assets/js/15.e8d58b52.js",
    "revision": "7d1e1e103978a6c2521d3e4e684a7ee7"
  },
  {
    "url": "assets/js/16.7ed5fd78.js",
    "revision": "7caa3404607bf346cc085be58c0926c6"
  },
  {
    "url": "assets/js/17.f54fdbde.js",
    "revision": "13291bd368b167c0c728aa16304db779"
  },
  {
    "url": "assets/js/18.7d9df71c.js",
    "revision": "979659335bf331ac88db3a4d94c13cf9"
  },
  {
    "url": "assets/js/19.7302eda1.js",
    "revision": "f7d501a055d06f2cf42c497b7136ab09"
  },
  {
    "url": "assets/js/2.13b40884.js",
    "revision": "7672df8fea9e4cbfa533a90c327c3a3a"
  },
  {
    "url": "assets/js/20.87765684.js",
    "revision": "88e38861c61478bbb603bb923ae17196"
  },
  {
    "url": "assets/js/21.363b8882.js",
    "revision": "ecd5d78f5395ebdee226423887d9ca65"
  },
  {
    "url": "assets/js/22.b3642f8d.js",
    "revision": "fc7c1d99b8274cee94054344b8667b9b"
  },
  {
    "url": "assets/js/3.d320a005.js",
    "revision": "7eb909612249eab23f11b022ef253413"
  },
  {
    "url": "assets/js/4.71a3928c.js",
    "revision": "4d79129e782b83dbbe5150ffc227acac"
  },
  {
    "url": "assets/js/5.71caa841.js",
    "revision": "e8bd4514b7ca4cac695af3ade9e4bc4c"
  },
  {
    "url": "assets/js/6.0571c7b3.js",
    "revision": "1b9a6163959623f46bd78aa527789334"
  },
  {
    "url": "assets/js/7.0ace18d4.js",
    "revision": "00dc5731da6f20cd122ef12faa2abaff"
  },
  {
    "url": "assets/js/8.47da19c0.js",
    "revision": "d4995d8e4bcf1965a780c00a52a54ead"
  },
  {
    "url": "assets/js/9.e084d616.js",
    "revision": "78e90c7c8df74fc42796b2851a4525b8"
  },
  {
    "url": "assets/js/app.0c24eac0.js",
    "revision": "22762d1ac3612b11b86d23544aa88122"
  },
  {
    "url": "docs/getting-start/preparation/index.html",
    "revision": "663670273f440b6388c7d71535c7cf67"
  },
  {
    "url": "docs/getting-start/tools/index.html",
    "revision": "4be5490c97413a3aaf4d8a1697a62cb1"
  },
  {
    "url": "docs/goals/overview/index.html",
    "revision": "3f6f7eb5b3b6c9e5e5e5d1c179500f39"
  },
  {
    "url": "docs/hardware/drawpcb/index.html",
    "revision": "b8c792dbf90c0111c407c913796acc00"
  },
  {
    "url": "docs/software/basic/index.html",
    "revision": "1c52b07fdb8019c4a97b3e4fd6b92560"
  },
  {
    "url": "favicon.png",
    "revision": "7bbabd220457617b140be11e3285521b"
  },
  {
    "url": "icon.png",
    "revision": "dd05b12249b3ceac28907682ee1cd9bd"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d4d7e74eac078e34a5c51809fcf4d6d7"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "dd6a427b58ca6dfcee9c7ef3e47be2d6"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "baa1eb8bef03c0aeedc322b63e86e0c7"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "29d94a0fc8769356e6c6042b94c0fffa"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "60434fbdba0c8bfe00630b167dd7ea32"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "bc3d5e3c31558a8ce887e2e7e5351afb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7e583b923ddf7a2cc60e1eebea175127"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "fc61ff40e4feb4a9669d0d3e23ac7ea0"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8f8c57b617299b315e2f8b18d97e6462"
  },
  {
    "url": "icons/msapplication-icon.png",
    "revision": "f519d7e481d311755ae3897901647749"
  },
  {
    "url": "index.html",
    "revision": "544277f7fa68a558e0e918df98800da2"
  },
  {
    "url": "open_graph_logo.png",
    "revision": "f97a250a016caba373383284ff75fd3c"
  },
  {
    "url": "zh/about/index.html",
    "revision": "228b19e80d1dcd3a30fae8d312a31796"
  },
  {
    "url": "zh/docs/getting-start/preparation/index.html",
    "revision": "a6f8a6d5af20d2c881f678276c42c211"
  },
  {
    "url": "zh/docs/getting-start/tools/index.html",
    "revision": "9c7af42a33ced620bb01edacd119b786"
  },
  {
    "url": "zh/docs/goals/overview/index.html",
    "revision": "b7d74380a4fd588c07586c041f9ac0cc"
  },
  {
    "url": "zh/docs/hardware/drawpcb/index.html",
    "revision": "843714ff214292bf9afb9308809ecb7c"
  },
  {
    "url": "zh/docs/software/basic/index.html",
    "revision": "7a2b0e385e3109902974da97295d138a"
  },
  {
    "url": "zh/index.html",
    "revision": "7ce3c1ce7bfefc09bc2e751e1ce7e42f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
