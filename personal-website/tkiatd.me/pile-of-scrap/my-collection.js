/* usage
<my-collection image='your img' title='your title'></my-collection>
*/
// TODO expand collection a bit upon clicking
class MyCollection extends HTMLElement {
	connectedCallback() {
		let title = this.getAttribute('title'); 
		let image = this.getAttribute('image');
		let num = this.getAttribute('num');
  	this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
		<style>
			.collection {                            
				text-decoration: none;
				text-align: center;           
				background-color: orange;
			}                                     
			.collection__img {                        
				border-radius: 6px;           
				max-width: 100%;          
				display: block;               
			}                                     
			.collection__title {                                       
				background-color: orange;
				height: 32px;
				line-height: 32px;
				font-family: 'Lato', sans-serif;          
				font-weight: 900;             
				font-size: 17px;              
				color: #303030;               
			}                                     	
		</style>
		<a class="collection" href='/collection/${title}'>
				<img class="collection__img" src='${image}' alt="broken image">
				<div class="collection__title">${title} (${num})</div>
		</a>
		`;
  }
}
window.customElements.define('my-collection', MyCollection)
