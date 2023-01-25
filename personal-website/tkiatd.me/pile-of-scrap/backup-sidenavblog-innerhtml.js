/* usage
<my-nav-blog font='your font'></my-nav-blog>
*/
class MySideNavBlog extends HTMLElement {
	connectedCallback() {
 		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
<style>
		* { 
			padding: 0; 
			margin: 0; 
		}
		*, *::before, *::after {
			box-sizing: border-box;
			-moz-box-sizing: border-box;
    	-webkit-box-sizing: border-box;
		}
nav {
	background-color: lightgrey;
	position: fixed;
	transform: translateY(-36px);
	height: 100%;
overflow-y: scroll;
	width: 0;
	transition: width 0.5s;
}
.nav__content {
	list-style: none;
	overflow-x: hidden;
	position: relative;
	font-size: 16px;
}
.nav__content li {
}
.nav__topic {
	padding-left: 10px;
	font-weight: bold;
	font-size: 24px;
	padding-top: 16px;
}
.nav__subtopic {
	padding-left: 10px;
}
.nav__icon {
  width : 32px;
  display:inline-block;
	top: -32px;
	position: relative;
	background-color: black;
	transition: background-color 0.5s;
}
.nav__icon svg {
	stroke: white;
	display: block;
}
.nav__toggler {
	display: none;
}
.nav__toggler:checked ~ nav {
	width: 200px;
	transition: width 0.5s;
}
.nav__toggler:checked + label > svg {
	stroke: #111;
}
.nav__toggler:checked + label {
	background-color: lightgrey;
	transition: background-color 0.5s;
}
a {
text-decoration: none;
color:inherit;
}
</style>

<input id="nav__toggler" class="nav__toggler" type="checkbox">
<label class="nav__icon" for="nav__toggler">
	<svg width="32" height="32">
		<path d="M 4 8  L 28 8"  stroke-width="3"/>
		<path d="M 4 16 L 28 16" stroke-width="3"/>
		<path d="M 4 24 L 28 24" stroke-width="3"/>
	</svg>
</label>
<nav>
	<ul class="nav__content">
		<li class="nav__topic"><a href="/blog/item1">item1</a></li>
		<li class="nav__subtopic"><a href="#item2">item2</a></li>
		<li class="nav__topic"><a href="#item3">item3</a></li>
		<li class="nav__subtopic"><a href="#item4">Revolution of elboniani in afganusahtsnansa</a></li>
	</ul>
</nav>
	`;
  }
}
window.customElements.define('my-sidenav-blog', MySideNavBlog)


