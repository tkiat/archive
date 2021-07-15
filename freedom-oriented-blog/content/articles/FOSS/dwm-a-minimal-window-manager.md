Title: dwm: A Minimal Window Manager
Date: 2021-01-14
Modified: 2021-01-14
Tags: FOSS
Slug: dwm-a-minimal-window-manager
Authors: Theerawat Kiatdarakun

dwm is a window manager for X window system developed by Suckless.org, a group that promotes and develops minimalistic software. It is the first window manager I have ever used. I was immediately enlightened by the sheer simplicity and usefulness, never look back since. This is really cool stuff. You don't actually need all the features a desktop environment like GNOME provides, you only need a simple terminal and probably some menus (I am using dmenu) to open an installed app. You can flexibly add or remove the default 9 tabs provided which is very liberating to me considering that each tab can have at least one instance of tmux running. I would also like to add that this window manager is very lightweight with only around 2500 lines of code! (measured using cloc utility).

dwm makes me doubt the need for a second monitor at all. Sure if you do jobs like animations you probably want two monitors because you want to compare the flow and the result in real-time but I don't think I will ever need 2nd monitor in my case where I do only one window at a time. The switch from one window to another window is very easy. Other configs, for example, colors, time, etc. can be entirely configured and be shared with other people. This is a prime benefit of Free and Open Source Software (it is released under GPL-compatible X11 license).

dwm also makes me doubt the need for the pointing device such as a mouse or trackpad at all. The application is sized and located automatically upon open ,unlike many desktop environments that require the need of a mouse dragging the application to a particular size and position. Wow!

### Tips
- The main config file is config.h. This is hidden until you compile the program the first time so compile it first then configure values.
- dmenu is a very nice utility originally built for dwm. With a combination of keystroke you set, the search bar appears and you can run an installed application from there easily.
- I maintain my own dwm repository by forking the upstream. I leave the master branch as it is but I also create another branch for my setting. I will rebase the repository to keep up with the upstream from time to time. As a Guix system user, maintaining my own repository helps a lot with my Guix channel declaration.
- You can assign each application to be opened by default on a specific tab on config.h but to do that you need to find a name recognized by dwm first. You install xprop package, run it, then click on the window of the opening app. xprop will output a bunch of strings, the second value in the field `WM_CLASS(STRING)` is the name you want.
- It also works in FreeBSD but you need to change the location of `X11INC`, `X11LIB`, and `FREETYPEINC` variables in config.mk. Here is my config

```Makefile
ifeq "$(shell uname)" "FreeBSD"
X11INC = /usr/local/include
X11LIB = /usr/local/lib
FREETYPEINC = ${X11INC}/freetype2
else
X11INC = /usr/X11R6/include
X11LIB = /usr/X11R6/lib
FREETYPEINC = /usr/include/freetype2
endif
```
- You can change the top-right text using xsetroot. Some common choice are the battery level, current RAM usage, and the current time. At first I did something like this
```bash
while true; do
  xsetroot -name " $(date +'%a, %d %b %I:%M:%S%p') | This is my dwm "
  sleep 1
done &
```
The problem is the loop still keeps running after I log out, this can lead to performance issue and display inconsistency. It's better to use xsetroot as an argument to while loop because xsetroot is terminated when an xorg session ends.
```bash
while xsetroot -name " $(date +'%a, %d %b %I:%M:%S%p') | This is my dwm "; do
  sleep 1
done &
```
