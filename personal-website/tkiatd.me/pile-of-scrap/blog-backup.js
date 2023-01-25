const month_short = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"];
const book_colors = [{r: 255, g: 238, b: 238}, {r: 204, g: 238, b: 255}, {r: 204, g: 238, b: 204}];

window.addEventListener("popstate", function(e) {
	window.location.reload();
});
readFile('/static/json/blog-structure.json', function(res){
	//get blog structure
	const blog_structure = JSON.parse(res);
	//get dom elements
	const menu_main = document.getElementById('menu-main');
	const article_page = document.getElementById('article');   
	const article_page_content = article_page.querySelector('.article__content');   
	const template = document.getElementById('header-generic');
	const clone = document.importNode(template.content, true);
	article_page.insertBefore(clone, article_page_content);

	const article_page_backbtn = article_page.querySelector('.article__backbtn');
	article_page_backbtn.addEventListener('click', fromArticleToTopicPage);
	const backbtn = document.getElementById('bookshelf__backbtn');
	const book_list = document.querySelector('.bookshelf__list');
	//variable
	var currentPage = "category";  //3 pages: category, topic, article
	var mouseOverCategory = false;
	var anim;
	var sortDirection = 1;
	var book_coverImages = [];
	//find category-to-topics and topic-to-articles mappings
	var categoryToTopicMap = {}, topicToArticleMap = {};
	var categoryToBookColorMap = {};
	var bookColor = book_colors[Math.floor(Math.random()*book_colors.length)];
	bookColor = getRandomLightColor();
	Object.keys(blog_structure).forEach((category, index) => {
		categoryToBookColorMap[category] = `rgb(${bookColor.r += bookColor.r_step},${bookColor.g += bookColor.g_step},${bookColor.b += bookColor.b_step})`;
		categoryToTopicMap[category] = [];
		topicToArticleMap[category] = [];
		book_coverImages.push(category);
		blog_structure[category].forEach(item => {
			let topic = Object.keys(item)[0];
			categoryToTopicMap[category].push(topic);
			topicToArticleMap[topic] = [];
			item[topic].forEach(article => {
				topicToArticleMap[topic].push(article);
				topicToArticleMap[category].push(article);
			});
		});
	});
	//initialize books	
	const bookmarkStepY = 3.5; //em
	const bookStepX = 20, bookStepY = 10; //px
	Object.keys(categoryToTopicMap).forEach((category, index) => {
		let book = document.createElement('li');
		book.classList.add('book');
		book.dataset.category = category;
		book.innerHTML = '<div class="book__content"></div>';
		insertBookCover(book);
		insertBookmarkCategory(book, index * bookmarkStepY);
		setBookOffset(book, index * bookStepX, index * bookStepY);
		book_list.appendChild(book);
	});
	var books = book_list.querySelectorAll('.book');
	triggerBookAnimation();
	//event
	backbtn.addEventListener('click', function() {
		fromTopicToCategoryPage();
	});
	//get url info - if category and topic exist, simulate click
	const pathname = window.location.pathname.split('/').slice(2);
	const pathname_category = pathname[0];
	const pathname_topic = pathname[1];
	const pathname_article = pathname[2];
	var willClickBookmarkTopic = false, willClickBookmarkArticle = false;
	
	if(pathname_category) {
		for(let i = 0; i < books.length; ++i) {
			if(books[i].dataset.category === pathname_category) {
				moveBookToTop(books[i].dataset.category)
				willClickBookmarkTopic = pathname_topic ? true : false;
				willClickBookmarkArticle = pathname_article ? true : false;
				books[books.length - 1].querySelector('.bookmark__category').click();
				break;
			}
			//not found
			if(i === books.length - 1){
				history.replaceState(null, null, '/blog/');
			}
		}
	}
	//function
	const beautify = fileName => fileName.trim().replace(/[^-\w\s]/g,'').toLowerCase().split(' ').join('-');
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	function getRandomLightColor() {
		let step = -10, min = 180, max = 230, rndColor = getRandomInt(min, max);
		let rnd3bit = getRandomInt(0, 7);
		let r = rnd3bit & (1 << 0) ? rndColor : 255;
		let g = rnd3bit & (1 << 1) ? rndColor : 255;
		let b = rnd3bit & (1 << 2) ? rndColor : 255;
		rnd3bit = getRandomInt(0, 7);
		let r_step = rnd3bit & (1 << 0) ? step : 0;
		let g_step = rnd3bit & (1 << 1) ? step : 0;
		let b_step = rnd3bit & (1 << 2) ? step : 0;
		if(!(r_step || g_step || b_step)) g_step = step;
		return {r: r, g: g, b: b, r_step: r_step, g_step: g_step, b_step: b_step};
	}
	function fromCategoryToTopicPage(category) {
		moveBookToTop(category);
		history.replaceState(null, null, '/blog/' + category);
		let book = books[books.length - 1];
		let bookmark_category = book.querySelector('.bookmark__category');
		if(currentPage === "topic") return;
		currentPage = "topic";
		book_list.classList.add('bookshelf__list--active');
		setTimeout(function(){
			bookmark_category.classList.add('bookmark__category--active');
		}, 0);
		books.forEach(book => {
			book.classList.add('book--fullwidth');
			backbtn.classList.add('bookshelf__backbtn--active');
			if(book.dataset.category === bookmark_category.dataset.category) {
				book.querySelector('.content-cover__lower').style.opacity = '0';
			}
		});
		createBookmarkTopics(book, function() {
			if(willClickBookmarkTopic){
				willClickBookmarkTopic = false;
				let bookmark_topics = book.querySelectorAll('.bookmark__topic');
				for(let i = 0; i < bookmark_topics.length; ++i) {
					if(bookmark_topics[i].dataset.topic === decodeURIComponent(pathname_topic)) {
						bookmark_topics[i].click();
						break;
					}
				}
			}
		});
	}
	function fromTopicToArticlePage(newURL, fileName) {
		if(currentPage === "article") return;
		currentPage = "article";
		history.pushState(null, null, newURL);
		article_page.classList.add('article--appear');
		setTimeout(function(){
			article_page.classList.add('article--visible');
			readFile(fileName, function(res){
				article_page_content.innerHTML = marked(res);
				document.querySelector('.bookshelf').style.display = 'none';
				menu_main.style.display = 'none';
			});
		}, 0);
	}
	function fromArticleToTopicPage() {
		currentPage === "topic";
		history.back();
		article_page.classList.add('article--appear');
		article_page_content.textContent = '';
		article_page.classList.remove('article--visible');
		document.querySelector('.bookshelf').style.display = 'block';
		menu_main.style.display = 'block';
		setTimeout(function(){
			article_page.classList.remove('article--appear');
			currentPage = "topic";
		}, 1000);
	}
	function fromTopicToCategoryPage() {
		mouseOverCategory = false;
		history.replaceState(null, null, '/blog');
		//hide bookmark topic
		let bookmark_topics = book_list.querySelectorAll('.bookmark__topic');
		bookmark_topics.forEach(bookmark => {
			bookmark.classList.remove('bookmark__topic--active');
		});
		setTimeout(function(){
			//remove bookmark topic
			bookmark_topics.forEach(bookmark => {
				bookmark.parentNode.removeChild(bookmark);
			})
			//update books
			books.forEach((book, num) => {
				book.classList.remove('book--fullwidth');
				if(num === books.length - 1){
					insertBookCover(book);
					let bookmark_category = book.querySelector('.bookmark__category')
					bookmark_category.classList.remove('bookmark__category--active');
				}
			});
			backbtn.classList.remove('bookshelf__backbtn--active');
			book_list.classList.remove('bookshelf__list--active');
			currentPage = "category";
		}, 500);
	}
	function insertBookCover(book, title) {
		let category = book.dataset.category;
		let cover = document.createElement('div');
		let cover_upper = document.createElement('div');
		let cover_lower = document.createElement('div');
		cover.classList.add('content-cover');
		cover_upper.classList.add('content-cover__upper');
		cover_lower.classList.add('content-cover__lower');
		
		cover_upper.innerHTML = `<img class='content-cover__upper-img' src='/static/img/blog-category/${category}.svg' alt='image'>`;

		let cover_lower_content = `<div class='content-cover__lower-title'>${decodeURIComponent(category)}</div>`;
		cover_lower_content += '<ul class="content-cover__lower-list">';
		let topics = categoryToTopicMap[category];
		for(let i = 0; i < topics.length; ++i) {
			if(i === 4 && topics.length > 5) {
				cover_lower_content += `<li>etc.</li>`;
				break;	
			}
			cover_lower_content += `<li>${decodeURIComponent(topics[i])}</li>`;
		}
		cover_lower_content += '</ul>';
		cover_lower.innerHTML = cover_lower_content;
		cover_lower.style.backgroundColor = categoryToBookColorMap[category];

		cover.appendChild(cover_upper);
		cover.appendChild(cover_lower);
		book.querySelector('.book__content').innerHTML = cover.outerHTML;
	}
	function insertBookmarkCategory(book, top) {
		let category = book.dataset.category;
		let bookmark_category = document.createElement('a');
		bookmark_category.classList.add('bookmark__category');
		bookmark_category.setAttribute('href', 'javascript:void(0);');
		bookmark_category.style.top = top + 'em';
		bookmark_category.textContent = decodeURIComponent(category);
		bookmark_category.dataset.category = category;
		insertBookmarkCategoryListener(bookmark_category);
		book.appendChild(bookmark_category);
	}
	function insertBookmarkCategoryListener(bookmark_category) {
		bookmark_category.addEventListener('pointerenter', function() {
			if(currentPage === "topic") return;
			mouseOverCategory = true;
			let category = bookmark_category.dataset.category;
			bookmark_category.textContent = '\u2190 Open';
			//if book not already on top, move to top
			if(category !== books[books.length - 1].dataset.category) moveBookToTop(category);
		});
		bookmark_category.addEventListener('pointerleave', function() {
			mouseOverCategory = false;
		});
		bookmark_category.addEventListener('click', function() {
			fromCategoryToTopicPage(bookmark_category.dataset.category);
		});
	}
	function createBookmarkTopics(book, callback) {
		let paddingX = 5/*px*/, delay = 0, height = 2.3/*em*/, gapWidth = 5, layer = 1;
		let offsetX = 10 * layer;
		let category = book.dataset.category;
		let topics = [category, ...categoryToTopicMap[category]];

		topics.forEach((topic, index) => {
			setTimeout(function(){
				let bookmark = createBookmarkTopic(category, topic, offsetX, paddingX, height, layer);
				book.appendChild(bookmark);
				if(bookmark.offsetLeft + bookmark.clientWidth > document.documentElement.clientWidth - 20){
					layer++;
					offsetX = 10 * layer;
					bookmark.remove();
					bookmark = createBookmarkTopic(category, topic, offsetX, paddingX, height, layer);
					book.appendChild(bookmark);
				}
				offsetX += bookmark.clientWidth + gapWidth;
				if(index === topics.length - 1) callback(); 
			}, delay * 1000);
			delay += 0.2;
		});
	}
	function createBookmarkTopic(category, topic, offsetX, paddingX, height, layer) {
		let displayText = (topic === category) ? "All topics" : topic;
		let bookmark = document.createElement('a');
		bookmark.classList.add('bookmark__topic');
		bookmark.classList.add('bookmark__topic--active');
		bookmark.dataset.topic = topic;
		bookmark.setAttribute('href', 'javascript:void(0)');
		bookmark.style.height = height + 'em';
		bookmark.style.left = offsetX + 'px';
		bookmark.style.paddingBottom = height * (layer - 1) + 'em';
		bookmark.style.paddingLeft = paddingX + 'px';
		bookmark.style.paddingRight= paddingX + 'px';
		bookmark.style.top = -height * layer + 'em';
		bookmark.style.zIndex = 999 - layer;
		bookmark.textContent = decodeURIComponent(displayText);

		bookmark.addEventListener('click', function() {
			history.replaceState(null, null, '/blog/' + category + '/' + topic);

			let bookmarks = bookmark.parentNode.querySelectorAll('.bookmark__topic');
			bookmarks.forEach(elem => {
				elem.classList.remove('bookmark__topic--opened')
			});
			bookmark.classList.add('bookmark__topic--opened');

			let articles = topicToArticleMap[topic];
			let table = createArticlesTable(category, topic, articles);
			displayArticlesTable(table);
		});
		return bookmark;
	}
	function createArticlesTable(category, topic, articles) {
		let table = document.createElement('table');
		table.classList.add('content-table');
		table.innerHTML = `
			<thead>
				<tr>
					<th class='content-table__title' colspan='2'>
						${decodeURIComponent(topic)}
					</th>
				</tr>
				<tr class='content-table__header'>
					<th class='content-table__header-item content-table__header-date'><a>Updated</a><span class='content-table__header-icon'></span></th>
					<th class='content-table__header-item content-table__header-title'><a>Title</a><span class='content-table__header-icon'></span></th>
				</tr>
			</thead>
			<tbody></tbody>
		`;
		let header_date = table.querySelector('.content-table__header-date');
		header_date.addEventListener('click', function() {
			let articles_sort = sortArticles(articles, 'date');
			let table = createArticlesTable(category, topic, articles_sort);
			displayArticlesTable(table);
		});
		let header_title = table.querySelector('.content-table__header-title');
		header_title.addEventListener('click', function() {
			let articles_sort = sortArticles(articles, 'title');
			let table = createArticlesTable(category, topic, articles_sort);
			displayArticlesTable(table);
		});

		let tbody = table.querySelector('tbody');
		articles.forEach(article => {
			const fileName = '/article/' + category + '/' + topic + '/' + article.date + '--' + beautify(article.title) + '.md'; 
			const newURL = `/blog/${category}/${topic}/${article.title}`;
			if(willClickBookmarkArticle && article.title === decodeURI(pathname_article)) {
				modifyArticleTemplate(article, category, topic);
				fromTopicToArticlePage(newURL, fileName);
			}
			let tr = document.createElement('tr');
			tr.classList.add('content-table__row');
			tr.innerHTML = `
				<td class='content-table__row-item content-table__row-date'>${article.date}</td>
				<td><a class='content-table__row-item content-table__row-title' href='javascript:void(0);'>${article.title}</a></td>
			`;
			let a = tr.querySelector('.content-table__row-title');
			a.addEventListener('click', function() {
				modifyArticleTemplate(article, category, topic);
				fromTopicToArticlePage(newURL, fileName);
			});
			tbody.appendChild(tr);
		});
		return table;
	}
	function moveBookToTop(category) {
		let prev = books[books.length - 1].querySelector('.bookmark__category');
		prev.textContent = decodeURIComponent(prev.dataset.category);
		for(let i = 0; i < books.length; ++i){
			if(books[i].dataset.category === category){
				let clone = books[i].cloneNode(true);
				let bookmark_category = clone.querySelector('.bookmark__category');
				insertBookmarkCategoryListener(bookmark_category);
				books[i].remove();
				book_list.appendChild(clone);
				books = book_list.querySelectorAll('.book');
				books.forEach((book, num) => {
					setBookOffset(book, num * bookStepX, num * bookStepY);
				});
				break;
			}
		}
	}
	function setBookOffset(book, right, top) {
		book.style.right = right + 'px';
		book.style.top = top + 'px';
	}
	function triggerBookAnimation() {
		anim = setInterval(() => {
			if(currentPage !== "category" || mouseOverCategory) return;
			moveBookToTop(books[0].dataset.category);
		}, 4500);
	}
	function modifyArticleTemplate(article, category, topic) {
		const date = new Date(article.date);
		article_page.querySelector('.article__title').textContent = article.title;
		article_page.querySelector('.article__date-time').setAttribute('datetime', article.date);
		article_page.querySelector('.article__date-time').textContent = month_short[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
		article_page.querySelector('.article__category').textContent = 'In ' + decodeURIComponent(category) + ' / ' + topic;
	}
	function sortArticles(articles, sortBy) {
		sortDirection *= -1;
		if(sortBy === 'date') {
			return sortArticlesByDate(articles, sortDirection);
		}
		else if(sortBy === 'title') {
			return sortArticlesByTitle(articles, sortDirection);
		}
	}
	function sortArticlesByDate(articles, dir){
		articles = articles.sort((a, b) => {
			return (new Date(a.date) - new Date(b.date)) * dir;
		});
		return articles;
	}
	function sortArticlesByTitle(articles, dir){
		articles = articles.sort((a, b) => {
			let al = a.title.toLowerCase();
			let bl = b.title.toLowerCase();
			return al == bl ? 0 : (al > bl ? dir : -dir);
		});
		return articles;
	}
	function displayArticlesTable(table) {
		let icons = table.querySelectorAll('.content-table__header-icon');
		icons.forEach(icon => { icon.innerHTML = sortDirection > 0 ? '&#x25BE' : '&#x25B4' });
		let book_content = books[books.length - 1].querySelector('.book__content');
		book_content.innerHTML = '';
		book_content.appendChild(table);
	}
});

