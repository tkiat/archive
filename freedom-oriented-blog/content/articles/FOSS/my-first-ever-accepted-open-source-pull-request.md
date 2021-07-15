Title: My First Ever Accepted Open Source Pull Request
Date: 2020-10-09
Modified: 2020-10-09
Tags: FOSS
Slug: my-first-ever-accepted-open-source-pull-request
Authors: Theerawat Kiatdarakun

One day I was about to multi-boot my Linux distros with LVM and LUKS1 so I search for LVM-related commands using a tldr package. I couldn't find the entry `lvremove` so I took a plunge to add the entry myself. tldr is a short version of a man page. Usually, a man page bombards us with the configurations and options but not all options are made equal, some are used only in edge cases while some are very frequently used. tldr solves this problem by listing only a few popular commands.

```bash
echo "this is an example of usage"
tldr blkid
blkid
Lists all recognized partitions and their Universally Unique Identifier (UUID).

 - List all partitions:
   sudo blkid

 - List all partitions in a table, including current mountpoints:
   sudo blkid -o list
```

### Pull Request Steps
- Fork the tldr repository.
- Clone to my local machine.
- Read `Contributing.md`. It guides contributors of how to contribute.
- Make a new branch with the same name as the command I would like to add. In this case, lvremove.
- Switch the lvremove branch and add a new page. LVM is available for Linux only so I put it in the `linux` folder.
- Push to my remote repository
- On GitHub, click `Pull Requests` tab.
- Click `New Pull Request` and then request to merge it. It had to pass the Continuous Integration check (if any) first.
- Wait until two reviewers came and gave feedbacks. In my case, it was minor changes.
- Revise and commit again to the same branch.
- Wait until they merge to their repo. Done!
