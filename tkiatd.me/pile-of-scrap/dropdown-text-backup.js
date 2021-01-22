// Create a class for the element
class DropdownText extends HTMLElement {
	constructor() {
		super();
	}
	dropdownHeaderClick(e) {
		let ul = e.nextElementSibling;
		ul.classList.toggle('hidden');
		e.classList.toggle('visible');
	}
	dropdownItemClick(e){
		let ul, thisLiBeingClicked;
		if(e.tagName === "A"){
			ul = e.parentNode.parentNode;
			thisLiBeingClicked = e.parentNode;
		}
		else if(e.tagName === "LI"){
			ul = e.parentNode;
			thisLiBeingClicked = e;
		}
		let span = ul.previousElementSibling;
		span.parentNode.dataset.value = e.textContent;
		ul.classList.toggle('hidden');
		span.classList.toggle('visible');
		span.textContent = e.textContent;
		var firstChild = ul.firstElementChild;
		if(thisLiBeingClicked != firstChild){
			ul.insertBefore(thisLiBeingClicked, firstChild);
		}
	}
	createDropdown(arr) {
		let span = document.createElement('span');
		span.setAttribute('class', 'container');
		span.setAttribute('data-value', arr[0]);
		let span_inner = document.createElement('span');
		span_inner.setAttribute('id', 'span-inner');
		span_inner.setAttribute('class', 'span');
		span_inner.textContent = arr[0];
		let ul = document.createElement('ul');
		ul.setAttribute('class', 'hidden');
		arr.forEach( item => {
			ul.appendChild(this.createLi('#', item));
		});
		span.appendChild(span_inner);
		span.appendChild(ul);
		return span;
	}
	createLi(a_link, a_text){
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.setAttribute('class', 'dropdownItem');
		a.setAttribute('href', a_link);
		a.textContent = a_text;
		li.appendChild(a);
		return li;
	}        
	
	connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});

		const data_list = this.getAttribute('data-list').split(',');
		const id = this.getAttribute('id');
		const span = this.createDropdown(data_list);
		const style = document.createElement('style');
		style.innerHTML = `
			*{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
			}
			li {
					list-style: none;
				word-wrap: none;
margin-bottom: 10px;
			}
			li a {
				white-space: nowrap;
				font-size: 32px;
			}
			li:nth-child(even) > a {
					color: #0000EE;
	background-color: white;
			}
			.hidden {
					display: none;
			}
			.visible {
					visibility: hidden;
			}
			ul{
					position: absolute;
					top: 0;
					left: 0;
					display: inline-block;
					z-index: 2;
			}
			.container {
					position: relative;
			}
			body {
			}
		`;
    //insert all to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(span);
		//propagate event to outside world
		this.setAttribute('value', data_list[0]);
		span.querySelectorAll('li').forEach( item => {
			item.onclick = (e) => {
				this.setAttribute('value', item.firstChild.textContent);
				this.dropdownItemClick(e.target);
			}
		});
		span.querySelector('#span-inner').onclick = (e) => {
			this.dropdownHeaderClick(e.target);
		}
  }
}
// Define the new element
customElements.define('dropdown-text', DropdownText);
