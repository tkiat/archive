var regExInput = document.getElementById('regExInput')
var stringInput = document.querySelector('.string__input')
var stringHighlight = document.querySelector('.string__highlight')
var dropdownItems = document.getElementsByClassName('dropdown__item')
var dropdownBtn = document.querySelector('.dropdown__button')
var dropdownList = document.querySelector('.dropdown__list')
var flagList = {
	'g': false,
	'i': false,
	'm': false,
	's': false,
	'u': false,
	'y': false
}
var flag_current = ''
// events
regExInput.oninput = highlight
stringInput.oninput = highlight

stringInput.onscroll = function(){
	stringHighlight.scrollTop = stringInput.scrollTop
}
dropdownBtn.onclick = show_hide
for (var i = 0; i < dropdownItems.length; i++) {
	dropdownItems[i].onclick = show_hide
}
window.onclick = function(e){
	if(e.target != dropdownBtn){
		dropdownList.style.display = 'none'
	}
}
//functions
function flagList_update(){
	flag_current = ''
	for(let i in flagList){
		flag_current += flagList[i] ? i : ''
	}
}
function highlight() {
	try{
		let str = stringInput.value
		stringHighlight.innerHTML = str
		let reg = new RegExp(regExInput.value, '' + flag_current)
		//find unique matches
		let matches = str.match(reg)
		let set = new Set(matches)
		let uniqueMatches = Array.from(set)
		//highlight all matches
		let mapObj = {}
		for(const k of set.values()){
			mapObj[k] = `<mark>${k}</mark>`
		}
		let reg2 = new RegExp(uniqueMatches.join('|'), '' + flag_current)
		stringHighlight.innerHTML = stringHighlight.innerHTML.replace(reg2, function(matched){
			return mapObj[matched]
		})
	}
	catch(e){
		console.log(e)
	}
}
function show_hide(e){
	if(e && e.target.classList.contains('dropdown__item')){
		e.target.classList.toggle('dark')
		let flag = e.target.getAttribute('data-flag')
		flagList[flag] = !flagList[flag]
		flagList_update()
		dropdownBtn.innerHTML = '/ ' + flag_current + ' '
		highlight()
	}
	dropdownList.style.display = (dropdownList.style.display === 'block') ? 'none' : 'block'
}
