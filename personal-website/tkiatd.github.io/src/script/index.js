// -------------------- Preliminary Check
redirectIfURLNotValid(window.location.href, '#about')
// -------------------- Main Code
const bookshelf = document.getElementById('blog-bookshelf')
const helper = document.getElementById('helper')
var books
var colorTheme = getColorTheme()
var currentBlogState = 'A'
var currentPage = getCurrentPage()
var disableNextHashChangeEvent = false
var hrefHelperBlogPage = ''
var isBookAnimPaused = false
var isBookMetadataReady = false
var pathBlogStructure = hostname + '/metadata/blog-structure.json'
// var pathArticleMetadata = hostname + '/article-metadata.json'
var toRecreateBookmark = false

setGlobalColorTheme(colorTheme) // set global color theme
const promise1 = fetch(pathBlogStructure, { method: 'GET', mode: 'cors', }).then(res => res.json())
// const promise2 = fetch(src2 ,{ method: 'GET', mode: 'cors', }).then(res => res.json())
Promise.all([promise1/*, promise2*/])
	.then(([blogStructure/*, articleMetadata*/]) => applyBookMetadata(blogStructure, colorTheme))
	.then(() => {
		isBookMetadataReady = true
		redirectIfURLNotValid(window.location.href, '#about')
		assignClassToGrid()
		assignTabIndexToGrid()
		triggerBookAnimation()
		automaticBlogPageTransition()
	})
	.then(() => { setTimeout(() => { document.body.style.visibility = 'visible' }, 200) })
	.catch(err => console.error('Error: ' + err))
// -------------------- Event Handlers
	// blog: recreate bookmarks and debouncing resize event
var recreateBookmark
window.onresize = function() {
	if (currentBlogState === 'C') toRecreateBookmark = true
	if (currentPage !== 'blog' || currentBlogState !== 'B') return
	clearTimeout(recreateBookmark)
	recreateBookmark = setTimeout(function() {
		getTopBook().reinsertAllBookmarks()
	}, 200);
};
	// hashchange
window.onhashchange = function(e) {
	if (disableNextHashChangeEvent) {
		disableNextHashChangeEvent = false
		return
	}
	redirectIfURLNotValid(e.newURL, '#about') // ensure book data is correct, else refresh the page
	let oldHashArr = getHashPartURL(decodeURIComponent(e.oldURL)).split('/')
	let newHashArr = getHashPartURL(decodeURIComponent(e.newURL)).split('/')
	if (oldHashArr[0] !== newHashArr[0]) { // for transition between pages, swap grid items
		let primaryGridItem = document.getElementById(oldHashArr[0])
		let secondaryGridItem = document.getElementById(newHashArr[0])
		swapGridItems(secondaryGridItem, primaryGridItem)
		document.getElementById('grid').classList.add('grid--far')
		setTimeout(function() {
			document.getElementById('grid').classList.remove('grid--far')
		}, 500)
		currentPage = secondaryGridItem.id
		assignTabIndexToGrid()
	}
	else if (oldHashArr[0] === 'blog' && newHashArr[0] === 'blog') {
		let newBookTitle = newHashArr[1] ? newHashArr[1] : null
		let newChapter = newHashArr[2] ? newHashArr[2] : null
		let newArticleFilename = newHashArr[3] ? newHashArr[3] : null

		// State A to B, then B to B
		if (oldHashArr.length === 1 && newBookTitle && newChapter) {
			stateAtoB(newBookTitle, newChapter)
		}
		// state B to B
		else if (oldHashArr.length === 3 && newChapter && !newArticleFilename) {
			stateBtoB(oldHashArr[2], newChapter)
		}
		// State B to C
		else if (oldHashArr.length === 3 && newChapter && newArticleFilename) {
			const article = getTopBook().articles.find(e => e.filename === newArticleFilename)
			// stateBtoC(hostname + '/Blog/' + newBookTitle + '/' + article.chapter + '/' + article.filename)
			stateBtoC(hostname + '/article/' + newBookTitle + '/' + article.chapter + '/' + article.filename)
			hrefHelperBlogPage = '#blog/' + newBookTitle + '/' + newChapter
		}
		// State C to B
		else if (oldHashArr.length === 4 && newHashArr.length === 3) {
			stateCtoB()
		}
		// State B to A
		else if (oldHashArr.length === 3 && newHashArr.length === 1) {
			stateBtoA()
		}
	}
}
// helper does different things on different page
document.getElementById('helper').addEventListener('click', function() {
	switch(currentPage) {
		case 'about':
			sendMail()
			break
		case 'blog':
			document.getElementById('helper-item').href = hrefHelperBlogPage
			break
		case 'project':
			document.getElementById('helper-item').href = 'javascript:void(0)'
			window.open('https://github.com/', '_blank')
			break
		default:
			break
	}
})
// -------------------- Functions
function assignClassToGrid() {
	document.getElementById('about').classList.add(currentPage === 'about' ? 'grid__primary' : (currentPage === 'project' ? 'grid__secondary-left' : 'grid__secondary-right'))
	document.getElementById('blog').classList.add(currentPage === 'blog' ? 'grid__primary' : (currentPage === 'about' ? 'grid__secondary-left' : 'grid__secondary-right'))
	document.getElementById('project').classList.add(currentPage === 'project' ? 'grid__primary' : (currentPage === 'about' ? 'grid__secondary-right' : 'grid__secondary-left'))
	document.getElementById('helper').classList.add('grid__helper--' + currentPage)
}
function assignTabIndexToGrid() { // though in general tabindex > 0 is considered bad, it makes visual order the same as logical order
	let temp = 1
	document.querySelector('.grid__secondary-left').querySelector('.grid__label').setAttribute('tabindex', ++temp)
	document.getElementById('helper-item').setAttribute('tabindex', ++temp)
	document.querySelector('.grid__secondary-right').querySelector('.grid__label').setAttribute('tabindex', ++temp)
}
function automaticBlogPageTransition() {
	// check URL path
	const arr = document.location.hash.slice(1).split('/')
	const validPage = ['about', 'blog', 'project']
	if (validPage.includes(arr[0]) && arr.length === 1) {
		// do nothing
	} else if (arr[0] === 'blog' && arr.length >= 3 && arr.length <= 4) {
		disableNextHashChangeEvent = true
		window.location.href = '#blog'
		window.location.href = window.location.href + '/' + arr[1] + '/' + arr[2]
		if (arr.length === 4) {
			window.location.href = window.location.href + '/' + arr[3]
		}
	}
}
function getColorTheme() {
	let rnd = getRandomInt(0, 2)
	let r = rnd === 0 ? 235 : 185
	let g = rnd === 1 ? 235 : 185
	let b = rnd === 2 ? 235 : 185
	rnd = getRandomInt(0, 2)
	let r_step = rnd === 0 ? 15 : 25
	let g_step = rnd === 1 ? 15 : 25
	let b_step = rnd === 2 ? 15 : 25
	return {r: r, g: g, b: b, r_step: r_step, g_step: g_step, b_step: b_step}
}
function getCurrentPage() { // possible values: about (default), blog, project
	let hashURL = document.location.hash.slice(1)
	return ['about', 'blog', 'project'].find(e => hashURL.startsWith(e))
}
function getHashPartURL(url) {
	return url.slice(url.indexOf('#') + 1)
}
function getRandomInt(min, max) { // return random integer in [min, max]
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function hrefForward(next) {
	return document.location.hash + '/' + next
}
function hrefBackward() {
	return document.location.hash.split('/').slice(0, -1).join('/')
}
function isURLValid(url) {
	// return !!hash.match(/^$|^#(about|blog|project)$|^#blog(\/[^\/]+){1,3}$/)
	if (url.indexOf('#') === -1) return false
	let hashArr = decodeURIComponent(getHashPartURL(url)).split('/')
	let validPage = ['about', 'blog', 'project']
	if (hashArr.length === 1 && validPage.includes(hashArr[0])) {
		return true
	} else if (hashArr[0] === 'blog' && !isBookMetadataReady) {
		return true
	} else if (hashArr[0] === 'blog' && isBookMetadataReady) {
		// format: #blog/<book title>/<chapter>/<article filename>
		let isBookTitleValid = !hashArr[1] || (hashArr[1] && bookshelf.querySelector(`[data-book-title="${hashArr[1]}"]`))
		if (!isBookTitleValid) return false

		let isChapterValid = !hashArr[2] || hashArr[2] === 'All Chapters' || (hashArr[2] && bookshelf.querySelector(`[data-book-title="${hashArr[1]}"]`).chapters.includes(hashArr[2]))
		if (!isChapterValid) return false

		let isArticleFilenameValid = !hashArr[3] || (hashArr[3] && bookshelf.querySelector(`[data-book-title="${hashArr[1]}"]`).articles.find(e => e.filename === hashArr[3]))
		if (!isArticleFilenameValid) return false
		return true
	} else {
		return false
	}
}
function redirectIfURLNotValid(url, page) {
	if (!isURLValid(url)) redirectToPage(page)
}
function redirectToPage(page) {
	console.log('Redirect to ' + page + '...')
	window.location.replace(page)
	location.reload()
}
function sendMail() {
	const subject = 'Hi Theerawat'
	const body = 'Hi Theerawat\n\n\n\nBest Regards,\n'
	document.getElementById('helper-item').href = 'mailto:kiatd.t@outlook.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
}
function setGlobalColorTheme(colorTheme) {
	document.documentElement.style.setProperty('--theme-color-dark', `rgb(${colorTheme.r - colorTheme.r_step * 4},${colorTheme.g - colorTheme.g_step * 4},${colorTheme.b - colorTheme.b_step * 4})`)
	document.documentElement.style.setProperty('--theme-color-light', `rgb(${colorTheme.r},${colorTheme.g},${colorTheme.b})`)
	document.documentElement.style.setProperty('--theme-color-superlight', `rgb(${colorTheme.r + colorTheme.r_step * 1.5},${colorTheme.g + colorTheme.g_step * 1.5},${colorTheme.b + colorTheme.b_step * 1.5})`)
}
function swapGridItems(upcomingElem, currentElem) {
	let className = upcomingElem.classList.contains('grid__secondary-left') ? 'grid__secondary-left' : 'grid__secondary-right'
	currentElem.classList.replace('grid__primary', className)
	upcomingElem.classList.replace(className, 'grid__primary')
	document.getElementById('helper').classList.replace('grid__helper--' + currentElem.id, 'grid__helper--' + upcomingElem.id)
}
