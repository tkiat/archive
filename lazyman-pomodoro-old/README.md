# lazyman-pomodoro

A minimalist terminal-based pausable pomorodo Linux shell script using python3

## Why does this exist?

There are a lot of pomodoro applications out there and some of them are really great, but I can't find any that serve everything I personally want. So I decided to write my own. These are all features I need. And I think you may need them too.

- Terminal-based. Why? First, you can use only keyboard to use the app. Second, there is no additional presence on ALT+TAB app selection. It induces cognitive load when I ALT+TAB apps and have to avoid this one.
- Remaining time live updated on the tab title bar. So that the user doesn't have to switch tab often.
- Pausable (with disable option). Yes, I know in pomodoro technique you are not supposed to pause in between but it is nice to have such option just in case I want to go to the toilet or receive package delivery.
- Simple auto-updated weekly review of how many pomodoro sessions you have done.
- Minimalist. Pomodoro is a simple technique, there is no need to put all possible features.
- Lightweight and a few dependencies. Distro independent.
- Play both sound and notification when a session ends to make it accessible to most users.
- No arguments to remember. Just modify config file once and you are all set.

## What do you need?

- Linux. It might work on other OSs but I haven't tested it.
- Python3
- Zenity (dialog box)
- festival (text-to-speech). You might need additional language packs
- Any shell that support some Bash commands in this script. Of course Bash shell would do

## How to use

1. Copy everything from here. The file structure should remain the same.
2. Change config file (pomodoro.conf) that fits your need
3. Run lazyman-pomodoro.py without any arguments. And of course feel free to add this script to your system path
4. Start/Pause/Continue pomodoro session. Enjoy!

## Note

- Time live on tab title bar is not working on some terminal emulators out of the box such as Konsole and tmux.

## Screenshots

<p align="center"><i>Work Session</i></p>
<p align="center"><img src="https://ptostint.sirv.com/Screenshot/github-lazyman_pomodoro/work-session.png"  width="800"></p>

<p align="center"><i>Break Session</i></p>
<p align="center"><img src="https://ptostint.sirv.com/Screenshot/github-lazyman_pomodoro/break-session.png"  width="800"></p>

<p align="center"><i>Pause</i></p>
<p align="center"><img src="https://ptostint.sirv.com/Screenshot/github-lazyman_pomodoro/pause-continue.png"  width="800"></p>

<p align="center"><i>Notification</i></p>
<p align="center"><img src="https://ptostint.sirv.com/Screenshot/github-lazyman_pomodoro/notification.png"  width="800"></p>

<p align="center"><i>Configuration</i></p>
<p align="center"><img src="https://ptostint.sirv.com/Screenshot/github-lazyman_pomodoro/config-file.png"  width="800"></p>

<p align="center"><i>Log</i></p>
<p align="center"><img src="https://ptostint.sirv.com/Screenshot/github-lazyman_pomodoro/logfile.png"  width="800"></p>
