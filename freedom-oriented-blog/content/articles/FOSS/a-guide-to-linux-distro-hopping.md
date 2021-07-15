Title: A Guide to Linux Distro Hopping
Date: 2020-11-03
Modified: 2020-11-03
Tags: FOSS
Slug: a-guide-to-linux-distro-hopping
Authors: Theerawat Kiatdarakun

Admittedly, I am not that much of a distro-hopper. I have chronologically used Ubuntu -> Manjaro -> OpenSuse -> Void Linux -> Arch Linux -> Void Linux (musl) -> FreeBSD (oops oops) -> Guix System -> Debian. Only 8 Linux distros. The best way to hop distros, in my opinion, is to select a handful of distros with distinct philosophies. Ubuntu and Manjaro can offer you more convenience while Gentoo offers more freedom to compile packages in a way you choose. NixOS and Guix have different package management paradigms. Bedrock Linux combines stuff from different distros. Void Linux adheres to simplicity, also supports musl libc. Fedora and OpenSuse are corporate Linux so they are more bleeding edge, unlike Debian and Slackware. Puppy Linux tries to be as minimal as possible. Alpine Linux has good support for embedded devices. Trisquel is a fully-free (no binary blob at all) distro. There are also many others but these are what immediately come to my mind.

### My General Guide

1. Most importantly, focus on the distro's philosophy, not appearance, popularity, and size.
2. The easiest to try a distro is to spin it up in a virtual machine. This is particularly useful if you try to run FSF-endorsed distros and you don't have a single free WiFi adapter.
3. Ubuntu-based distributions are worth to try first if you are a newcomer. This doesn't mean they are not capable of complex stuff because all Linux distros are just Linux kernel + desktop + packages so it is almost as hard to become an absolute expert at each of them. They are beginner-friendly because most people use them so tutorials and help are readily available. Lately, Arch-based distributions like Manjaro is also popular.
4. Don't use only Ubuntu, Kbuntu, Xbuntu, Mint, and Elementary OS because they are based on Ubuntu and there is not much point using more or less the same distributions even with different desktop environments. Instead, install many desktop environments and windows managers on the same distribution. You can switch between each environment manually or using a graphical login manager.
5. Use another distro with another package manager and observe how different they are. Debian packages have a lot of contributors while Slackware packages have fewer. Fedora packages are very frequently updated (from my experience). NixOS uses a functional package manager which is entirely different from most others. Few other things to look for in a distro are supported filesystems, libc, and kernel.
6. You can discover more distros on Distrowatch. The ranking there only reflects how beginner-friendly it is, you need to look deeper into the philosophy and goal.
7. You can try helping maintainers update packages as well. This way, you will get the general impression of how the distro functions.
