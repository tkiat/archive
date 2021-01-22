customElements.define('my-sign', class MySign extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		//create a sign
		let scale = this.getAttribute('scale');
		let deg = this.getAttribute('deg');
		let isSignFlip = this.getAttribute('is-flip') === 'true';
		let delay = this.getAttribute('animation-delay');

		let text = this.getAttribute('text');
		let text_color = this.getAttribute('text-color');
		let text_xoffset = this.getAttribute('text-xoffset');
		let text_yoffset = this.getAttribute('text-yoffset');

		let panel_color = this.getAttribute('panel-color');

		let clone = (this.getAttribute('clickable') === 'true') ? MySign.template_signlink.content.cloneNode(true) : MySign.template_sign.content.cloneNode(true);
		const sign = clone.querySelector(".sign");
		const sign_panel = clone.querySelector(".sign__panel");
		const sign_text = clone.querySelector(".sign__text");
		sign_text.textContent = text;
		sign_text.setAttribute('x', text_xoffset)
		sign_text.setAttribute('y', text_yoffset);
		sign_text.setAttribute('fill', text_color);
		if(isSignFlip){
			sign_text.style.transform = 'scale(-1, 1)';
			sign_text.style['transform-origin'] = 'center';
		}
		if(this.getAttribute('clickable') === 'true'){
			sign.classList.add('animated');

			sign_panel.style.cursor ='pointer';
			sign_panel.addEventListener('click', () => {
				document.body.querySelectorAll('my-sign').forEach(sign => {
					if(sign !== this){
						sign.shadowRoot.querySelector('.sign').classList.add('fade-out');
					}
				});
				setTimeout(function() {
					window.location.href = "/" + text.toLowerCase()
				}, 4000);
			});
			sign_panel.addEventListener('mouseover', () => {
				shadow.host.style.setProperty('--animation-sign', 'shake 0.5s infinite');
			});
			sign_panel.addEventListener('mouseleave', () => {
				shadow.host.style.setProperty('--animation-sign', 'shake 3s infinite');
			});
		}     
		//construct shadow dom
		const shadow = this.attachShadow({mode: 'open'});
		shadow.host.style.setProperty('--deg', deg);
		shadow.host.style.setProperty('--delay', delay);
		shadow.host.style.setProperty('--panelColor', panel_color);
		shadow.host.style.setProperty('--isSignFlip', isSignFlip ? -1 : 1);
		shadow.host.style.setProperty('--scale', scale);

		shadow.appendChild(clone);
	}
	static get template_sign() {
		const template_sign = document.createElement('template');
		template_sign.innerHTML = `
				<link href="/build/css/my-sign.min.css" rel="stylesheet">
				<div id='sign' class='sign'>
					<svg viewBox="0 0 380 380">
						<path class='sign__panel' style="stroke:#000000;stroke-width:5px;" d="M10,30 L300,30 L360,90 L300,150 L10,150 Z"/>
						<path style="fill:#fff;stroke:#000000;stroke-width:5px;" d="M150,10 L190,10 L190,30 L150,30 Z"/>
						<path style="fill:#fff;stroke:#000000;stroke-width:5px;" d="M150,150 L190,150 L190,360 L150,360 Z"/>
						<text class="sign__text" x="80" y="110" font-family="sans-serif" font-size="60px"></text>
					</svg>
				</div>
		`;
		return template_sign;
	}
	static get template_signlink() {
		const template_sign = document.createElement('template');
		template_sign.innerHTML = `
				<link href="/build/css/my-sign.min.css" rel="stylesheet">
				<div id='sign' class='sign'>
					<svg viewBox="0 0 380 380">
						<a tabindex="0">
							<path class='sign__panel' style="stroke:#000000;stroke-width:5px;" d="M10,30 L300,30 L360,90 L300,150 L10,150 Z"/>
						</a>
						<path style="fill:#fff;stroke:#000000;stroke-width:5px;" d="M150,10 L190,10 L190,30 L150,30 Z"/>
						<path style="fill:#fff;stroke:#000000;stroke-width:5px;" d="M150,150 L190,150 L190,360 L150,360 Z"/>
						<text class="sign__text" x="80" y="110" font-family="sans-serif" font-size="60px"></text>
					</svg>
				</div>
		`;
		return template_sign;
	}
});

