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
let timeLeft = 10;
let timer;
let userAnswers = []; // <<< نخزن إجابات المستخدم

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
  optionsEl.innerHTML = "";
  timeLeft = 10;
  timerEl.textContent = timeLeft;

  if (index >= questions.length) {
    endGame();
    return;
  }

  qNumEl.textContent = `السؤال ${index + 1} من 10`;
  questionEl.textContent = questions[index].question;

  const mixed = shuffle(
    questions[index].options.map((t, i) => ({ t, i }))
  );

  mixed.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.t;
    btn.onclick = () => choose(opt.i);
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
      userAnswers.push(null); // ما جاوب
      index++;
      showQuestion();
    }
  }, 1000);
}

// ============================
// اختيار إجابة (انتقال فوري)
// ============================
function choose(btn, i) {
  if (locked) return;
  locked = true;
  clearInterval(timer);

  if (i === questions[index].answer) score++;

  index++;
  showQuestion(); // انتقال فوري
}


// ============================
// النهاية + التصحيح
// ============================
function endGame() {
  questionEl.textContent = "انتهت الأسئلة ✅";
  optionsEl.innerHTML = "";
  qNumEl.textContent = "";
  timerEl.textContent = "";

  let correctCount = 0;
  let html = "";

  questions.forEach((q, i) => {
    const user = userAnswers[i];
    const correct = q.answer;

    let cls = "unanswered";
    if (user === correct) {
      cls = "correct";
      correctCount++;
    } else if (user !== null) {
      cls = "wrong";
    }

    html += `
      <div class="result-card ${cls}">
        <strong>${i + 1}) ${q.question}</strong><br>
        إجابتك: ${user !== null ? q.options[user] : "لم تجب"}<br>
        الإجابة الصحيحة: ${q.options[correct]}
      </div>
    `;
  });

  const percent = Math.round((correctCount / questions.length) * 100);

  resultEl.innerHTML = `
    <h3>درجتك: ${correctCount} / 10</h3>
    <h4>النسبة: ${percent}%</h4>
    ${html}
  `;

  localStorage.setItem("lastScore", percent);
  backBtn.style.display = "block";
}

// ============================
startGame();
