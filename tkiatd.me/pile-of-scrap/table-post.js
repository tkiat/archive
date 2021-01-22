class TablePost extends HTMLElement {
	connectedCallback() {
		//import attributes
		const blog_list = JSON.parse(this.getAttribute('blog-list')); 
		const current_category = this.getAttribute('category');
		const current_topic = this.getAttribute('topic');
		//dom - table
		const table = document.createElement('table');
		table.setAttribute('class', 'table');
		//dom - table - thead
		const thead = document.createElement('thead');
		const tr = document.createElement('tr');
		tr.setAttribute('class', 'table-head__row');
		const th_1 = document.createElement('th');
		th_1.setAttribute('class', 'table-head__cell');
		th_1.textContent = 'No.';
		const th_2 = document.createElement('th');
		th_2.setAttribute('class', 'table-head__cell');
		th_2.textContent = 'Title';
		const th_3 = document.createElement('th');
		th_3.setAttribute('class', 'table-head__cell');
		th_3.textContent = 'Date';
		tr.appendChild(th_1);
		tr.appendChild(th_2);
		tr.appendChild(th_3);
		thead.appendChild(tr);
		//dom - table - tbody
		var article_index = 0;
		const tbody = document.createElement('tbody');
	  Object.keys(blog_list).forEach(category => {
			if(category === current_category) {
				blog_list[category].forEach(topic => {
					let topic_name = Object.keys(topic)[0];
					if(topic_name === current_topic) {
						topic[current_topic].forEach(article => {
							const tr = document.createElement('tr');
							tr.setAttribute('class', 'table-body__row');
							const td_1 = document.createElement('td');
							td_1.setAttribute('class', 'table-body__cell');
							td_1.textContent = ++article_index;
							const td_2 = document.createElement('td');
							td_2.setAttribute('class', 'table-body__cell');
							const a = document.createElement('a');
							a.textContent = article.title;
							const pattern = /^\w+$/;
							a.setAttribute('href', '/article/' + article.date + '/' + article.title);
							td_2.appendChild(a);
							const td_3 = document.createElement('td');
							td_3.setAttribute('class', 'table-body__cell');
							td_3.textContent = article.date;
							tr.appendChild(td_1);
							tr.appendChild(td_2);
							tr.appendChild(td_3);
							tbody.appendChild(tr);
						});
					}
				});
			}
		});
		//dom
		table.appendChild(thead);	
		table.appendChild(tbody);
		//style
		const style = document.createElement('style');
		style.innerHTML = `
			* { 
				padding: 0; 
				margin: 0; 
			}
			*, *::before, *::after {
				box-sizing: border-box;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
			}
			.table {
				border-collapse: collapse;
				margin: 25px 0;
				font-size: 0.9em;
				min-width: 400px;
				border-radius: 5px 5px 0 0;
				overflow: hidden;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
				margin-left:auto; 
				margin-right:auto;
				font-size: 16px;
			}
			.table-head__row {
				background-color: #009879;
				color: #fff;
				text-align: left;
				font-weight: bold;
			}
			.table-head__cell,
			.table-body__cell {
				padding: 12px 15px;
			}
			.table-body__row {
				border-bottom: 1px solid #ddd;
			}
			/*.table tbody tr:nth-of-type(even) {
				background-color: #f3f3f3;
			}*/
			.table-body__row:last-of-type {
				border-bottom: 2px solid #009879;
			}
			.table-body__row:hover {
				background-color: lightgrey;
			}
		`;
		//shadow - add style and dom
    const shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(style);
    shadow.appendChild(table);
  }
}

window.customElements.define('table-post', TablePost)
