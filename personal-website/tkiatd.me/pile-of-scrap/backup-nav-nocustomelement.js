// part 1: style
var style = document.createElement('style');
style.textContent = `
/* pre-css config */
* { padding: 0; margin: 0; }
*, *::before, *::after {
	box-sizing: border-box;
}

/* variables */
:root {
	--background: #8E18D6;
	--background-color-body: #fbfbfb;
}

/* main css */
body {
	background: var(--background-color-body);
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
}

header {
	background: var(--background);
	text-align: center;
	position: fixed;
	z-index: 999;
	width: 100%;
}
.logo {
	height: 64px;
	padding: 10px;
}
.nav-toggle {
	display: none;
}
.nav-toggle:checked ~ nav { 
	transform: scale(1,1);
}
.nav-toggle:checked ~ nav a { 
	opacity: 1;
	transition: opacity 250ms ease-in-out 250ms;
}
nav {
	position: absolute;
	text-align: left;
	top: 100%;
	background: var(--background);
	width: 100%;
	transform: scale(1, 0);
	transform-origin: top;
	transition: transform 400ms ease-in-out;
}
nav ul {
	list-style: none;
	display: flex;
	justify-content: space-around;
	margin: 0 1em;
}
nav ul li {
	margin-bottom: 1em;
}
nav a {
	color: white;
	text-decoration: none;
	font-size: 1.2rem;
	text-transform: uppercase;
	opacity: 0;
	transition: opacity 150ms ease-in-out;
}
nav a:hover {
	color: black;	
}
nav a::before {
	content: '';
	display: block;
	height: 3px;
	background-color: #444;

	position: relative;
	top: calc(3px + 1em);
	width: 0%;

	transition: all ease-in-out 100ms;
}

nav a:hover::before {
	width: 100%;
}
.nav-toggle-label {
	position: absolute;
	top: 0; left: 0;
	margin-left: 1em;
	height: 100%;
	display: flex;
	align-items: center;
}
.nav-toggle-label:hover {
	cursor: pointer;
}
.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
	display: block;
	background: white;
	height: 2px;
	width: 2em;
	border-radius: 2px;
	position: relative;
}
.nav-toggle-label span::before,
.nav-toggle-label span::after {
	content: '';
	position: absolute;
}
.nav-toggle-label span::before {
	bottom: 7px;
}
.nav-toggle-label span::after {
	top: 7px;
}
main {
	padding-top: 100px;
}
/* media query */
@media screen and (min-width: 800px) {
	.nav-toggle-label {
		display: none;
	}
	header {
		display: grid;
		grid-template-columns: 1fr minmax(600px, 2fr);
	}
	.logo {
		grid-column: 1 / span 1;
	}
	nav {
		all: unset;
		grid-column: 2 / span 1;
		display: flex;
		align-items: center;
	}
	nav ul {
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	nav ul li {
		margin-bottom: 0;
	}
	nav a {
		opacity: 1;
	}
}
`;
// part 2: dom
var _header = document.createElement("header");
  var _a = document.createElement("a");
  _a.setAttribute("href", "/");
    var _img = document.createElement("img");
    _img.setAttribute("class", "logo");
    _img.setAttribute("src", "assets/logo.svg");
    _img.setAttribute("alt", "logo");
  _a.appendChild(_img);
_header.appendChild(_a);
  var _input = document.createElement("input");
    _input.setAttribute("id", "nav-toggle");	
    _input.setAttribute("class", "nav-toggle");	
    _input.setAttribute("type", "checkbox");
_header.appendChild(_input);
  var _nav = document.createElement("nav");
    var _ul = document.createElement("ul");
      var _li_1 = document.createElement("li");
	_li_1.innerHTML = "<a href='about'>About</a>";
      var _li_2 = document.createElement("li");
	_li_2.innerHTML = "<a href='project'>Project</a>";
      var _li_3 = document.createElement("li");
	_li_3.innerHTML = "<a href='blog'>Blog</a>";
    _ul.appendChild(_li_1);
    _ul.appendChild(_li_2);
    _ul.appendChild(_li_3);
  _nav.appendChild(_ul);
_header.appendChild(_nav);
  var _label = document.createElement("label");
  _label.setAttribute("class", "nav-toggle-label");
  _label.setAttribute("for", "nav-toggle");
    var _span = document.createElement("span");
  _label.appendChild(_span)
_header.appendChild(_label);

var root = document.createElement('div');
var shadow = root.attachShadow({mode: 'closed'});
shadow.appendChild(style)
shadow.appendChild(_header)
document.body.insertBefore(shadow, document.body.firstChild);	

