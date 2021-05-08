alert("Welcome")
var
    name,
    nameEntered,
    container = document.getElementById("container"),
    welcomeH = document.createElement("h1"),
    timeHtml = document.getElementById("time"),
    bigTime = document.getElementById('bigTime'),
    welcomeName = document.getElementById("nameEntered");

function prompt1() {
    name = prompt('Please enter your name ');
    if (!name) {
        return prompt1()
    }else{
        return name
    }
}
nameEntered = prompt1()
container.appendChild(welcomeH);
welcomeH.innerHTML = 'Welcome ' + nameEntered;
welcomeName.innerHTML = '<i class="far fa-user"></i> ' + nameEntered;
localStorage.setItem("nameEntered", nameEntered);
setInterval(function () {
    var timeNow = new Date()
    timeHtml.innerHTML = '<i class="fas fa-calendar-day"></i> ' + timeNow.toLocaleString();
    timeHtml.onclick = function () {
        setInterval(function () {
            var timeNow = new Date()
            bigTime.innerHTML = timeNow.toLocaleString();
        }
            , 500)
    }
}, 500)




var
    redBtn = document.getElementById("red"),
    yellowBtn = document.getElementById("yellow"),
    greenBtn = document.getElementById("green"),
    blueBtn = document.getElementById("blue"),
    randomBtn = document.getElementById("random"),
    body = document.getElementById("body");


redBtn.style.background = 'red';
greenBtn.style.background = 'green';
yellowBtn.style.background = 'yellow';
blueBtn.style.background = 'blue';

redBtn.onclick = function () { body.style.background = 'red'; body.style.transition = '4s'; welcomeH.style.color = 'white'; welcomeH.style.transition = '4s' }
greenBtn.onclick = function () { body.style.background = 'green'; body.style.transition = '4s'; welcomeH.style.transition = '4s'; welcomeH.style.color = 'white' }
yellowBtn.onclick = function () { body.style.background = 'yellow'; body.style.transition = '4s'; welcomeH.style.transition = '4s'; welcomeH.style.color = 'white' }
blueBtn.onclick = function () { body.style.background = 'blue'; body.style.transition = '4s'; welcomeH.style.transition = '4s'; welcomeH.style.color = 'white' }
randomBtn.onclick = function () {
    var
        x = Math.floor(Math.random() * 256),
        y = Math.floor(Math.random() * 256),
        z = Math.floor(Math.random() * 256),
        randomBackground = "rgb(" + x + "," + y + "," + z + ")";
    body.style.background = randomBackground
    body.style.transition = '4s';
    welcomeH.style.transition = '4s';
    randomBtn.style.backgroundColor = randomBackground
    welcomeH.style.color = 'white'
}


