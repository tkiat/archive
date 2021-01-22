/* usage
<my-project image='your img' title='your title'></my-project>
*/
// TODO expand collection a bit upon clicking
class MyProject extends HTMLElement {
	connectedCallback() {
		let title = this.getAttribute('title'); 
		let image = this.getAttribute('image');
		let link = this.getAttribute('link');
		let external_link = (link !== 'undefined') ? link : ('/project/' + title);
console.log(external_link)
		let target = (link !== 'undefined') ? '_blank' : '_self';
  	this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
		<style>
			.project {                            
				text-decoration: none;
				text-align: center;           
				background-color: orange;
			}                                     
			.project__img {                        
				border-radius: 6px;           
				max-width: 100%;          
				display: block;               
			}                                     
			.project__title {                                       
				height: 32px;
				line-height: 32px;
				font-family: 'Lato', sans-serif;          
				font-weight: 900;             
				font-size: 17px;              
				color: #303030;               
			}                                     	
		</style>
		<a class="project" target='${target}' href='${external_link}'>
				<img class="project__img" src='${image}' alt="broken image">
				<div class="project__title">${title}</div>
		</a>
		`;
  }
}
window.customElements.define('my-project', MyProject)
