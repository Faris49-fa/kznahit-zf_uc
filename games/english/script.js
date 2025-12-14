// ============================
// 50 سؤال (أماكن جاهزة للتعبئة)
// ============================

const allQuestions = [
  // 1
  {
    const allQuestions = [
  {
    q: "ما معنى كلمة (achieve)؟",
    options: ["يحقق", "يفشل", "يهرب", "ينسى"],
    answer: 0
  },
  {
    q: "كيف أقول (ماذا) بالإنجليزي؟",
    options: ["When", "What", "Why", "Which"],
    answer: 1
  },
  {
    q: "ما معنى (improve)؟",
    options: ["يتحسن", "يتأخر", "يتوقف", "يختفي"],
    answer: 0
  },
  {
    q: "اختر الترجمة الصحيحة: I am tired",
    options: ["أنا سعيد", "أنا غاضب", "أنا متعب", "أنا جائع"],
    answer: 2
  },
  {
    q: "ما معنى (decision)؟",
    options: ["مشكلة", "قرار", "نتيجة", "فرصة"],
    answer: 1
  },
  {
    q: "كيف أقول (لماذا) بالإنجليزي؟",
    options: ["Where", "What", "Why", "Who"],
    answer: 2
  },
  {
    q: "ما معنى (environment)؟",
    options: ["اقتصاد", "بيئة", "طبيعة", "طقس"],
    answer: 1
  },
  {
    q: "اختر الترجمة الصحيحة: She is intelligent",
    options: ["هي جميلة", "هي ذكية", "هي سريعة", "هي قوية"],
    answer: 1
  },
  {
    q: "ما معنى (responsibility)؟",
    options: ["حرية", "مسؤولية", "شجاعة", "قوة"],
    answer: 1
  },
  {
    q: "كيف أقول (أين) بالإنجليزي؟",
    options: ["Why", "Where", "When", "Who"],
    answer: 1
  },

  // 10
  {
    q: "ما معنى (opportunity)؟",
    options: ["مشكلة", "فرصة", "خطر", "تحدي"],
    answer: 1
  },
  {
    q: "أكمل الجملة: I ___ football every day",
    options: ["plays", "play", "playing", "played"],
    answer: 1
  },
  {
    q: "ما معنى (challenge)؟",
    options: ["راحة", "تحدي", "فشل", "سهولة"],
    answer: 1
  },
  {
    q: "اختر الترجمة الصحيحة: He was late",
    options: ["هو مبكر", "هو متأخر", "هو سعيد", "هو نائم"],
    answer: 1
  },
  {
    q: "ما معنى (knowledge)؟",
    options: ["ذكاء", "تعليم", "معرفة", "فهم"],
    answer: 2
  },
  {
    q: "كيف أقول (متى) بالإنجليزي؟",
    options: ["Where", "When", "Why", "What"],
    answer: 1
  },
  {
    q: "ما معنى (successful)؟",
    options: ["ناجح", "فاشل", "ضعيف", "كسول"],
    answer: 0
  },
  {
    q: "أكمل الجملة: She ___ very happy",
    options: ["are", "is", "were", "be"],
    answer: 1
  },
  {
    q: "ما معنى (future)؟",
    options: ["ماضي", "حاضر", "مستقبل", "وقت"],
    answer: 2
  },
  {
    q: "كيف أقول (من) بالإنجليزي؟",
    options: ["Who", "What", "Where", "When"],
    answer: 0
  },

  // 20
  {
    q: "ما معنى (experience)؟",
    options: ["خبرة", "تعليم", "مهارة", "وظيفة"],
    answer: 0
  },
  {
    q: "اختر الترجمة الصحيحة: They are ready",
    options: ["هم غاضبون", "هم مستعدون", "هم نائمون", "هم متأخرون"],
    answer: 1
  },
  {
    q: "ما معنى (confidence)؟",
    options: ["خوف", "ثقة", "ضعف", "تردد"],
    answer: 1
  },
  {
    q: "أكمل الجملة: We ___ studying now",
    options: ["is", "are", "was", "be"],
    answer: 1
  },
  {
    q: "ما معنى (effort)؟",
    options: ["راحة", "تعب", "جهد", "سرعة"],
    answer: 2
  },
  {
    q: "كيف أقول (أيّ) بالإنجليزي؟",
    options: ["Which", "Why", "What", "Who"],
    answer: 0
  },
  {
    q: "ما معنى (impossible)؟",
    options: ["ممكن", "سهل", "مستحيل", "قريب"],
    answer: 2
  },
  {
    q: "اختر الترجمة الصحيحة: I forgot my phone",
    options: ["نسيت هاتفي", "كسرت هاتفي", "وجدت هاتفي", "بعت هاتفي"],
    answer: 0
  },
  {
    q: "ما معنى (solution)؟",
    options: ["مشكلة", "حل", "خطة", "سؤال"],
    answer: 1
  },
  {
    q: "أكمل الجملة: He ___ the answer",
    options: ["know", "knows", "knowing", "knewed"],
    answer: 1
  },

  // 30
  {
    q: "ما معنى (honest)؟",
    options: ["كاذب", "صادق", "ذكي", "كسول"],
    answer: 1
  },
  {
    q: "كيف أقول (كم) بالإنجليزي؟",
    options: ["How", "How many", "Why", "When"],
    answer: 1
  },
  {
    q: "ما معنى (goal)؟",
    options: ["لعبة", "هدف", "خطة", "فكرة"],
    answer: 1
  },
  {
    q: "اختر الترجمة الصحيحة: This is important",
    options: ["هذا صعب", "هذا مهم", "هذا سهل", "هذا خطير"],
    answer: 1
  },
  {
    q: "ما معنى (patient)؟",
    options: ["غاضب", "صبور", "كسول", "سريع"],
    answer: 1
  },
  {
    q: "أكمل الجملة: She ___ already finished",
    options: ["have", "has", "is", "was"],
    answer: 1
  },
  {
    q: "ما معنى (immediately)؟",
    options: ["لاحقًا", "ببطء", "فورًا", "غدًا"],
    answer: 2
  },
  {
    q: "اختر الترجمة الصحيحة: I agree with you",
    options: ["أنا أختلف معك", "أنا أفهمك", "أنا أوافقك", "أنا أتجاهلك"],
    answer: 2
  },
  {
    q: "ما معنى (prepare)؟",
    options: ["يهرب", "يجهز", "ينسى", "ينام"],
    answer: 1
  },
  {
    q: "أكمل الجملة: They ___ playing now",
    options: ["is", "are", "was", "be"],
    answer: 1
  },

  // 40
  {
    q: "ما معنى (careful)؟",
    options: ["مهمل", "حذر", "سريع", "غاضب"],
    answer: 1
  },
  {
    q: "كيف أقول (أيضًا) بالإنجليزي؟",
    options: ["Too", "Very", "Only", "Just"],
    answer: 0
  },
  {
    q: "ما معنى (difference)؟",
    options: ["تشابه", "فرق", "تطابق", "تكرار"],
    answer: 1
  },
  {
    q: "اختر الترجمة الصحيحة: He fixed the problem",
    options: ["كسر المشكلة", "حل المشكلة", "ترك المشكلة", "نسي المشكلة"],
    answer: 1
  },
  {
    q: "ما معنى (probably)؟",
    options: ["أكيد", "ربما", "مستحيل", "أبدًا"],
    answer: 1
  },
  {
    q: "أكمل الجملة: I ___ understand you",
    options: ["am", "do", "does", "did"],
    answer: 1
  },
  {
    q: "ما معنى (trust)؟",
    options: ["شك", "ثقة", "خوف", "قلق"],
    answer: 1
  },
  {
    q: "اختر الترجمة الصحيحة: The test was difficult",
    options: ["الاختبار كان صعبًا", "الاختبار كان سهلًا", "الاختبار كان ممتعًا", "الاختبار كان قصيرًا"],
    answer: 0
  },
  {
    q: "ما معنى (choice)؟",
    options: ["فرصة", "خيار", "قرار", "هدف"],
    answer: 1
  },
  {
    q: "أكمل الجملة: She ___ very confident",
    options: ["are", "is", "were", "be"],
    answer: 1
  }
];

  });
}

// ============================
// متغيرات التحكم
// ============================

let selectedQuestions = [];
let currentIndex = 0;
let lock = false;

// عناصر الصفحة (تأكد موجودة بالـ HTML)
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const messageEl = document.getElementById("message");

// ============================
// خلط مصفوفة
// ============================

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// ============================
// بدء اللعبة
// ============================

function startGame() {
  selectedQuestions = shuffle([...allQuestions]).slice(0, 10);
  currentIndex = 0;
  showQuestion();
}

// ============================
// عرض السؤال
// ============================

function showQuestion() {
  lock = false;
  messageEl.textContent = "";

  if (currentIndex >= selectedQuestions.length) {
    questionEl.textContent = "انتهت الأسئلة";
    optionsEl.innerHTML = "";
    return;
  }

  const q = selectedQuestions[currentIndex];

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  // خلط الخيارات
  const mixedOptions = q.options
    .map((text, index) => ({ text, index }))
    .sort(() => Math.random() - 0.5);

  mixedOptions.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => selectAnswer(btn, opt.index, q.answer);
    optionsEl.appendChild(btn);
  });
}

// ============================
// اختيار إجابة
// ============================

function selectAnswer(button, selected, correct) {
  if (lock) return;
  lock = true;

  messageEl.textContent = "جاري التحقق...";
  
  setTimeout(() => {
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(btn => {
      btn.disabled = true;
    });

    if (selected === correct) {
      button.classList.add("correct");
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
    }, 2000);

  }, 3000);
}

// ============================
// تشغيل اللعبة
// ============================

startGame();
