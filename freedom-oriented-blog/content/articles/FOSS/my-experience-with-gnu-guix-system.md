Title: My Experience with GNU Guix System
Date: 2021-01-16
Modified: 2021-01-16
Tags: FOSS
Slug: my-experience-with-gnu-guix-system
Authors: Theerawat Kiatdarakun

Guix comes in two flavors: a standalone functional package manager and a full GNU/Linux distribution. I had used Guix package manager for quite some times on Arch Linux and Void Linux and I finally decided to install the full distro bare metal on Thinkpad X200. It is an advanced distro and I still have a lot more to learn.

### Prepare for the Installation

I just followed the documentation which involved binary download, checksum verification, then flash to a USB stick. Guix System is a fully-free OS and it doesn't work with stock Intel WiFi. What I have is Atheros AR9271 WiFi USB adapter so I just plugged it in and it works (Guix system by default has firmware for it). It's also worth mentioning that in Guix documentation they mention how to create Guix Installation medium from minimal binary packages. Look at that chapter if you are interested.

### Installation - First Time
My first attempt was using a graphical installation interface but unfortunately, it couldn't connect to WiFi even though the list of WiFi network devices was displayed correctly, a search on the web suggested that this is a bug so I resorted to manual installation only.

Guix system has a different approach to install the system manually. Unlike distros like Debian, Guix System uses only one configuration file written in Guile format. This file contains everything from the filesystems, mapped devices, default packages, users, services, and many more. I was inexperienced so I simply copied the example configuration from the doc. After initiating installation by `guix system init config.scm`, it had occasional network failure so I needed to rerun this command several times until I got everything done.

### Installation - Second Time
After I librebooted Thinkpad X200, I followed a guide of how to install Guix with full disk encryption at [https://libreboot.org/docs/gnulinux/guix_system.html](https://libreboot.org/docs/gnulinux/guix_system.html). The guide worked well except for the btrfs part where it requires a NOCOW (No Copy-On-Write) attribute for a swap partition [(see btrfs wiki FAQ)](https://btrfs.wiki.kernel.org/index.php/FAQ).
```console
foo:bar$ touch /swapfile
foo:bar$ chattr +C /swapfile
foo:bar$ btrfs property set /swapfile compression none
foo:bar$ dd if=/dev/zero of=/swapfile bs=1MiB count=4096
foo:bar$ chmod 0600 /swapfile
foo:bar$ mkswap /swapfile
foo:bar$ swapon /swapfile
```

TODO guix install btrfs-progs

### Things I Like

- Unlike using Guix package manager in a foreign distro, Guix system does many works for you like adding Guix build users, setting up guix-daemon, and add some important environment variables.
- Libre feeling. By using only the default Guix channel (plus my channel), I can be certain that all packages on my system are FOSS. The kernel is also libre as in blob-free.
- It is quite convenient to declare a new package. Normally, to get my own dwm and st packages to work on Guix I must declare in Guile format the build procedure myself. Fortunately, I can reuse the default configuration in Guix, just replace some fields with my own.

```scheme
(define-module (tkiat packages tkiat-dwm)
  #:use-module (gnu packages suckless)
  #:use-module (guix git-download)
  #:use-module (guix packages)
  #:use-module (tkiat packages))

(define-public tkiat-dwm
  (package
    (inherit dwm)
    (name "tkiat-dwm")
    (source
      (origin
        (method git-fetch)
        (uri (git-reference
          (url "https://gitlab.com/tkiat/tkiat-dwm.git")
          (commit "07194746d69d9fba820033f88a8697f6290d4252")))
        (sha256
          (base32 "1ib60xx4pip00zy2xrnjnnjdmnba0acg03j76pn3kbnqg4l1vl7j"))))
    (home-page "https://gitlab.com/tkiat/tkiat-dwm")
    (synopsis "tkiat version of dwm")))
```

- When you install packages, a new generation (or a collection of packages installed at any point in time) is created. The killer feature of Guix package is the ability to rollback to any generation. The atomic transaction nature of Guix gives me peace of mind not only when installing packages but also when upgrading the system. This 'generation' feature is also available for the system as a whole. When do you `sudo guix system reconfigure config.scm`, a new generation is created and you can roll-back at any time if you don't like it.

### Things I Don't Like

- Guix does not follow Linux FHS standard so many general Linux tutorials out there are not applicable to Guix. For example, /etc/fstab entries are generated from the Guix configuration, any changes will be lost upon reboot. This makes many tutorials based on FHS harder to follow. On the plus side, I have more opportunity to learn more about Guix internal.
- It is harder to do software development. The commands like `npm install <pkg>` and `gem install <pkg>` often don't work out of the box. This is because the packager for a npm package intends it for a typical Linux distribution. I am not sure if it is worth making some of those packages worked since there are too many packages out there.
- Take more time to update compared to other distributions I have used.
- Some packages don't work out of the the box. For example, Thai fonts needs another font package like font-gnu-freefont-ttf to get rendered properly on GNU IceCat.

### Additional Notes

By the time I first wrote this article, Guix repositories were not that huge (15860 packages by typing `guix package --list-available= | wc`) but still considerably large enough. Other package managers like Flatpak and Nix are available but I haven't tried it myself. AppImage doesn't work out of the box here and I haven't tried to hack it yet.
