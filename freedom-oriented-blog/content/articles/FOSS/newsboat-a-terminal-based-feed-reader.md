Title: Newsboat: A Terminal-Based Feed Reader
Date: 2020-12-23
Modified: 2020-12-23
Tags: FOSS
Slug: newsboat-a-terminal-based-feed-reader
Authors: Theerawat Kiatdarakun

RSS feed is an aggregator of news, articles, etc. from many websites to a single place, making it convenient for the audience. Inoreader, a web-based RSS reader, was the best I could find. It offered a compact UI, flexible feed grouping, read-anywhere with an account, and many more. On the other end, there are free and open-source terminal-based RSS readers. They have some pros and cons compared with the web-based ones.

### Disadvantages
- Being based on a terminal, they are not available on all internet-capable devices.
- They are typically harder to set it up at first.
- Typicall lack remote server supports.

### Advantages
- Less tracking. There is no reason why web-based RSS readers, especially free ones, don't track you. Of course, a few might be privacy-oriented so do the research yourself.
- Freedom. The open nature of terminal-based RSS readers enables much more tweaking possibilities.  One of the features I like most in Newsboat RSS reader is that you can select any browser (for example w3m, Qutebrowser, IceCat, and many more up to you) to open a feed in Newsboat. I usually use w3m text-based browser to open non-graphical articles to save bandwidth, and I use Qutebrowser or IceCat for the rest. Profit!

### Introduce Newsboat

Newsboat is a fork of the Newsbeuter. You can write a list of URLs and corresponding tags and Newsboat will automatically show them upon start. You can modify all the colors, all the keybindings, and also save all URLs in a file hosted on the private Git or cloud. See, you have choices! This's it. The rest you can find in the doc. Ah, I must say you can use Newsboat as a client for the established RSS servers like Inoreader, NewsBlur, and NextCloud News. I myself update it hourly locally using GNU Mcron. I am using Guix OS so that needs some Guile configs. Your OS might differ.

### My ~/.newsboat/config

```text
unbind-key C
unbind-key h
unbind-key j
unbind-key k
unbind-key l
unbind-key o
unbind-key w

bind-key ^D pagedown
bind-key ^U pageup
bind-key d toggle-show-read-feeds
bind-key h quit
bind-key j down
bind-key k up
bind-key l open
bind-key w open-in-browser
browser w3m
color article             white   black
color background          white   black
color info                white   black      bold
color listfocus           white   color240   bold
color listfocus_unread    magenta color240   bold
color listnormal          white   black
color listnormal_unread   magenta black
datetime-format "%L"
history-limit 0 # search history
keep-articles-days 3
macro q set browser "qutebrowser %u"; open-in-browser ; set browser w3m
macro i set browser "icecat %u"; open-in-browser ; set browser w3m
show-read-articles no
show-read-feeds no
```
