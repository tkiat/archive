var fs = require('fs');
//hard-coded project-type order from highest to lowest priority
const order = {"Everything": 0, "Project": 1, "Trivial Project": 2, "Code Snippet": 3, "Assignment": 4};

var contents = fs.readFileSync('./static/csv/project-structure.csv', 'utf8').split('\n');
var fields = csvRowToArray(contents[0]);
var final = [];
for(let i = 1; i < contents.length; ++i) {
	if(contents[i] === "") continue;
	let json = {};
	let arr = csvRowToArray(contents[i]);
	fields.forEach((field, index) => {
		json[field] = arr[index];
	});
	final.push(json);
}
//sort by finished date in descending order 
final.sort(function(a, b){
	let a_date = new Date(a.finished);
	let b_date = new Date(b.finished);
	if(isNaN(a_date.getTime())) return 1; 
	if(isNaN(b_date.getTime())) return -1; 
	return b_date - a_date; 
});
final.sort(function(a, b) {
	return order[a.type] - order[b.type];
});
fs.writeFile('static/json/project-structure.json', JSON.stringify(final), (err) => { 
	if (err) throw err; 
}) 

//functions
function csvRowToArray(row) { //assume using a comma as delimiter
	let arr = [];	
	let cur = 0;
	let comma_pos = row.indexOf(',', cur);
	while(comma_pos !== -1) {
		let word = row.substring(cur, comma_pos);
		if(word[0] === '"') {
			cur++;
			let dbquote_pos = row.indexOf('"', cur);
			word = row.substring(cur, dbquote_pos);
			cur = dbquote_pos + 2;
			comma_pos = row.indexOf(',', cur);
		}
		else {
			cur = comma_pos + 1;
			comma_pos = row.indexOf(',', cur);
		}
		arr.push(word);
	}
	let word = row.substring(cur).trimEnd();
	arr.push(word);
	return arr;
}
