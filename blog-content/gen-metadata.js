// Format:
// {
// 	"Software": {
// 			"Cloud": [
// 				{
// 					"title": "Supercell_Scaling_Mobile_Games_at_AWS_2018_Talks_Summary",
// 					"modified": "2020-09-20 04:19:12 PM (GMT +07)\n"
// 				}
// 			]
// 	}
// }
var fs = require('fs')
var pathBlog = '/mnt/Shared/Git/blog-content/article'

var path_blog_structure   = '/mnt/Shared/Git/blog-content/metadata/blog-structure.json'
var blog_structure = {}
generatedJSON(pathBlog)
fs.writeFile(path_blog_structure, JSON.stringify(blog_structure, null, 2), (err) => {
	if (err) throw err
})
// function
function getFileFirstLine(filePath) {
	try {
		return fs.readFileSync(filePath, {encoding: 'utf-8'})
	} catch(err) {
		return 'N/A'
	}
}
function createFileIfNotExist(filePath, content) {
	try {
		fs.openSync(filePath, 'r')
	} catch(err) {
		fs.writeFileSync(filePath, content, null)
	}
}
function generatedJSON(currentPath) {
	var files = fs.readdirSync(currentPath)
	for (var i in files) {
		var currentFile = currentPath + '/' + files[i]
		// arr[0] = category, arr[1] = subcategory, arr[2] = article
		let arr = currentFile.slice((pathBlog + '/').length).split('/')
		if (arr.length == 1) {
			blog_structure[arr[0]] = {}
		} else if (arr.length == 2) {
			blog_structure[arr[0]][arr[1]] = []
		} else if (arr.length == 3) {
			let articleMetadata = {title: arr[2], modified: getFileFirstLine(currentFile + '/modified')}
			blog_structure[arr[0]][arr[1]].push(articleMetadata)
		}
		var stats = fs.statSync(currentFile)
		if (stats.isDirectory()) {
			generatedJSON(currentFile)
		}
	}
}
