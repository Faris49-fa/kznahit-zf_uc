// ==========================================
// 1. مجموعة الأسئلة الكاملة (40 سؤال إنجليزي)
// ==========================================
const fullQuestionPool = [
    { "id": 1, "question": "ما معنى (achieve)؟", "options": ["يحقق", "يفشل", "يهرب", "ينسى"], "answer": "يحقق" },
    { "id": 2, "question": "ما معنى (patient)؟", "options": ["كسول", "صبور", "غاضب", "سريع"], "answer": "صبور" },
    { "id": 3, "question": "كيف أقول (ماذا)؟", "options": ["What", "Why", "When", "Which"], "answer": "What" },
    { "id": 4, "question": "ما معنى (improve)؟", "options": ["يتحسن", "يتأخر", "يتوقف", "ينسى"], "answer": "يتحسن" },
    { "id": 5, "question": "I am tired", "options": ["أنا سعيد", "أنا متعب", "أنا غاضب", "أنا جائع"], "answer": "أنا متعب" },
    { "id": 6, "question": "ما معنى (decision)؟", "options": ["قرار", "مشكلة", "فرصة", "نتيجة"], "answer": "قرار" },
    { "id": 7, "question": "كيف أقول (لماذا)؟", "options": ["Where", "Why", "What", "Who"], "answer": "Why" },
    { "id": 8, "question": "ما معنى (environment)؟", "options": ["اقتصاد", "بيئة", "طقس", "طبيعة"], "answer": "بيئة" },
    { "id": 9, "question": "She is intelligent", "options": ["هي جميلة", "هي ذكية", "هي سريعة", "هي قوية"], "answer": "هي ذكية" },
    { "id": 10, "question": "ما معنى (responsibility)؟", "options": ["حرية", "مسؤولية", "قوة", "شجاعة"], "answer": "مسؤولية" },
    { "id": 11, "question": "كيف أقول (أين)؟", "options": ["When", "Who", "Where", "Why"], "answer": "Where" },
    { "id": 12, "question": "ما معنى (opportunity)؟", "options": ["خطر", "فرصة", "تحدي", "مشكلة"], "answer": "فرصة" },
    { "id": 13, "question": "I ___ football", "options": ["plays", "play", "playing", "played"], "answer": "play" },
    { "id": 14, "question": "ما معنى (challenge)؟", "options": ["راحة", "سهولة", "تحدي", "فشل"], "answer": "تحدي" },
    { "id": 15, "question": "He was late", "options": ["مبكر", "متأخر", "نائم", "سعيد"], "answer": "متأخر" },
    { "id": 16, "question": "ما معنى (knowledge)؟", "options": ["ذكاء", "تعليم", "معرفة", "فهم"], "answer": "معرفة" },
    { "id": 17, "question": "كيف أقول (متى)؟", "options": ["Why", "When", "Where", "What"], "answer": "When" },
    { "id": 18, "question": "ما معنى (successful)؟", "options": ["فاشل", "ناجح", "كسول", "ضعيف"], "answer": "ناجح" },
    { "id": 19, "question": "She ___ happy", "options": ["are", "is", "were", "be"], "answer": "is" },
    { "id": 20, "question": "ما معنى (future)؟", "options": ["ماضي", "حاضر", "مستقبل", "وقت"], "answer": "مستقبل" },
    { "id": 21, "question": "ما معنى (experience)؟", "options": ["خبرة", "تعليم", "مهارة", "وظيفة"], "answer": "خبرة" },
    { "id": 22, "question": "They are ready", "options": ["نائمون", "مستعدون", "غاضبون", "متأخرون"], "answer": "مستعدون" },
    { "id": 23, "question": "ما معنى (confidence)؟", "options": ["خوف", "ثقة", "ضعف", "تردد"], "answer": "ثقة" },
    { "id": 24, "question": "We ___ studying", "options": ["is", "are", "was", "be"], "answer": "are" },
    { "id": 25, "question": "ما معنى (effort)؟", "options": ["راحة", "جهد", "سرعة", "تعب"], "answer": "جهد" },
    { "id": 26, "question": "كيف أقول (أيّ)؟", "options": ["What", "Why", "Which", "Who"], "answer": "Which" },
    { "id": 27, "question": "ما معنى (impossible)؟", "options": ["سهل", "ممكن", "مستحيل", "قريب"], "answer": "مستحيل" },
    { "id": 28, "question": "I forgot my phone", "options": ["نسيت هاتفي", "وجدت هاتفي", "كسرت هاتفي", "بعت هاتفي"], "answer": "نسيت هاتفي" },
    { "id": 29, "question": "ما معنى (solution)؟", "options": ["مشكلة", "حل", "خطة", "سؤال"], "answer": "حل" },
    { "id": 30, "question": "He ___ the answer", "options": ["know", "knows", "knowing", "knewed"], "answer": "knows" },
    { "id": 31, "question": "ما معنى (honest)؟", "options": ["كاذب", "صادق", "ذكي", "كسول"], "answer": "صادق" },
    { "id": 32, "question": "كيف أقول (كم)؟", "options": ["How", "How many", "Why", "When"], "answer": "How many" },
    { "id": 33, "question": "ما معنى (goal)؟", "options": ["لعبة", "هدف", "خطة", "فكرة"], "answer": "هدف" },
    { "id": 34, "question": "This is important", "options": ["سهل", "مهم", "صعب", "خطير"], "answer": "مهم" },
    { "id": 35, "question": "ما معنى (patient)؟", "options": ["صبور", "غاضب", "كسول", "سريع"], "answer": "صبور" },
    { "id": 36, "question": "She ___ finished", "options": ["have", "has", "is", "was"], "answer": "has" },
    { "id": 37, "question": "ما معنى (immediately)؟", "options": ["فورًا", "غدًا", "ببطء", "لاحقًا"], "answer": "فورًا" },
    { "id": 38, "question": "I agree with you", "options": ["أوافقك", "أختلف معك", "أتجاهلك", "أفهمك"], "answer": "أوافقك" },
    { "id": 39, "question": "ما معنى (prepare)؟", "options": ["يهرب", "يجهز", "ينسى", "ينام"], "answer": "يجهز" },
    { "id": 40, "question": "They ___ playing", "options": ["is", "are", "was", "be"], "answer": "are" }
];


// عناصر DOM الرئيسية
const questionPage = document.getElementById('question-page');
const resultsPage = document.getElementById('results-page');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const timerDisplay = document.getElementById('timer');
const nextButton = document.getElementById('next-button'); 

// متغيرات حالة اللعبة
let currentQuestionIndex = 0;
let timerInterval;
const TIME_LIMIT = 10; 
let userAnswers = [];
let timeRemaining = TIME_LIMIT;
let quizQuestions = []; // مصفوفة لحفظ الـ 10 أسئلة المختارة


// ==========================================
// 2. دوال الخلط والاختيار
// ==========================================

/**
 * دالة خلط مصفوفة (Fisher-Yates Shuffle)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * دالة لخلط جميع الأسئلة واختيار 10 منها فقط.
 */
function getShuffledQuizQuestions(pool, count) {
    // نستخدم نسخة مكررة من المصفوفة الأصلية لخلطها
    const shuffledPool = shuffleArray([...pool]); 
    // نأخذ عدد الأسئلة المطلوبة (10)
    return shuffledPool.slice(0, count);
}


// ==========================================
// 3. منطق اللعبة
// ==========================================

function displayQuestion() {
    clearInterval(timerInterval);
    timeRemaining = TIME_LIMIT;
    timerDisplay.textContent = TIME_LIMIT;

    // الشرط: هل انتهت الـ 10 أسئلة المخصصة لهذا الاختبار؟
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = ''; 

    // خلط الخيارات قبل عرضها
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.onclick = () => selectAnswer(option, button);
        optionsGrid.appendChild(button);
    });

    startTimer();
}


function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000); 
}


function selectAnswer(selectedOption, selectedButton) {
    clearInterval(timerInterval);

    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    selectedButton.classList.add('selected');
    userAnswers[currentQuestionIndex] = selectedOption;
    
    // الانتقال التلقائي بعد تأخير بسيط
    setTimeout(goToNextQuestion, 500); 
}


function handleTimeout() {
    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    userAnswers[currentQuestionIndex] = "SKIP";
    
    // الانتقال التلقائي بعد تأخير بسيط
    setTimeout(goToNextQuestion, 500); 
}


function goToNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

nextButton.onclick = goToNextQuestion; 


function showResults() {
    questionPage.classList.remove('active');
    resultsPage.classList.add('active');
    
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;
    
    document.getElementById('results-details').innerHTML = ''; 

    // حلقة تكرارية على الـ 10 أسئلة التي تم عرضها
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = (userAnswer === question.answer);
        
        const resultCard = document.createElement('div');
        resultCard.classList.add('card');
        
        let statusClass = 'skipped';
        let statusText = 'لم تتم الإجابة';

        if (userAnswer && userAnswer !== 'SKIP') {
            if (isCorrect) {
                correctCount++;
                statusClass = 'correct';
                statusText = 'صحيحة';
            } else {
                wrongCount++;
                statusClass = 'wrong';
                statusText = 'خاطئة';
            }
        } else {
            skippedCount++;
        }

        resultCard.classList.add(statusClass);

        resultCard.innerHTML = `
            <p><strong>سؤال ${index + 1}:</strong> ${question.question}</p>
            <p><strong>إجابتك:</strong> ${userAnswer === 'SKIP' ? 'لم تجب' : (userAnswer || 'لم تجب')}</p>
            <p><strong>الإجابة الصحيحة:</strong> ${question.answer}</p>
            <p class="result-status">الحالة: ${statusText}</p>
        `;

        document.getElementById('results-details').appendChild(resultCard);
    });

    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('skipped-count').textContent = skippedCount;
}


// **دالة تهيئة اللعبة: اختيار 10 أسئلة مخلطة عند التحميل**
function initializeQuiz() {
    // هنا يتم اختيار 10 أسئلة عشوائية من الـ 40 سؤال
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    displayQuestion();
}

// بدء اللعبة
document.addEventListener('DOMContentLoaded', initializeQuiz);
