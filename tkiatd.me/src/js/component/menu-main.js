class MenuMain extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		//build menu element
		let currentPage = this.getAttribute('current-page');

		let font_awesome = document.createElement('link');
		font_awesome.rel = 'stylesheet';
		font_awesome.href = '/static/fontawesome-free-5.12.0-web/css/all.css';

		let css = document.createElement('link');
		css.rel = 'stylesheet';
		css.href = '/build/css/menu-main.min.css';

		let menu = document.createElement("div");
		menu.setAttribute('class', 'menu-main');
		let about = MenuMain.createIcon('about', 'fas fa-user fa-2x');
		let project = MenuMain.createIcon('work', 'fas fa-briefcase fa-2x');
		let trivial = MenuMain.createIcon('trivial', 'fas fa-file-code fa-2x');
		let blog = MenuMain.createIcon('blog', 'fas fa-blog fa-2x');
		switch(this.getAttribute('current-page')) {
			case 'about':
				about.classList.add('menu-main__item_current');
				break;
			case 'work':
				project.classList.add('menu-main__item_current');
				break;
			case 'trivial':
				trivial.classList.add('menu-main__item_current');
				break;
			case 'blog':
				blog.classList.add('menu-main__item_current');
				break;
			default:
				console.error('<animation-human>: invalid current-page value');
				break;
		}
		menu.appendChild(about);
		menu.appendChild(project);
		menu.appendChild(trivial);
		menu.appendChild(blog);
		//attach all to shadow dom
		let shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(font_awesome);
		shadow.appendChild(css);
		shadow.appendChild(menu)
	}	
	//methods
	static createIcon(href, iconClass) {
		let div = document.createElement('div');
		div.classList.add('menu-main__item');
		div.setAttribute('title', href === 'trivial' ? 'Trivial Project' : href[0].toUpperCase() + href.slice(1));
		let a = document.createElement('a');
		a.classList.add('menu-main__item-link');
		a.href = '/' + href
		let i = document.createElement('i');
		i.classList = iconClass;
		a.appendChild(i)

		div.appendChild(a);
		return div;
	}
}
window.customElements.define('menu-main', MenuMain);
