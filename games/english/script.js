// ===== الأسئلة موجودة في index.html باسم allQuestions =====

let questions = [];
let currentIndex = 0;
let score = 0;
let timer = 10;
let interval = null;
let lock = false;

// عناصر الصفحة
const qNumEl = document.getElementById("questionNumber");
const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const endEl = document.getElementById("end");

// خلط
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// بدء اللعبة
function startGame() {
  questions = shuffle([...allQuestions]).slice(0, 10);
  currentIndex = 0;
  score = 0;
  showQuestion();
}

// عرض سؤال
function showQuestion() {
  lock = false;
  clearInterval(interval);

  if (currentIndex >= questions.length) {
    endGame();
    return;
  }

  const q = questions[currentIndex];

  qNumEl.textContent = `السؤال ${currentIndex + 1} من 10`;
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";

  // المؤقت
  timer = 10;
  timerEl.textContent = `⏱ ${timer}`;
  interval = setInterval(() => {
    timer--;
    timerEl.textContent = `⏱ ${timer}`;
    if (timer === 0) {
      clearInterval(interval);
      revealAnswer(-1);
    }
  }, 1000);

  // خلط الخيارات
  const mixed = q.options
    .map((t, i) => ({ text: t, index: i }))
    .sort(() => Math.random() - 0.5);

  mixed.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.text;
    btn.onclick = () => revealAnswer(opt.index, btn);
    optionsEl.appendChild(btn);
  });
}

// إظهار الصح والخطأ
function revealAnswer(selected, btn) {
  if (lock) return;
  lock = true;
  clearInterval(interval);

  const q = questions[currentIndex];
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (q.options.indexOf(b.textContent) === q.answer) {
      b.classList.add("correct");
    }
  });

  if (selected === q.answer) {
    score++;
    if (btn) btn.classList.add("correct");
  } else if (btn) {
    btn.classList.add("wrong");
  }

  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 2000);
}

// نهاية اللعبة
function endGame() {
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  qNumEl.textContent = "";
  timerEl.textContent = "";

  localStorage.setItem("lastScore", score);

  endEl.classList.remove("hidden");
  endEl.innerHTML = `
    <h2>انتهت الأسئلة</h2>
    <p>درجتك: ${score} / 10</p>
    <button onclick="goHome()">العودة للصفحة الرئيسية</button>
  `;
}

// زر العودة
function goHome() {
  window.location.href = "../../index.html";
}

startGame();
