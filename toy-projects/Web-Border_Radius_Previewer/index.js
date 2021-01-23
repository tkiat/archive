var box = document.getElementById('box')
var form = document.getElementById('form')

var topLeft = document.getElementById('top-left')
var topRight = document.getElementById('top-right')
var bottomRight = document.getElementById('bottom-right')
var bottomLeft = document.getElementById('bottom-left')

var css_output = document.getElementById('css_output')

form.addEventListener('change', function(){
    box.style.borderRadius = (topLeft.value || 0) + 'px '+ (topRight.value || 0) + 'px '+ (bottomRight.value || 0) + 'px ' + (bottomLeft.value || 0) + 'px'
    css_output.value = 'border-radius: ' + box.style.borderRadius
})

function css_copy(){
    var copyText = document.getElementById('css_output')
    copyText.select()
    document.execCommand('copy')
    alert('Copied the text: ' + copyText.value)
}
