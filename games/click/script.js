const game = document.getElementById("game");
const paddle = document.getElementById("paddle");
const timeEl = document.getElementById("time");
const heartsEl = document.querySelector(".hearts");
const endBox = document.getElementById("end");
const finalTimeEl = document.getElementById("finalTime");
const bestTimeEl = document.getElementById("bestTime");
const hitSound = document.getElementById("hitSound");

let balls = [];
let lives = 3;
let time = 0;
let speed = 6;
let gameRunning = true;

// تحريك المضرب
game.addEventListener("mousemove", e=>{
  const rect = game.getBoundingClientRect();
  let x = e.clientX - rect.left - paddle.offsetWidth/2;
  x = Math.max(0, Math.min(x, game.clientWidth - paddle.offsetWidth));
  paddle.style.left = x + "px";
});

// للجوال
game.addEventListener("touchmove", e=>{
  const rect = game.getBoundingClientRect();
  let x = e.touches[0].clientX - rect.left - paddle.offsetWidth/2;
  x = Math.max(0, Math.min(x, game.clientWidth - paddle.offsetWidth));
  paddle.style.left = x + "px";
});

// إنشاء كرة
function createBall(){
  if(balls.length >= 3) return;

  const ball = document.createElement("div");
  ball.className = "ball";
  ball.x = Math.random() * (game.clientWidth - 20);
  ball.y = 0;
  ball.vy = speed;

  ball.style.left = ball.x + "px";
  ball.style.top = ball.y + "px";

  game.appendChild(ball);
  balls.push(ball);
}

// تحديث الكرات
function updateBalls(){
  balls.forEach((ball, i)=>{
    ball.y += ball.vy;
    ball.style.top = ball.y + "px";

    // اصطدام بالمضرب
    const pRect = paddle.getBoundingClientRect();
    const bRect = ball.getBoundingClientRect();

    if(
      bRect.bottom >= pRect.top &&
      bRect.left < pRect.right &&
      bRect.right > pRect.left
    ){
      hitSound.currentTime = 0;
      hitSound.play();
      ball.vy *= -1;
    }

    // خرجت
    if(ball.y > game.clientHeight){
      ball.remove();
      balls.splice(i,1);
      loseLife();
    }
  });
}

// خسارة قلب
function loseLife(){
  lives--;
  heartsEl.textContent = "❤️".repeat(lives) + "🖤".repeat(3-lives);
  if(lives <= 0){
    endGame();
  }
}

// المؤقت
setInterval(()=>{
  if(!gameRunning) return;
  time++;
  timeEl.textContent = time;
},1000);

// زيادة الصعوبة
setInterval(()=>{
  speed += 0.5;
},5000);

// إنزال الكرات
setInterval(()=>{
  if(gameRunning) createBall();
},500);

// حلقة اللعب
function loop(){
  if(!gameRunning) return;
  updateBalls();
  requestAnimationFrame(loop);
}
loop();

// نهاية اللعبة
function endGame(){
  gameRunning = false;
  endBox.classList.remove("hidden");
  finalTimeEl.textContent = time;

  const best = localStorage.getItem("bestClickTime") || 0;
  if(time > best){
    localStorage.setItem("bestClickTime", time);
    bestTimeEl.textContent = time;
  }else{
    bestTimeEl.textContent = best;
  }
}
