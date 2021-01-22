/* usage
<my-nav-blog font='your font'></my-nav-blog>
*/
class BlogItem extends HTMLElement {
	connectedCallback() {
 		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
	<style>
		/* pre-css config */
		* { padding: 0; margin: 0; }
		*, *::before, *::after {
			box-sizing: border-box;
		}
	</style>
	<div>
		<img src="/assets/dummy-1024x768.png" alt="No Image">
	</div>
	`;
  }
}
window.customElements.define('blog-item', BlogItem);

