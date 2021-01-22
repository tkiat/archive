var fs = require('fs');
var path = 'work';
var json = '{';
var currentFolderName = '';
function generatedDirJSON(currentPath) {
	var files = fs.readdirSync(currentPath).sort(function(a, b){
		let a_date = new Date(a.split('--')[0]);
		let b_date = new Date(b.split('--')[0]);
		return b_date - a_date; 
	});

	for(let i in files) {
		var currentFile = currentPath + '/' + files[i];
		var stats = fs.statSync(currentFile);

		if(stats.isFile()) {
			var contents = fs.readFileSync(currentFile, 'utf8');
			contents = contents.split('\n');
			json += '{';
			let updated = files[i].split('--')[0];
			json += '"updated":"' + updated + '",'
			let j = 1;
			while(j < contents.length && contents[j].substring(0, 3) !== '-->') {
				json += contents[j].trimEnd() + ',';
				++j;
			}
			json += '"type": "' + currentFolderName + '"}';
			if(i < files.length - 1) json += ',';
		}
		else if (stats.isDirectory()) {
			if(currentPath !== path) json += '{';
			currentFolderName = files[i];
			json += '"' + currentFolderName + '":[';
			generatedDirJSON(currentFile);
			json += ']'
			if(currentPath !== path) json += '}';
			if(i < files.length - 1) json += ',';
		}
	}
};
generatedDirJSON(path);
json += '}';
fs.writeFile('static/json/project-structure.json', json, (err) => { 
	if (err) throw err; 
}) 
