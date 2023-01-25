// States: Bookshelf from Distance (State A) -> Open Top Book (state B) -> jump between bookmarks (state B) -> Open Article (State C)
// Transition: Triggered by
// State A to B: manual URL input/click bookTitle menu
// State B to B: manual URL input/click bookmark
// State B to C: manual URL input/click any item on article lists
// Invoke Actions Backward:
// State C to B: click 'back' button
// State B to A: click 'back' button
// -------------------- Functions
// TODO reduce to bookTitleList and title/chapter to article map
function applyBookMetadata(blogStructure, articleMetadata, colorTheme) {
	var [bookTitleToChaptersMap, bookTitleToArticlesMap, bookTitleToBookColorMap] = getAllMappings(blogStructure, articleMetadata, colorTheme)
	Object.keys(bookTitleToChaptersMap).forEach((bookTitle, index) => {
		// create book
		let book = new BlogBook(bookTitle, bookTitleToChaptersMap[bookTitle], bookTitleToArticlesMap[bookTitle], bookTitleToBookColorMap[bookTitle], index)
		book.addEventListener('mouseout', () => { isBookAnimPaused = false })
		book.addEventListener('mouseover', () => { isBookAnimPaused = true })
		bookshelf.insertBefore(book, bookshelf.firstChild) // insert to DOM
		let menuItem = createBlogMenuItem(bookTitle) // create menu
		document.getElementById('blog-menu').appendChild(menuItem) // insert to DOM
	})
	books = bookshelf.querySelectorAll('.book')
	document.getElementById('blog-menu-' + getTopBook().dataset.bookTitle).classList.add('blog__menu-item--topbook')
}
function createBlogMenuItem(bookTitle) {
	let menuItem = document.createElement('a')
	menuItem.id = 'blog-menu-' + bookTitle
	menuItem.classList = 'blog__menu-item'
	menuItem.href = '#blog' + '/' + bookTitle + '/' + 'All Chapters'
	menuItem.textContent = bookTitle
	menuItem.addEventListener('mouseout', function() {
		isBookAnimPaused = false
	})
	menuItem.addEventListener('mouseover', function() {
		isBookAnimPaused = true
		moveBookToTop(bookTitle)
	})
	return menuItem
}
function createArticleTable(chapter, articles, arrowColNum) {
	let table = document.createElement('table')
	table.classList.add('book-table')
	// table head
	table.innerHTML = `
		<thead>
			<th class='book-table__title' colspan='3'>${chapter}</th>
			<tr class='book-table__header'>
				<th class='book-table__header-item book-table__header-item--create'><a class='book-table__header-link' href="javascript:void(0)">Created</a></th>
				<th class='book-table__header-item book-table__header-item--update'><a class='book-table__header-link' href="javascript:void(0)">Updated</a></th>
				<th class='book-table__header-item book-table__header-item--title'><a class='book-table__header-link' href="javascript:void(0)">Title</a></th>
			</tr>
		</thead>
	`
	// table body
	let tbody = document.createElement('tbody')
	let fragment = document.createDocumentFragment()
	articles.forEach(article => {
		let tr = document.createElement('tr')
		tr.classList.add('book-table__row')
		tr.innerHTML = `
			<td class='book-table__row-item'>${new Date(article.create).toDateString().split(' ').slice(1).join(' ')}</td>
			<td class='book-table__row-item'>${new Date(article.update).toDateString().split(' ').slice(1).join(' ')}</td>
			<td class='book-table__row-item'><a class='book-table__row-link' href=${hrefForward(article.filename)}>${article.title}</a></td>
		`
		fragment.appendChild(tr)
	})
	tbody.appendChild(fragment)
	table.appendChild(tbody)
	// table sort icon
	let topBook = getTopBook()
	let headers = table.querySelectorAll('.book-table__header-item')
	let icon = document.createElement('span')
	icon.classList.add('book-table__header-icon')
	icon.innerHTML = topBook.sortDirection > 0 ? ' &#x25BE' : ' &#x25B4'
	// table sort icon event
	headers[arrowColNum].appendChild(icon)
	headers.forEach((header, index) => {
		header.addEventListener('click', function() {
			let sortBy = ['create', 'update', 'title'][index]
			let sortedArticles = (sortBy === 'title') ? sortArrayOfJSONByString(articles, sortBy, topBook.sortDirection *= -1) : sortArrayOfJSONByDate(articles, sortBy, topBook.sortDirection *= -1)
			displayBookTable(chapter, sortedArticles, index)
		})
	})
	return table
}
function displayBookTable(chapter, articles, arrowColNum) {
	let bookContent = getTopBook().querySelector('.book-content')
	// remove existing table
	while (bookContent.firstChild) {
		bookContent.removeChild(bookContent.lastChild)
	}
	// append table to DOM
	bookContent.appendChild(createArticleTable(chapter, articles, arrowColNum))
}
function getAllMappings(blogStructure, colorTheme) {
	let bookTitleToChaptersMap = {}, bookTitleToArticlesMap = {}, bookTitleToBookColorMap = {}
	for (const [bookTitle, bookTitleContent] of Object.entries(blogStructure)) {
		bookTitleToChaptersMap[bookTitle] = []
		bookTitleToArticlesMap[bookTitle] = []
 		bookTitleToBookColorMap[bookTitle] = `rgb(${colorTheme.r -= colorTheme.r_step},${colorTheme.g -= colorTheme.g_step},${colorTheme.b -= colorTheme.b_step})`
		for (const [chapter, articles] of Object.entries(bookTitleContent)) {
 			bookTitleToChaptersMap[bookTitle].push(chapter)
			articles.forEach(article => {
				let mock = {
					"create": "2020-08-21T06:28:29.537Z",
					"title": article.title,
					"update": article.modified.split(' ')[0]
				}
 				bookTitleToArticlesMap[bookTitle].push(Object.assign({}, mock, {chapter: chapter}, {filename: article.title}))
			})
		}
	}
	return [bookTitleToChaptersMap, bookTitleToArticlesMap, bookTitleToBookColorMap]
}
function getTopBook() {
	return books[books.length - 1]
}
function moveBookToTop(bookTitle) {
	if (getTopBook().dataset.bookTitle === bookTitle) return
	let bookToMove = bookshelf.querySelector(`[data-book-title="${bookTitle}"]`) // I want to declare this inside if statement but gulp-minify doesnt seem to work
	if (bookToMove) {
		document.getElementById('blog-menu-'+ getTopBook().dataset.bookTitle).classList.remove('blog__menu-item--topbook')
		bookshelf.appendChild(bookToMove)
		books = bookshelf.querySelectorAll('.book') // reassign books
		books.forEach((book, num) => { // reassign book positions
			book.setBookOffset(books.length - 1 - num)
		})
		document.getElementById('blog-menu-'+ getTopBook().dataset.bookTitle).classList.add('blog__menu-item--topbook')
	}
}
function moveTopBookToBottom() {
	document.getElementById('blog-menu-'+ getTopBook().dataset.bookTitle).classList.remove('blog__menu-item--topbook')
	bookshelf.insertBefore(getTopBook(), bookshelf.firstChild)
	books = bookshelf.querySelectorAll('.book') // reassign books
	books.forEach((book, num) => { // reassign book positions
		book.setBookOffset(books.length - 1 - num)
	})
	document.getElementById('blog-menu-'+ getTopBook().dataset.bookTitle).classList.add('blog__menu-item--topbook')
}
function sortArrayOfJSONByDate(arr, key, dir) {
	return arr.sort((a, b) => {
		return (new Date(a[key]) - new Date(b[key])) * dir
	})
}
function sortArrayOfJSONByString(arr, key, dir) {
	return arr.sort((a, b) => {
		let al = a[key].toLowerCase()
		let bl = b[key].toLowerCase()
		return al == bl ? 0 : (al > bl ? dir : -dir)
	})
}
function stateAtoB(bookTitle, chapter) {// see explanation on top
	currentBlogState = 'B'
	moveBookToTop(bookTitle)
	let topBook = getTopBook()
	isBookAnimPaused = true
	helper.querySelector('.grid__label').classList.add('grid__label--appear')
	topBook.classList.add('book--opened')
	topBook.insertAllBookmarks(function() {
		stateBtoB(null, chapter)
		const bookmark = getTopBook().querySelector(`[data-chapter="${chapter}"]`)
		bookmark.classList.add('book-bookmark__item--disappear')
	})
	document.getElementById('blog-menu').style.display = 'none'
	// href
	document.getElementById('blog-label').href = document.location.hash
	hrefHelperBlogPage = '#blog'
}
function stateBtoB(oldChapter, newChapter) {// see explanation on top
	let topBook = getTopBook()
	// bookmark animation
	try {
		if (oldChapter) topBook.querySelector(`[data-chapter="${oldChapter}"]`).classList.remove('book-bookmark__item--disappear')
		topBook.querySelector(`[data-chapter="${newChapter}"]`).classList.add('book-bookmark__item--disappear')
	} catch (error) {
		console.log('Invalid URL: reload...')
		window.location.replace('#blog')
		console.error(error)
	}
	// remove all book content to remove their event listeners
	let bookContent = topBook.querySelector('.book-content')
	while (bookContent.firstChild) {
		bookContent.removeChild(bookContent.lastChild)
	}
	let articles = (newChapter === 'All Chapters') ? topBook.articles : topBook.articles.filter(article => article.chapter === newChapter)
	displayBookTable(newChapter, articles, 0)
	// change url
	document.getElementById('blog-label').href = document.location.hash
}
function stateBtoC(resourceURL) {// see explanation on top
	fetch(resourceURL, { method: 'GET', mode: 'cors', })
	.then(res => res.text())
	.then(function(html) {
		currentBlogState = 'C'
		document.getElementById('blog-label').href = document.location.hash
		getTopBook().classList.add('book--reading')
		setTimeout(function() {
			document.getElementById('blog-article').style.display = 'block'
			document.getElementById('blog-article').dataset.content = html
		}, 1000)
	})
}
function stateCtoB() { // see explanation on top
	document.getElementById('blog-article').style.display = 'none'
	currentBlogState = 'B'
	getTopBook().classList.remove('book--reading')
	if (toRecreateBookmark) {
		getTopBook().reinsertAllBookmarks()
		toRecreateBookmark = false
	}
	document.getElementById('blog-label').href = document.location.hash
	hrefHelperBlogPage = '#blog'
}
function stateBtoA() {// see explanation on top
	// reset top book
	let topBook = getTopBook()
	topBook.removeAllBookmarks()
	topBook.classList.remove('book--opened')

	helper.querySelector('.grid__label').classList.remove('grid__label--appear')
	currentBlogState = 'A'
	isBookAnimPaused = false
	document.getElementById('blog-label').href = document.location.hash
	document.getElementById('blog-menu').style.display = 'block'
}
function triggerBookAnimation() {
	setInterval(() => {
		if(currentPage !== 'blog' || currentBlogState !== 'A'|| isBookAnimPaused) return
		moveTopBookToBottom()
	}, 4000)
}
