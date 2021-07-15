Title: Scripts and Configs
Date: 2021-01-20
Modified: 2021-01-20
Save_as: pages/my-work-scripts-and-configs.html
Template: about-me

### Scripts
- [<u>**Batch Rename Files**</u>](https://github.com/tkiat/scripts/blob/master/file/2file-rename-menu.py) ([<u>**Screenshot**</u>](/screenshots/batch-rename-files.html)). A python script to edit multiple filenames in the current directory in one go. Support remove-by-index, add-at-index, capitalize, and many more. I find it very useful for music tracks.
- [<u>**Create Responsive Images**</u>](https://github.com/tkiat/scripts/blob/master/file/2file-image-responsive-create.bash) ([<u>**Screenshot**</u>](/screenshots/create-responsive-images.html)). A trivial script to convert an image to multiple sizes and return img tag with srcset.
- [<u>**Optimize Files**</u>](https://github.com/tkiat/scripts/blob/master/file/2file-optimize.bash). Optimize all files in the current directory. Support epub/cbz, png/jpg, avi/mp4/mov/mpg, and pdf. It's just a simple wrapper around utilities like jpegoptim and ghostscript. I used this tool to reduce my media size by 10-20 times.

### Configs
- [<u>**tkiat Vim Color Scheme**</u>](https://github.com/tkiat/dotfiles-and-configs/blob/master/dotfiles/.vim/colors/tkiat.vim) ([<u>**Screenshot**</u>](/images/vim-tkiat-color-scheme.png)). I saw some others' color configs too long so I decided to write one from scratch with only around 90 lines of code. A user can source ~/.vimrc while opening the color scheme file and the background color will appear for a particular set of highlight groups, making it very convenient to configure. It still doesn't cover every highlight group available and this is still in my backlog.
