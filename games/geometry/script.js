// ==========================================
// 1. مجموعة الأسئلة الكاملة (70 سؤال)
// ==========================================
const fullQuestionPool = [
    { "id": 1, "question": "ما مجموع زوايا المثلث الداخلية؟", "options": ["180 درجة", "360 درجة", "90 درجة", "270 درجة"], "answer": "180 درجة" },
    { "id": 2, "question": "شكل هندسي له 4 أضلاع متساوية و4 زوايا قائمة، ما هو؟", "options": ["المستطيل", "المعين", "المربع", "شبه المنحرف"], "answer": "المربع" },
    { "id": 3, "question": "ما هو قانون مساحة المستطيل؟", "options": ["الطول + العرض", "الطول × العرض", "نصف القاعدة × الارتفاع", "الضلع × نفسه"], "answer": "الطول × العرض" },
    { "id": 4, "question": "كم عدد أضلاع الشكل السداسي؟", "options": ["5", "6", "7", "8"], "answer": "6" },
    { "id": 5, "question": "الزاوية التي قياسها 90 درجة تسمى زاوية؟", "options": ["حادة", "منفرجة", "قائمة", "مستقيمة"], "answer": "قائمة" },
    { "id": 6, "question": "الخط المستقيم الذي يقسم الدائرة إلى نصفين متطابقين ويمر بالمركز يسمى؟", "options": ["الوتر", "نصف القطر", "القطر", "المماس"], "answer": "القطر" },
    { "id": 7, "question": "إذا كان طول ضلع المربع 5 سم، فما هي مساحته؟", "options": ["20 سم²", "25 سم²", "10 سم²", "15 سم²"], "answer": "25 سم²" },
    { "id": 8, "question": "ما مجموع قياسات الزوايا الداخلية لأي شكل رباعي؟", "options": ["180 درجة", "360 درجة", "90 درجة", "120 درجة"], "answer": "360 درجة" },
    { "id": 9, "question": "مثلث أضلاعه (3 سم، 4 سم، 5 سم) هو مثلث؟", "options": ["متساوي الأضلاع", "قائم الزاوية", "متساوي الساقين", "منفرج الزاوية"], "answer": "قائم الزاوية" },
    { "id": 10, "question": "الزاوية التي قياسها أكبر من 90 وأقل من 180 تسمى؟", "options": ["حادة", "قائمة", "منفرجة", "مستقيمة"], "answer": "منفرجة" },
    { "id": 11, "question": "كم عدد رؤوس المكعب؟", "options": ["4", "6", "8", "12"], "answer": "8" },
    { "id": 12, "question": "المستقيمان اللذان لا يلتقيان أبداً مهما امتدا يسميان؟", "options": ["متقاطعان", "متوازيان", "متعامدان", "متطابقان"], "answer": "متوازيان" },
    { "id": 13, "question": "قيمة النسبة التقريبية (ط) أو (Pi) تساوي تقريباً؟", "options": ["3.14", "2.14", "4.14", "3.50"], "answer": "3.14" },
    { "id": 14, "question": "قانون محيط الدائرة هو؟", "options": ["ط × نق²", "2 × ط × نق", "ط × نق", "الضلع × 4"], "answer": "2 × ط × نق" },
    { "id": 15, "question": "المثلث الذي فيه ضلعان متساويان في الطول يسمى؟", "options": ["متساوي الأضلاع", "مختلف الأضلاع", "متساوي الساقين", "قائم الزاوية"], "answer": "متساوي الساقين" },
    { "id": 16, "question": "كم عدد أوجه المكعب؟", "options": ["4", "5", "6", "8"], "answer": "6" },
    { "id": 17, "question": "الزاوية المستقيمة قياسها يساوي؟", "options": ["90 درجة", "180 درجة", "270 درجة", "360 درجة"], "answer": "180 درجة" },
    { "id": 18, "question": "إذا كان نصف القطر 3 سم، فإن القطر يساوي؟", "options": ["3 سم", "6 سم", "9 سم", "1.5 سم"], "answer": "6 سم" },
    { "id": 19, "question": "شكل هندسي ليس له بداية ولا نهاية؟", "options": ["القطعة المستقيمة", "الشعاع", "الخط المستقيم", "النقطة"], "answer": "الخط المستقيم" },
    { "id": 20, "question": "ما هو مكمل الزاوية 30 لتصبح زاوية قائمة (90)؟", "options": ["30", "50", "60", "150"], "answer": "60" },
    { "id": 21, "question": "الشكل الهندسي ثلاثي الأبعاد الناتج عن تدوير مستطيل حول أحد أضلاعه؟", "options": ["مخروط", "هرم", "مكعب", "أسطوانة"], "answer": "أسطوانة" },
    { "id": 22, "question": "مربع الوتر يساوي مجموع مربعي الضلعين الآخرين، ما اسم النظرية؟", "options": ["إقليدس", "فيثاغورس", "طاليس", "التوازي"], "answer": "فيثاغورس" },
    { "id": 23, "question": "إذا كان محيط مربع 20 سم، فكم طول ضلعه؟", "options": ["4 سم", "5 سم", "10 سم", "8 سم"], "answer": "5 سم" },
    { "id": 24, "question": "ما هو قانون مساحة الدائرة؟", "options": ["$2 \\pi r$", "$\\pi r^2$", "$\\pi d$", "$\\pi (r+r)$"], "answer": "$\\pi r^2$" },
    { "id": 25, "question": "إذا كانت زاوية في مثلث 50 وزاوية أخرى 60، فكم قياس الزاوية الثالثة؟", "options": ["70 درجة", "80 درجة", "60 درجة", "110 درجة"], "answer": "70 درجة" },
    { "id": 26, "question": "الخط الذي يمر بالمركز وعمودي على وتر فيها، فإنه؟", "options": ["يوازي الوتر", "ينصف الوتر", "يقطع المماس", "ينصف القطر"], "answer": "ينصف الوتر" },
    { "id": 27, "question": "ما هي الوحدة القياسية لحجم الأجسام ثلاثية الأبعاد؟", "options": ["سم", "سم مربع", "سم مكعب", "سم دائري"], "answer": "سم مكعب" },
    { "id": 28, "question": "كم عدد الحروف (الحواف) في الهرم الرباعي؟", "options": ["4", "6", "8", "12"], "answer": "8" },
    { "id": 29, "question": "الدائرة التي تمر بجميع رؤوس المضلع تسمى؟", "options": ["مماسية", "محيطة", "داخلية", "قطرية"], "answer": "محيطة" },
    { "id": 30, "question": "مجموع الزوايا الخارجية لأي مضلع محدب دائماً يساوي؟", "options": ["180 درجة", "360 درجة", "90 درجة", "يعتمد على عدد الأضلاع"], "answer": "360 درجة" },
    { "id": 31, "question": "ما هو قانون حساب حجم المكعب الذي طول ضلعه $L$؟", "options": ["$L^2$", "$L \\times 6$", "$L^3$", "$L/2$"], "answer": "$L^3$" },
    { "id": 32, "question": "في متوازي الأضلاع، هل الأضلاع المتقابلة متساوية في الطول؟", "options": ["نعم", "لا", "أحياناً", "مستحيل"], "answer": "نعم" },
    { "id": 33, "question": "ما هي الزاوية التي قياسها أقل من 90 درجة؟", "options": ["قائمة", "حادة", "منفرجة", "مستقيمة"], "answer": "حادة" },
    { "id": 34, "question": "كم عدد محاور التناظر في المربع؟", "options": ["1", "2", "3", "4"], "answer": "4" },
    { "id": 35, "question": "نقطة تقاطع الارتفاعات في المثلث تسمى؟", "options": ["نقطة التقاطع", "مركز الثقل", "ملتقى الارتفاعات", "المركز"], "answer": "ملتقى الارتفاعات" },
    { "id": 36, "question": "إذا كان محيط دائرة $10 \\pi$ سم، فكم نصف قطرها؟", "options": ["5 سم", "10 سم", "20 سم", "$\\pi$ سم"], "answer": "5 سم" },
    { "id": 37, "question": "ما هو الشكل الهندسي الناتج عن قطع مخروط بمستوى مائل؟", "options": ["قطع مكافئ", "قطع زائد", "دائرة", "قطع ناقص"], "answer": "قطع ناقص" },
    { "id": 38, "question": "قياس كل زاوية داخلية في مضلع منتظم عشاري (10 أضلاع) هو؟", "options": ["108", "120", "144", "160"], "answer": "144" },
    { "id": 39, "question": "إذا كان نصف قطر الأسطوانة $r$ وارتفاعها $h$، فما هو قانون حجمها؟", "options": ["$\\pi r^2 h$", "$2 \\pi r h$", "$\\pi r h^2$", "$2 \\pi r^2$"], "answer": "$\\pi r^2 h$" },
    { "id": 40, "question": "الوتر الذي يمر بمركز الدائرة يسمى؟", "options": ["القطر", "المماس", "نصف القطر", "القطعة الدائرية"], "answer": "القطر" },
    { "id": 41, "question": "إذا تساوت زوايا مثلث، فإنه يكون؟", "options": ["قائم", "مختلف الأضلاع", "متساوي الأضلاع", "متساوي الساقين"], "answer": "متساوي الأضلاع" },
    { "id": 42, "question": "كم عدد الأوجه في المخروط؟", "options": ["1", "2", "3", "4"], "answer": "2" },
    { "id": 43, "question": "المستقيم العمودي على المماس عند نقطة التماس يسمى؟", "options": ["القاطع", "الوتر", "الناظم", "الشعاع"], "answer": "الناظم" },
    { "id": 44, "question": "إذا كان طول قطر دائرة 8 سم، فكم مساحتها التقريبية؟", "options": ["12.56 سم²", "50.24 سم²", "16 سم²", "64 سم²"], "answer": "50.24 سم²" },
    { "id": 45, "question": "ما هي العلاقة بين زوايا القاعدة في المثلث متساوي الساقين؟", "options": ["متساويتان", "متكاملتان", "متتامتان", "لا يوجد علاقة"], "answer": "متساويتان" },
    { "id": 46, "question": "أي شكل هندسي هو مضلع منتظم يتساوى فيه كل من الأضلاع والزوايا؟", "options": ["المعين", "المربع", "المستطيل", "شبه المنحرف"], "answer": "المربع" },
    { "id": 47, "question": "ما هو قانون مساحة سطح الكرة التي نصف قطرها $r$؟", "options": ["$\\frac{4}{3} \\pi r^3$", "$\\pi r^2$", "$4 \\pi r^2$", "$2 \\pi r^2$"], "answer": "$4 \\pi r^2$" },
    { "id": 48, "question": "إذا كان لدينا مستقيمين متوازيين وقاطعهما، فإن الزاويتين المتبادلتين داخلياً تكونان؟", "options": ["متساويتين", "متكاملتين", "متتامتان", "مختلفتين"], "answer": "متساويتين" },
    { "id": 49, "question": "ما هو المضلع الذي له أقل عدد من الأضلاع؟", "options": ["مربع", "مثلث", "خماسي", "دائرة"], "answer": "مثلث" },
    { "id": 50, "question": "ما هي الزاوية المتممة لزاوية قياسها 40 درجة (المجموع 90 درجة)؟", "options": ["40", "50", "90", "140"], "answer": "50" },
    // 20 سؤالاً جديداً ليصل المجموع إلى 70
    { "id": 51, "question": "ما هو اسم الشكل الذي له 12 وجه متطابق؟", "options": ["متعدد السطوح الاثني عشري", "متعدد السطوح العشري", "المجسم الثماني", "المكعب"], "answer": "متعدد السطوح الاثني عشري" },
    { "id": 52, "question": "إذا كان المثلث متساوي الساقين، فهل زوايا القاعدة متساوية؟", "options": ["نعم", "لا", "في المثلث القائم فقط", "لا يمكن التحديد"], "answer": "نعم" },
    { "id": 53, "question": "ما هي الزاوية المحيطية؟", "options": ["زاوية رأسها على محيط الدائرة", "زاوية رأسها على مركز الدائرة", "زاوية رأسها خارج الدائرة", "زاوية رأسها داخل الدائرة"], "answer": "زاوية رأسها على محيط الدائرة" },
    { "id": 54, "question": "ما هو قانون محيط متوازي الأضلاع؟", "options": ["الضلع × 4", "2 × (طول الضلع الأول + طول الضلع الثاني)", "الطول × العرض", "نصف مجموع القاعدتين × الارتفاع"], "answer": "2 × (طول الضلع الأول + طول الضلع الثاني)" },
    { "id": 55, "question": "ما هو العدد الأقصى للنقاط التي يمكن أن يتقاطع فيها خطان مستقيمان؟", "options": ["صفر", "1", "2", "عدد لا نهائي"], "answer": "1" },
    { "id": 56, "question": "كم يساوي طول قوس دائرة بزاوية مركزية 60 درجة إذا كان نصف قطرها 6؟ (π=3.14)", "options": ["6π", "2π", "3π", "π"], "answer": "2π" },
    { "id": 57, "question": "متى يكون المستطيل مربعاً؟", "options": ["عندما تتساوى زواياه", "عندما يكون قطراه متعامدين", "عندما يتساوى طوله وعرضه", "عندما يكون فيه ضلعان متوازيان"], "answer": "عندما يتساوى طوله وعرضه" },
    { "id": 58, "question": "الشكل ثلاثي الأبعاد الذي قاعدته مضلع وأوجهه الجانبية مثلثات؟", "options": ["الأسطوانة", "الكرة", "الهرم", "المنشور"], "answer": "الهرم" },
    { "id": 59, "question": "ما هي الزاوية التي مجموعها مع زاوية أخرى يساوي 180 درجة؟", "options": ["متممة", "متتامة", "متجاورة", "مكملة"], "answer": "مكملة" },
    { "id": 60, "question": "إذا كان الارتفاع في المثلث ينصف القاعدة، فما نوع المثلث؟", "options": ["مختلف الأضلاع", "قائم الزاوية", "منفرج الزاوية", "متساوي الساقين"], "answer": "متساوي الساقين" },
    { "id": 61, "question": "ما هي النقطة التي تتقاطع فيها الأقطار في متوازي الأضلاع؟", "options": ["المركز", "تنصيف كل منهما للآخر", "نقطة الرأس", "منتصف الضلع"], "answer": "تنصيف كل منهما للآخر" },
    { "id": 62, "question": "ما هو قانون حجم المنشور الرباعي؟", "options": ["الطول × العرض", "مساحة القاعدة × الارتفاع", "مساحة القاعدة ÷ الارتفاع", "الضلع × الضلع"], "answer": "مساحة القاعدة × الارتفاع" },
    { "id": 63, "question": "الشكل الهندسي الذي جميع نقاطه تبعد المسافة نفسها عن نقطة ثابتة؟", "options": ["القطع الناقص", "الدائرة", "الخط المستقيم", "القطع المكافئ"], "answer": "الدائرة" },
    { "id": 64, "question": "الزاوية التي قياسها صفر؟", "options": ["زاوية حادة", "زاوية مستقيمة", "زاوية صفرية", "زاوية قائمة"], "answer": "زاوية صفرية" },
    { "id": 65, "question": "ما هي مساحة المثلث القائم الزاوية إذا كان طول ساقيه 6 و 8 سم؟", "options": ["24 سم²", "48 سم²", "14 سم²", "12 سم²"], "answer": "24 سم²" },
    { "id": 66, "question": "هل مجموع أي ضلعين في المثلث أكبر من الضلع الثالث؟", "options": ["نعم، دائماً", "لا، ليس دائماً", "في المثلث القائم فقط", "يتساوى في المثلث المتساوي الأضلاع"], "answer": "نعم، دائماً" },
    { "id": 67, "question": "ما هو الشكل الذي له 8 أضلاع؟", "options": ["سباعي", "مثمن", "تساعي", "سداسي"], "answer": "مثمن" },
    { "id": 68, "question": "كم مماس يمكن رسمه للدائرة من نقطة خارجها؟", "options": ["اثنان", "واحد", "صفر", "عدد لا نهائي"], "answer": "اثنان" },
    { "id": 69, "question": "إذا كان محيط مثلث متساوي الأضلاع 15 سم، فكم طول ضلعه؟", "options": ["5 سم", "3 سم", "7.5 سم", "10 سم"], "answer": "5 سم" },
    { "id": 70, "question": "ما هو قياس الزاوية المركزية المقابلة لقوس يساوي طوله نصف محيط الدائرة؟", "options": ["90 درجة", "180 درجة", "360 درجة", "45 درجة"], "answer": "180 درجة" }
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
let quizQuestions = []; // مصفوفة جديدة لحفظ الـ 10 أسئلة المختارة

// ==========================================
// 2. دوال الخلط والاختيار
// ==========================================

/**
 * دالة خلط مصفوفة (Fisher-Yates Shuffle)
 * @param {Array} array المصفوفة المراد خلطها
 * @returns {Array} مصفوفة مخلطة
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
 * @param {Array} pool - مجمع الأسئلة الكامل (70 سؤال).
 * @param {number} count - عدد الأسئلة المراد اختيارها (10).
 * @returns {Array} - مصفوفة تحتوي على 10 أسئلة مخلطة.
 */
function getShuffledQuizQuestions(pool, count) {
    // 1. خلط مجمع الأسئلة الكامل
    const shuffledPool = shuffleArray([...pool]); 
    // 2. أخذ أول 10 أسئلة فقط
    return shuffledPool.slice(0, count);
}


// ==========================================
// 3. منطق اللعبة
// ==========================================

function displayQuestion() {
    clearInterval(timerInterval);
    timeRemaining = TIME_LIMIT;
    timerDisplay.textContent = TIME_LIMIT;

    // الشرط الآن يعتمد على quizQuestions
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = ''; 

    // **خلط الخيارات قبل عرضها**
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

    // الحلقة الآن على الـ 10 أسئلة التي تم عرضها فقط (quizQuestions)
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


// **تهيئة اللعبة:** اختيار 10 أسئلة مخلطة عند التحميل
function initializeQuiz() {
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    displayQuestion();
}

document.addEventListener('DOMContentLoaded', initializeQuiz);
