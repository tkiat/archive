Title: How to Use CDN with Local Fallback
Date: 2021-01-26
Modified: 2021-01-26
Tags: Web
Slug: how-to-use-cdn-with-local-fallback
Authors: Theerawat Kiatdarakun

CDN offers a great cut in delay perceived by a web user by distributing contents in many servers across the globe and connects a user to the nearest one. However, the downtime of a CDN server might cost a company a fortune. It's therefore wise to have a fallback on a CDN asset just in case. I elaborate how to create a fallback for each kind of asset.

### JavaScript

A JavaScript file usually has variable and function declarations, so you check if one, or a few, of those variables exists. I got the idea below how to make a fallback script for jQuery from Stack Overflow. It really makes sense to me since 'jQuery' is quite a unique name for a function. Why jQuery in 2021? It comes with my chosen Pelican theme, not my choice, and I am lazy to remove it.

```html
<!--jQuery-->
<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"
></script>
<!--jQuery fallback-->
<script>
  if (typeof jQuery == 'undefined') {
    console.log('jquery-3.5.1.min.js CDN failed ... fallback to local')
    document.write(
      unescape("%3Cscript src='/extra/jquery-3.5.1.min.js'%3E%3C/script%3E")
    )
  }
</script>
```

### CSS

Font Awesome is a very popular set of icons. The absence of them makes a user oblivious to the icon-based navigation menu, so the fallback is necessary. Unlike JavaScript, CSS has no variable declarations, but you can try your best to examine a unique name in that CSS file and then check for its attribute at first load. The existence of that attribute means the CSS is loaded correctly.

```html
<!--font awesome-->
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<!--font awesome fallback-->
<script>
  window.onload = function () {
    var span = document.createElement('span')
    span.className = 'fa'
    span.style.display = 'none'
    document.body.insertBefore(span, document.body.firstChild)
    if (
      window.getComputedStyle(span, null).getPropertyValue('font-family') !==
      'FontAwesome'
    ) {
      console.log(
        'fail to fetch font-awesome.min.css from CDN ... fallback to local'
      )
      var link = document.createElement('link')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = '/extra/Font-Awesome-4.7.0/css/font-awesome.min.css'
      document.head.appendChild(link)
    }
    document.body.removeChild(span)
  }
</script>
```

### Images and Photos

Use alt text.
