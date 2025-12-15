// ============================
// جلب الأسئلة من index.html
// ============================
const allQuestions = Array.from(document.querySelectorAll(".question-data")).map(q => ({
  question: q.dataset.question,
  options: JSON.parse(q.dataset.options),
  answer: Number(q.dataset.answer)
}));

// ============================
// عناصر الصفحة
// ============================
const qNumEl = document.getElementById("q-number");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const backBtn = document.getElementById("backBtn");

// ============================
let questions = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 10;
let locked = false;

// ============================
// خلط
// ============================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ============================
// بدء اللعبة
// ============================
function startGame() {
  questions = shuffle([...allQuestions]).slice(0, 10);
  index = 0;
  score = 0;
  showQuestion();
}

// ============================
// عرض سؤال
// ============================
function showQuestion() {
  locked = false;
  optionsEl.innerHTML = "";
  timeLeft = 10;
  timerEl.textContent = timeLeft;

  if (index >= questions.length) {
    endGame();
    return;
  }

  qNumEl.textContent = `السؤال ${index + 1} / 10`;
  questionEl.textContent = questions[index].question;

  const mixed = shuffle(
    questions[index].options.map((t, i) => ({ t, i }))
  );

  mixed.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.t;
    btn.onclick = () => choose(btn, opt.i);
    optionsEl.appendChild(btn);
  });

  startTimer();
}

// ============================
// المؤقت
// ============================
function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      reveal(null);
    }
  }, 1000);
}

// ============================
// اختيار إجابة
// ============================
function choose(btn, i) {
  if (locked) return;
  locked = true;
  clearInterval(timer);
  reveal(i);
}

// ============================
// إظهار الصح والخطأ
// ============================
function reveal(selected) {
  const correct = questions[index].answer;
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add("correct");
    if (i === selected && i !== correct) b.classList.add("wrong");
  });

  if (selected === correct) score++;

  setTimeout(() => {
    index++;
    showQuestion();
  }, 2000);
}

// ============================
// النهاية
// ============================
function endGame() {
  questionEl.textContent = "انتهت الأسئلة";
  optionsEl.innerHTML = "";
  qNumEl.textContent = "";
  timerEl.textContent = "";

  resultEl.innerHTML = `درجتك: ${score} / 10`;
  localStorage.setItem("lastScore", score);

  backBtn.style.display = "block";
}

// ============================
startGame();
