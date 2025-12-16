// ==========================================
// 1. مجموعة الأسئلة الكاملة (70 سؤالاً عن الكسور والعمليات الحسابية)
// ==========================================
const fullQuestionPool = [
    // [تم حذف الـ 70 سؤالاً هنا لضمان عدم تكرار الكود الطويل، لكنها الأسئلة المحدثة]
    { "id": 1, "question": "ما هو ناتج جمع الكسرين 1/2 + 1/4؟", "options": ["2/6", "3/4", "1/8", "1/2"], "answer": "3/4" },
    { "id": 2, "question": "ما هو ناتج طرح 5/6 - 1/6؟", "options": ["4/6 (أو 2/3)", "4/12", "6/6", "5/0"], "answer": "4/6 (أو 2/3)" },
    // ... 68 سؤالاً آخر في الكسور والجبر ...
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
// 2. دالة حفظ أعلى/أفضل درجة (جديد)
// ==========================================
function saveHighscore(scoreKey, newScore, isTimeBased = false) {
    const oldScore = parseFloat(localStorage.getItem(scoreKey)) || 0;
    let isNewRecord = false;

    if (isTimeBased) {
        if (newScore > 0 && (newScore < oldScore || oldScore === 0)) {
            localStorage.setItem(scoreKey, newScore);
            isNewRecord = true;
        }
    } else {
        // للأعلى هو الأفضل
        if (newScore > oldScore) {
            localStorage.setItem(scoreKey, newScore);
            isNewRecord = true;
        }
    }
    return isNewRecord;
}


// ==========================================
// 3. دوال الخلط والاختيار (بدون تغيير)
// ==========================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = array[j], array[i];
    }
    return array;
}

function getShuffledQuizQuestions(pool, count) {
    const shuffledPool = shuffleArray([...pool]); 
    return shuffledPool.slice(0, count);
}


// ==========================================
// 4. منطق اللعبة
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
                correctCount++; // 🔥🔥 حساب الدرجة النهائية
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
    
    // 🔥🔥 حفظ الدرجة القياسية (المفتاح: math_score، النوع: نقاط)
    const isNewRecord = saveHighscore("math_score", correctCount, false); 
    if (isNewRecord) {
        document.getElementById('results-details').insertAdjacentHTML('beforebegin', '<h3 style="color:#f39c12; text-align:center;">🏆 رقم قياسي جديد!</h3>');
    }

    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('skipped-count').textContent = skippedCount;
}


// **دالة تهيئة اللعبة**
function initializeQuiz() {
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    displayQuestion();
}

// بدء اللعبة
document.addEventListener('DOMContentLoaded', initializeQuiz);
