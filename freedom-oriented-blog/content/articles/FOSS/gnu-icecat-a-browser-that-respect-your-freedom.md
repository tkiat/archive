Title: GNU IceCat: A Browser that Respects Your Freedom
Date: 2021-01-12
Modified: 2021-01-12
Tags: FOSS
Slug: gnu-icecat-a-browser-that-respect-your-freedom
Authors: Theerawat Kiatdarakun

GNU IceCat is based on Firefox Enterprise Edition, a more stable release of Firefox Quantum i.e. older version. So what is the difference here? Why GNU put the effort to fork Firefox ESR and distribute it separately? Well, on the GNU website they state that Firefox distributes some non-free plugins and addons (see [4 essential freedoms](https://en.wikipedia.org/wiki/The_Free_Software_Definition)), and it also has some trademark issues that make it inconvenient to redistribute copies. I use IceCat only to login not-too-obtrusive websites with credentials, I browse the rest using qutebrowser instead.

### Default Extensions
- LibreJS. It blocks suspecting non-trivial javascript codes. My first experience is that LibreJS blocks almost everything. It makes browsing almost not possible. Sure, you can unblock a particular javascript code but it is unfun and time-consuming to do that often. The javascript is usually minified so I don't see how can I verify it. As a result, I remove LibreJS, and also related add-ons, from IceCat.
- Searxes' Third-party Request Blocker. As the name suggests, this extension blocks all 3rd party requests. This is much less annoying than LibreJS so I keep it. Now it is by far my favorite extension since I know a lot more about 3rd party requests. Google tag manager and Google analytics are found on almost every website. Facebook and co. trackings are found on many websites which I keep them blocked. Requests that I allow include necessary CAPTCHA testing requests and the extension that does A/B testing. I allow most third-party CDN requests too but I do out of necessity in this case.
- ViewTube. It makes you anonymous while browsing Youtube. I disable it so that I can log in and like the video and sometimes even watch the ad to support the creator. I don't mind Google tracking in this case.
- And more. I don't cover them here.

### Login with Firefox Account
Last but not least, by default, IceCat doesn't allow you to login using a Firefox credential as the default settings refuse fingerprinting but you can type about:config in the URL and then set the below values to bypass it. I don't do this but if you want, you can.

```text
privacy.resistFingerprinting = false
identity.fxaccounts.enabled = true
```

### Low-Pitched Audio Issue
Sometimes I experienced video playback from some websites having low-pitched sound. This can be changed by setting `media.mediasource.enabled = false`. This might break some websites, in that case just enable it again.
