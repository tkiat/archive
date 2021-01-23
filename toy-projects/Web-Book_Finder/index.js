var content = document.getElementById("content");
var searchBtn = document.getElementById("searchBtn");
var spinner  = document.querySelector(".spinner");

searchBtn.onclick = function () {
    spinner.style.display = "inline-block";
    var request = new XMLHttpRequest();
    var q = document.getElementById("query").value.replace(" ", "%20");
    request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + q);
    request.send();
    request.onload = function () {
        spinner.style.display = "none";
        if(this.status != 200)
            return;
        let res = JSON.parse(request.response);
        handleResponse(res);
        console.log(res)
    }

}

function handleResponse(response) {
    content.innerHTML = "";
    if(!response.items){
        content.innerHTML += "<br/>Not Found";
        return;
    }
    for (var i = 0; i < response.items.length; i++) {
        const item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        content.innerHTML += "<br> Title: " + item.volumeInfo.title;
        content.innerHTML += "<br> Author(s): " + (item.volumeInfo.authors ?  item.volumeInfo.authors : "not labeled")  ;
        content.innerHTML += "<br> publishedDate: " + (item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "n/a") + "";
        let imgSrc = (item.volumeInfo.hasOwnProperty('imageLinks')) ? item.volumeInfo.imageLinks.smallThumbnail : "fileNotFound.png";
        content.innerHTML += "<br>" + '<a href='+item.volumeInfo.infoLink+'><img src='+ imgSrc +'></a>';
    }
}
