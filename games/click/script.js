const game = document.getElementById("game");
const paddle = document.getElementById("paddle");
const timeEl = document.getElementById("time");
const heartsEl = document.getElementById("hearts");
const endBox = document.getElementById("end");
const finalTime = document.getElementById("finalTime");

let balls = [];
let lives = 3;
let time = 0;
let running = true;

const gravity = 0.35;
const bouncePower = -8;
const maxBalls = 2;

// ================== تحريك اللوح ==================
game.addEventListener("mousemove", e => {
  const rect = game.getBoundingClientRect();
  let x = e.clientX - rect.left - paddle.offsetWidth / 2;
  paddle.style.left = Math.max(0, Math.min(x, game.clientWidth - paddle.offsetWidth)) + "px";
});

game.addEventListener("touchmove", e => {
  const rect = game.getBoundingClientRect();
  let x = e.touches[0].clientX - rect.left - paddle.offsetWidth / 2;
  paddle.style.left = Math.max(0, Math.min(x, game.clientWidth - paddle.offsetWidth)) + "px";
});

// ================== إنشاء كرة ==================
function spawnBall() {
  if (balls.length >= maxBalls) return;

  const ball = document.createElement("div");
  ball.className = "ball";
  game.appendChild(ball);

  const obj = {
    el: ball,
    x: Math.random() * (game.clientWidth - 20),
    y: 0,
    vy: 2 + Math.random() * 2
  };

  ball.style.left = obj.x + "px";
  ball.style.top = obj.y + "px";

  balls.push(obj);
}

// ================== تحديث الكرات ==================
function updateBalls() {
  balls.forEach((b, i) => {
    b.vy += gravity;
    b.y += b.vy;

    // اصطدام باللوح
    const paddleRect = paddle.getBoundingClientRect();
    const ballRect = b.el.getBoundingClientRect();

    if (
      ballRect.bottom >= paddleRect.top &&
      ballRect.left < paddleRect.right &&
      ballRect.right > paddleRect.left &&
      b.vy > 0
    ) {
      b.vy = bouncePower;
      playHitSound();
    }

    // سقطت
    if (b.y > game.clientHeight) {
      b.el.remove();
      balls.splice(i, 1);
      loseLife();
    } else {
      b.el.style.top = b.y + "px";
    }
  });
}

// ================== خسارة محاولة ==================
function loseLife() {
  lives--;
  heartsEl.innerHTML = "❤️".repeat(lives) + "🖤".repeat(3 - lives);

  if (lives <= 0) endGame();
}

// ================== المؤقت (تصاعدي) ==================
setInterval(() => {
  if (!running) return;
  time++;
  timeEl.textContent = time;
}, 1000);

// ================== توليد كرات ==================
setInterval(() => {
  if (running) spawnBall();
}, 5000);

// ================== لوب ==================
function loop() {
  if (!running) return;
  updateBalls();
  requestAnimationFrame(loop);
}
loop();

// ================== نهاية اللعبة ==================
function endGame() {
  running = false;
  endBox.style.display = "block";
  finalTime.textContent = time;

  const best = Math.max(time, localStorage.getItem("bestClick") || 0);
  localStorage.setItem("bestClick", best);
}

// ================== صوت ==================
function playHitSound() {
  const s = new Audio("hit.mp3");
  s.play();
}
