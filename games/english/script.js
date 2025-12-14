// ============================
// إعدادات
// ============================
let currentIndex = 0;
let score = 0;
let selectedQuestions = [];
let locked = false;

// عناصر HTML
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const counterEl = document.getElementById("counter");

// ============================
// خلط
// ============================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ============================
// بدء الاختبار
// ============================
function startQuiz() {
  selectedQuestions = shuffle([...allQuestions]).slice(0, 10);
  currentIndex = 0;
  score = 0;
  showQuestion();
}

// ============================
// عرض سؤال
// ============================
function showQuestion() {
  locked = false;
  optionsEl.innerHTML = "";

  if (currentIndex >= selectedQuestions.length) {
    questionEl.textContent = "انتهت الأسئلة";
    counterEl.textContent = `درجتك: ${score} / 10`;
    return;
  }

  const q = selectedQuestions[currentIndex];
  counterEl.textContent = `السؤال ${currentIndex + 1} من 10`;
  questionEl.textContent = q.q;

  // خلط الخيارات
  const mixed = q.options
    .map((text, i) => ({ text, i }))
    .sort(() => Math.random() - 0.5);

  mixed.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.text;

    btn.onclick = () => chooseAnswer(btn, opt.i, q.answer);
    optionsEl.appendChild(btn);
  });
}

// ============================
// اختيار إجابة
// ============================
function chooseAnswer(button, chosen, correct) {
  if (locked) return;
  locked = true;

  const buttons = document.querySelectorAll(".option");

  buttons.forEach(btn => btn.disabled = true);

  if (chosen === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");

    buttons.forEach(btn => {
      if (btn.textContent === selectedQuestions[currentIndex].options[correct]) {
        btn.classList.add("correct");
      }
    });
  }

  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 1500);
}

// ============================
// تشغيل
// ============================
startQuiz();
