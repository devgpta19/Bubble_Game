
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 100; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector('#pbottom').innerHTML = clutter;
}

var time = 3;
function timer() {
    var timerinterval = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector('#timeval').textContent = time;
        }
        else {
            clearInterval(timerinterval);
            document.querySelector("#pbottom").innerHTML = `<h1 style="color:black}" > Game Over <br> Your Score : ${score} </h1>`;
        }
    }, 1000);
}

var rannum;
function getNewHit() {
    rannum = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = rannum;
}

document.querySelector("#pbottom")
.addEventListener("click", function(dets){
    var clicked = Number(dets.target.textContent);
    if( rannum === clicked){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



// var svalue = 0;
// var score = document.querySelector("#pbottom");
// function addScore() {
//     score.addEventListener("click", function () {
//         if (rn === 0) {
//             svalue = svalue + 10;
//             document.querySelector("#scoreval").textContent = svalue;
//         }
//     })
// }

makeBubble();
timer();
getNewHit();
addScore();