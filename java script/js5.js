

var timeHtml = document.getElementById("time");
setInterval(function () {
    var timeNow = new Date()
    timeHtml.innerHTML = '<i class="fas fa-calendar-day"></i> ' + timeNow.toLocaleString();
}, 1000)


var nameEntered = localStorage.getItem("nameEntered");
var welcome = document.getElementById("nameEntered");
welcome.innerHTML = '<i class="far fa-user"></i> ' + nameEntered;

// 1  <div class='wall'></div>
// 2  <div class='coin'></div>
// 3  <div class='ground'></div>
// 4  <div class='ghost'></div>
// 5  <div class='pacman'></div>


var pacman = {
    x: 6,
    y: 4
}



var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
var world = document.getElementById('world')
function drawWorld() {
    world.innerHTML = '';
    for (let o = 0; o < map.length; o++) {
        for (let i = 0; i < map[o].length; i++) {
            if (map[o][i] == 1) {
                world.innerHTML += "<div class='wall'></div>"
            } else if (map[o][i] == 2) {
                world.innerHTML += "<div class='coin'></div>"
            } else if (map[o][i] == 3) {
                world.innerHTML += "<div class='ground'></div>"
            } else if (map[o][i] == 4) {
                world.innerHTML += "<div class='ghost'></div>"
            } else if (map[o][i] == 5) {
                world.innerHTML += "<div class='pacman'></div>"
            }
        }
        world.innerHTML += "<br>"
    }
}
function clearWorld() {
    for (let o = 0; o < map.length; o++) {
        for (let i = 0; i < map[o].length; i++) {
            map[o][i] = 1
        }

    }
    drawWorld()
}


drawWorld()
var timer = document.getElementById("timer");
var score = document.getElementById("score")
var count = 30
var scoreNow = 0;
var flag = 0;
var over = setInterval(
    function () {
        if (scoreNow == 540) {
            clearWorld()
            world.innerHTML += "<div class='win'></div>"
            var win = document.getElementsByClassName('win')
            win[0].innerHTML = 'Congratulations !!'
            clearInterval(over)
        } else if (count < 0) {
            clearWorld()
            world.innerHTML += "<div class='gameOver'></div>"
            var gameOver = document.getElementsByClassName('gameOver')
            gameOver[0].innerHTML = 'Game Over!!'
            clearInterval(over)
        } else {
            if (count < 10) {
                if (count < 6) {

                    var i = 0

                    var intr = setInterval(function () {
                        if (i % 2 == 0&&i<=4) {
                            timer.style.color = 'red';
                            i++
                        } else if (i % 2 == 1&&i<=4) {
                            timer.style.color = 'white';
                            i++
                        }
                    }, 250)


                }
                timer.innerHTML = 'Time : 00:0' + count
                count--
            } else {
                timer.innerHTML = 'Time : 00:' + count
                count--
            }
        }

    }
    , 1000)





document.onkeyup = function (e) {
    var source = document.getElementsByClassName("pacman");
    if (e.keyCode == 37) {
        if (map[pacman.y][pacman.x - 1] != 1) {
            if (map[pacman.y][pacman.x - 1] == 2) {
                scoreNow = scoreNow + 10
                score.innerHTML = 'Score : ' + scoreNow

            }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld()
            source[0].style.backgroundImage = "url('img/pacmanLeft.png')"

        }
    }
    else if (e.keyCode === 38) {
        if (map[pacman.y - 1][pacman.x] != 1) {
            if (map[pacman.y - 1][pacman.x] == 2) {
                scoreNow = scoreNow + 10
                score.innerHTML = 'Score : ' + scoreNow
            }
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld()
            source[0].style.backgroundImage = "url('img/pacmanUp.png')"

        }
    }
    else if (e.keyCode == 39) {
        if (map[pacman.y][pacman.x + 1] != 1) {
            if (map[pacman.y][pacman.x + 1] == 2) {
                scoreNow = scoreNow + 10
                score.innerHTML = 'Score : ' + scoreNow
            }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld()
            source[0].style.backgroundImage = "url('img/pacman.png')"
        }
    }
    else if (e.keyCode == 40) {
        if (map[pacman.y + 1][pacman.x] != 1) {
            if (map[pacman.y + 1][pacman.x] == 2) {
                scoreNow = scoreNow + 10
                score.innerHTML = 'Score : ' + scoreNow
            }
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld()
            source[0].style.backgroundImage = "url('img/pacmanDawn.png')"
        }
    }
    //max score = 540
}







