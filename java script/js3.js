

var timeHtml = document.getElementById("time");
setInterval(function () {
    var timeNow = new Date()
    timeHtml.innerHTML='<i class="fas fa-calendar-day"></i> '+timeNow.toLocaleString();
} ,1000)


var nameEntered = localStorage.getItem("nameEntered");
var welcome = document.getElementById("nameEntered");
welcome.innerHTML='<i class="far fa-user"></i> '+nameEntered;



