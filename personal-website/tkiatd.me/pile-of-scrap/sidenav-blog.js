class SideNavBlog extends HTMLElement {
	constructor() {
		super();
	}
	createNavItem(li_className, a_className, a_link, a_text){
		let li = document.createElement('li');
		li.setAttribute('class', li_className);
		let a = document.createElement('a');
		a.setAttribute('class', a_className);
		a.setAttribute('href', a_link);
		a.textContent = a_text;
		li.appendChild(a);
		return li;
	}
	connectedCallback() {
		//import attributes
		const blog_list = JSON.parse(this.getAttribute('blog-list')); 
		const current_category = this.getAttribute('category');
		const current_topic = this.getAttribute('topic');
		const isFrontpage = this.hasAttribute("isFrontpage");
		//construct shadow dom
		const shadow = this.attachShadow({mode: 'open'});
		//main nav and ul
		var nav = document.createElement('nav');
		nav.setAttribute('class', 'sidenav');
		var ul = document.createElement('ul');
		ul.setAttribute('class', 'sidenav__list');
		nav.appendChild(ul);
		//nav items inside main ul
		if(isFrontpage) {
			Object.keys(blog_list).forEach(category => {
				let li = this.createNavItem('sidenav__item--primary', 'sidenav__link', '#', category);
				ul.appendChild(li);

				blog_list[category].forEach(topic => {
					let topic_name = Object.keys(topic)[0];
					let li = this.createNavItem('sidenav__item--secondary', 'sidenav__link',  '/blog/' + category + '/' + topic_name, topic_name);
					ul.appendChild(li);
				});
			});
		}
		else {
			Object.keys(blog_list).forEach(category => {
				if(category === current_category){
					blog_list[category].forEach(topic => {
						let topic_name = Object.keys(topic)[0];
						if(topic_name === current_topic){
							let li = this.createNavItem('sidenav__item--primary', 'sidenav__link', '#', topic_name);
							ul.appendChild(li);
							topic[topic_name].forEach(article => {
								let li = this.createNavItem('sidenav__item--secondary', 'sidenav__link', '/article/' + article.date + '/' + article.title, article.title);
								ul.appendChild(li);
							});
						}
					});
				}
			});
		}
		//input to toggle main nav
		var input = document.createElement('input');
		input.setAttribute('id', 'sidenav__toggler');
		input.setAttribute('class', 'sidenav__toggler');
		input.setAttribute('type', 'checkbox');
		//label for input
		var label = document.createElement('label');
		label.setAttribute('class', 'sidenav__icon');
		label.setAttribute('for', 'sidenav__toggler');
		//svg for label
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute('class', 'sidenav__icon-svg');
		svg.setAttribute('width', '32px');
		svg.setAttribute('height', '32px');
		var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path1.setAttribute('d', 'M 4 8  L 28 8');
		path2.setAttribute('d', 'M 4 16 L 28 16');
		path3.setAttribute('d', 'M 4 24 L 28 24');
		svg.appendChild(path1);
		svg.appendChild(path2);
		svg.appendChild(path3);
		label.appendChild(svg);
		//style
		const style = document.createElement('style');
		style.innerHTML = `
* { 
	padding: 0; 
	margin: 0; 
}
*, *::before, *::after {
	box-sizing: border-box;
}
.sidenav {
	background-color: #d8d8d8;
	height: 100%;
	overflow-y: scroll;
	position: fixed;
	transform: translateY(-36px);
	transition: width 0.5s;
	width: 0;
}
.sidenav__icon {
	background-color: #222;
  display:inline-block;
	position: relative;
	top: -32px;
	transition: background-color 0.5s;
  width : 32px;
}
.sidenav__icon:hover {
	background-color: darkgrey;
}
.sidenav__icon svg {
	display: block;
	stroke: white;
	stroke-width: 3;
}
.sidenav__item--primary {
	font-size: 24px;
	font-weight: bold;
	padding-left: 10px;
	padding-top: 16px;
}
.sidenav__item--secondary {
	padding-left: 10px;
}
.sidenav__link {
	color: inherit;
	text-decoration: none;
}
.sidenav__list {
	font-size: 16px;
	list-style: none;
	overflow-x: hidden;
	position: relative;
}
.sidenav__toggler {
	display: none;
}
.sidenav__toggler:checked ~ .sidenav {
	width: 200px;
	transition: width 0.5s;
}
.sidenav__toggler:checked + .sidenav__icon > .sidenav__icon-svg{
	stroke: #111;
}
.sidenav__toggler:checked + .sidenav__icon {
	background-color: lightgrey;
	transition: background-color 0.5s;
}
`;
		//insert all to shadow dom
    shadow.appendChild(style);
    shadow.appendChild(nav);
		shadow.insertBefore(label, nav);
		shadow.insertBefore(input, label);
  }
}

window.customElements.define('sidenav-blog', SideNavBlog)
