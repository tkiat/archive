var fs = require('fs');
var path = 'article';
var json = '{';

generatedDirJSON(path);
json += '}';
fs.writeFile('static/json/blog-structure.json', json, (err) => { 
	if (err) throw err; 
}) 
//functions
function generatedDirJSON(currentPath) {
	var files = fs.readdirSync(currentPath);

	for (var i in files) {
		var currentFile = currentPath + '/' + files[i];
		var stats = fs.statSync(currentFile);

		if (stats.isFile()) {
			//var contents = fs.readFileSync(currentFile, 'utf8');
			//let title = contents.split('\n')[0].replace('\r', '').slice(4, -3);
			let bp1 = files[i].indexOf('-');
			let bp2 = files[i].lastIndexOf('.');
			let date = files[i].substring(0, bp1);
			let title = files[i].substring(bp1 + 1, bp2);
			let ext = files[i].substring(bp2 + 1);
			json += '{"date":"' + date + '","title":"' + title + '","ext":"' + ext + '"}';
			if(i < files.length - 1) json += ',';
		}
		else if (stats.isDirectory()) {
			if(currentPath !== path) json += '{';
			let folderName = files[i];
			json += '"' + folderName + '":[';
			generatedDirJSON(currentFile);
			json += ']'
			if(currentPath !== path) json += '}';
			if(i < files.length - 1) json += ',';
		}
	}
};
