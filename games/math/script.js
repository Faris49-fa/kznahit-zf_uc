// ==========================================
// 1. مجموعة الأسئلة الكاملة (70 سؤال رياضيات)
// ==========================================
const fullQuestionPool = [
    // --- الجبر والمعادلات (1-10) ---
    { "id": 1, "question": "حل المعادلة: $3x + 5 = 17$", "options": ["x = 2", "x = 4", "x = 6", "x = 8"], "answer": "x = 4" },
    { "id": 2, "question": "ما قيمة $x$ إذا كانت $2(x - 3) = 10$؟", "options": ["x = 8", "x = 7", "x = 6", "x = 5"], "answer": "x = 8" },
    { "id": 3, "question": "إذا كان $y = 2x - 1$ و $x = 5$، فما قيمة $y$؟", "options": ["y = 8", "y = 9", "y = 10", "y = 11"], "answer": "y = 9" },
    { "id": 4, "question": "ناتج ضرب $(x + 2)(x - 2)$ هو:", "options": ["$x^2 - 4$", "$x^2 + 4x + 4$", "$x^2 - 4x + 4$", "$2x - 4$"], "answer": "$x^2 - 4$" },
    { "id": 5, "question": "حل المتباينة: $2x - 1 > 5$", "options": ["$x > 3$", "$x < 3$", "$x > 2$", "$x < 2$"], "answer": "$x > 3$" },
    { "id": 6, "question": "إذا كان $5^x = 125$، فما قيمة $x$؟", "options": ["x = 2", "x = 3", "x = 4", "x = 5"], "answer": "x = 3" },
    { "id": 7, "question": "تبسيط العبارة: $5a + 3b - 2a + 7b$", "options": ["$3a + 10b$", "$7a + 10b$", "$3a + 4b$", "$12ab$"], "answer": "$3a + 10b$" },
    { "id": 8, "question": "ما هو الحد الأوسط في مفكوك $(x+3)^2$؟", "options": ["$6x$", "$3x$", "$9$", "$x^2$"], "answer": "$6x$" },
    { "id": 9, "question": "إذا كان حاصل جمع عددين هو 15 والفرق بينهما 3، فما هما العددان؟", "options": ["8 و 7", "9 و 6", "10 و 5", "11 و 4"], "answer": "9 و 6" },
    { "id": 10, "question": "ناتج قسمة $\\frac{6x^5}{2x^2}$ هو:", "options": ["$3x^7$", "$3x^3$", "$4x^3$", "$3x^{-3}$"], "answer": "$3x^3$" },

    // --- الإحصاء والاحتمالات (11-20) ---
    { "id": 11, "question": "المنوال لمجموعة الأعداد: $2, 4, 7, 4, 10, 2, 4$", "options": ["2", "4", "7", "10"], "answer": "4" },
    { "id": 12, "question": "الوسيط لمجموعة الأعداد: $5, 2, 8, 1, 4$", "options": ["5", "2", "4", "8"], "answer": "4" },
    { "id": 13, "question": "المتوسط الحسابي للأعداد: $10, 20, 30$", "options": ["10", "20", "30", "60"], "answer": "20" },
    { "id": 14, "question": "المدى لمجموعة الأعداد: $15, 3, 20, 8$", "options": ["17", "20", "3", "12"], "answer": "17" },
    { "id": 15, "question": "احتمال الحصول على عدد زوجي عند رمي حجر نرد منتظم مرة واحدة:", "options": ["1/6", "1/3", "1/2", "2/3"], "answer": "1/2" },
    { "id": 16, "question": "إذا كان لديك 3 قمصان و 4 بناطيل، فكم عدد الإطلالات المختلفة الممكنة؟", "options": ["7", "12", "16", "34"], "answer": "12" },
    { "id": 17, "question": "الاحتمال هو نسبة بين عدد النواتج الممكنة وعدد النواتج:", "options": ["المرغوبة", "الإجمالية", "الفردية", "الزوجية"], "answer": "الإجمالية" },
    { "id": 18, "question": "في مخطط الصندوق وطرفيه، الخط العمودي داخل الصندوق يمثل:", "options": ["المدى", "المنوال", "الوسيط", "المتوسط"], "answer": "الوسيط" },
    { "id": 19, "question": "إذا كان المتوسط الحسابي لـ 5 أعداد هو 10، فما مجموع هذه الأعداد؟", "options": ["5", "10", "50", "15"], "answer": "50" },
    { "id": 20, "question": "أي من مقاييس النزعة المركزية التالية يتأثر بالقيم المتطرفة بشكل أكبر؟", "options": ["المنوال", "الوسيط", "المتوسط الحسابي", "المدى"], "answer": "المتوسط الحسابي" },

    // --- الكسور والنسب المئوية (21-30) ---
    { "id": 21, "question": "صورة الكسر العشري $0.75$ في صورة كسر اعتيادي هي:", "options": ["1/4", "3/4", "1/2", "7/5"], "answer": "3/4" },
    { "id": 22, "question": "ما هي قيمة $20\\%$ من العدد 50؟", "options": ["5", "10", "15", "20"], "answer": "10" },
    { "id": 23, "question": "ناتج جمع الكسرين $\\frac{1}{3} + \\frac{1}{6}$ هو:", "options": ["1/2", "2/9", "3/9", "1/3"], "answer": "1/2" },
    { "id": 24, "question": "ناتج ضرب $\\frac{2}{5} \\times \\frac{10}{4}$ هو:", "options": ["1/2", "1", "2", "5/4"], "answer": "1" },
    { "id": 25, "question": "أي كسر أكبر: $\\frac{3}{5}$ أم $\\frac{2}{3}$؟", "options": ["$\\frac{3}{5}$", "$\\frac{2}{3}$", "متساويان", "لا يمكن المقارنة"], "answer": "$\\frac{2}{3}$" },
    { "id": 26, "question": "إذا كان سعر سلعة 80 ريالاً وتم تخفيضه بنسبة 10%، فكم أصبح سعرها؟", "options": ["70 ريال", "72 ريال", "75 ريال", "88 ريال"], "answer": "72 ريال" },
    { "id": 27, "question": "قيمة $4^2 - \\sqrt{25}$ تساوي:", "options": ["11", "12", "13", "9"], "answer": "11" },
    { "id": 28, "question": "تبسيط النسبة $15: 25$ هي:", "options": ["1: 5", "3: 5", "5: 3", "1: 2"], "answer": "3: 5" },
    { "id": 29, "question": "كم عدد الأرباع في العدد 3 صحيح؟", "options": ["3", "6", "9", "12"], "answer": "12" },
    { "id": 30, "question": "ناتج طرح $1 - \\frac{3}{8}$ هو:", "options": ["5/8", "4/8", "3/8", "1/4"], "answer": "5/8" },
    
    // --- الأعداد الصحيحة والجذور (31-40) ---
    { "id": 31, "question": "ناتج $-5 + 8$ هو:", "options": ["3", "-3", "13", "-13"], "answer": "3" },
    { "id": 32, "question": "ناتج $-4 \\times -6$ هو:", "options": ["-24", "24", "-10", "2"], "answer": "24" },
    { "id": 33, "question": "قيمة $\\sqrt{81}$ هي:", "options": ["8", "9", "16", "40.5"], "answer": "9" },
    { "id": 34, "question": "أكبر عدد صحيح بين $-10$ و $-5$ هو:", "options": ["-10", "-5", "-6", "0"], "answer": "-6" },
    { "id": 35, "question": "قيمة $|-7|$ هي:", "options": ["-7", "0", "7", "1"], "answer": "7" },
    { "id": 36, "question": "ناتج $-20 \\div 4$ هو:", "options": ["5", "-5", "4", "-4"], "answer": "-5" },
    { "id": 37, "question": "تبسيط $\\sqrt{18}$:", "options": ["$9\\sqrt{2}$", "$3\\sqrt{2}$", "$6\\sqrt{3}$", "$2\\sqrt{3}$"], "answer": "$3\\sqrt{2}$" },
    { "id": 38, "question": "ما هو معكوس العدد 9؟", "options": ["9", "1/9", "-9", "0"], "answer": "-9" },
    { "id": 39, "question": "ترتيب الأعداد: $3, -2, 0, 5$ من الأصغر للأكبر:", "options": ["$3, -2, 0, 5$", "$ -2, 0, 3, 5$", "$ 5, 3, 0, -2$", "$ 0, -2, 3, 5$"], "answer": "$ -2, 0, 3, 5$" },
    { "id": 40, "question": "قيمة الجذر التكعيبي للعدد 64 هي:", "options": ["4", "8", "16", "3"], "answer": "4" },

    // --- الدوال والمحاور (41-50) ---
    { "id": 41, "question": "ما هو الميل (Slope) للخط المستقيم الذي يمر بالنقطتين $(1, 2)$ و $(3, 6)$؟", "options": ["1", "2", "3", "4"], "answer": "2" },
    { "id": 42, "question": "نقطة تقاطع المحورين $x$ و $y$ تسمى:", "options": ["المقطع", "الميل", "نقطة الأصل", "الربع"], "answer": "نقطة الأصل" },
    { "id": 43, "question": "في الدالة الخطية $y = mx + b$، ماذا يمثل $b$؟", "options": ["الميل", "المقطع $y$", "المقطع $x$", "المتغير التابع"], "answer": "المقطع $y$" },
    { "id": 44, "question": "أي من الدوال التالية تمثل دالة خطية؟", "options": ["$y = x^2$", "$y = 3x - 5$", "$y = \\sqrt{x}$", "$y = |x|$"], "answer": "$y = 3x - 5$" },
    { "id": 45, "question": "إذا كانت الدالة $f(x) = x + 3$، فما قيمة $f(2)$؟", "options": ["2", "3", "5", "6"], "answer": "5" },
    { "id": 46, "question": "الربع الذي تقع فيه النقطة $(-3, 5)$ هو:", "options": ["الأول", "الثاني", "الثالث", "الرابع"], "answer": "الثاني" },
    { "id": 47, "question": "ما هي معادلة الخط المستقيم الأفقي الذي يمر بالنقطة $(2, 5)$؟", "options": ["$x = 2$", "$y = 5$", "$y = 2x$", "$x + y = 7$"], "answer": "$y = 5$" },
    { "id": 48, "question": "ما هي قيمة $x$ التي تجعل النقطة $(x, 0)$ تقع على محور السينات؟", "options": ["0", "أي عدد حقيقي", "1", "10"], "answer": "أي عدد حقيقي" },
    { "id": 49, "question": "المدى (Range) للدالة هو مجموعة قيم المتغير:", "options": ["التابع ($y$)", "المستقل ($x$)", "الميل", "الثابت"], "answer": "التابع ($y$)" },
    { "id": 50, "question": "ما هي الصيغة العامة لمعادلة الخط المستقيم؟", "options": ["$y = mx$", "$y = mx + b$", "$ax + by = c$", "$x^2 + y^2 = r^2$"], "answer": "$y = mx + b$" },

    // --- التناسب والمعدلات (51-60) ---
    { "id": 51, "question": "إذا كان سعر 4 أقلام هو 12 ريالاً، فما سعر 7 أقلام؟ (بافتراض التناسب)", "options": ["15 ريال", "21 ريال", "24 ريال", "28 ريال"], "answer": "21 ريال" },
    { "id": 52, "question": "معدل الوحدة لسيارة قطعت 300 كم في 5 ساعات هو:", "options": ["30 كم/س", "50 كم/س", "60 كم/س", "100 كم/س"], "answer": "60 كم/س" },
    { "id": 53, "question": "إذا كان مقياس الرسم $1 سم : 5 م$، فكم يمثل 3 سم في الواقع؟", "options": ["5 م", "10 م", "15 م", "20 م"], "answer": "15 م" },
    { "id": 54, "question": "المتغيرات التي تتغير معاً بنفس المعدل تسمى علاقة:", "options": ["غير خطية", "تناسبية", "عكسية", "جذرية"], "answer": "تناسبية" },
    { "id": 55, "question": "في التناسب $\\frac{a}{b} = \\frac{c}{d}$، فإن $ad = $:", "options": ["$bc$", "$ac$", "$bd$", "$a/c$"], "answer": "$bc$" },
    { "id": 56, "question": "إذا كان عامل التكبير 2، والمساحة الأصلية 10 سم²، فما هي المساحة الجديدة؟", "options": ["10 سم²", "20 سم²", "40 سم²", "5 سم²"], "answer": "40 سم²" },
    { "id": 57, "question": "الزمن اللازم لملء خزان سعته 1000 لتر بمعدل 50 لتراً في الدقيقة هو:", "options": ["10 دقائق", "20 دقيقة", "50 دقيقة", "100 دقيقة"], "answer": "20 دقيقة" },
    { "id": 58, "question": "ما هو الحد المفقود في التناسب $\\frac{2}{3} = \\frac{x}{9}$؟", "options": ["x = 4", "x = 6", "x = 8", "x = 9"], "answer": "x = 6" },
    { "id": 59, "question": "عندما تزداد قيمة $x$ وتنقص قيمة $y$ بمعدل ثابت، يسمى التناسب:", "options": ["طردي", "عكسي", "مباشر", "خطي"], "answer": "عكسي" },
    { "id": 60, "question": "الرقم الذي يمثل $\\frac{1}{20}$ في صورة نسبة مئوية هو:", "options": ["5%", "10%", "20%", "50%"], "answer": "5%" },

    // --- متنوعة ومفاهيم أساسية (61-70) ---
    { "id": 61, "question": "أي من الأعداد التالية هو عدد أولي؟", "options": ["4", "9", "13", "15"], "answer": "13" },
    { "id": 62, "question": "المضاعف المشترك الأصغر (LCM) للعددين 4 و 6 هو:", "options": ["2", "12", "18", "24"], "answer": "12" },
    { "id": 63, "question": "القاسم المشترك الأكبر (GCD) للعددين 12 و 18 هو:", "options": ["2", "3", "6", "12"], "answer": "6" },
    { "id": 64, "question": "ناتج العملية $10 + 5 \\times 2$ (وفق ترتيب العمليات) هو:", "options": ["30", "20", "25", "100"], "answer": "20" },
    { "id": 65, "question": "ناتج العملية $4^3 \\div 8$ هو:", "options": ["4", "8", "16", "24"], "answer": "8" },
    { "id": 66, "question": "العدد الناقص في المتتالية: $1, 4, 9, 16, \\dots, 36$", "options": ["20", "25", "27", "30"], "answer": "25" },
    { "id": 67, "question": "في نظام العد العشري، كم تمثل الخانة الرابعة من اليمين؟", "options": ["الآحاد", "العشرات", "المئات", "الآلاف"], "answer": "الآلاف" },
    { "id": 68, "question": "ما هو أقرب عدد صحيح للعدد $7.9$؟", "options": ["7", "8", "7.5", "6"], "answer": "8" },
    { "id": 69, "question": "كم عدد الدقائق في $2.5$ ساعة؟", "options": ["120 دقيقة", "150 دقيقة", "180 دقيقة", "250 دقيقة"], "answer": "150 دقيقة" },
    { "id": 70, "question": "إذا كان وزن محمد يساوي 3 أضعاف وزن خالد، ووزن خالد 20 كجم، فكم وزن محمد؟", "options": ["40 كجم", "60 كجم", "80 كجم", "100 كجم"], "answer": "60 كجم" }
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
    timerDisplay.textContent = timeRemaining;

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
    // هنا يتم اختيار 10 أسئلة عشوائية من الـ 70 سؤال
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    displayQuestion();
}

// بدء اللعبة
document.addEventListener('DOMContentLoaded', initializeQuiz);
