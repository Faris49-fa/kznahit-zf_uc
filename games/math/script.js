// ==========================================
// 1. مجموعة الأسئلة الكاملة (70 سؤالاً عن الكسور والعمليات الحسابية)
// ==========================================
const fullQuestionPool = [
    // --- 1. العمليات على الكسور (جمع وطرح) (1-10) ---
    { "id": 1, "question": "ما هو ناتج جمع الكسرين 1/2 + 1/4؟", "options": ["2/6", "3/4", "1/8", "1/2"], "answer": "3/4" },
    { "id": 2, "question": "ما هو ناتج طرح 5/6 - 1/6؟", "options": ["4/6 (أو 2/3)", "4/12", "6/6", "5/0"], "answer": "4/6 (أو 2/3)" },
    { "id": 3, "question": "ناتج جمع 2/5 + 1/10 هو:", "options": ["3/15", "5/10 (أو 1/2)", "4/10", "3/5"], "answer": "5/10 (أو 1/2)" },
    { "id": 4, "question": "ما هو الكسر الذي يساوي 1 - 3/8؟", "options": ["5/8", "2/8", "4/8", "7/8"], "answer": "5/8" },
    { "id": 5, "question": "ما هو ناتج جمع 1/3 + 2/9؟", "options": ["3/12", "5/9", "3/9", "4/9"], "answer": "5/9" },
    { "id": 6, "question": "ناتج طرح الكسرين 7/10 - 2/5 هو:", "options": ["5/5", "3/10", "5/10", "1/5"], "answer": "3/10" },
    { "id": 7, "question": "أي الكسرين أكبر: 3/4 أم 4/5؟", "options": ["3/4", "4/5", "متساويان", "لا يمكن المقارنة"], "answer": "4/5" },
    { "id": 8, "question": "ما الكسر المكافئ للكسر 4/16 في أبسط صورة؟", "options": ["1/2", "1/4", "2/8", "4/4"], "answer": "1/4" },
    { "id": 9, "question": "ناتج جمع 1/2 + 1/3 + 1/6 هو:", "options": ["3/11", "1", "4/6", "5/6"], "answer": "1" },
    { "id": 10, "question": "كم عدد الأرباع (1/4) في العدد الكلي 3؟", "options": ["3", "4", "8", "12"], "answer": "12" },

    // --- 2. العمليات على الكسور (ضرب وقسمة) (11-20) ---
    { "id": 11, "question": "ما هو ناتج ضرب 1/2 × 3/5؟", "options": ["3/10", "4/7", "1/5", "3/5"], "answer": "3/10" },
    { "id": 12, "question": "ما هو ناتج قسمة 2/3 ÷ 4/5؟", "options": ["8/15", "10/12 (أو 5/6)", "6/20", "2/5"], "answer": "10/12 (أو 5/6)" },
    { "id": 13, "question": "ناتج ضرب 4 × 1/8 هو:", "options": ["4/8 (أو 1/2)", "1/24", "4/32", "1/4"], "answer": "4/8 (أو 1/2)" },
    { "id": 14, "question": "ما هو ناتج قسمة 5/7 على العدد الصحيح 2؟", "options": ["5/14", "10/7", "7/10", "5/9"], "answer": "5/14" },
    { "id": 15, "question": "إذا كان لديك 1/2 كجم من السكر، وقسمتها على 4 أوعية بالتساوي، فكم يكون وزن السكر في كل وعاء؟", "options": ["1/8 كجم", "1/4 كجم", "2 كجم", "1/2 كجم"], "answer": "1/8 كجم" },
    { "id": 16, "question": "ناتج ضرب كسر في مقلوبه (Reciprocal) يساوي دائماً:", "options": ["صفر", "1", "نفس الكسر", "2"], "answer": "1" },
    { "id": 17, "question": "ما هو مقلوب الكسر 3/4؟", "options": ["4/3", "1/3", "3/1", "1/4"], "answer": "4/3" },
    { "id": 18, "question": "ناتج قسمة 1 ÷ 1/5 هو:", "options": ["1/5", "5", "0", "1"], "answer": "5" },
    { "id": 19, "question": "ما ناتج (2 و 1/2) × 2؟ (الكسر المختلط)", "options": ["4 و 1/2", "5", "2 و 2/4", "10"], "answer": "5" },
    { "id": 20, "question": "ما هو ناتج ضرب 2/3 في 9/10؟", "options": ["18/30 (أو 3/5)", "12/13", "11/30", "6/10"], "answer": "18/30 (أو 3/5)" },

    // --- 3. النسب المئوية والكسور العشرية (21-30) ---
    { "id": 21, "question": "ما هو الكسر العشري الذي يمثل 60%؟", "options": ["0.06", "0.6", "6.0", "0.060"], "answer": "0.6" },
    { "id": 22, "question": "ما هي النسبة المئوية التي تعادل الكسر 1/5؟", "options": ["5%", "10%", "20%", "50%"], "answer": "20%" },
    { "id": 23, "question": "كم يساوي 50% من العدد 150؟", "options": ["50", "75", "100", "300"], "answer": "75" },
    { "id": 24, "question": "ما هو الكسر الاعتيادي (العادي) الذي يمثل 0.75؟", "options": ["1/4", "3/4", "1/2", "7/5"], "answer": "3/4" },
    { "id": 25, "question": "إذا حصلت على 8 درجات من أصل 10، فكم هي نسبتك المئوية؟", "options": ["8%", "10%", "80%", "90%"], "answer": "80%" },
    { "id": 26, "question": "ما هو ناتج ضرب 0.1 × 0.1؟", "options": ["1.0", "0.1", "0.01", "100"], "answer": "0.01" },
    { "id": 27, "question": "لتحويل نسبة مئوية إلى كسر عشري، نقوم بالقسمة على كم؟", "options": ["1", "10", "100", "1000"], "answer": "100" },
    { "id": 28, "question": "أي من الخيارات التالية أصغر قيمة؟", "options": ["1/2", "0.4", "40%", "3/5"], "answer": "0.4" },
    { "id": 29, "question": "كم يساوي 30% من العدد 60؟", "options": ["18", "1.8", "20", "30"], "answer": "18" },
    { "id": 30, "question": "ما هو ناتج جمع 0.2 + 1/5؟", "options": ["0.25", "0.4", "0.5", "1"], "answer": "0.4" },

    // --- 4. الجبر الأساسي (المعادلات) (31-40) ---
    { "id": 31, "question": "إذا كانت س/2 = 8، فكم قيمة س؟", "options": ["4", "10", "16", "32"], "answer": "16" },
    { "id": 32, "question": "ما هي قيمة س في المعادلة: 4س + 1 = 21؟", "options": ["5", "4", "20", "22"], "answer": "5" },
    { "id": 33, "question": "إذا كانت 3س = 45، فكم قيمة س؟", "options": ["10", "12", "15", "90"], "answer": "15" },
    { "id": 34, "question": "ناتج (س + س + س) يساوي...", "options": ["س^3", "3س", "3+س", "س^2"], "answer": "3س" },
    { "id": 35, "question": "إذا كانت ص - 1/2 = 2، فكم قيمة ص؟", "options": ["1 و 1/2", "2", "2 و 1/2", "3"], "answer": "2 و 1/2" },
    { "id": 36, "question": "ما هو الحد التالي في المتتابعة: 100, 90, 80, 70, ...؟", "options": ["60", "65", "75", "50"], "answer": "60" },
    { "id": 37, "question": "إذا كانت قيمة س = 3، فكم قيمة س^2 + 5؟", "options": ["8", "9", "14", "11"], "answer": "14" },
    { "id": 38, "question": "ما هو ناتج 2 (س + 5)؟", "options": ["2س + 5", "س + 10", "2س + 10", "10س"], "answer": "2س + 10" },
    { "id": 39, "question": "حل المعادلة 5 + س = 13 هو:", "options": ["8", "7", "18", "6"], "answer": "8" },
    { "id": 40, "question": "ما هي قيمة (-2) × (-4)؟", "options": ["-8", "8", "-6", "2"], "answer": "8" },

    // --- 5. العمليات الحسابية الأساسية (41-50) ---
    { "id": 41, "question": "ما هو ناتج 12 × 11؟", "options": ["120", "132", "144", "121"], "answer": "132" },
    { "id": 42, "question": "ناتج قسمة 240 على 12 هو:", "options": ["10", "12", "20", "30"], "answer": "20" },
    { "id": 43, "question": "كم يساوي الجذر التكعيبي للعدد 8؟", "options": ["2", "4", "6", "8"], "answer": "2" },
    { "id": 44, "question": "ما هو ناتج (10 - 2) ÷ 4؟", "options": ["1", "2", "3", "8"], "answer": "2" },
    { "id": 45, "question": "ما هو أكبر عدد أولي (Prime) من خانة واحدة؟", "options": ["7", "9", "5", "8"], "answer": "7" },
    { "id": 46, "question": "ناتج ضرب 1.5 × 100 هو:", "options": ["15", "10.5", "150", "1500"], "answer": "150" },
    { "id": 47, "question": "كم دقيقة في 3/4 ساعة؟", "options": ["30", "45", "50", "60"], "answer": "45" },
    { "id": 48, "question": "ما هو العدد الذي يمثل 20% من 500؟", "options": ["20", "50", "100", "200"], "answer": "100" },
    { "id": 49, "question": "ما هي قيمة (-5) + 8؟", "options": ["-3", "3", "13", "-13"], "answer": "3" },
    { "id": 50, "question": "أيهما أكبر: 0.7 أم 7/100؟", "options": ["0.7", "7/100", "متساويان", "لا يمكن المقارنة"], "answer": "0.7" },

    // --- 6. مسائل الكسور المتقدمة والأعداد الكلية (51-60) ---
    { "id": 51, "question": "ما هو المقام المشترك الأصغر (LCM) للكسرين 1/4 و 1/6؟", "options": ["6", "10", "12", "24"], "answer": "12" },
    { "id": 52, "question": "كم يساوي 2/3 من العدد 18؟", "options": ["6", "12", "9", "36"], "answer": "12" },
    { "id": 53, "question": "إذا كان لديك 20 قلم، و 3/5 منها زرقاء، فكم عدد الأقلام الزرقاء؟", "options": ["5", "12", "15", "8"], "answer": "12" },
    { "id": 54, "question": "ما هو ناتج جمع 3/4 + 1/8 + 1/2؟", "options": ["11/8", "9/8", "1", "13/8"], "answer": "13/8" },
    { "id": 55, "question": "لتحويل الكسر غير الحقيقي (Improper) 7/3 إلى كسر مختلط (Mixed Number)؟", "options": ["3 و 1/7", "2 و 1/3", "7 و 1/3", "1 و 2/3"], "answer": "2 و 1/3" },
    { "id": 56, "question": "ما هو الكسر غير الحقيقي الذي يمثل 3 و 1/4؟", "options": ["3/4", "7/4", "13/4", "11/4"], "answer": "13/4" },
    { "id": 57, "question": "كم مرة يتكرر العدد 0.25 في العدد 2؟", "options": ["4 مرات", "6 مرات", "8 مرات", "10 مرات"], "answer": "8 مرات" },
    { "id": 58, "question": "ما هو العدد الذي إذا أضفت له 10، ثم قسمته على 2، كان الناتج 15؟", "options": ["5", "10", "20", "25"], "answer": "20" },
    { "id": 59, "question": "كم تبلغ قيمة س إذا كانت س / 5 + 3 = 7؟", "options": ["10", "20", "4", "35"], "answer": "20" },
    { "id": 60, "question": "ما هو الحد التالي في المتتابعة: 1, 4, 9, 16, 25, ...؟", "options": ["30", "36", "40", "49"], "answer": "36" },

    // --- 7. أسئلة متنوعة (كسور وتركيز) (61-70) ---
    { "id": 61, "question": "ما ناتج (2 و 1/3) ÷ 7/3؟ (2 و 1/3 = 7/3)", "options": ["1", "2/3", "7/3", "3/7"], "answer": "1" },
    { "id": 62, "question": "إذا كان سعر منتج 80 ريالاً، وتم خصم 25% منه، فكم يصبح سعره؟", "options": ["20 ريال", "55 ريال", "60 ريال", "75 ريال"], "answer": "60 ريال" },
    { "id": 63, "question": "ما هو ناتج جمع الأعداد الصحيحة من 1 إلى 5؟ (1+2+3+4+5)", "options": ["10", "12", "15", "20"], "answer": "15" },
    { "id": 64, "question": "ما هي قيمة (-3)^2؟", "options": ["-9", "9", "-6", "6"], "answer": "9" },
    { "id": 65, "question": "ما ناتج (1/4) × (1/4)؟", "options": ["1/8", "2/4", "1/16", "4/1"], "answer": "1/16" },
    { "id": 66, "question": "ما هو ناتج 0.75 ÷ 0.25؟", "options": ["1", "2", "3", "4"], "answer": "3" },
    { "id": 67, "question": "إذا كانت س = 1/2، فكم قيمة 4س + 1؟", "options": ["2", "3", "4", "5"], "answer": "3" },
    { "id": 68, "question": "ما هو العدد الذي يقع في منتصف المسافة بين 1/4 و 3/4؟", "options": ["1/2", "1/4", "3/8", "1"], "answer": "1/2" },
    { "id": 69, "question": "إذا كان 20% من عدد ما يساوي 10، فما هو العدد بالكامل؟", "options": ["20", "50", "100", "200"], "answer": "50" },
    { "id": 70, "question": "ما هو ناتج (1/3) ÷ (2/3)؟", "options": ["1/3", "1/2", "2", "3/9"], "answer": "1/2" }
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
        [array[i], array[j]] = array[j], array[i];
    }
    return array;
}

/**
 * دالة لخلط جميع الأسئلة واختيار 10 منها فقط.
 */
function getShuffledQuizQuestions(pool, count) {
    const shuffledPool = shuffleArray([...pool]); 
    return shuffledPool.slice(0, count);
}


// ==========================================
// 3. منطق اللعبة
// ==========================================

function displayQuestion() {
    clearInterval(timerInterval);
    timeRemaining = TIME_LIMIT;
    timerDisplay.textContent = timeRemaining;

    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = ''; 

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
    
    setTimeout(goToNextQuestion, 500); 
}


function handleTimeout() {
    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    userAnswers[currentQuestionIndex] = "SKIP";
    
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
    // نختار 10 أسئلة عشوائية من الـ 70 سؤالاً
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    displayQuestion();
}

// بدء اللعبة
document.addEventListener('DOMContentLoaded', initializeQuiz);
