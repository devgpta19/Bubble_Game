
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 100; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector('#pbottom').innerHTML = clutter;
}

function gameOver() {
    document.querySelector("#pbottom").innerHTML = `<div id="over">
    <div id="btn">
        <h1>Your Score = ${score}</h1>
        <p>press<span> RESTART </span>to <span>re</span>start the game</p>
        <a href="./index1.html"><button>Restart</button></a>
    </div>
</div>`
}

var time = 60;
function timer() {
    var timerinterval = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector('#timeval').textContent = time;
        }
        else {
            clearInterval(timerinterval);
            gameOver();
        }
    }, 1000);
}

var rannum;
function getNewHit() {
    rannum = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = rannum;
}

document.querySelector("#pbottom")
    .addEventListener("click", function (dets) {
        var clicked = Number(dets.target.textContent);
        if (rannum === clicked) {
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


makeBubble();
timer();
getNewHit();
addScore();