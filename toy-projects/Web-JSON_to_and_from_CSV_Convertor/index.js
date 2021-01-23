//<button>
var convertBtn = document.getElementById('convertBtn');
var clearBtn = document.getElementById('clearBtn');
var saveBtn = document.getElementById('saveBtn');
var switchBtn = document.getElementById('switch');
//<input>, <textarea>
var input = document.getElementById('input');
var output = document.getElementById('output');
var file = document.getElementById('inputFile');
var fileName = document.getElementById('fileName');
//<h1>, <p>, <span>
var header = document.getElementById('header');
var from = document.getElementById('from');
var to = document.getElementById('to');
var fileExt = document.getElementById('fileExt');
//variable
var mode;

document.body.onload = JSON_to_CSV_desc();

file.onchange = function(){
    const fileList = this.files;
    if(fileList[0]){
        var reader = new FileReader();
        reader.readAsText(fileList[0]);
        reader.onload = function(){
            input.value = reader.result;
        }
    }
}

switchBtn.onclick = function(){
    clearText();
    (mode == 'JSON_to_CSV') ? CSV_to_JSON_desc() : JSON_to_CSV_desc();
}

saveBtn.onclick = function(){
    if(!fileName.value){
        alert('Enter file name');
        return;
    }
    //use FileSaver.js
    var FileSaver = require('file-saver');
    var blob = new Blob([output.value], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, fileName.value + fileExt.innerHTML);
}

convertBtn.onclick = function (e) {
    e.preventDefault();
    if(!input.value){
        alert('Input is empty!');
        return;
    }
    (mode == 'JSON_to_CSV') ? JSON_to_CSV() : CSV_to_JSON();
};

clearBtn.onclick = function (){
    clearText();
}

function JSON_to_CSV_desc() {
    header.innerHTML = 'JSON to CSV Convertor';
    from.innerHTML = 'Enter JSON (nested structures not supported):';
    to.innerHTML = 'Correponding CSV:';
    fileExt.innerHTML = '.csv';
    switchBtn.innerHTML = 'CSV to JSON';

    mode = 'JSON_to_CSV';
}

function CSV_to_JSON_desc() {
    header.innerHTML = 'CSV to JSON Convertor';
    from.innerHTML = 'Enter CSV:';
    to.innerHTML = 'Correponding JSON:';
    fileExt.innerHTML = '.json';
    switchBtn.innerHTML = 'JSON to CSV';

    mode = 'CSV_to_JSON';
}

function JSON_to_CSV(){
    output.value = '';
    try{
        if(input.value[0] == '{'){
            input.value = '[' + input.value + ']';
        }
        let objects = JSON.parse(input.value);
        //print attributes
        let keys = Object.keys(objects[0]);
        output.value += keys.join(',') + '\n';
        //print data
        for(let i = 0; i < objects.length; ++i){
            let values = Object.values(objects[i]);
            output.value += values.join(',') + '\n';
        }
    }
    catch (e) {
        console.log(e)
        alert('Enter valid JSON!!!');
    }
}

function CSV_to_JSON(){
    output.value = '';
    try{
        var csv = input.value;
        var arr = csv.replace(/\'/g, '').split(/\r|\n|\r\n/);
        let objs = [];
        let keys = arr[0].split(',');
        for(let i = 1; i < arr.length; ++i){
            let obj = {};
            let values = arr[i].split(',');
            for(let j = 0; j < keys.length; ++j){
                let value = values[j];
                if(+value){
                    value = +value;
                }
                obj[keys[j]] = value;
            }
            objs.push(obj)
        }
        output.value = JSON.stringify(objs);
    }
    catch (e) {
        console.log(e)
        alert('Enter valid CSV!!!');
    }
}

function clearText(){
    input.value = '';
    output.value = '';
}
