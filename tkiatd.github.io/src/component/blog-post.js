class BlogPost extends HTMLElement {
	static get observedAttributes() {
		return ['data-content']
	}
	constructor() {
		super()
		const shadow = this.attachShadow({mode: 'open'})
		const content = document.createElement('span')
		content.id = 'content'
 		let styleTop = document.createElement('style')
		styleTop.textContent = `
			:host { all: initial }
			#content {
			}
		`
 		let styleBottom = document.createElement('style')
		styleBottom.textContent = `
			h1 {
				text-align: center;
			}
			#toc a {
				pointer-events: none;
				cursor: default;
				text-decoration: none;
				color: black;
			}
		`
 		shadow.appendChild(styleTop)
		shadow.appendChild(content)
 		shadow.appendChild(styleBottom)
	}
	attributeChangedCallback(name, oldValue, newValue) {
		this.shadowRoot.getElementById('content').innerHTML = newValue
	}
}
customElements.define('blog-post', BlogPost);
