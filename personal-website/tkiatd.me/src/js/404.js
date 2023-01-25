let container = document.getElementById('container-404');
let text_404 = ["404: not found", "there's nothing here", "hahahahaha", "go away, we don't have anything to serve", "noah noah noooooo!"];
var fontSize = 10;
var color = 255;
function generateRandomText(){ 
		let text = document.createElement('div');
		let top = Math.floor(Math.random() * 70); 
		let left = Math.floor(Math.random() * 70); 
		//let fontSize = Math.floor(Math.random() * 70) + 20;
		fontSize += 5;
		let textIndex = Math.floor(Math.random() * text_404.length);
		let textContent = text_404[textIndex];
		text.textContent = textContent;
		text.style.position = 'absolute';
		text.style.top = top + '%';
		text.style.left = left + '%';
		text.style.fontSize = fontSize + 'px';
		if(textIndex == 0){
				text.style.color = 'red';
		}
		color -= 8;
		document.body.style.backgroundColor = 'rgb(' + color + ',' + color + ',' + color + ')';
		container.appendChild(text);
}
var counter = 1000;
var limit = 0;  
var myFunction = function() {
		limit++;
		counter -= 40;
		if(limit < 32){
				generateRandomText();
				setTimeout(myFunction, counter);
		}
}
setTimeout(myFunction, counter);
