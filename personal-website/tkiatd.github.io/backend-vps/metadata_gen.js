// Format:
// {
// 	category1: {
// 		topic1: [
// 			article1.html,
// 			article2.html
// 		]
// 	}
// }

// import
var fs = require('fs')
// define paths

var username = require("os").userInfo().username
var pathBase = '/home/' + username + '/Git/tkiatd.github.io-content'
var pathBlog = pathBase + '/Blog'

var pathMetadata = '/home/' + username + '/Git/tkiatd.github.io-backend/static'
var path_article_metadata = pathMetadata + '/article-metadata.json'
var path_blog_structure = pathMetadata + '/blog-structure.json'
// retrieve or create article metadata
createFileIfNotExist(path_article_metadata, '{}')
var article_metadata = JSON.parse(fs.readFileSync(path_article_metadata, {encoding: 'utf-8'}))
// generate blog_structure and article_metadata
var blog_structure = {}
generatedJSON(pathBlog)
// sort article_metadata by key
var article_metadata_sorted = {}
var temp = []
for (let key in article_metadata) {
	temp.push([key, article_metadata[key]])
}
temp.sort()
temp.forEach(item => {
	article_metadata_sorted[item[0]] = item[1]
})
// write to files
fs.writeFile(path_article_metadata, JSON.stringify(article_metadata_sorted, null, 2), (err) => {
	if (err) throw err
})
fs.writeFile(path_blog_structure, JSON.stringify(blog_structure, null, 2), (err) => {
	if (err) throw err
})
// function
function createFileIfNotExist(filename, content) {
	try {
		fs.openSync(filename, 'r')
	} catch(err) {
		fs.writeFileSync(filename, content, null)
	}
}
function generatedJSON(currentPath) {
	var files = fs.readdirSync(currentPath)
	for (var i in files) {
		var currentFile = currentPath + '/' + files[i]
		let arr = currentFile.slice((pathBlog + '/').length).split('/')
		if (arr.length == 1) {
			blog_structure[arr[0]] = {}
		} else if (arr.length == 2) {
			blog_structure[arr[0]][arr[1]] = []
		} else if (arr.length == 3 && isHTMLFile(arr[2])) {
			blog_structure[arr[0]][arr[1]].push(arr[2])
		}
		var stats = fs.statSync(currentFile)
		if (stats.isFile() && isHTMLFile(files[i])) {
			let title = files[i].slice(0, files[i].lastIndexOf('.'))
			let date_create = stats.birthtime
			let date_update = stats.mtime
			if (files[i] in article_metadata) {
				let d_current = (new Date(date_update)).getTime()
				let d_record = (new Date(article_metadata[files[i]].update)).getTime()
				if (d_current > d_record) {
					article_metadata[files[i]].update = date_update
				}
			} else {
				article_metadata[files[i]] = {"create": date_create, "update": date_update, "title": title}
			}
		}
		else if (stats.isDirectory()) {
			generatedJSON(currentFile)
		}
	}
}
function isHTMLFile(filename) {
	return filename.split('.').pop() == 'html'
}
