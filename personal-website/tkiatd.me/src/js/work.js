//main code
	//create dialog
const dialog = document.getElementById('dialog-header');
const dialog_quote = dialog.querySelector('.dialog__quote');
const dialog_greeting = dialog.querySelector('.dialog__greeting');

dialog_greeting.innerHTML = createDialogHTML();
fetchQuotesArray(function(quotes) {
	let quote_item = getRandomElement(quotes);
	dialog_quote.textContent = '“' + quote_item.quote + '” — ' + quote_item.author;
});
	//create project descriptions
const project_panel = document.getElementById('project-panel');
fetch('/static/json/project-structure.json', {
	method: 'GET',
	mode: 'no-cors'
})
.then(res => res.json())
.then(json => {
	let types = new Set(['Everything']);
	Object.values(json).forEach(project => { types.add(project.type); });
	types = Array.from(types);
	let projects = json;
	createProjectTable(projects, types[0]);

	const dropdown = createDropdown(projects, types);
	const dropdown_container = dialog.querySelector('.dropdown-container');
	dropdown_container.appendChild(dropdown);
})
.catch(err => console.error('Error: ' + err));
//functions
function createDialogHTML() {
	const elem_dropdown = '<span class="dropdown-container"></span>';
	const dialog_p1 = getGreetingTime();
		//['Hi there!', 'Greeting!', 'Welcome!', 'Hello!'];
	const dialog_p2 = 'You are now selecting&nbsp;' + elem_dropdown + '.';
	return 'Good ' + dialog_p1 + '!&nbsp;' + dialog_p2;
}

function createDropdown(projects, types) {
	let options = '';
	types.forEach((type, index) => {
		options += type;
		if(index < types.length - 1) options += ',';
	});
	let dropdown = document.createElement('dropdown-text');
	dropdown.setAttribute('data-list', options);
	dropdown.addEventListener('click', function() {
		let opacity = project_panel.style.opacity;
		project_panel.style.opacity = opacity === '0.1' ? 'initial' : '0.1';
	});
	//detect attribute changes
	const config = { attributes: true };
	const callback = function(mutationsList, observer) {
		let project_type = mutationsList[0].target.attributes.value.value;
		for(let mutation of mutationsList)
			if (mutation.type === 'attributes') createProjectTable(projects, project_type);
	};
	const observer = new MutationObserver(callback);
	observer.observe(dropdown, config);
	return dropdown;
}

function createProjectTable(projects, type) {
	project_panel.innerHTML = '';
	(type === 'Everything' ? projects : projects.filter(project => project.type === type))
		.forEach(project => {
			let project_card = new ProjectCard(project);
			project_panel.appendChild(project_card);
			project_card = project_panel.querySelector('.project');
	});
}

function fetchQuotesArray(callback){
	fetch('https://raw.githubusercontent.com/tkiatd/assets/master/json/quotes-disciplines.json').then(
		function(response) {
			if (response.status !== 200) {
				console.log('Cannot fetch quotes. Status Code: ' + response.status);
				return;
			}
			response.json().then(function(quotes) {
				callback(quotes);
				return;
			});
		}
	).catch(function(err) {
		console.log('Error while fetching quotes: ', err);
	});
}

function getGreetingTime() {
	let hr = new Date().getHours();
	switch(true) {
		case 0 <= hr && hr < 5:
			return 'Early Morning';
		case 5 <= hr && hr < 12:
			return 'Morning';
		case 12 <= hr && hr < 17:
			return 'Afternoon';
		case 17 <= hr && hr < 20:
			return 'Evening';
		default:
			return 'Night';
	}
}

function getRandomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
