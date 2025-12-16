const numsBox = document.getElementById("numbers");
const ruleEl = document.getElementById("rule");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

let numbers = [];
let order = "asc";
let time = 15;
let timer;
let selected = [];

function randomNumbers(){
  const set = new Set();
  while(set.size < 8){
    set.add(Math.floor(Math.random()*900)+100);
  }
  return [...set];
}

function render(){
  numsBox.innerHTML = "";
  selected = [];
  numbers.forEach(n=>{
    const d = document.createElement("div");
    d.className = "num";
    d.textContent = n;
    d.onclick = ()=>{
      if(!selected.includes(n)){
        selected.push(n);
        d.classList.add("selected");
      }
    };
    numsBox.appendChild(d);
  });
}

function startGame(){
  numbers = randomNumbers();
  order = Math.random() > 0.5 ? "asc" : "desc";
  ruleEl.textContent = order === "asc"
    ? "رتّب الأرقام من الأصغر إلى الأكبر"
    : "رتّب الأرقام من الأكبر إلى الأصغر";

  time = 15;
  timerEl.textContent = time;
  resultEl.textContent = "";
  startBtn.classList.add("hidden");
  checkBtn.classList.remove("hidden");

  render();

  timer = setInterval(()=>{
    time--;
    timerEl.textContent = time;
    if(time === 0){
      endGame(false);
    }
  },1000);
}

function endGame(win){
  clearInterval(timer);
  checkBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
  resultEl.textContent = win ? "✅ صحيح" : "❌ خطأ";
}

checkBtn.onclick = ()=>{
  const correct = [...numbers].sort((a,b)=>order==="asc"?a-b:b-a);
  endGame(JSON.stringify(correct) === JSON.stringify(selected));
};

startBtn.onclick = startGame;
