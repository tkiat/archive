class BlogBook extends HTMLElement {
	constructor(bookTitle, chapters, articles, bgColor, index) {
		super()

		this.dataset.bookTitle = bookTitle
		this.chapters = chapters
		this.articles = articles
 		this.bgColor = bgColor
		this.sortDirection = -1
		this.classList.add('book')

		let elemBookmark = document.createElement('div')
		elemBookmark.classList.add('book-bookmark')

		let elemCover = document.createElement('div')
		elemCover.classList.add('book-cover')

		let elemContent = document.createElement('div')
		elemContent.classList.add('book-content')

		let fragment = document.createDocumentFragment()
		fragment.appendChild(elemBookmark)
		fragment.appendChild(elemCover)
		fragment.appendChild(elemContent)
		this.appendChild(fragment)

		this.insertBookCoverContent()
		this.setBookOffset(index)
	}
	//methods
	createBookmark(chapter, offsetX, paddingX, height, layer) {
		let book = this
		let bookmark = document.createElement('a')
		bookmark.classList.add('book-bookmark__item')
		bookmark.classList.add('book-bookmark__item--appear')
		bookmark.dataset.chapter = chapter
		bookmark.setAttribute('href', hrefBackward() + '/' + chapter)
		bookmark.style.height = height + 'em'
		bookmark.style.left = offsetX + 'px'
		bookmark.style.paddingBottom = height * (layer - 1) + 'em'
		bookmark.style.paddingLeft = paddingX + 'px'
		bookmark.style.paddingRight= paddingX + 'px'
		bookmark.style.top = -height * layer + 'em'
		bookmark.style.zIndex = 9 - layer
		bookmark.textContent = chapter
		return bookmark
	}
	reinsertAllBookmarks() {
		let book = this
		let openingBookmark = this.querySelector('.book-bookmark__item--disappear')
		this.removeAllBookmarks()
		this.insertAllBookmarks(function() {
			if (openingBookmark) book.querySelector(`[data-chapter="${openingBookmark.dataset.chapter}"]`).classList.add('book-bookmark__item--disappear')
		})
	}
	insertBookCoverContent() {
		// create upper cover
		let coverUpper = document.createElement('div')
		coverUpper.classList.add('book-cover__upper')
		coverUpper.innerHTML = `<img class='book-cover__upper-img' src='${hostname}/metadata/book-cover/${this.dataset.bookTitle}.svg' alt='image'>`
		coverUpper.style.backgroundColor = this.bgColor
		// create lower cover
		let coverLower = document.createElement('div')
		coverLower.classList.add('book-cover__lower')
		let coverLowerHTML = `<div class='book-cover__lower-title'>${this.dataset.bookTitle}</div>`
		coverLowerHTML += '<ul class="book-cover__lower-list">'
		for(let i = 0; i < this.chapters.length; ++i) {
			if(i === 3 && this.chapters.length > 4) {
				coverLowerHTML += `<li>etc.</li>`
				break;
			}
			coverLowerHTML += `<li>${this.chapters[i]}</li>`
		}
		coverLowerHTML += '</ul>'
		coverLower.innerHTML = coverLowerHTML
		// insert to DOM
		let cover = this.querySelector('.book-cover')
		cover.appendChild(coverUpper)
		cover.appendChild(coverLower)
	}
	insertAllBookmarks(callback = function(){}) {
		let book = this
		let paddingX = 5/*px*/, delay = 0, height = 2.3/*em*/, gapWidth = 5, layer = 1
		let offsetX = 10 * layer
		let chapters = ['All Chapters', ...this.chapters]
		chapters.forEach((chapter, index) => {
			setTimeout(function(){
				let bookmark = book.createBookmark(chapter, offsetX, paddingX, height, layer)
				book.querySelector('.book-bookmark').appendChild(bookmark)
				if(bookmark.offsetLeft + bookmark.clientWidth > document.documentElement.clientWidth - 20) { // cannot use fragment here wince clientWidth requires element exists in the DOM
					layer++
					offsetX = 10 * layer
					bookmark.remove()
					bookmark = book.createBookmark(chapter, offsetX, paddingX, height, layer)
					book.querySelector('.book-bookmark').appendChild(bookmark)
				}
				offsetX += bookmark.clientWidth + gapWidth
				if(index === chapters.length - 1) callback()
			}, delay * 1000)
			delay += 0.2
		})
	}
	removeAllBookmarks() {
		let bookmarkContainer = this.querySelector('.book-bookmark')
		while(bookmarkContainer.querySelector('.book-bookmark__item')) {
			bookmarkContainer.removeChild(bookmarkContainer.querySelector('.book-bookmark__item'))
		}
	}
	setBookOffset(index) {
		const bookStepX = 20, bookStepY = 10; //px
		this.style.left = index * bookStepX + 'px'
		this.style.bottom = index * bookStepY + 'px'
	}
}
customElements.define('blog-book', BlogBook)
