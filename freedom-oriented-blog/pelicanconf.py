#!/gnu/store/h8jw9qhyfp6fm6nb3cgh4335qhr31wfz-python-wrapper-3.8.2/bin/python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Theerawat Kiatdarakun'
DEFAULT_DATE_FORMAT = "%b %d, %Y"
DEFAULT_LANG = 'en'
DEFAULT_PAGINATION = 10
# Feed - Disable Generation
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight', 'guess_lang': 'False', 'linenums': 'True'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}
# Blogroll
LINKS = (("Blog", "/freedom-oriented-blog/index.html"),
         ("About_Blog", "/freedom-oriented-blog/pages/about-this-blog.html"),
         ("GPG_Key", "/freedom-oriented-blog/extra/public.gpg"),
         ("About_Me", "/freedom-oriented-blog/pages/about-me.html"),)
# About Me Page
# ABOUT_ME     = (("About Me", "/pages/about-me.html"),
#                 ("Skills", "/pages/my-skills.html"),
#                 ("Education and Learning", "/pages/my-education-and-learning.html"),
#                 ("Workstations", "/pages/my-workstations.html"),
#                 ("Spendings", "/pages/my-spendings.html"),)
# MY_WORK      = (("Work Experience", "/pages/my-work-experience.html"),)
# MY_WORK_CODE = (("Web", "/pages/my-work-web.html"),
#                 ("Desktop", "/pages/my-work-desktop.html"),
#                 ("Scripts and Configs", "/pages/my-work-scripts-and-configs.html"),
#                 ("Contributions", "/pages/my-contributions.html"),)

# RELATIVE_URLS = True # Uncomment following line if you want document-relative URLs when developing
SITENAME = 'tkiat: A Freedom-Oriented Blog'
SITEURL = ''
# SITEURL = 'https://tkiat.github.io/freedom-oriented-blog'
SOCIAL = (("Feed", "/freedom-oriented-blog/feeds/all.atom.xml"),
          ("Email", "mailto:tkiat@tutanota.com"),
          ("GitHub", "https://github.com/tkiat"),
          ("GitLab", "https://gitlab.com/tkiat"),)
# Path
PATH = 'content'
ARTICLE_PATHS = ['articles']
STATIC_PATHS = [
    'extra',
    'images',
]
EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'extra/favicon.ico'},
    'extra/favicon-16x16.png': {'path': 'extra/favicon-16x16.png'},
    'extra/favicon-32x32.png': {'path': 'extra/favicon-32x32.png'},
    'extra/favicon-96x96.png': {'path': 'extra/favicon-96x96.png'},
    'extra/public.gpg': {'path': 'extra/public.gpg'},
    'extra/LICENSE': {'path': 'LICENSE'},
    'extra/README.md': {'path': 'README.md'},
    'extra/.nojekyll': {'path': '.nojekyll'},
}

THEME = './themes/voce/'
TIMEZONE = 'Asia/Bangkok'
# USER_LOGO_URL = "http://i.imgur.com/zzCRZUH.jpg"

SUMMARY_MAX_CHAR_LENGTH = 120
DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False

ARCHIVES_URL = "archives.html"
ARCHIVES_SAVE_AS = 'archives.html'
ARTICLE_URL = 'articles/{slug}.html'
ARTICLE_SAVE_AS = 'articles/{slug}.html'
PAGE_URL = 'pages/{slug}.html'
PAGE_SAVE_AS = 'pages/{slug}.html'
TAGS_URL = 'tag/{slug}.html'

AUTHOR_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''

# Theme specific
# GOOGLE_ANALYTICS_ID = "UA-123456-7"
# GOOGLE_ANALYTICS_PROP = "siteurl.com"
# TAGLINE = "Site Tagline"
MANGLE_EMAILS = False
# GLOBAL_KEYWORDS = ("keywords",)
