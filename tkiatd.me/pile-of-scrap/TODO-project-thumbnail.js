/* usage
<nav-custom font='your font'></nav-custom>
*/
class ProjectThumbnail extends HTMLElement {
	connectedCallback() {
  		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
		<style>
			.project {                            
				/* 16:9 ratio image + dscp */ 
				height: calc(198px + 32px);   
				width: 352px;                 
				background-color: inherit;    
				text-align: center;           
				border-radius: 50px;          
			}                                     
			.project img {                        
				border-radius: 6px;           
				height: 198px;                
				width: 352px;                 
				display: block;               
			}                                     
							      
			.project-sub {                        
				height: 32px;                 
				width: 352px;                 
				display: flex;                
			}                                     
			.project a {                          
				margin: auto;                 
				font-family: 'Lato';          
				font-weight: 900;             
				font-size: 17px;              
				color: #303030;               
				text-decoration: none;        
			}                                     	
		</style>
		<div class="project">                                         
			<img src='${this.getAttribute('p-thumbnail')}' alt="broken image">     
			<div class="project-sub">                             
				<a href="SG&DU&8#">${this.getAttribute('p-label')}</a>
			</div>                                                
		</div>         
		<div>Test</div>                                               
		`;
  }
}
window.customElements.define('project-thumbnail', ProjectThumbnail)
