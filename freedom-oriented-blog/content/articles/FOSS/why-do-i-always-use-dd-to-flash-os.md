Title: Why do I Always Use dd to Flash OS?
Date: 2020-12-26
Modified: 2020-12-26
Tags: FOSS
Slug: why-do-i-always-use-dd-to-flash-os
Authors: Theerawat Kiatdarakun

You cannot simply delete everything from the USB stick and copy the OS ISO image to it and expect it to automagically boot successfully. The boot sector needs to be properly created what's why you need some kind of a flasher utility. Some popular flasher utilities include balenaEtcher, Rufus, and UNetbootin. Specialized flashers also exist like Fedora Media Writer for Fedora Linux distro.

But I always have a useful single-command utility at my disposal - dd. dd is similar to cp but it offers more features such as the ability to adjust write/read rate and the overall transfer size. It works every time in my experience so I don't need to download those media writer apps.

Then I wonder why people still use those apps? Some DuckDuckGo searches suggest that dd can erase a wrong partition if configured incorrectly. There is some truth in it but when I compare it to a car driving action, the risk is very pale in comparison.

1. Car driving is real-time unlike dd command where you can press enter at any time.
2. Car driving is riskier, you can kill somebody or even yourself in case of accident.

By this logic, I, as a car driver, keep using dd.
