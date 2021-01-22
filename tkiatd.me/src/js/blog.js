class MyBook extends HTMLElement {
	constructor(category, topics, articles, bgColor, index) {
		super();

		this.category = category;
		this.topics = topics;
		this.articles = articles;
		this.bgColor = bgColor;
		this.isMouseOverBook = false;
		this.isMouseOverBookmarkCategory = false;
		this.sortDirection = 1;

    //const book = this;//.attachShadow({mode: 'open'});
		this.classList.add('book');
		this.dataset.category = category;

		let book_cover = document.createElement('div');
		book_cover.classList.add('book-cover');
		this.appendChild(book_cover);

		let book_content = document.createElement('div');
		book_content.classList.add('book-content');
		this.appendChild(book_content);

		this.appendChild(this.createBookmarkCategory(index));
		this.insertBookCoverContent();
		this.setBookOffset(index);
		this.updateBookContent('cover');

		this.addEventListener('mouseout', function() {
			this.isMouseOverBook = false;
		});
		this.addEventListener('mouseover', function() {
			this.isMouseOverBook = true;
		});
	}

	//methods
	createBookmarkCategory(index) {
		const bookmarkStepY = 3.5; //em
		let book = this;
		let category = this.category;
		let bookmark_category = document.createElement('a');
		bookmark_category.classList.add('bookmark__category');
		bookmark_category.setAttribute('href', 'javascript:void(0);');
		bookmark_category.style.top = index * bookmarkStepY + 'em';
		bookmark_category.textContent = decodeURIComponent(decodeURIComponent(category));
		bookmark_category.dataset.category = category;
		bookmark_category.addEventListener('mouseenter', function() {
			//if(currentPage === 'topic') return;
			book.isMouseOverBookmarkCategory = true;
			bookmark_category.textContent = '\u2190 Open';

			let book_list = [...book.parentNode.children];
			if(book_list.indexOf(book) !== book_list.length - 1) moveBookToTop(category)
		});
		bookmark_category.addEventListener('mouseleave', function() {
			book.isMouseOverBookmarkCategory = false;
		});
		bookmark_category.addEventListener('click', function() {
			//if book not already on top, move to top
			let book_list = [...book.parentNode.children];
			if(book_list.indexOf(book) !== book_list.length - 1) moveBookToTop(category)
			history.replaceState(null, null, '/blog/' + category);
			fromCategoryToTopicPage();
		});
		return bookmark_category;
	}

	createBookmarkTopic(topic, offsetX, paddingX, height, layer) {
		let book = this;
		let category = this.category;

		let bookmark_topic = document.createElement('a');
		bookmark_topic.classList.add('bookmark__topic');
		bookmark_topic.classList.add('bookmark__topic--active');
		bookmark_topic.dataset.topic = topic;
		bookmark_topic.setAttribute('href', 'javascript:void(0)');
		bookmark_topic.style.height = height + 'em';
		bookmark_topic.style.left = offsetX + 'px';
		bookmark_topic.style.paddingBottom = height * (layer - 1) + 'em';
		bookmark_topic.style.paddingLeft = paddingX + 'px';
		bookmark_topic.style.paddingRight= paddingX + 'px';
		bookmark_topic.style.top = -height * layer + 'em';
		bookmark_topic.style.zIndex = 999 - layer;
		bookmark_topic.textContent = (topic === category) ? "All topics" : decodeURIComponent(decodeURIComponent(topic));
		bookmark_topic.addEventListener('click', function() {
			history.replaceState(null, null, '/blog/' + category + '/' + topic);
			book.updateBookContent('content');
			let bookmark_topics = book.querySelectorAll('.bookmark__topic');
			bookmark_topics.forEach(elem => {
				elem.classList.remove('bookmark__topic--opened')
			});
			bookmark_topic.classList.add('bookmark__topic--opened');
			let articles = (topic === category) ? book.articles : book.articles.filter(article => article.topic === topic);
			book.insertArticlesTable(topic, articles);
		});
		return bookmark_topic;
	}

	insertArticlesTable(topic, articles) {
		let category = this.category;
		let book = this;
		let table = document.createElement('table');
		table.classList.add('book-table');
		//table header
		table.innerHTML = `
			<thead>
				<tr>
					<th class='book-table__title' colspan='2'>
						${decodeURIComponent(decodeURIComponent(topic))}
					</th>
				</tr>
				<tr class='book-table__header'>
					<th class='book-table__header-item book-table__header-date'><a>Updated</a><span class='book-table__header-icon'></span></th>
					<th class='book-table__header-item book-table__header-title'><a>Title</a><span class='book-table__header-icon'></span></th>
				</tr>
			</thead>
			<tbody></tbody>
		`;
		let icons = table.querySelectorAll('.book-table__header-icon');
		icons.forEach(icon => { icon.innerHTML = this.sortDirection > 0 ? '&#x25BE' : '&#x25B4' });

		let header_date = table.querySelector('.book-table__header-date');
		header_date.addEventListener('click', function() {
			book.insertArticlesTable(topic, book.sortArticles(articles, 'date'));
		});

		let header_title = table.querySelector('.book-table__header-title');
		header_title.addEventListener('click', function() {
			book.insertArticlesTable(topic, book.sortArticles(articles, 'title'));
		});
		//table body
		let tbody = table.querySelector('tbody');
		articles.forEach(article => {
			const fileName = '/article/' + category + '/' + article.topic + '/' + dateTo_YYYY_MM_DD(article.date) + '-' + article.title + '.' + article.ext; 
			const newURL = `/blog/${category}/${article.topic}/${article.title}`;
			let tr = document.createElement('tr');
			tr.classList.add('book-table__row');
			tr.innerHTML = `
				<td class='book-table__row-item book-table__row-date'>${dateTo_YYYY_Mon_DD(article.date)}</td>
				<td>${category === topic ? decodeURIComponent(decodeURIComponent(article.topic)) + ' -' : ''}<a class='book-table__row-item book-table__row-title' href='javascript:void(0);'>${decodeURIComponent(decodeURIComponent(article.title))}</a></td>
			`;
			let a = tr.querySelector('.book-table__row-title');
			a.addEventListener('click', function() {
				fromTopicToArticlePage(newURL, fileName, category, article);
			});
			if(pathname_article && article.title === pathname_article) {
				a.click();
			}
			tbody.appendChild(tr);
		});

		let book_content = this.querySelector('.book-content');
		book_content.textContent = '';
		book_content.appendChild(table);
	}

	insertBookmarkTopics(callback) {
		let book = this;
		let paddingX = 5/*px*/, delay = 0, height = 2.3/*em*/, gapWidth = 5, layer = 1;
		let offsetX = 10 * layer;
		let category = this.category;
		let topics = [category, ...this.topics];

		topics.forEach((topic, index) => {
			setTimeout(function(){
				let bookmark_topic = book.createBookmarkTopic(topic, offsetX, paddingX, height, layer);
				book.appendChild(bookmark_topic);
				if(bookmark_topic.offsetLeft + bookmark_topic.clientWidth > document.documentElement.clientWidth - 20){
					layer++;
					offsetX = 10 * layer;
					bookmark_topic.remove();
					bookmark_topic = book.createBookmarkTopic(topic, offsetX, paddingX, height, layer);
					book.appendChild(bookmark_topic);
				}
				offsetX += bookmark_topic.clientWidth + gapWidth;
				if(index === topics.length - 1) callback(); 
			}, delay * 1000);
			delay += 0.2;
		});
	}

	insertBookCoverContent() {
		let category = this.category;
		let cover_upper = document.createElement('div');
		let cover_lower = document.createElement('div');
		cover_upper.classList.add('book-cover__upper');
		cover_lower.classList.add('book-cover__lower');
		
		cover_upper.innerHTML = `<img class='book-cover__upper-img' src='/static/img/blog-category/${category}.svg' alt='image'>`;

		let cover_lower_content = `<div class='book-cover__lower-title'>${decodeURIComponent(decodeURIComponent(category))}</div>`;
		cover_lower_content += '<ul class="book-cover__lower-list">';
		let topics = this.topics;
		for(let i = 0; i < topics.length; ++i) {
			if(i === 3 && topics.length > 4) {
				cover_lower_content += `<li>etc.</li>`;
				break;	
			}
			cover_lower_content += `<li>${decodeURIComponent(decodeURIComponent(topics[i]))}</li>`;
		}
		cover_lower_content += '</ul>';
		cover_lower.innerHTML = cover_lower_content;
		cover_upper.style.backgroundColor = this.bgColor;

		let cover = this.querySelector('.book-cover');
		cover.appendChild(cover_upper);
		cover.appendChild(cover_lower);
	}

	setBookOffset(index) {
		const bookStepX = 20, bookStepY = 10; //px
		this.style.left = index * bookStepX + 'px';
		this.style.bottom = index * bookStepY + 'px';
	}

	sortArticles(articles, sortBy) {
		this.sortDirection *= -1;
		if(sortBy === 'date') {
			return this.sortArticlesByDate(articles, this.sortDirection);
		}
		else if(sortBy === 'title') {
			return this.sortArticlesByTitle(articles, this.sortDirection);
		}
	}
	
	sortArticlesByDate(articles, dir) {
		articles = articles.sort((a, b) => {
			return (new Date(a.date) - new Date(b.date)) * dir;
		});
		return articles;
	}

	sortArticlesByTitle(articles, dir) {
		articles = articles.sort((a, b) => {
			let al = a.title.toLowerCase();
			let bl = b.title.toLowerCase();
			return al == bl ? 0 : (al > bl ? dir : -dir);
		});
		return articles;
	}

	updateBookContent(mode) {
		this.querySelector('.book-content').style.display = mode === 'content' ? 'block' : 'none';
		this.querySelector('.book-cover').style.display = mode === 'cover' ? 'block' : 'none';
	}
}
customElements.define('my-book', MyBook);
//--------------------constants
const pathname = window.location.pathname.split('/').slice(2);
const pathname_category = pathname[0];
const pathname_topic = pathname[1];
var pathname_article = pathname[2];

const blog_title = document.getElementById('blog-title');
const menu_main = document.getElementById('menu-main');

const bookshelf = document.getElementById('bookshelf');
const backbtn = bookshelf.querySelector('.bookshelf__backbtn');
const book_list = bookshelf.querySelector('.bookshelf__list');

backbtn.addEventListener('click', function() {
	backbtn.classList.remove('bookshelf__backbtn--active');
	fromTopicToCategoryPage();
});

const article_page = document.getElementById('article');   
article_page.querySelector('.article__backbtn').addEventListener('click', fromArticleToTopicPage);

const article_inner = article_page.querySelector('.article__inner');   
const article_page_content = article_page.querySelector('.article__content');

const dropdown_text = document.getElementById('dropdown-text');
//--------------------main
var categoryToTopicMap = {}, categoryToArticleMap = {}, categoryToBookColorMap = {};
var currentPage = 'category';  //3 pages: category, topic, article
var books;

window.addEventListener('beforeunload', function(e) {
	setSessionStorages();
});

fetch('/static/json/blog-structure.json', {
	method: 'GET',
	mode: 'no-cors'
})
.then(res => res.json())
.then(function(json) {
	getMappings(json);
	dropdown_text.querySelector('.dropdown-container').appendChild(createDropdown());
	//create books
	Object.keys(categoryToTopicMap).forEach((category, index) => {
		let book = new MyBook(category, categoryToTopicMap[category], categoryToArticleMap[category], categoryToBookColorMap[category], index); 
		book_list.insertBefore(book, book_list.firstChild);
	});
	books = book_list.querySelectorAll('.book');

	triggerBookAnimation();
	//check URL after all books are created
	if(pathname_category) checkCategoryURL();	
})
.catch(err => console.error('Error: ' + err));
//--------------------functions
function checkCategoryURL() {
	for(let i = 0; i < books.length; ++i) {
		if(books[i].dataset.category === pathname_category) {
			books[i].querySelector('.bookmark__category').click();
			break;
		}
		//if not found
		if(i === books.length - 1){
			history.replaceState(null, null, '/blog/');
		}
	}
}
function checkTopicURL(book) {
	let bookmark_topics = book.querySelectorAll('.bookmark__topic');
	if(pathname_topic){
		for(let i = 0; i < bookmark_topics.length; ++i) {
			if(bookmark_topics[i].dataset.topic === pathname_topic) {
				bookmark_topics[i].click();
				return;
			}
		}
	}
	bookmark_topics[0].click();
}
function createDropdown() {
	let opacity_low = '0.2';
	let dropdown = document.createElement('dropdown-text');
	dropdown.setAttribute('data-list', Object.keys(categoryToTopicMap).filter(category => category !== pathname_category).map(category => decodeURIComponent(decodeURIComponent(category))).join(','));
	dropdown.addEventListener('click', function() {
		let opacity = bookshelf.style.opacity;
		if(opacity === opacity_low) {
			window.history.replaceState(null, null, '/blog/' + Object.keys(categoryToTopicMap).filter(category => decodeURIComponent(decodeURIComponent(category)) === dropdown.getAttribute('value'))[0]);
			window.location.reload(false);
		}
		bookshelf.style.opacity = (opacity === opacity_low) ? 'initial' : opacity_low;
	});
	return dropdown;
}
function dateTo_YYYY_MM_DD(date) { //date obj to YYYY Mon, DD
	return date.getFullYear() + '_' + ('0' + (date.getMonth() + 1)).slice(-2) + '_' + ('0' + date.getDate()).slice(-2);
}
function dateTo_YYYY_Mon_DD(date) { //date obj to YYYY Mon, DD
	const month_short = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"];
	return month_short[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}
function fromArticleToTopicPage() {
	currentPage = "topic";
	let newURL = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
	history.replaceState(null, null, newURL);
	pathname_article = '';
	article_page.classList.add('article--appear');
	article_page_content.textContent = '';
	article_page.classList.remove('article--visible');
	dropdown_text.classList.add('dropdown-text--active');
	bookshelf.style.display = 'block';
	setTimeout(function(){
		article_page.classList.remove('article--appear');
		currentPage = 'topic';
	}, 1000);
}
function fromCategoryToTopicPage() {
	let book = books[books.length - 1];
	let bookmark_category = book.querySelector('.bookmark__category');
	if(currentPage === 'topic') return;
	currentPage = 'topic';
	book_list.classList.add('bookshelf__list--active');
	menu_main.style.display = 'none';
	setTimeout(function(){
		book.parentNode.querySelectorAll('.bookmark__category').forEach(bkm_cat => {
			if(bkm_cat === bookmark_category) {
				bkm_cat.classList.add('bookmark__category--active');
			} else {
				bkm_cat.style.display = 'none';
			}
		});
		dropdown_text.classList.add('dropdown-text--active');
	}, 0);
	book.insertBookmarkTopics(function() {
		blog_title.style.display = 'none';
		backbtn.classList.add('bookshelf__backbtn--active');
		checkTopicURL(book);
	});
}
function fromTopicToArticlePage(newURL, articleFileName, category, article) {
	if(currentPage === 'article') return;
	currentPage = 'article';
	modifyArticle(category, article);
	history.replaceState(null, null, newURL);
	dropdown_text.classList.remove('dropdown-text--active');
	article_page.classList.add('article--appear');
	setTimeout(function() {
		article_page.classList.add('article--visible');
		fetch(articleFileName, {
			method: 'GET',
			mode: 'no-cors'
		})
		.then(res => res.text())
		.then(text => {
			article_page_content.innerHTML = marked(text);
			bookshelf.style.display = 'none';

			insertArticleExpandBtn();
			getSessionStorages();
		})
		.catch(err => console.error('Error: ' + err));
	}, 0);
}
function fromTopicToCategoryPage() {
	history.replaceState(null, null, '/blog');
	let book_top = books[books.length - 1];
	//hide, but not remove bookmark topic
	let bookmark_topics = book_top.querySelectorAll('.bookmark__topic');
	bookmark_topics.forEach(bookmark => {
		bookmark.classList.remove('bookmark__topic--active');
	});
	setTimeout(function(){
		//remove bookmark topic
		bookmark_topics.forEach(bookmark => {
			bookmark.parentNode.removeChild(bookmark);
		})
		book_top.updateBookContent('cover');

		let bookmark_category = book_top.querySelector('.bookmark__category');
		bookmark_category.classList.remove('bookmark__category--active');
		book_top.parentNode.querySelectorAll('.bookmark__category').forEach(bkm_cat => {
			bkm_cat.style.display = 'block';
		});

		book_list.classList.remove('bookshelf__list--active');
		blog_title.style.display = 'block';
		dropdown_text.classList.remove('dropdown-text--active');
		menu_main.style.display = 'block';
		currentPage = 'category';
	}, 500);
}
function getColorTheme() {
	let step_low = 20, step_high = 10;
	let high = 255, low = 220;
	let r, g, b;
	let r_step, g_step, b_step;
	r = g = b = low;
	r_step = g_step = b_step = step_low;
	let rnd = getRandomInt(0, 7);
	if(rnd >> 0 & 1) { r = high; r_step = step_high; }
	if(rnd >> 1 & 1) { g = high; g_step = step_high; }
	if(rnd >> 2 & 1) { b = high; b_step = step_high; }
	//prevent grey theme color 
	if((r == g) && (g == b)) { 
		r = (r === high) ? low : high; 
		r_step = (r_step === high) ? step_low : step_high; 
	}
	return {r: r, g: g, b: b, r_step: r_step, g_step: g_step, b_step: b_step};
}
function getMappings(blog_structure) {
	let colorTheme = getColorTheme();
	setColorTheme(colorTheme);
	Object.keys(blog_structure).forEach((category, index) => {
		categoryToBookColorMap[category] = `rgb(${colorTheme.r -= colorTheme.r_step},${colorTheme.g -= colorTheme.g_step},${colorTheme.b -= colorTheme.b_step})`;
		categoryToTopicMap[category] = [];
		categoryToArticleMap[category] = [];
		blog_structure[category].forEach(item => {
			let topic = Object.keys(item)[0];
			categoryToTopicMap[category].push(topic);
			item[topic].forEach(article => {
				article.date = new Date(article.date.replace(/_/g,'-'));
				article = {...article, topic: topic};
				categoryToArticleMap[category].push(article);
			});
		});
	});
}
function getRandomInt(min, max) { //include max
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getSessionStorages() {
	let details_tags = sessionStorage.getItem('details-tags').split(',');
	if(details_tags.length > 0) {
		article_page_content.querySelectorAll('details').forEach((item, ind) => {
			item.open = details_tags[ind] === 'true';
		});
	}
	let scrollY = sessionStorage.getItem('scrollY');
	if(scrollY) {
		window.scrollTo(0, scrollY); 
	}
}
function insertArticleExpandBtn() {
	let expand_btn = article_page_content.querySelector('.article__expandBtn');
	if(expand_btn) {
		let collapseClass = 'fa-angle-double-up';
		let expandClass = 'fa-angle-double-down';
		expand_btn.innerHTML = `<i class="fas ${expandClass}"></i>`;
		expand_btn.addEventListener('click', function () {
			let fa = expand_btn.firstChild;
			article_page_content.querySelectorAll('details').forEach(item => {
				item.open = fa.classList.contains(expandClass);
			});
			fa.classList.toggle(expandClass);
			fa.classList.toggle(collapseClass);
		});
	}
}
function modifyArticle(category, article) {
	article_page.querySelector('.article__title').textContent = decodeURIComponent(decodeURIComponent(article.title));
	article_page.querySelector('.article__metadata-date').setAttribute('datetime', article.date);
	article_page.querySelector('.article__metadata-date').textContent = dateTo_YYYY_Mon_DD(article.date); 
	article_page.querySelector('.article__metadata-category').textContent = 'In ' + decodeURIComponent(decodeURIComponent(category)) + ' / ' + decodeURIComponent(decodeURIComponent(article.topic));
}
function moveBookToTop(category) {
	//insert label back to bookmark_category
	let prev = books[books.length - 1].querySelector('.bookmark__category');
	prev.textContent = decodeURIComponent(prev.dataset.category);

	for(let i = 0; i < books.length; ++i){
		if(books[i].dataset.category === category){
			let clone = books[i];
			book_list.appendChild(clone);
			books = book_list.querySelectorAll('.book');
			books.forEach((book, num) => {
				book.setBookOffset(books.length - 1 - num);
			});
			break;
		}
	}
}
function setColorTheme(theme) {
	document.documentElement.style.setProperty('--theme-color-dark', `rgb(${theme.r - theme.r_step * 4},${theme.g - theme.g_step * 4},${theme.b - theme.b_step * 4})`);
	document.documentElement.style.setProperty('--theme-color-light', `rgb(${theme.r},${theme.g},${theme.b})`);
	document.documentElement.style.setProperty('--theme-color-superlight', `rgb(${theme.r + theme.r_step * 1.5},${theme.g + theme.g_step * 1.5},${theme.b + theme.b_step * 1.5})`);
}
function setSessionStorages() {
	let details_tags = [];
	article_page_content.querySelectorAll('details').forEach(details => {
		details_tags.push(details.open);
	});
	sessionStorage.setItem('details-tags', details_tags);
	sessionStorage.setItem('scrollY', window.pageYOffset);
}
function triggerBookAnimation() {
	setInterval(() => {
		if(currentPage !== 'category') return;
		let book_top = books[books.length - 1];
		if(book_top.isMouseOverBook || book_top.isMouseOverBookmarkCategory) return;

		moveBookToTop(books[0].dataset.category);
	}, 4500);
}
