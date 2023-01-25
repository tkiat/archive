/* usage
<my-nav-blog font='your font'></my-nav-blog>
*/
class MyNavBlog extends HTMLElement {
	connectedCallback() {
 		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
	<style>
		/* pre-css config */
		* { padding: 0; margin: 0; }
		*, *::before, *::after {
			box-sizing: border-box;
		}
nav {
	position: relative;
}
.nav__list {
	background-color: black;
	display: flex;
	height: 32px;
	color: orange;
}
.nav__item {
	height: 100%;
	display: flex;
	align-items: center;
}
.nav__item::before, .nav__item::after {
	width: 30px;
	content: '';
	visibility: hidden;
}
a {
	text-decoration: none;
	border: none;
color: white;
}
.nav__item:hover {
	border: 1px solid white;
}
li {
	list-style: none;
}
.dropdown {
}
.dropdown__list {
	position: absolute;  
	top: 32px;
	display: none;
  background-color: lightgrey;
}
.dropdown__list a {
color: black;
	display: block;
	height: 32px; 
	width: 150px;
	line-height: 32px;
	border: none;
padding-left: 30px;
	margin: auto;
}
.dropdown__list a:hover {
	border: 1px solid white;
}
.dropdown:hover .dropdown__list {
  display: block;
}
	</style>
	<nav>
		<ul class="nav__list">
			<li class="nav__item"><a href="#first">first</a></li>
			<li class="nav__item dropdown">
				<a href="#">Second</a>
				<ul class="dropdown__list">
					<li><a href="#2.1">2.1</a></li>
					<li><a href="#2.2">2.2</a></li>
					<li><a href="#2.3">2.3</a></li>
				</ul>
			</li>
			<li class="nav__item"><a href="#third">Third</a></li>
			<li class="nav__item dropdown">
				<a href="#">Second</a>
				<ul class="dropdown__list">
					<li><a href="#2.1">2.1</a></li>
					<li><a href="#2.2">2.2</a></li>
					<li><a href="#2.3">2.3</a></li>
				</ul>
			</li>
			<li class="nav__item dropdown">
				<a href="#">Second</a>
				<ul class="dropdown__list">
					<li><a href="#2.1">2.1</a></li>
					<li><a href="#2.2">2.2</a></li>
					<li><a href="#2.3">2.3</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	`;
  }
}
window.customElements.define('my-nav-blog', MyNavBlog)

