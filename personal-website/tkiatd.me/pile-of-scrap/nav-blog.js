// Create a class for the element
class NavBlog extends HTMLElement {
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
    const shadow = this.attachShadow({mode: 'open'});
		// import attribute
		let blog_list = JSON.parse(this.getAttribute('blog-list')); 
		//main nav
    let nav = document.createElement('nav');
		nav.setAttribute('class', 'nav');
    let ul_main = document.createElement('ul');
		ul_main.setAttribute('class', 'nav__list');
		//nav__item: home
		let li_home = this.createNavItem('nav__home nav__item', 'nav__link', '/blog', 'Home');
		ul_main.appendChild(li_home);
		//nav__item: the rest
		Object.keys(blog_list).forEach( category => {
			let li = this.createNavItem('nav__item dropdown', 'nav__link', '#', category);	
			let ul_inner = document.createElement('ul');
			ul_inner.setAttribute('class', 'dropdown__list');
			//nav__item: dropdown items
			blog_list[category].forEach( topic => {
				let topic_name = Object.keys(topic)[0];
				let num = topic[topic_name].length;
				let li_inner = this.createNavItem('', 'nav__link', '/blog/' + category + '/' + topic_name, topic_name + ' (' + num + ')'); 
				ul_inner.appendChild(li_inner);
			});
			li.appendChild(ul_inner);
			ul_main.appendChild(li);
		});
		//combine all items
		nav.appendChild(ul_main);

		const style = document.createElement('style');
		style.innerHTML = `
				* { 
					padding: 0; 
					margin: 0; 
				}
				*, *::before, *::after {
					box-sizing: border-box;
				}
				.dropdown:hover .dropdown__list {
					display: block;
				}
				.dropdown__list {
					background-color: ivory;
					display: none;
					list-style: none;
					position: absolute;  
					top: 32px;
				}
				.dropdown__list .nav__link {
					border-color: black;
					border-style: solid;
					border-width: 0px 1px 1px 1px;
					color: black;
					display: block;
					height: 32px; 
					line-height: 32px;
					padding-left: 20px;
					width: 150px;
					overflow: hidden;
				}
				.dropdown__list .nav__link:hover {
					background-color: lightgrey;
				}
				.nav {
					left: 32px;
					position: relative;
					z-index: 1;
				}
				.nav__home {
					display: none;
				}
				.nav__item {
					align-items: center;
					border: 1px solid transparent;
					height: 100%;
					padding-right: 20px;
				}
				.nav__item:last-child {
				}
				.nav__item:not(.nav__home) {
					display: flex;
				}
				.nav__item::before {
					content: '';
					visibility: hidden;
					width: 20px;
				}
				.nav__item:hover {
					border: 1px solid lightgrey;
				}
				.nav__link{
					color: white;
					text-decoration: none;
				}
				.nav__list {
					background-color: #222;
					display: flex;
					height: 32px;
				}
				@media screen and (max-width: 800px){
					.nav__home {
						display: flex;
						visibililty: visible;
					}
					.nav__item:not(.nav__home) {
						visibility: hidden;
					}		
				}
			`;
    //insert all to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(nav);
  }
}

// Define the new element
customElements.define('nav-blog', NavBlog);
