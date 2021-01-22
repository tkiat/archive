//#1
class CustomClass extends HTMLElement {
	connectedCallback() {
  	this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
				<style>
			..insert style here
				</style>
			..insert other doms elements here
		`;
  }
}
window.customElements.define('custom-tag', CustomClass);
//#2
class CustomClass extends HTMLElement {
	constructor() {
		super();
		var style = document.createElement('style');
		style.textContent=`...insert style here`
		var body = document.createElement("body");

		var shadow = this.attachShadow({mode: 'closed'});
		shadow.appendChild(style)
		shadow.appendChild(body)
	}
}
window.customElements.define('custom-tag', CustomClass);
