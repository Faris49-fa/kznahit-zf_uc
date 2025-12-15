const area = document.getElementById("area");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endBox = document.getElementById("end");
const finalScore = document.getElementById("finalScore");

let score = 0;
let time = 30;
let gameInterval;
let timerInterval;

// إنشاء بطة
function createDuck(){
    const duck = document.createElement("div");
    duck.className = "duck";
    duck.textContent = "🦆";

    duck.style.left = Math.random() * (area.clientWidth - 40) + "px";
    duck.style.top = Math.random() * (area.clientHeight - 40) + "px";

    duck.onclick = () => {
        score++;
        scoreEl.textContent = score;
        duck.remove();
    };

    area.appendChild(duck);

    setTimeout(() => {
        duck.remove();
    }, 2000);
}

// المؤقت
function startTimer(){
    timerInterval = setInterval(() => {
        time--;
        timeEl.textContent = time;

        if(time === 0){
            endGame();
        }
    }, 1000);
}

// نهاية اللعبة
function endGame(){
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    area.innerHTML = "";
    finalScore.textContent = score;
    endBox.style.display = "block";
    localStorage.setItem("duckScore", score);
}

// بدء اللعبة
gameInterval = setInterval(createDuck, 700);
startTimer();
