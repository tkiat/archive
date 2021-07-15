Title: Update Void Linux Packages
Date: 2020-10-10
Modified: 2020-10-10
Tags: FOSS
Slug: update-void-linux-packages
Authors: Theerawat Kiatdarakun

Void Linux is not one of the most popular Linux distros but I find it is very stable and minimal. It used to be my primary daily driver. The low hanging fruits for aspiring contributors are package updates which can be as easy as changing the version number and the corresponding checksum. In some cases, a package might have one or more dependency changes which will certainly require more expertise.

### My Experience

I forked their repository and then submitted two pull requests for two package updates: python-urwid and python3-pem. The python-urwid was sent later and rejected by a maintainer. The same maintainer also rejected other requests sent after mine so it was probably because of Hacktoberfest request flooding.

After changing only the version number and the checksum and making a pull request for python3-pem, the travis CI complained about archs and pycompile_module. so I modified it and did another commit. So now I have two commits. Some days later a maintainer asked me to "Please squash the commits". Basically, you can combine many commits into one single commit for the sake of readability. So I need to combine the most recent two commits into one. I moved to my python3-pem branch and enter the following.

```bash
git rebase -i HEAD~2
echo "file is now opened, change everything from pick to squash except the one I want to retain then save and exit"
echo "I crated python3-pen branch so I need to push to that branch"
git push origin +python3-pem
```

No one still merged into their repository. Some days later another maintainer asked me to "Please rebase the branch to fix the conflicts". I then noticed there was a merge conflict on Github between my branch and their master branch. Rebasing is simply moving our base from one commit of the upstream to another commit, in this case the newest commit. Internally, Git computes a patch difference between our latest commit and the last common commit between the upstream and our branch, then applies this patch to the latest commit of the upstream. I did the following to rebase my branch.

```bash
git pull origin master
git checkout <my branch>
git rebase master
echo "there was a conflict so i edit the conflicted files"
git add <conflicted_files>
git rebase --continue
echo "if it complains about EDITOR try setting EDITOR=vim or any other text editor"
git push origin <my branch>
echo "That's it. They got it merged"
```
