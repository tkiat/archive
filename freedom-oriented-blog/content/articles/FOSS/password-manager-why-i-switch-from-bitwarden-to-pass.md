Title: Password Manager: Why I Switch from Bitwarden to Pass
Date: 2021-01-07
Modified: 2021-01-07
Tags: FOSS
Slug: password-manager-why-i-switch-from-bitwarden-to-pass
Authors: Theerawat Kiatdarakun

Bitwarden is considered a very awesome open-source password manager available in all popular platforms: Windows, Mac, Linux, Android, F-Droid, iOS. Its free option features unlimited entries, unlike Lastpass and Dashlane counterparts. It is open-source with a self-hosting option. What more do I need? And why I made a switch? TLDR: I had extreme paranoia.

I would like to tell you some backgrounds of how I stored passwords in Bitwarden. Since everything is stored on their server I do 'password salting'. Password salting is the action of putting some more characters in addition to what is stored on Bitwarden server and use those on all websites. For example, I store abcde as a Leanpub website's password on the Bitwarden server but the actual password is abcde123noob, '123noob' is password salt here that I add to every password. With this method, even the Bitwarden server is hacked with beyond NSA level cracker or things go malicious no one except me still knows the actual password. That gives me total peace of mind.

### Why Did I Delete Bitwarden Account?
Well, I don't actually trust Bitwarden web extensions. Whenever I put the Bitwarden's password together with the salt part it asked me if I want to update my password and if I accept it can remember my password including the salt part! I don't like the fact that it can theoretically know my salt password. OK, you might think it is open-source so you can just verify it yourself. The thing is any malicious update can happen anytime and if it does the poor souls who set the automatic extension update might be in trouble. Furthermore, the code verification process is easier said than done. It's 91284 lines of code (measured using cloc utility) of only its web extension repository. I doubt if an average user determines enough to understand it. On the other hand, pass has only 2962 lines of code.

### Lines of Code (Bitwarden - browser extension - https://github.com/bitwarden/browser)
```bash
github.com/AlDanial/cloc v 1.88  T=0.93 s (253.7 files/s, 103780.4 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                            49              0              0          72084
TypeScript                      71           1131             84           7850
XML                             50            613           1971           4826
HTML                            36              3              6           2574
Sass                            10            326              4           1644
JavaScript                       6            255            332           1512
Swift                            4             38             11            518
Markdown                         4             58              0            129
YAML                             3             16              7            115
CSS                              1              6              0             26
SVG                              1              0              0              6
-------------------------------------------------------------------------------
SUM:                           235           2446           2415          91284
-------------------------------------------------------------------------------
```

### Lines of Code (pass)
```bash
github.com/AlDanial/cloc v 1.88  T=0.07 s (613.2 files/s, 65291.2 lines/s)
--------------------------------------------------------------------------------
Language                      files          blank        comment           code
--------------------------------------------------------------------------------
Bourne Shell                     20            233            337           1457
Python                            8            163            195            621
Ruby                              4             86             57            387
Lisp                              1             72             41            269
Markdown                          3             40              0             68
make                              1             13              0             64
Perl                              1             17             15             47
vim script                        1              6             16             30
Bourne Again Shell                1              6              0             19
--------------------------------------------------------------------------------
SUM:                             40            636            661           2962
--------------------------------------------------------------------------------
```
pass is a very simple password manager that follows UNIX philosophy: do one thing and do it well. It is actually a simple wrapper around PGP encryption. Being Git compatible, one can store his passwords on any Git hosting platform he likes. I myself host it on a private repository on GitLab so in my case I also need an SSH key for convenience. It has many clients available on common platforms just like Bitwarden but you need to be extra careful since independent developers develop them. You can try to look at issues opening/closed if there are obvious red flags or not.

It has excellent support on Linux with nice integration with dmenu that I am using. I don't think I can ask for anything better than this. Now I feel even more peaceful than before. As for how to set it up you can look at the website for details. You only need PGP-compliant private key (I am using GPG), a Git repository on the server, and in some cases, SSH keys as well. The only annoyance for me is it lacks out-of-the-box ZSH autocompletion but they provide the scripts for that so no worry be happy.
