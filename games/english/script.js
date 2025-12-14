let questions = [];
let current = 0;
let selected = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const counterEl = document.getElementById("counter");
const endEl = document.getElementById("end");

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function start() {
  selected = shuffle([...allQuestions]).slice(0, 10);
  current = 0;
  endEl.classList.add("hidden");
  show();
}

function show() {
  if (current >= selected.length) {
    questionEl.textContent = "";
    optionsEl.innerHTML = "";
    counterEl.textContent = "";
    endEl.classList.remove("hidden");
    return;
  }

  const q = selected[current];

  counterEl.textContent = `السؤال ${current + 1} من 10`;
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  shuffle(
    q.options.map((text, i) => ({ text, i }))
  ).forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.text;
    btn.onclick = () => next(opt.i === q.answer, btn);
    optionsEl.appendChild(btn);
  });
}

function next(correct, btn) {
  const buttons = document.querySelectorAll(".option");
  buttons.forEach(b => b.disabled = true);

  btn.classList.add(correct ? "correct" : "wrong");

  setTimeout(() => {
    current++;
    show();
  }, 1200);
}

start();
