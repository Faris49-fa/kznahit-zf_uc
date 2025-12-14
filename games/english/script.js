// ============================
// بنك الأسئلة (50 سؤال)
// ============================

const allQuestions = [
  { q: "ما معنى كلمة (achieve)؟", options: ["يحقق", "يفشل", "يهرب", "ينسى"], answer: 0 },
  { q: "كيف أقول (ماذا) بالإنجليزي؟", options: ["When", "What", "Why", "Which"], answer: 1 },
  { q: "ما معنى (improve)؟", options: ["يتحسن", "يتأخر", "يتوقف", "يختفي"], answer: 0 },
  { q: "اختر الترجمة الصحيحة: I am tired", options: ["أنا سعيد", "أنا متعب", "أنا غاضب", "أنا جائع"], answer: 1 },
  { q: "ما معنى (decision)؟", options: ["مشكلة", "قرار", "نتيجة", "فرصة"], answer: 1 },
  { q: "كيف أقول (لماذا) بالإنجليزي؟", options: ["Where", "What", "Why", "Who"], answer: 2 },
  { q: "ما معنى (environment)؟", options: ["اقتصاد", "بيئة", "طبيعة", "طقس"], answer: 1 },
  { q: "اختر الترجمة الصحيحة: She is intelligent", options: ["هي جميلة", "هي ذكية", "هي سريعة", "هي قوية"], answer: 1 },
  { q: "ما معنى (responsibility)؟", options: ["حرية", "مسؤولية", "شجاعة", "قوة"], answer: 1 },
  { q: "كيف أقول (أين) بالإنجليزي؟", options: ["Why", "Where", "When", "Who"], answer: 1 },

  { q: "ما معنى (opportunity)؟", options: ["مشكلة", "فرصة", "خطر", "تحدي"], answer: 1 },
  { q: "أكمل: I ___ football every day", options: ["plays", "play", "playing", "played"], answer: 1 },
  { q: "ما معنى (challenge)؟", options: ["راحة", "تحدي", "فشل", "سهولة"], answer: 1 },
  { q: "اختر الترجمة الصحيحة: He was late", options: ["هو مبكر", "هو متأخر", "هو سعيد", "هو نائم"], answer: 1 },
  { q: "ما معنى (knowledge)؟", options: ["ذكاء", "تعليم", "معرفة", "فهم"], answer: 2 },
  { q: "كيف أقول (متى) بالإنجليزي؟", options: ["Where", "When", "Why", "What"], answer: 1 },
  { q: "ما معنى (successful)؟", options: ["ناجح", "فاشل", "ضعيف", "كسول"], answer: 0 },
  { q: "أكمل: She ___ very happy", options: ["are", "is", "were", "be"], answer: 1 },
  { q: "ما معنى (future)؟", options: ["ماضي", "حاضر", "مستقبل", "وقت"], answer: 2 },
  { q: "كيف أقول (من) بالإنجليزي؟", options: ["Who", "What", "Where", "When"], answer: 0 },

  { q: "ما معنى (experience)؟", options: ["خبرة", "تعليم", "مهارة", "وظيفة"], answer: 0 },
  { q: "اختر الترجمة الصحيحة: They are ready", options: ["هم غاضبون", "هم مستعدون", "هم نائمون", "هم متأخرون"], answer: 1 },
  { q: "ما معنى (confidence)؟", options: ["خوف", "ثقة", "ضعف", "تردد"], answer: 1 },
  { q: "أكمل: We ___ studying now", options: ["is", "are", "was", "be"], answer: 1 },
  { q: "ما معنى (effort)؟", options: ["راحة", "تعب", "جهد", "سرعة"], answer: 2 },
  { q: "كيف أقول (أيّ) بالإنجليزي؟", options: ["Which", "Why", "What", "Who"], answer: 0 },
  { q: "ما معنى (impossible)؟", options: ["ممكن", "سهل", "مستحيل", "قريب"], answer: 2 },
  { q: "اختر الترجمة الصحيحة: I forgot my phone", options: ["نسيت هاتفي", "كسرت هاتفي", "وجدت هاتفي", "بعت هاتفي"], answer: 0 },
  { q: "ما معنى (solution)؟", options: ["مشكلة", "حل", "خطة", "سؤال"], answer: 1 },
  { q: "أكمل: He ___ the answer", options: ["know", "knows", "knowing", "knewed"], answer: 1 },

  { q: "ما معنى (honest)؟", options: ["كاذب", "صادق", "ذكي", "كسول"], answer: 1 },
  { q: "كيف أقول (كم) بالإنجليزي؟", options: ["How", "How many", "Why", "When"], answer: 1 },
  { q: "ما معنى (goal)؟", options: ["لعبة", "هدف", "خطة", "فكرة"], answer: 1 },
  { q: "اختر الترجمة الصحيحة: This is important", options: ["هذا صعب", "هذا مهم", "هذا سهل", "هذا خطير"], answer: 1 },
  { q: "ما معنى (patient)؟", options: ["غاضب", "صبور", "كسول", "سريع"], answer: 1 },
  { q: "أكمل: She ___ already finished", options: ["have", "has", "is", "was"], answer: 1 },
  { q: "ما معنى (immediately)؟", options: ["لاحقًا", "ببطء", "فورًا", "غدًا"], answer: 2 },
  { q: "اختر الترجمة الصحيحة: I agree with you", options: ["أنا أختلف معك", "أنا أفهمك", "أنا أوافقك", "أنا أتجاهلك"], answer: 2 },
  { q: "ما معنى (prepare)؟", options: ["يهرب", "يجهز", "ينسى", "ينام"], answer: 1 },
  { q: "أكمل: They ___ playing now", options: ["is", "are", "was", "be"], answer: 1 },

  { q: "ما معنى (careful)؟", options: ["مهمل", "حذر", "سريع", "غاضب"], answer: 1 },
  { q: "كيف أقول (أيضًا) بالإنجليزي؟", options: ["Too", "Very", "Only", "Just"], answer: 0 },
  { q: "ما معنى (difference)؟", options: ["تشابه", "فرق", "تطابق", "تكرار"], answer: 1 },
  { q: "اختر الترجمة الصحيحة: He fixed the problem", options: ["حل المشكلة", "كسر المشكلة", "ترك المشكلة", "نسي المشكلة"], answer: 0 },
  { q: "ما معنى (probably)؟", options: ["أكيد", "ربما", "مستحيل", "أبدًا"], answer: 1 }
];

// ============================
// منطق اللعبة
// ============================

const questionBox = document.getElementById("questionBox");
const choicesBox = document.getElementById("choices");
const endBox = document.getElementById("end");

let questions = [];
let index = 0;
let lock = false;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startGame() {
  questions = shuffle([...allQuestions]).slice(0, 10);
  index = 0;
  endBox.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  if (index >= questions.length) {
    questionBox.textContent = "انتهت الأسئلة";
    choicesBox.innerHTML = "";
    endBox.classList.remove("hidden");
    return;
  }

  lock = false;
  const q = questions[index];
  questionBox.textContent = q.q;
  choicesBox.innerHTML = "";

  const mixed = shuffle(q.options.map((t, i) => ({ t, i })));

  mixed.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.t;
    btn.onclick = () => choose(btn, opt.i, q.answer);
    choicesBox.appendChild(btn);
  });
}

function choose(btn, selected, correct) {
  if (lock) return;
  lock = true;

  setTimeout(() => {
    const buttons = choicesBox.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
      buttons.forEach(b => {
        if (b.textContent === questions[index].options[correct]) {
          b.classList.add("correct");
        }
      });
    }

    setTimeout(() => {
      index++;
      showQuestion();
    }, 2000);

  }, 3000);
}

startGame();
