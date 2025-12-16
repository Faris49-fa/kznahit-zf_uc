const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const paddle = {
  w: window.innerWidth < 600 ? 140 : 100,
  h: 15,
  x: canvas.width/2 - 50,
  y: canvas.height - 40
};

let balls = [];
let lives = 3;
let time = 0;
let speed = 2;
let gameOver = false;

const hearts = document.querySelectorAll(".heart");
const timeEl = document.getElementById("time");
const endScreen = document.getElementById("endScreen");
const finalTime = document.getElementById("finalTime");
const hitSound = document.getElementById("hitSound");

// تحريك المضرب
function movePaddle(x){
  paddle.x = x - paddle.w/2;
  if(paddle.x < 0) paddle.x = 0;
  if(paddle.x + paddle.w > canvas.width)
    paddle.x = canvas.width - paddle.w;
}

canvas.addEventListener("mousemove", e=>{
  movePaddle(e.clientX);
});

canvas.addEventListener("touchmove", e=>{
  movePaddle(e.touches[0].clientX);
});

// إنشاء كرة
function spawnBall(){
  balls.push({
    x: Math.random() * (canvas.width-20)+10,
    y: -10,
    r: 8,
    dy: speed
  });
}

// رسم
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // المضرب
  ctx.fillStyle="#fff";
  ctx.fillRect(paddle.x,paddle.y,paddle.w,paddle.h);

  // الكرات
  ctx.fillStyle="#fff";
  balls.forEach(b=>{
    ctx.beginPath();
    ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
    ctx.fill();
  });
}

// تحديث
function update(){
  if(gameOver) return;

  balls.forEach((b,i)=>{
    b.y += b.dy;

    // اصطدام بالمضرب
    if(
      b.y + b.r > paddle.y &&
      b.x > paddle.x &&
      b.x < paddle.x + paddle.w
    ){
      hitSound.currentTime = 0;
      hitSound.play();
      b.dy = -b.dy;
    }

    // سقوط
    if(b.y > canvas.height){
      balls.splice(i,1);
      loseLife();
    }
  });
}

// خسارة قلب
function loseLife(){
  lives--;
  hearts[lives].style.filter = "grayscale(1)";
  if(lives === 0){
    endGame();
  }
}

// نهاية اللعبة
function endGame(){
  gameOver = true;
  finalTime.textContent = time;
  endScreen.style.display="flex";
}

// لوب
function loop(){
  draw();
  update();
  requestAnimationFrame(loop);
}

// الوقت
setInterval(()=>{
  if(!gameOver){
    time++;
    timeEl.textContent = time;

    // زيادة الصعوبة
    if(time % 5 === 0){
      speed += 0.5;
      if(balls.length < 2) spawnBall();
    }
  }
},1000);

// بداية
spawnBall();
loop();
