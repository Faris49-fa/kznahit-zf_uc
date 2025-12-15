const board = document.getElementById("board");
const timeEl = document.getElementById("time");
const endBox = document.getElementById("end");
const resultEl = document.getElementById("result");

let time = 60;
let timer;
let tiles = [];

// إنشاء المكعبات
function initGame(){
  tiles = [...Array(15).keys()].map(n => n + 1);
  tiles.push(null); // مربع فاضي
  shuffle(tiles);
  render();
  startTimer();
}

// خلط
function shuffle(arr){
  arr.sort(() => Math.random() - 0.5);
}

// رسم اللوحة
function render(){
  board.innerHTML = "";
  tiles.forEach((num, i) => {
    const div = document.createElement("div");
    if(num === null){
      div.className = "tile empty";
    }else{
      div.className = "tile";
      div.textContent = num;
      div.onclick = () => move(i);
    }
    board.appendChild(div);
  });
}

// تحريك
function move(index){
  const emptyIndex = tiles.indexOf(null);
  const allowed = [
    index - 1,
    index + 1,
    index - 4,
    index + 4
  ];

  if(allowed.includes(emptyIndex)){
    [tiles[index], tiles[emptyIndex]] =
    [tiles[emptyIndex], tiles[index]];
    render();
    checkWin();
  }
}

// فحص الفوز
function checkWin(){
  const win = [...Array(15).keys()].every((n,i)=>tiles[i]===n+1);
  if(win){
    end("🎉 فزت!");
  }
}

// المؤقت
function startTimer(){
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
    if(time === 0){
      end("⏰ انتهى الوقت");
    }
  },1000);
}

// نهاية اللعبة
function end(text){
  clearInterval(timer);
  board.innerHTML = "";
  resultEl.textContent = text;
  endBox.classList.remove("hidden");
}

// تشغيل
initGame();
