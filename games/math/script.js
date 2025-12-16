// ===============================
// الأسئلة (كما هي - لا لمس)
// ===============================
/* افترض إن كود allQuestions موجود فوق
   وناتج quizQuestions جاهز */

// ===============================
// عناصر الصفحة
// ===============================
const qNumEl = document.getElementById("q-number");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const backBtn = document.getElementById("backBtn");

// ===============================
let index = 0;
let score = 0;
let timer;
let timeLeft = 10;
let userAnswers = []; // حفظ إجابات المستخدم

// ===============================
// عرض سؤال
// ===============================
function showQuestion(){
  clearInterval(timer);
  optionsEl.innerHTML = "";
  timeLeft = 10;
  timerEl.textContent = timeLeft;

  if(index >= quizQuestions.length){
    endGame();
    return;
  }

  qNumEl.textContent = `السؤال ${index + 1} / 10`;
  questionEl.textContent = quizQuestions[index].q;

  quizQuestions[index].o.forEach((text, i)=>{
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = text;
    btn.onclick = ()=> selectAnswer(i, btn);
    optionsEl.appendChild(btn);
  });

  startTimer();
}

// ===============================
// المؤقت (10 ثواني تنازلي)
// ===============================
function startTimer(){
  timer = setInterval(()=>{
    timeLeft--;
    timerEl.textContent = timeLeft;

    if(timeLeft <= 0){
      clearInterval(timer);
      userAnswers.push(null); // لم يُجب
      index++;
      showQuestion();
    }
  },1000);
}

// ===============================
// اختيار إجابة
// ===============================
function selectAnswer(choice, btn){
  clearInterval(timer);
  userAnswers.push(choice);

  if(choice === quizQuestions[index].a){
    score++;
  }

  index++;
  showQuestion();
}

// ===============================
// نهاية اللعبة
// ===============================
function endGame(){
  questionEl.textContent = "انتهت الأسئلة";
  optionsEl.innerHTML = "";
  timerEl.textContent = "";
  qNumEl.textContent = "";

  resultEl.innerHTML = `درجتك: ${score} / 10`;
  localStorage.setItem("lastMathScore", score);

  backBtn.style.display = "block";
}

// ===============================
// زر العودة
// ===============================
backBtn.onclick = ()=>{
  window.location.href = "../../index.html"; 
};

// ===============================
showQuestion();
