let gameseq = [];
let userseq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelector(".btn");

document.addEventListener("keypress", function () {
    if (started == 0) {
        console.log("game is started");
        started = true;
        levelup();
    }
})

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log("randIdx =", randIdx);
    // console.log("randcolor =", randcolor);
    // console.log("randbtn=", randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);

    btnflash(randbtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function checkans(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `gameover! your score is [${level}] press any key to start the game again .`;
        // document.querySelector(body).style.backgroundcolor = "red";
        // setTimeout(function () {
        //     document.querySelector(body).style.backgroundcolor = "white";
        // }, 1000);
        reset();
    }
}

function btnpress() {
    let btn = this;
    btnflash(btn);
    console.log(this);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}


let allbtn = document.querySelectorAll(".btn");

for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}