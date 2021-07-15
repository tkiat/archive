Title: Screenshot
Save_as: screenshots/batch-rename-files.html
Slug: batch-rename-files
Status: hidden

### Batch Rename Files
```console
foo@bar:~$ ls -1
00-Playlist.m3u
01-Prologue.ogg
02-First_Steps.ogg
03-Resurrections.ogg
04-Awake.ogg
05-Postcard_from_Celeste_Mountain.ogg
06-Checking_In.ogg
07-Spirit_of_Hospitality.ogg
08-Scattered_and_Lost.ogg
foo@bar:~$ 2file-rename-menu.py
----------------------------------------
00-Playlis|t.m3u
01-Prologu|e.ogg
02-First_S|teps.ogg
03-Resurre|ctions.ogg
04-Awake.o|gg
05-Postcar|d_from_Cel|este_Mount|ain.ogg
06-Checkin|g_In.ogg
07-Spirit_|of_Hospita|lity.ogg
08-Scatter|ed_and_Los|t.ogg
0123456789|0123456789|0123456789|0123456789 -> Index
========================================
         ⭐⭐ Rename Menu ⭐⭐
========================================
1) Characters -- Remove from index x to y
2) Number -- Make first number x digits
3) Number -- Add first number by x
4) Text -- Add at specific index
5) Word -- Capitalize first letter of each word
6) Word -- Replace words up to n matches
7) Quit
Please Enter Your Choice: 3
Enter x: 12
----------------------------------------
12-Playlis|t.m3u
13-Prologu|e.ogg
14-First_S|teps.ogg
15-Resurre|ctions.ogg
16-Awake.o|gg
17-Postcar|d_from_Cel|este_Mount|ain.ogg
18-Checkin|g_In.ogg
19-Spirit_|of_Hospita|lity.ogg
20-Scatter|ed_and_Los|t.ogg
0123456789|0123456789|0123456789|0123456789 -> Index
========================================
         ⭐⭐ Rename Menu ⭐⭐
========================================
1) Characters -- Remove from index x to y
2) Number -- Make first number x digits
3) Number -- Add first number by x
4) Text -- Add at specific index
5) Word -- Capitalize first letter of each word
6) Word -- Replace words up to n matches
7) Quit
Please Enter Your Choice:
```
