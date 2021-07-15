Title: Install Replicant on My Phones and Tablets
Date: 2021-01-11
Modified: 2021-01-11
Tags: FOSS
Slug: install-replicant-on-my-phones-and-tablets
Authors: Theerawat Kiatdarakun

Replicant is a fully free mobile operating system (zero blobs) based on LinageOS which is in turn based on Android. Replicant, bing libre, supports a very few number of devices (currently around 10), almost all of which are Samsung devices and tablets. You also need a WiFi adapter with free (as in freedom) firmware. My unbranded AR9271 USB with OTG cable worked in all devices but I find it cumbersome to make a Telegram call with it. I recommended the one from libre-sellers like Thinkpenquin because of a smaller form factor. Alternatively, for Samsung Note 2 you can just insert a SIM card with a cellular internet service.

### Why Replicant?

I watched a [**Youtube video**](https://www.youtube.com/watch?v=FY7DtKMBxBw) about the iPhone12 anti-repair design where switching an identical component such as a camera or a logic board makes things glitchy at best and simply not working at worst. This is not justifiable to me so I decided to sell my only Apple device: a 4-year-old Ipad Air 2. I sold on Kaidee.com for a cheap 3800 Baht and used that to buy Replicant-compatible devices from the same site: Samsung Tab 2 7.0 cellular (750 Baht), Samsung Tab 2 10.1 cellular (1290 Baht), two Samsung Note 2 N7100 (800 and 1000 baht each). The total I spent is 3940 Baht. I traded 1 freedomless device for 4 libre devices. Stonk! All came with a protective film each (cool!) but I didn't like it so I removed them.

As a side note, the power button of my Samsung Galaxy Note 2 is broken but there is a jump-start technique in which you charge it while it is turned off, then suddenly discharge and at the same time remove and insert the battery again. A phone will automagically start without the power button!

![replicant-tab2-p3100.jpg](/images/replicant-tab2-p3100.jpg){ width=70% }
<center>Replicant on Samsung Tab 2 7.0 P3100</center>

### Install Replicant
I inspected the default operating system of each device, of course, all are Samsung flavor of stock Androids. Useless Samsung apps crowded together on the screen, not surprising. What really surprised me was the very old version of Google Play store (android 4.x) and the fact that the store didn't support most modern applications! It is probably planned obsolescence which is likely their (Google and co.) usual classic move. However, this move didn't affect me because I was gonna end this stupid Android whole career with Replicant 6.0! Flashing new ROM would void the warranty but the phone was so old so I didn't care about it.

First, you download (and verify) Replicant recovery image and the operating system. Navigate to the download page and select your device and Replicant version. I was confused at first but I downloaded the latest version 6.0004, knowing that I can revert it later if I want. Both the recovery image and the operating system have to be the same Replicant version or else your phone won't boot. Now you begin to flash it. On Linux, you need a Heimdall package to flash ROM on Samsung devices and also ADB to install the OS. Just follow the doc and enjoy. I used this command when ADB complained about insufficient privilege.

`adb kill-server && sudo adb start-server`

Don't forget to backup EFS (modem data including IMEI). One thing also worth noting is software renderers in Replicant: libagl vs llvmpipe. libagl was much faster but also lacks many functionalities (night light included in my case), llvmpipe was extremely slow (around 5 seconds delay for each click which was unusable to me). For details of how to switch them visit [https://redmine.replicant.us/projects/replicant/wiki/Graphics](https://redmine.replicant.us/projects/replicant/wiki/Graphics).

### My Experience
My experience is that only the back camera of Samsung Note 2 works, others didn't work due to closed source firmware. When I switch to th front camera in Note 2 will not work what also happens in subsequent sessions in that case just remove the camera app cache.

- Click the Apps icon.
- Drag the Camera icon to the top of the screen to 'App Info'
- Click the 'Clear data' button.

The horizontal rendering for tab 2 is a bit problematic with a slight tearing diagonally. Many browsers don't work, what works for me are a default browser and DuckDuckGo. If you can't watch a video, stream it to VLC instead. The video resolution supported in these old devices is low (720p is the upper limit IMO). Finally, my experience in Note 2 is top-notch (fast and responsive) unlike Tab 2 which is usable but a little bit slow. You will get used to it anyway.
