// ==========================================
// قاعدة البيانات المُعدَّلة: 70 سؤال رياضيات بمجاهيل (متوسط/صعب)
// ==========================================
const MAX_QUESTIONS_POOL = 70; // العدد الكلي للأسئلة المولدة
const MAX_COEFF = 8;        // الحد الأقصى للمعامل (a)
const MAX_CONST = 30;       // الحد الأقصى للثابت (b)
const MAX_SOLUTION = 15;    // الحد الأقصى لقيمة الحل (x)

// دالة لتوليد سؤال رياضي عشوائي (معادلات خطية بمجهول)
function generateHardMathQuestion(id) {
    const typeIndex = Math.floor(Math.random() * 3); // 0: ax + b = c, 1: ax - b = c, 2: a(x+b)=c
    
    // الحل الصحيح دائماً يكون عدد صحيح وبسيط
    const solution = Math.floor(Math.random() * MAX_SOLUTION) + 2; 
    const a = Math.floor(Math.random() * MAX_COEFF) + 2;
    const b = Math.floor(Math.random() * MAX_CONST) + 5;
    let c, questionText;
    let correctAnswer = solution.toString();

    if (typeIndex === 0) {
        // النوع 1: ax + b = c
        c = (a * solution) + b;
        questionText = `إذا كان $${a}x + ${b} = ${c}$، فما قيمة $x$؟`;
    } else if (typeIndex === 1) {
        // النوع 2: ax - b = c
        c = (a * solution) - b;
        // ضمان أن c لا يكون سالباً
        if (c < 0) {
            c = (a * solution) + b;
            questionText = `إذا كان $${a}x + ${b} = ${c}$، فما قيمة $x$؟`;
        } else {
            questionText = `إذا كان $${a}x - ${b} = ${c}$، فما قيمة $x$؟`;
        }
    } else {
        // النوع 3: a(x + b) = c
        c = a * (solution + b);
        questionText = `إذا كان $${a}(x + ${b}) = ${c}$، فما قيمة $x$؟`;
    }

    // توليد خيارات إجابة (3 إجابات خاطئة بناءً على أخطاء شائعة)
    const options = [correctAnswer];
    
    // خطأ 1: تجاهل المعامل (a)
    let wrong1 = c - b;
    if (wrong1 !== solution) options.push(wrong1.toString());

    // خطأ 2: قسمة c على a مباشرة (تجاهل b)
    let wrong2 = Math.floor(c / a);
    if (wrong2 !== solution && !options.includes(wrong2.toString())) options.push(wrong2.toString());
    
    // خطأ 3: حل عشوائي قريب
    let wrong3 = solution + (Math.floor(Math.random() * 4) - 2);
    if (wrong3 !== solution && !options.includes(wrong3.toString())) options.push(wrong3.toString());

    // التأكد من وجود 4 خيارات على الأقل (نضيف خيارات عشوائية بسيطة إذا لزم الأمر)
    while (options.length < 4) {
        let randomWrong = Math.floor(Math.random() * MAX_SOLUTION) + 1;
        if (!options.includes(randomWrong.toString())) {
            options.push(randomWrong.toString());
        }
    }
    
    // نخلط الخيارات النهائية
    const finalOptions = shuffleArray(options.slice(0, 4));

    return { "id": id, "question": questionText, "options": finalOptions, "answer": correctAnswer };
}

// إنشاء مصفوفة الأسئلة بناءً على الدالة المولدة (70 سؤال)
const fullQuestionPool = [];
for (let i = 1; i <= MAX_QUESTIONS_POOL; i++) {
    fullQuestionPool.push(generateHardMathQuestion(i));
}


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
const TIME_LIMIT = 15;
let userAnswers = [];
let timeRemaining = TIME_LIMIT;
let quizQuestions = []; // مصفوفة لحفظ الـ 10 أسئلة المختارة


// ==========================================
// 2. دوال الخلط والاختيار
// (تم الاحتفاظ بها كما هي من الكود الأصلي)
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
// (تم الاحتفاظ به كما هو من الكود الأصلي)
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

    // خلط الخيارات قبل عرضها (مهم جداً هنا لأننا نولد الأسئلة)
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    // إعادة تفعيل زر الانتقال وإزالة أي فئة (قد يكون غير مستخدم في هذا السيناريو)
    nextButton.disabled = false;

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
    }, 15000);
}


function selectAnswer(selectedOption, selectedButton) {
    clearInterval(timerInterval);

    // تعطيل الأزرار لمنع النقر المزدوج
    Array.from(optionsGrid.children).forEach(btn => btn.disabled = true);
    
    // تمييز الإجابة المختارة
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

// زر الانتقال يستخدم للانتقال دون إجابة (تخطي)
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
    // هنا يتم اختيار 10 أسئلة عشوائية من الـ 70 سؤال المولدة
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    console.log(`تم اختيار عدد ${quizQuestions.length} سؤال لهذه الجولة.`);
    displayQuestion();
}

// بدء اللعبة
document.addEventListener('DOMContentLoaded', initializeQuiz);
