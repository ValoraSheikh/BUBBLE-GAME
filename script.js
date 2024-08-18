let score = 0;
let timer = 60;
let randomNumber;

function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    randomNumber = Math.floor(Math.random() * 10) ;
    document.querySelector("#hitval").textContent = randomNumber;
}

function makeBubble() {
    getNewHit();  // Call getNewHit() at the beginning of makeBubble()
    let clutter = ""; 
    for (let i = 1; i <= 176; i++) {
        let no = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${no}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtime() {
    let timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over you have Score: ${score}</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (e) {
    let clicked = Number(e.target.textContent);
    if (clicked === randomNumber) {
        incScore();
        makeBubble();
    }
});

makeBubble();
runtime();
