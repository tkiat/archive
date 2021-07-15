Title: Why I Switch from Asciidoctor to Markdown for Articles
Date: 2021-01-21
Modified: 2021-01-21
Tags: Web
Slug: why-i-switch-back-from-asciidoctor-to-markdown
Authors: Theerawat Kiatdarakun

Many people use Markdown to write articles without making a full-fledged HTML document. Being the most popular markup language, Markdown gets supports from everywhere including npm and RubyGems packages, some can watch the change and automatically convert to HTML. Markdown is one of the simplest markup languages out there; however, this can be a double-edged sword. While Markdown is very simple, more complex expressions unsupported by Markdown require the author to write actual HTML tags on his document. This can sometimes make the document full of HTML tags and hard to read.

So I tried a more capable markup language, namely Asciidoctor. It can handle more complex documentation than Markdown. It got some supports on GitHub and many more places. There was a tool for auto-conversion, but I wrote a vim script function myself.
```vim
let s:asciidoctor_stylesdir='/home/'.$USER.'/Git/assets/stylesheets/asciidoctor-custom/'
function AsciiDocToHTML()
	execute '!asciidoctor -a stylesdir='.s:asciidoctor_stylesdir.' '.expand('%:p')
	execute '!html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true -o '.expand('%:r').'.html '.expand('%:r').'.html'
endfunction
autocmd BufWritePost article.adoc :call AsciiDocToHTML()
```
It was an OK experience though themes are not available as much as Markdown. That time, I built my own personal site from scratch and I had total freedom to choose any markup language. It was the mindset shift after I wasted more than two months, many hours a day to build my own website. It had more advanced features like simple animations and tricks, but it was less maintainable and harder to use than using someone's else simple website generator and theme. I decided to throw the old website away and instead use Pelican on GitHub Pages. Pelican supports reStructuredText and Markdown so Asciidoctor was out of equation. I began to ask myself *"Instead of trying a more advanced markup language, why don't you try to minimize the complexity in the first place"*. Of course, Asciidoctor has its place but for my use case (write simple articles) but I don't need it. Better to just reduce the complexity of my article because the reader doesn't really need it.
