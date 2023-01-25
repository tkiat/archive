// Create a class for the element
class DropdownText extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const data_list = this.getAttribute('data-list').split(',');
		const dropdown = DropdownText.createDropdown(data_list);
		dropdown.querySelectorAll('.dropdown__option').forEach(option => {
			option.onclick = (e) => {
				this.setAttribute('value', option.firstChild.textContent);
				DropdownText.dropdownItemClick(e.target);
			}
		});
		dropdown.querySelector('.dropdown__item--displayed').onclick = (e) => {
			DropdownText.dropdownItemDisplayedClick(e.target);
		}

		fetch('/build/css/dropdown-text.min.css', {
			method: 'GET',
			mode: 'no-cors'
		})
		.then(res => res.text())
		.then(css_text => {
			const shadow = this.attachShadow({mode: 'open'});
			const style = document.createElement('style');
			style.textContent = css_text;
			shadow.appendChild(style);
			shadow.appendChild(dropdown);
		})
		.catch(err => console.error('Error: ' + err));
  }
	//methods
	static createDropdown(options) {
		let dropdown = document.createElement('span');
		dropdown.setAttribute('class', 'dropdown__container');
		dropdown.dataset.value = options[0];
		let dropdown_item = document.createElement('a');
		dropdown_item.setAttribute('class', 'dropdown__item dropdown__item--displayed');
		dropdown_item.setAttribute('tabindex', '0');
		dropdown_item.href = '#';
		dropdown_item.textContent = options[0];
		let dropdown_list = document.createElement('ul');
		dropdown_list.classList.add('dropdown__list');
		dropdown_list.classList.add('hidden');
		options.forEach( item => {
			dropdown_list.appendChild(DropdownText.createDropdownOption('#', item));
		});
		dropdown.appendChild(dropdown_item);
		dropdown.appendChild(dropdown_list);
		return dropdown;
	}
	static createDropdownOption(link, text){
		let dropdown_option = document.createElement('li');
		dropdown_option.classList.add('dropdown__option');
		let dropdown_item = document.createElement('a');
		dropdown_item.setAttribute('class', 'dropdown__item');
		dropdown_item.setAttribute('href', link);
		dropdown_item.textContent = text;
		dropdown_option.appendChild(dropdown_item);
		return dropdown_option;
	}        
	static dropdownItemClick(e){
		let dropdown_option;
		if(e.tagName === "A"){
			dropdown_option = e.parentNode;
		}
		else if(e.tagName === "LI"){
			dropdown_option = e;
		}
		//let dropdown_list = this.querySelector('.dropdown__list');
		let dropdown_list = dropdown_option.parentNode;
		dropdown_list.classList.toggle('hidden');
		dropdown_list.parentNode.dataset.value = e.textContent;

		let dropdown_item_displayed = dropdown_list.previousElementSibling;
		dropdown_item_displayed.classList.toggle('not-visible');
		dropdown_item_displayed.textContent = e.textContent;
		var firstChild = dropdown_list.firstElementChild;
		if(dropdown_option != firstChild){
			dropdown_list.insertBefore(dropdown_option, firstChild);
		}
	}
	static dropdownItemDisplayedClick(e) {
		let dropdown_list = e.nextElementSibling;
		dropdown_list.classList.toggle('hidden');
		e.classList.toggle('not-visible');
	}
}
customElements.define('dropdown-text', DropdownText);
