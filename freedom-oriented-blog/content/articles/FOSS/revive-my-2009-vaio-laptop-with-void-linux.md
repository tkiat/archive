Title: Revive My 2009 Vaio Laptop With Void Linux
Date: 2020-09-22
Modified: 2020-09-22
Tags: FOSS
Slug: revive-my-2009-vaio-laptop-with-void-linux
Authors: Theerawat Kiatdarakun

I got Vaio VGN-CS16S when I was a university student (in late 2018) because it was one of the most beautiful laptops at that time! It came with Windows Vista at that time which was horrendously slow but I didn't remove it because I was very proud of my `Microsoft Vista` logo. The boot time of more than one minute was a "feature" to me. It was a relatively inexpensive Vaio model (around 800$).

In 2012, I bought another cheap laptop to play games but I lost it in Berlin at the train station along with all the money, laptop, Samsung tablet, HDD, everything. That was a perfect opportunity to build my first custom desktop pc! I use it until I came back to Thailand only to find it that consumed energy more than I expected. I didn't like it so I began to search for an alternative.

This old Vaio is the only laptop I had, and I sometimes needed a portable advanced computing device, not just an iPad. I immediately remove Windows and replace it with Ubuntu18.04 with disappointment in performance. So I replaced it with Ubuntu14.04 but still experienced some problems up until a point where nothing worked after boot! I resorted to the desktop pc again.

### The First Installation - LXDE and XFCE
One day I didn't know what happen I decided to try this laptop again, this time with something more minimal. After researching for a while I came across Void Linux which is said to be a good independent distro. It doesn't use Systemd and is not a fork of any other OS. It's built with UNIX philosophy in mind: do one thing and do it well. Cool! I installed it on that day. I thought minimal install was too much of a hassle so I chose LXDE flavor.

I was surprised by the fast boot time but at the same time disappointed by the lackluster of the desktop environment. The desktop UI had some bugs (no WiFi icon) and a half-visible taskbar. I thought that was probably because of my laptop model. My laptop keyboard doesn't work after waking up also. The minimal OS forced me to use CLI commands (like for WiFi), and after some time I got hooked by the minimalism. I was surprised at first when I saw no Python and GCC installed out of the box. Not a big deal for me, I just use the excellent XBPS package manager to install them. Void Linux has its own non-free repository so you have more package choices over a purely free distro.

Without intensive applications, the performance was OK. I changed the desktop environment to XFCE that is a little more CPU-intensive but offered a lot more utilities. I began using many browser tabs and terminals. However, the computer hanged many times I thought it was because of RAM (no swap partition at the time). I installed psensor to measure performance and it convinced me so. Mind you my HDD was 11-year-old!

### The Second Installation - Go Minimal
I came across Luke Smith's youtube video about DWM and I got the first impression about window managers. A desktop environment includes many programs I don't need and I want to eliminate them! I wanted a new clean start so I decided, this time, to use a minimal ISO (around 400MB+). I also removed Intenso SSD from my desktop to use it on this laptop. The unexpected problem was that the new SSD was around 2.5mm less thick than the old HDD. It didn't trouble me much since the HDD touched the bottom (with the normal laptop orientation) but anyway I had unused rubber Roccat mousepad so I cut some part and padded it at the top of the HDD slot.

![vaio-pad-hdd.jpg](/images/vaio-pad-hdd.jpg){ width=70% }
<center>Unused Roccat Mousepad in HDD Slot</center>

The minimal distro forced me to learn about the concept of the display server. The installation tooked some hours because I wrote some ansible on the fly to install every package there. Ansible is the automation program that makes the installation script reusable which is great. Now the laptop doesn't freeze anymore thanks to the SSD. Now I feel much more freedom and become more peaceful. It makes me appreciate the once seemingly slow, chunky, and useless device. Thank you, Void Linux.

### The Third Installation - Try musl

Void Linux is one of the few distros that give libc implementation choices: glibc and musl (pronounced mussle). It is said that musl is more minimal and faster so out of curiosity I tried musl. However, I actually don't understand the internals of any libc. An expert might be able to appreciate the beauty of musl but I, as an end-user, don't notice any difference in speed. The only thing I noticed was a much fewer packages supported out of the box that include AppImage and many build-it-from-source tarballs. You can certainly build a glibc environment in a folder and chroot into that to be able to launch an app but I find that unnecessarily inconvenient and never want to do it. I uninstalled it soon after trying.

### I Remove My Once Beloved Microsoft Vista Logo
I came across the [video where Richard Stallman removes the Microsoft logo from a laptop before signing his signature](https://www.youtube.com/watch?v=UdfY25gDjK8). I thought I was cool so I immediately removed the Windows Vista logo off my laptop and noticed much color difference on the laptop surface! FYI, my laptop is white so it naturally turns yellow over time. I guess this is the only benefit of the logo lol.
