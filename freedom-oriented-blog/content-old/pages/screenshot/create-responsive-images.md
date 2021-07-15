Title: Screenshot
Save_as: screenshots/create-responsive-images.html
Slug: create-responsive-images
Status: hidden

### Create Responsive Images
```console
foo@bar:~$ ls
Sample.png
for@bar:~$ mediainfo Sample.png | grep -A1 Width
Width                                    : 1 800 pixels
Height                                   : 1 350 pixels
for@bar:~$ 2file-image-responsive-create.bash Sample.png 3
<img srcset="
{img-url}/Sample-600x450.png 600w,
{img-url}/Sample-1200x900.png 1200w,
{img-url}/Sample-1800x1350.png 1800w"
sizes="(max-width: 1900px) 70vw,
1800px"
src="{img-url}/Sample-1800x1350.png"
alt="&lt;img2&gt;">
for@bar:~$ ls
Sample-1200x900.png  Sample-1800x1350.png  Sample-600x450.png  Sample.png
```
