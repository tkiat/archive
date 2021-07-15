Title: How do I Name Files to Make the Search Easier
Date: 2021-01-14
Modified: 2021-01-14
Tags: Personal
Slug: how-do-i-name-files-to-make-the-search-easier
Authors: Theerawat Kiatdarakun

There are excellent programs like fzf to do a fuzzy search for a file on the command line, however, we don't always have that luxury. Think of when you navigate through a file manager on a Samsung tablet or accessing a file on some cloud web clients, they might not provide sufficiently good search functionality. Therefore, it is always helpful to name files in an organized manner. It lessens your search time and you will have more time to do other stuff. This is my opinion so take it with a grain of salt.

### How I Name My Files

1. **Use only alphanumeric, hyphen (-), and underscore (_)**. Firstly, the space is hard to use on Linux, for example, commands on Linux interprets filename with space "my file" as two separate entities: "my" and "file". You need to escape space characters or wrap up the whole file name with a double quote to get it worked. An end-user using Windows might not have any issue with the space since the point-and-click navigation style doesn't have problems with a space character in filenames. Secondly, some characters are forbidden on Windows, Linux, and macOS but none of those are - and _ so I limit to myself only these twos.
2. **Use _ to join a group related words, - to separate them**. If you notice carefully when you click on `I_Love_You` section on the file `I_Love_You-John_and_Jane.txt`, only the parts connected by _ will be highlighted, in this case, `I_Love_You`. Name things I like this make it easier to copy information and paste it somewhere. For example, it is easy to copy the date from `2020_09_10-My_Homework_Copied_from_Others.odt`.
3. **Date format: YYYY-MM-DD**. This makes the sort-by-name operation also sort the files chronologically, making the search easier.
4. **Music**. I name a music folder containing tracks Artist-Year-Album inside the same folder. I do this since putting the most common attribute (Artist) in the front also groups files with the same artist together. Inside the folder I name each track `01-Track1.ogg`, `02-Track2.ogg`, and so on, I reserve 00 for `00-Playlist`.
5. **Movie**. I once tried to name by genre but it was very confusing, a movie can have multiple sub-genres like comedy and horror and I don't find it possible to do so. I just sort it by name.  
I don't think you should put an article in front of a movie name as it is usually trivial and you might end up not remembering it. This makes a movie harder to find as you may have to try searching with and without the article. A practice that I have seen on some websites is to put an article at the back from "The man in the wood" to "Man in the Wood, The".
6. **Article**. I name it like `YYYY_MM_DD-How_to_Cook_Thai_Food.adoc`. The reason is that you will almost certainly forget the beginning word of each article name unlike the (approximate) date.
