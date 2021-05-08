var screenHeight =  screen.height;
var gallery = document.getElementById("gallery");
// gallery.style.height=(screenHeight)+'px';

var timeHtml = document.getElementById("time");
setInterval(function () {
    var timeNow = new Date()
    timeHtml.innerHTML='<i class="fas fa-calendar-day"></i> '+timeNow.toLocaleString();
} ,1000)
var firstImg = document.getElementsByClassName('image')[0]
var selected = firstImg.children[0].src
var bigImg = document.getElementById("bigImg")
var imgs = document.getElementsByClassName('image')
// bigImg.style.height = (screenHeight-210)+'px' 
for (var img of imgs) {
    img.onclick = function(event){
        selected = event.target.src;
        bigImg.src = event.target.src;
        bigImg.style.filter= 'grayscale(0%)'
    } 
    img.onmouseover = function(event){
        bigImg.src = event.target.src;
        bigImg.style.filter= 'grayscale(100%)';
    };  
    img.onmouseout = function(){
        bigImg.src = selected;
        bigImg.style.filter= 'grayscale(0%)'
    };
}



var nameEntered = localStorage.getItem("nameEntered");
var welcome = document.getElementById("nameEntered");
welcome.innerHTML='<i class="far fa-user"></i> '+nameEntered;



