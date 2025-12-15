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
let timer;
let timeLeft = 10;

// نحفظ إجابات المستخدم
let userAnswers = [];

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
  userAnswers = [];
  showQuestion();
}

// ============================
// عرض سؤال
// ============================
function showQuestion() {
  clearInterval(timer);
  optionsEl.innerHTML = "";
  timeLeft = 10;
  timerEl.textContent = timeLeft;

  if (index >= questions.length) {
    endGame();
    return;
  }

  qNumEl.textContent = `السؤال ${index + 1} / 10`;
  questionEl.textContent = questions[index].question;

  questions[index].options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = text;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });

  startTimer();
}

// ============================
// المؤقت
// ============================
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      userAnswers.push(null); // ما جاوب
      index++;
      showQuestion();
    }
  }, 1000);
}

// ============================
// اختيار إجابة
// ============================
function selectAnswer(choice) {
  clearInterval(timer);
  userAnswers.push(choice);
  index++;
  showQuestion();
}

// ============================
// النهاية + تحليل الإجابات
// ============================
function endGame() {
  questionEl.textContent = "انتهت الأسئلة";
  optionsEl.innerHTML = "";
  qNumEl.textContent = "";
  timerEl.textContent = "";

  let score = 0;
  resultEl.innerHTML = "";

  questions.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "result-card";

    const user = userAnswers[i];
    const correct = q.answer;

    if (user === correct) {
      card.classList.add("correct");
      score++;
    } else if (user === null) {
      card.classList.add("empty");
    } else {
      card.classList.add("wrong");
    }

    card.innerHTML = `
      <strong>${i + 1}) ${q.question}</strong><br>
      جوابك: ${user === null ? "لم يتم الاختيار" : q.options[user]}<br>
      الجواب الصحيح: ${q.options[correct]}
    `;

    resultEl.appendChild(card);
  });

  resultEl.insertAdjacentHTML(
    "afterbegin",
    `<h3>درجتك: ${score} / 10</h3>`
  );

  localStorage.setItem("lastScore", score);
  backBtn.style.display = "block";
}

// ============================
startGame();
