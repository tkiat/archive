class ProjectCard extends HTMLElement {
	//constructor
	constructor(project) {
		super();
		let shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(ProjectCard.createCard(project));
	}
	//methods
	static convertDateFormat(date_string) {
		let date = date_string.split('-');
		let year = date[0];
		let month = ProjectCard.MONTHS[parseInt(date[1], 10) - 1];
		let day = date[2];
		if(!day || !month || !year) return 'N/A';
		return month + ' ' + day + ', ' + year;
	}
	static createCard(project) {
		const card = ProjectCard.CARD_TEMPLATE.content.cloneNode(true); 
		card.querySelector('.project__title').textContent = project.title;
		card.querySelector('.project__time-finished').textContent = 'Finished: ' + ProjectCard.convertDateFormat(project.finished);
		card.querySelector('.project__time-updated').textContent = 'Updated: ' + ProjectCard.convertDateFormat(project.updated);
		card.querySelector('.project__keywords').textContent = 'Keywords: ' + project.keywords;
		card.querySelector('.project__short-dscp').textContent = 'Short Description: ' + project.short_dscp;

		card.querySelector('.project__link-demo').innerHTML = project.demo_site ? 'Demo (' + project.demo_site + ')&#x1F855' : '';
		card.querySelector('.project__link-demo').href = project.demo_link;
		card.querySelector('.project__link-demo').target = '_blank';

		card.querySelector('.project__link-src').innerHTML = project.src_site ? 'Src (' + project.src_site + ')&#x1F855' : '';
		card.querySelector('.project__link-src').href = project.src_link;
		card.querySelector('.project__link-src').target = '_blank';

		card.querySelector('.project__link-dscp').innerHTML = project.blog_link ? 'Blog Post&#x1F855' : '';
		card.querySelector('.project__link-dscp').href = project.blog_link;
		card.querySelector('.project__link-dscp').target = '_blank';

		card.querySelector('.project__type-text').innerHTML = decodeURI(project.type);
		let i = 0;
		card.querySelector('.project').addEventListener('mouseenter', function() {
			this.style.setProperty('--text-type-fill', '#ddd');
			this.style.setProperty('--header-bg-color', '#bbb');
			this.style.opacity = 1;
		});
		card.querySelector('.project').addEventListener('mouseleave', function() {
			this.style.setProperty('--text-type-fill', '#f5f5f5');
			this.style.setProperty('--header-bg-color', '#ccc');
		})
		return card;
	}
	static get CARD_TEMPLATE() {
		let template = document.createElement('template');
		template.innerHTML = `
			<link href="/build/css/project-card.min.css" rel="stylesheet">
			<div class='project'>
				<div class='project__description'>
					<div class='project__title'></div>
					<div class='project__time'>
						<div class='project__time-updated'></div>
						<div class='project__time-finished'></div>
					</div>
					<div class='project__keywords'></div>
					<div class='project__short-dscp'></div>
					<div class='project__link'>
						<a class='project__link-elem project__link-demo'></a>
						<a class='project__link-elem project__link-src'></a>
						<a class='project__link-elem project__link-dscp'></a>
					</div>
				</div>
				<div class='project__type'>
					<div class='project__type-text'></div>
				</div>
			</div>
		`;
		return template;
	}
	static get MONTHS() {
		return ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"];
	}
}
customElements.define('project-card', ProjectCard);
/*
getRandomTheme() {
	return ProjectCard.COLOR_THEMES[Math.floor(Math.random() * ProjectCard.COLOR_THEMES.length)];
}
static get COLOR_THEMES() {
	return [
		{header: '#ddffd1', type: 'mediumspringgreen'},
		{header: '#fffbd1', type: 'yellow', link: '#c8cc10'},
		{header: '#bfd3f9', type: 'aqua'},
		{header: '#facaa9', type: 'coral'},
		{header: '#f1daf9', type: 'violet'}
	];
}
static get CSS() {
	return fetch('/build/css/project-card.min.css', {
		cache: "force-cache",
		method: 'GET',
		mode: 'no-cors'
	})
	.then(res => res.text())
	.then(css_text => css_text)
	.catch(err => console.error('Error: ' + err));
}
let theme = ProjectCard.COLOR_THEMES[i++ % ProjectCard.COLOR_THEMES.length];
this.style.setProperty('--text-type-fill', theme.type);
this.style.setProperty('--header-bg-color', theme.header);
this.style.setProperty('--link-hover-color', theme.link ? theme.link : theme.type);
*/
