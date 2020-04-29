importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

const BUILD = '2020-04-29 00:35';

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
    {url: 'index.html', revision: BUILD },
    {url: 'assets/css/bootstrap-4.4.1.min.css', revision: BUILD },
    {url: 'assets/css/app-0.0.1.css', revision: BUILD },
    {url: 'assets/js/jquery-3.4.1.slim.min.js', revision: BUILD },
    {url: 'assets/js/bootstrap-4.4.1.min.js', revision: BUILD },
    {url: 'assets/js/vue-2.6.11.js', revision: BUILD },
    {url: 'assets/js/underscore-1.10.2.min.js', revision: BUILD },
    {url: 'assets/js/async-3.2.0.min.js', revision: BUILD },
    {url: 'assets/js/app-0.0.1.js', revision: BUILD },
    {url: 'assets/audio/1.wav', revision: BUILD },
    {url: 'assets/audio/2.wav', revision: BUILD },
    {url: 'assets/audio/3.wav', revision: BUILD },
    {url: 'assets/audio/4.wav', revision: BUILD },
    {url: 'assets/audio/5.wav', revision: BUILD },
    {url: 'assets/audio/6.wav', revision: BUILD },
    {url: 'assets/audio/7.wav', revision: BUILD },
    {url: 'assets/audio/8.wav', revision: BUILD },
    {url: 'assets/audio/9.wav', revision: BUILD },
    {url: 'assets/audio/10.wav', revision: BUILD },
    {url: 'assets/audio/11.wav', revision: BUILD },
    {url: 'assets/audio/12.wav', revision: BUILD },
    {url: 'assets/audio/13.wav', revision: BUILD },
    {url: 'assets/audio/14.wav', revision: BUILD },
    {url: 'assets/audio/15.wav', revision: BUILD },
    {url: 'assets/audio/16.wav', revision: BUILD },
    {url: 'assets/audio/17.wav', revision: BUILD },
    {url: 'assets/audio/18.wav', revision: BUILD },
    {url: 'assets/audio/19.wav', revision: BUILD },
    {url: 'assets/audio/20.wav', revision: BUILD },
    {url: 'assets/audio/21.wav', revision: BUILD },
    {url: 'assets/audio/22.wav', revision: BUILD },
    {url: 'assets/audio/23.wav', revision: BUILD },
    {url: 'assets/audio/24.wav', revision: BUILD },
    {url: 'assets/audio/25.wav', revision: BUILD },
    {url: 'assets/audio/26.wav', revision: BUILD },
    {url: 'assets/audio/27.wav', revision: BUILD },
    {url: 'assets/audio/28.wav', revision: BUILD },
    {url: 'assets/audio/29.wav', revision: BUILD },
    {url: 'assets/audio/30.wav', revision: BUILD },
    {url: 'assets/audio/31.wav', revision: BUILD },
    {url: 'assets/audio/32.wav', revision: BUILD },
    {url: 'assets/audio/33.wav', revision: BUILD },
    {url: 'assets/audio/34.wav', revision: BUILD },
    {url: 'assets/audio/35.wav', revision: BUILD },
    {url: 'assets/audio/36.wav', revision: BUILD },
    {url: 'assets/audio/37.wav', revision: BUILD },
    {url: 'assets/audio/38.wav', revision: BUILD },
    {url: 'assets/audio/39.wav', revision: BUILD },
    {url: 'assets/audio/40.wav', revision: BUILD },
    {url: 'assets/audio/41.wav', revision: BUILD },
    {url: 'assets/audio/42.wav', revision: BUILD },
    {url: 'assets/audio/43.wav', revision: BUILD },
    {url: 'assets/audio/44.wav', revision: BUILD },
    {url: 'assets/audio/45.wav', revision: BUILD },
    {url: 'assets/audio/46.wav', revision: BUILD },
    {url: 'assets/audio/47.wav', revision: BUILD },
    {url: 'assets/audio/48.wav', revision: BUILD },
    {url: 'assets/audio/49.wav', revision: BUILD },
    {url: 'assets/audio/50.wav', revision: BUILD },
    {url: 'assets/audio/51.wav', revision: BUILD },
    {url: 'assets/audio/52.wav', revision: BUILD },
    {url: 'assets/audio/53.wav', revision: BUILD },
    {url: 'assets/audio/54.wav', revision: BUILD },
    {url: 'assets/audio/55.wav', revision: BUILD },
    {url: 'assets/audio/56.wav', revision: BUILD },
    {url: 'assets/audio/57.wav', revision: BUILD },
    {url: 'assets/audio/58.wav', revision: BUILD },
    {url: 'assets/audio/59.wav', revision: BUILD },
    {url: 'assets/audio/60.wav', revision: BUILD },
    {url: 'assets/audio/61.wav', revision: BUILD },
    {url: 'assets/audio/62.wav', revision: BUILD },
    {url: 'assets/audio/63.wav', revision: BUILD },
    {url: 'assets/audio/64.wav', revision: BUILD },
    {url: 'assets/audio/65.wav', revision: BUILD },
    {url: 'assets/audio/66.wav', revision: BUILD },
    {url: 'assets/audio/67.wav', revision: BUILD },
    {url: 'assets/audio/68.wav', revision: BUILD },
    {url: 'assets/audio/69.wav', revision: BUILD },
    {url: 'assets/audio/70.wav', revision: BUILD },
    {url: 'assets/audio/71.wav', revision: BUILD },
    {url: 'assets/audio/72.wav', revision: BUILD },
    {url: 'assets/audio/73.wav', revision: BUILD },
    {url: 'assets/audio/74.wav', revision: BUILD },
    {url: 'assets/audio/75.wav', revision: BUILD },
    {url: 'assets/audio/76.wav', revision: BUILD },
    {url: 'assets/audio/77.wav', revision: BUILD },
    {url: 'assets/audio/78.wav', revision: BUILD },
    {url: 'assets/audio/79.wav', revision: BUILD },
    {url: 'assets/audio/80.wav', revision: BUILD },
    {url: 'assets/audio/81.wav', revision: BUILD },
    {url: 'assets/audio/82.wav', revision: BUILD },
    {url: 'assets/audio/83.wav', revision: BUILD },
    {url: 'assets/audio/84.wav', revision: BUILD },
    {url: 'assets/audio/85.wav', revision: BUILD },
    {url: 'assets/audio/86.wav', revision: BUILD },
    {url: 'assets/audio/87.wav', revision: BUILD },
    {url: 'assets/audio/88.wav', revision: BUILD },
    {url: 'assets/audio/89.wav', revision: BUILD },
    {url: 'assets/audio/90.wav', revision: BUILD },
  ]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}