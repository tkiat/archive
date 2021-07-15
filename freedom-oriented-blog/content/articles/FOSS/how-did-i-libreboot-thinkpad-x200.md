Title: How Did I Libreboot Thinkpad X200
Date: 2020-12-20
Modified: 2020-12-20
Tags: FOSS
Slug: how-did-i-libreboot-thinkpad-x200
Authors: Theerawat Kiatdarakun

Libreboot is a FOSS replacement for proprietary hardware initialization firmware like BIOS. It gets some code from coreboot, deblobs it and bundles it with GRUB, flashrom, and others. Being blob-free, it supports a very few devices, mostly old Thinkpad laptops. Currently, a fully-free system is impossible since at least there is blob firmware in SATA hard drive and many small ICs but I am already satisfied with Libreboot + a fully-free operating system. It is not 100% perfect but at least it is living proof of my preference to live with as much freedom as possible.

One great thing that Libreboot has to offer is the total elimination of Intel Management Engine. Intel ME is considered a backdoor by many. It has potential access to the network, the content of your display, etc. No computer user would like to have a potential spyware in his/her computer right?

In a certain Thinkpad model such as X60 you don't need an external flasher but since it supports at best SATA I and DDR2 RAM so I don't recommend it as a daily driver in 2020. For Thinkpad X200, the official has a how-to manual for Beaglebone Black only but a much cheaper flasher like CH341A is certainly possible (I used it). After reading a lot of related articles for the fear to brick my laptop, I finally cut them down to two sources: [the official one](https://libreboot.org/docs/hardware/x200.html) and [Wolfgang's Channel](https://www.youtube.com/watch?v=ktcvWkEVBE0). The latter uses CH341A so I mainly follow that and compare the PIN numbers with the official guide to double-check.

![libreboot-ch341a.jpg](/images/libreboot/libreboot-ch341a.jpg){ width=250px }
<center>CH341A</center>

![libreboot-bios-chip.jpg](/images/libreboot/libreboot-bios-chip.jpg){ width=70% }
<center>BIOS Chip on X200</center>

### My Pre-Flashing Guide
1. Find out if your laptop meets the requirements on the Libreboot website, some are model numbers, some are display types, etc. To determine your display manually using Linux, first, get the display property by typing `xrandr --props`, then save the value from EDID field to `<filename>`, then get the alphanumeric model number from `cat <filename> | edid-decode`. In my case it is LP121WX3-TLC1. Simple DuckDuckGo search shows that it utilizes TFT-LCD. Libreboot says LCD is compatible - voilà!
2. Update EC firmware. It handles tasks that OS is not responsible for such as battery handling. The easiest way is to use the Lenovo utility on Windows but you should make sure your computer has a secondary power source (battery or UPS) because if the power outage happens your laptop may not be booted again. There is currently no known way to update it from Libreboot.
3. Order a free (as in freedom) wireless adapter. I had a USB adapter AR9271 at home but since USB ports in a laptop are very limited in number I might consider buying an internal adapter. If you are unsure about which model to buy I suggest that you take a look at a second-hand website, search for Libreboot offer for your model and look at the description.
4. Order external flashing device (if you need). BeagleBone or Rasberry Pi is a better choice if you anyway want to do something else with it otherwise order just CH341A. Some CH341A has voltage mismatch (5 Volt instead of 3.3 Volt) so you might as well order a multimeter to check. I would recommend that you order two CH341A if you place an order from China due to long distance shipping. Other options include Zerocat flashing but it is too expensive for me.
5. Order SOIC IC test clip. Your BIOS on the motherboard might support SOIC8 or SOIC16 so order the one you need. Note that SOIC16 also supports SOIC8 if placed correctly. Wolfgang's Channel video recommends cutting the wire connecting to SOIC clip and replaces it with shorter jumper wires. In that case, you also need female to female jumper wires and probably soldering iron also because when you cut the wire the lead at the tip is still there and it might be too big for a jumper wire.

![libreboot-mess.jpg](/images/libreboot/libreboot-mess.jpg){ width=250px }
<center>A Mess</center>

| Warning: Flashing Libreboot on different devices results in the same MAC Address. This means two libreboot machines cannot be on the same ethernet network (you can change MAC address temporarily though). Look at the Libreboot website on how to avoid this. |
|-----------------------------------------|

### How Did I Flash It
1. Unscrew and connect everything (flasher, SOIC, wires). Then connect flasher to a laptop
2. Download Flashrom. It is a utility to flash something to the ROM. (Thanks captain obvious!)
3. Backup BIOS two times and check if they are identical to make sure everything works. BIOS firmware is quite unique for each particular laptop model so it is wise to make a backup of it since maybe you want to sell a laptop to somebody else down the road and he wants to use Windows (only a free software traitor does that btw). I once had a problem that the Flashrom did not recognize the BIOS even I thought I clamped the SOIC chip properly. The solution is to clamp it again and again until it works. In my case, it asks which Macronix flash chip model I have. It's the one on my BIOS which is MX25L6405D. Unfortunately, another X200 laptop of mine has very blurry text on the chip. However, with great effort, I could finally decipher it.
4. Download Libreboot and select a suitable image (8192 kB or something else, you know this number in the previous step).
5. Have fun. Libreboot doesn't work with all operating systems so check that out.

![libreboot-finish.jpg](/images/libreboot/libreboot-finish.jpg){ width=70% }
<center>*Finished!*</center>
