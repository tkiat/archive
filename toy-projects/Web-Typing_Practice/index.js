var text = document.querySelector('.text');
var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
// var str = "I go to school";
str = str.replace(/ /g, "_");
text.innerHTML = str;

//generate keyboard layout
var layoutDE_shiftOff = ["1234567890ß", "qwertzuiopü+", "asdfghjklöä#", "<yxcvbnm,.-"];
var layoutDE_shiftOn = ["!\"§$%&/()=?", "QWERTZUIOPÜ*", "ASDFGHJKLÖÄ'", ">YXCVBNM;:_"];
var keyboard_shiftOff = document.querySelector(".layout_shiftOff");
var keyboard_shiftOn = document.querySelector(".layout_shiftOn");

generateKeyboard(keyboard_shiftOff, layoutDE_shiftOff);
generateKeyboard(keyboard_shiftOn, layoutDE_shiftOn);

function generateKeyboard(keyboard, layout){
	for(let i = 0; i < layout.length; ++i){
		for(let j = 0; j < layout[i].length; ++j){
			let letter = layout[i][j];
			//insert <li id=`${letter}`>${letter}</li>
			let node = document.createElement("li");
			node.setAttribute("id", letter);
			let textnode = document.createTextNode(letter);
			node.appendChild(textnode);
			keyboard.appendChild(node);
		}
		keyboard.innerHTML += "<br/>";
	}
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

var flag = 0;
var counter = 0;

function keyUp(e){
	if(e.key === "Shift"){
		let temp = document.querySelector(".layout_shiftOff");
		let temp2 = document.querySelector(".layout_shiftOn");
		temp.classList.toggle("invisible");
		temp2.classList.toggle("invisible");
		flag = 0;
	}
}
var numError = 0;
var numCorrect = 0;
var numErrorFlag = 0;
var prevElem;

function keyDown(e){
	let key;
	if(e.shiftKey){
		if(!flag){
			let temp = document.querySelector(".layout_shiftOff");
			let temp2 = document.querySelector(".layout_shiftOn");
			temp.classList.toggle("invisible");
			temp2.classList.toggle("invisible");
			flag = 1;
		}
		key = e.key.toUpperCase();
	}
	else{
		key = e.key.toLowerCase();
	}
	
	let elem = document.getElementById(key);
	if(prevElem && elem){
		prevElem.classList.toggle("pressed");
	}
	if(elem){
		elem.classList.toggle("pressed");
		prevElem = elem;
		//check if matched
		if(e.key !== text.innerHTML[0] && !(e.keyCode == 32 && text.innerHTML[0] === "_")){
			if(!numErrorFlag){
				++numError;
				text.classList.toggle("error");
				numErrorFlag = 1;
			}
		}
		else{
			++numCorrect;
			if(numErrorFlag){
				text.classList.toggle("error");
				numErrorFlag = 0;
			}
			text.innerHTML = str.substring(counter + 1);
			++counter;
		}
		let accuracy = (numCorrect - numError)/numCorrect * 100;
		document.getElementById("accuracy").innerHTML = (accuracy <= 0 ? 0 : accuracy)  + "%";
	}
	if(!text.innerHTML){
		alert("finished")
		window.removeEventListener('keydown', keyDown);
		window.removeEventListener('keyup', keyUp);
	}
}
