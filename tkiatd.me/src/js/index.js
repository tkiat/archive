//dom
const sign_container = document.getElementById('sign-container');
const sign_container_link = document.getElementById('sign-container_link');

let signs = [
	{text: 'This', text_color: "white", x_offset: 120, x_offset_flip: 150},
	{text: 'is', text_color: "white", x_offset: 150, x_offset_flip: 180},
	{text: 'the', text_color: "white", x_offset: 140, x_offset_flip: 160},
	{text: 'front', text_color: "white", x_offset: 110, x_offset_flip: 150},
	{text: 'page', text_color: "white", x_offset: 100, x_offset_flip: 140},
	{text: 'of', text_color: "white", x_offset: 140, x_offset_flip: 180},
	{text: 'my', text_color: "white", x_offset: 130, x_offset_flip: 170},
	{text: 'personal', text_color: "white", x_offset: 60, x_offset_flip: 100},
	{text: 'website.', text_color: "white", x_offset: 70, x_offset_flip: 110}
	/*
	{text: 'Click', text_color: "white", x_offset: 110, x_offset_flip: 150},
	{text: 'a', text_color: "white", x_offset: 150, x_offset_flip: 190},
	{text: 'bright', text_color: "white", x_offset: 90, x_offset_flip: 130},
	{text: 'color', text_color: "white", x_offset: 100, x_offset_flip: 150},
	{text: 'sign', text_color: "white", x_offset: 120, x_offset_flip: 150},
	{text: 'to', text_color: "white", x_offset: 140, x_offset_flip: 180},
	{text: 'continue.', text_color: "white", x_offset: 50, x_offset_flip: 100}
	*/
];
var anim_delay = 0;
signs.forEach(sign => {
	anim_delay += 0.05;
	sign_container.appendChild(getRandomSign(sign, anim_delay));
});
signs.forEach(sign => {
	anim_delay += 0.05;
	sign_container.appendChild(getRandomSign(sign, anim_delay));
});
signs.forEach(sign => {
	anim_delay += 0.05;
	sign_container.appendChild(getRandomSign(sign, anim_delay));
});
	/*
let signs_elem = document.body.querySelectorAll('my-sign');
	let rnd_index = Math.floor(Math.random() * signs_elem.length); 
	//sign_container_link.insertBefore(getRandomSign(sign, Math.random() * 2), signs_elem[rnd_index]);
	*/
let signs_clickable = [
	{text: 'About', text_color: "black", x_offset: 90, x_offset_flip: 130, color: 'indianred', clickable: 'true'},
	{text: 'Work', text_color: "black", x_offset: 100, x_offset_flip: 110, color: 'orange', clickable: 'true'},
	{text: 'Blog', text_color: "black", x_offset: 110, x_offset_flip: 150, color: 'lime', clickable: 'true'}
];

signs_clickable.forEach(sign => {
	anim_delay += 0.05;
	let sign_elem = getRandomSign(sign, anim_delay);
	//sign_elem.addEventListener('click', function() {
	//	clearInterval(refresh);
	//});
	sign_container_link.appendChild(sign_elem);
});

function getRandomSign(sign, anim_delay) {
	let scale = 0.55 + Math.random() * 0.3;  //0.55 to 0.85
	let rotate = (Math.random() - 0.5) * 60 + 'deg'; //-30 to 30
	let intensity = 90 + Math.random() * 60;
	let panel_color = sign.color ? sign.color : 'rgb('+intensity+','+intensity+','+intensity+')'
	let isFlip = Math.random() >= 0.5;
	let x_offset = isFlip ? sign.x_offset_flip : sign.x_offset;
	let sign_elem = document.createElement('my-sign');
	if(sign.clickable) {
		scale = 0.6;
		rotate = 0;
		isFlip = false;
		x_offset = sign.x_offset;
	}
	sign_elem.setAttribute('scale', scale);
	sign_elem.setAttribute('deg', rotate);
	sign_elem.setAttribute('is-flip', isFlip);
	sign_elem.setAttribute('clickable', sign.clickable);
	sign_elem.setAttribute('text', sign.text ? sign.text : '');
	sign_elem.setAttribute('text-color', sign.text_color ? sign.text_color : "#000");
	sign_elem.setAttribute('text-xoffset', x_offset);
	sign_elem.setAttribute('text-yoffset', 110);
	sign_elem.setAttribute('panel-color', panel_color);
	sign_elem.setAttribute('animation-delay', anim_delay);
	return sign_elem;
}
/*
var refresh = setInterval(() => {
	document.location.reload(true);
	console.log(signs)
}, screen.width >= 768 ? 7000 : 10000);
*/

