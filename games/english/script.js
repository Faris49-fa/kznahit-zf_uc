let selected = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 10;

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const counterEl  = document.getElementById("counter");
const timerEl    = document.getElementById("timer");
const endEl      = document.getElementById("end");
const scoreText  = document.getElementById("scoreText");
const reviewEl   = document.getElementById("review");

function shuffle(arr){
  return arr.sort(()=>Math.random()-0.5);
}

function start(){
  selected = shuffle([...allQuestions]).slice(0,10);
  index = 0;
  score = 0;
  showQuestion();
}

function showQuestion(){
  clearInterval(timer);
  timeLeft = 10;
  timerEl.textContent = "⏱️ 10";

  counterEl.textContent = `السؤال ${index+1} من 10`;
  questionEl.textContent = selected[index].q;
  optionsEl.innerHTML = "";

  const opts = shuffle(
    selected[index].options.map((t,i)=>({t,i}))
  );

  opts.forEach(o=>{
    const btn = document.createElement("button");
    btn.textContent = o.t;
    btn.onclick = ()=>answer(btn,o.i);
    optionsEl.appendChild(btn);
  });

  timer = setInterval(()=>{
    timeLeft--;
    timerEl.textContent = `⏱️ ${timeLeft}`;
    if(timeLeft===0){
      clearInterval(timer);
      next();
    }
  },1000);
}

function answer(btn,i){
  clearInterval(timer);
  const correct = selected[index].answer;
  [...optionsEl.children].forEach(b=>b.disabled=true);

  if(i===correct){
    btn.classList.add("correct");
    score++;
  }else{
    btn.classList.add("wrong");
    optionsEl.children[correct].classList.add("correct");
  }
  setTimeout(next,1500);
}

function next(){
  index++;
  if(index===10) return endGame();
  showQuestion();
}

function endGame(){
  localStorage.setItem("englishScore",score);
  scoreText.textContent = `نتيجتك ${score} من 10`;
  endEl.classList.remove("hidden");

  reviewEl.innerHTML="";
  selected.forEach((q,i)=>{
    reviewEl.innerHTML += `
      <div>
        <b>${i+1}) ${q.q}</b><br>
        ✔️ ${q.options[q.answer]}
      </div>`;
  });

  questionEl.textContent="";
  optionsEl.innerHTML="";
  counterEl.textContent="";
  timerEl.textContent="";
}

function goHome(){
  location.href="../../index.html";
}

start();
