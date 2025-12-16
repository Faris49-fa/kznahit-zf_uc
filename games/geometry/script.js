// **هذا هو ملف الـ 50 سؤال هندسة بصيغة JSON Array**

const allGeometryQuestions = [
    // ... (هنا تأتي قائمة الـ 50 سؤال بالكامل كما هي لم تتغير)
    { "id": 1, "question": "ما مجموع زوايا المثلث الداخلية؟", "options": ["180 درجة", "360 درجة", "90 درجة", "270 درجة"], "answer": "180 درجة" },
    // ... (48 سؤال آخر)
    { "id": 50, "question": "ما هي الزاوية المتممة لزاوية قياسها 40 درجة (المجموع 90 درجة)؟", "options": ["40", "50", "90", "140"], "answer": "50" }
];


// عناصر DOM الرئيسية
const questionPage = document.getElementById('question-page');
const resultsPage = document.getElementById('results-page');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const timerDisplay = document.getElementById('timer');
// لم يعد nextButton ضرورياً للنقر عليه، لكن نبقيه لربط الانتقال
const nextButton = document.getElementById('next-button'); 

// متغيرات حالة اللعبة
let currentQuestionIndex = 0;
let timerInterval;
const TIME_LIMIT = 10; 
let userAnswers = [];
let timeRemaining = TIME_LIMIT;


// ------------------------------------------
// 1. وظيفة عرض السؤال الحالي
// ------------------------------------------
function displayQuestion() {
    clearInterval(timerInterval);
    timeRemaining = TIME_LIMIT;
    timerDisplay.textContent = TIME_LIMIT;
    // لم يعد الزر معطلاً، لكننا لا نعتمد عليه للنقر
    // nextButton.disabled = true; 

    if (currentQuestionIndex >= allGeometryQuestions.length) {
        showResults();
        return;
    }

    const currentQuestion = allGeometryQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = ''; 

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        // ربط النقر باستدعاء دالة selectAnswer
        button.onclick = () => selectAnswer(option, button);
        optionsGrid.appendChild(button);
    });

    startTimer();
}


// ------------------------------------------
// 2. وظيفة بدء المؤقت
// ------------------------------------------
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


// ------------------------------------------
// 3. وظيفة اختيار الإجابة (المعدلة للانتقال التلقائي)
// ------------------------------------------
function selectAnswer(selectedOption, selectedButton) {
    clearInterval(timerInterval);

    // تعطيل جميع الأزرار لمنع تغيير الإجابة
    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    
    // وضع علامة 'مختار' على الزر المختار (للتلوين والتنسيق)
    selectedButton.classList.add('selected');
    
    // حفظ الإجابة
    userAnswers[currentQuestionIndex] = selectedOption;
    
    // **التعديل هنا: الانتقال التلقائي بعد تأخير بسيط**
    // نعطي وقت بسيط (500 مللي ثانية) للمستخدم ليرى نتيجته قبل الانتقال
    setTimeout(goToNextQuestion, 500); 
}


// ------------------------------------------
// 4. وظيفة عند انتهاء الوقت (المعدلة للانتقال التلقائي)
// ------------------------------------------
function handleTimeout() {
    // تعطيل الأزرار
    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    
    // حفظ الحالة كـ "تخطي"
    userAnswers[currentQuestionIndex] = "SKIP";
    
    // **التعديل هنا: الانتقال التلقائي بعد تأخير بسيط**
    setTimeout(goToNextQuestion, 500); 
}


// ------------------------------------------
// 5. وظيفة الانتقال للسؤال التالي (وظيفة جديدة منفصلة)
// ------------------------------------------
function goToNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// **نربط زر السؤال التالي بالوظيفة الجديدة (في حال أراد المستخدم النقر)**
nextButton.onclick = goToNextQuestion; 


// ------------------------------------------
// 6. وظيفة عرض النتائج النهائية (بدون تغيير)
// ------------------------------------------
function showResults() {
    questionPage.classList.remove('active');
    resultsPage.classList.add('active');
    
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;
    
    document.getElementById('results-details').innerHTML = ''; 

    allGeometryQuestions.forEach((question, index) => {
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


// ------------------------------------------
// 7. إلغاء وظيفة إعادة التعيين (حذفها بالكامل)
// ------------------------------------------
// تم حذف دالة resetQuiz() لأننا أزلنا زرها من HTML.


// بدء اللعبة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayQuestion);
