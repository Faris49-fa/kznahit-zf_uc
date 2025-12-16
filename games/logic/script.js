// ==========================================
// 1. مجموعة الأسئلة الكاملة (70 سؤال عام)
// ==========================================
const fullQuestionPool = [
    // --- التاريخ والثقافة (1-10) ---
    { "id": 1, "question": "ما هي القارة التي تعرف بالقارة العجوز؟", "options": ["آسيا", "أوروبا", "أفريقيا", "أمريكا الشمالية"], "answer": "أوروبا" },
    { "id": 2, "question": "ما هو الاسم الذي أُطلق على الرسول محمد صلى الله عليه وسلم قبل النبوة؟", "options": ["الفاروق", "الصديق", "الأمين", "أبو القاسم"], "answer": "الأمين" },
    { "id": 3, "question": "من هو مخترع المصباح الكهربائي؟", "options": ["ألكسندر غراهام بيل", "توماس إديسون", "نيكولا تسلا", "آيزاك نيوتن"], "answer": "توماس إديسون" },
    { "id": 4, "question": "ما هي أطول سورة في القرآن الكريم؟", "options": ["سورة النساء", "سورة آل عمران", "سورة البقرة", "سورة يوسف"], "answer": "سورة البقرة" },
    { "id": 5, "question": "متى وقعت الحرب العالمية الثانية؟", "options": ["1914 - 1918", "1939 - 1945", "1950 - 1953", "1967 - 1973"], "answer": "1939 - 1945" },
    { "id": 6, "question": "ما هي المدينة التي يطلق عليها 'عاصمة النور'؟", "options": ["لندن", "باريس", "روما", "نيويورك"], "answer": "باريس" },
    { "id": 7, "question": "في أي دولة يقع تمثال الحرية؟", "options": ["فرنسا", "بريطانيا", "إيطاليا", "الولايات المتحدة الأمريكية"], "answer": "الولايات المتحدة الأمريكية" },
    { "id": 8, "question": "من هو الشاعر الذي يُلقب بـ 'متنبي العصر'؟", "options": ["أحمد شوقي", "نزار قباني", "محمود درويش", "إيليا أبو ماضي"], "answer": "أحمد شوقي" },
    { "id": 9, "question": "ما هي اللغة الرسمية في البرازيل؟", "options": ["الإسبانية", "البرتغالية", "الإنجليزية", "الفرنسية"], "answer": "البرتغالية" },
    { "id": 10, "question": "متى سقطت الأندلس؟", "options": ["1031 م", "1492 م", "711 م", "1258 م"], "answer": "1492 م" },

    // --- الجغرافيا والطبيعة (11-20) ---
    { "id": 11, "question": "ما هو أكبر محيط في العالم؟", "options": ["المحيط الأطلسي", "المحيط الهندي", "المحيط الهادئ", "المحيط المتجمد الشمالي"], "answer": "المحيط الهادئ" },
    { "id": 12, "question": "ما هي عاصمة كندا؟", "options": ["تورنتو", "فانكوفر", "مونتريال", "أوتاوا"], "answer": "أوتاوا" },
    { "id": 13, "question": "ما هو النهر الأطول في العالم؟", "options": ["نهر الأمازون", "نهر النيل", "نهر اليانغتسي", "نهر المسيسيبي"], "answer": "نهر النيل" },
    { "id": 14, "question": "ما هو أعلى جبل في العالم؟", "options": ["كي 2 (K2)", "ماونت فينسون", "جبل إيفرست", "جبل كليمنجارو"], "answer": "جبل إيفرست" },
    { "id": 15, "question": "أين تقع الصحراء الكبرى؟", "options": ["آسيا", "أفريقيا", "أستراليا", "أمريكا الجنوبية"], "answer": "أفريقيا" },
    { "id": 16, "question": "ما هو المضيق الذي يربط البحر الأبيض المتوسط بالمحيط الأطلسي؟", "options": ["مضيق هرمز", "مضيق باب المندب", "مضيق جبل طارق", "مضيق الدردنيل"], "answer": "مضيق جبل طارق" },
    { "id": 17, "question": "كم عدد القارات في العالم؟", "options": ["5", "6", "7", "8"], "answer": "7" },
    { "id": 18, "question": "ما هي أصغر دولة عربية من حيث المساحة؟", "options": ["لبنان", "البحرين", "قطر", "جزر القمر"], "answer": "البحرين" },
    { "id": 19, "question": "ما اسم البحر الذي يفصل بين قارة آسيا وأفريقيا؟", "options": ["البحر الأسود", "البحر الأحمر", "البحر الكاريبي", "بحر قزوين"], "answer": "البحر الأحمر" },
    { "id": 20, "question": "ما هي أبرد نقطة على سطح الأرض؟", "options": ["سيبيريا", "غرينلاند", "القارة القطبية الجنوبية (أنتاركتيكا)", "أيسلندا"], "answer": "القارة القطبية الجنوبية (أنتاركتيكا)" },

    // --- العلوم والأحياء (21-30) ---
    { "id": 21, "question": "ما هو العنصر الذي يرمز له بالرمز (H)؟", "options": ["الهيليوم", "الهيدروجين", "الحديد", "الزئبق"], "answer": "الهيدروجين" },
    { "id": 22, "question": "ما هو الكوكب الأقرب إلى الشمس؟", "options": ["الزهرة", "المريخ", "عطارد", "الأرض"], "answer": "عطارد" },
    { "id": 23, "question": "ما هو العضو المسؤول عن ضخ الدم في جسم الإنسان؟", "options": ["الرئة", "الكبد", "القلب", "الكلى"], "answer": "القلب" },
    { "id": 24, "question": "ما هي الوحدة الأساسية لبناء الكائنات الحية؟", "options": ["الذرة", "الجزيء", "الخلية", "النسيج"], "answer": "الخلية" },
    { "id": 25, "question": "كم عدد العظام في جسم الإنسان البالغ تقريباً؟", "options": ["150", "206", "300", "500"], "answer": "206" },
    { "id": 26, "question": "ما اسم العملية التي يحول بها النبات ضوء الشمس إلى طاقة؟", "options": ["التنفس", "الهضم", "التمثيل الضوئي", "التبخر"], "answer": "التمثيل الضوئي" },
    { "id": 27, "question": "ما هي درجة الحرارة التي يتجمد عندها الماء (بالدرجة المئوية)؟", "options": ["0°", "10°", "100°", "-10°"], "answer": "0°" },
    { "id": 28, "question": "ما هو أسرع حيوان بري على وجه الأرض؟", "options": ["الأسد", "النمر", "الفهد الصياد (الشيتا)", "الغزال"], "answer": "الفهد الصياد (الشيتا)" },
    { "id": 29, "question": "ما هو الغاز الذي يشكل النسبة الأكبر من الغلاف الجوي للأرض؟", "options": ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الأرجون"], "answer": "النيتروجين" },
    { "id": 30, "question": "ما هو أثقل كوكب في المجموعة الشمسية؟", "options": ["الأرض", "زحل", "المشتري", "أورانوس"], "answer": "المشتري" },

    // --- الرياضة والترفيه (31-40) ---
    { "id": 31, "question": "كم عدد اللاعبين في فريق كرة القدم الواحد؟", "options": ["10", "11", "12", "15"], "answer": "11" },
    { "id": 32, "question": "من هو اللاعب الذي يُعرف بـ 'الجوهرة السوداء'؟", "options": ["مارادونا", "بيليه", "ميسي", "رونالدو"], "answer": "بيليه" },
    { "id": 33, "question": "ما هي الرياضة التي تُقام فيها بطولة 'ويمبلدون'؟", "options": ["كرة القدم", "التنس", "الغولف", "الكريكت"], "answer": "التنس" },
    { "id": 34, "question": "كم ميدالية ذهبية حصل عليها مايكل فيلبس في الألعاب الأولمبية (تقريباً)؟", "options": ["10", "15", "23", "30"], "answer": "23" },
    { "id": 35, "question": "ما اسم الكأس التي تمنح للفائز ببطولة كأس العالم لكرة القدم؟", "options": ["كأس جول ريميه", "كأس فيفا", "كأس الكونميبول", "كأس القارات"], "answer": "كأس فيفا" },
    { "id": 36, "question": "ما هي البلد التي فازت بأول كأس عالم لكرة القدم؟", "options": ["البرازيل", "إيطاليا", "أوروغواي", "ألمانيا"], "answer": "أوروغواي" },
    { "id": 37, "question": "في أي رياضة تستخدم عصا (Stick) وكرة صغيرة؟", "options": ["كرة السلة", "الغولف", "البيسبول", "الرجبي"], "answer": "الغولف" },
    { "id": 38, "question": "ما اسم الفيلم العربي الذي حصد أرفع الجوائز العالمية في عام 2024 (افتراضاً)؟", "options": ["البحث عن السعادة", "خمس نجوم", "المدينة الصامتة", "أرض الذهب"], "answer": "يجب أن تكون الإجابة قابلة للتعديل حسب آخر المعلومات" },
    { "id": 39, "question": "كم شوطاً في مباراة كرة السلة؟", "options": ["2", "3", "4", "5"], "answer": "4" },
    { "id": 40, "question": "ما هو اللون الذي يمثل الخطر في إشارات المرور؟", "options": ["الأصفر", "الأخضر", "الأزرق", "الأحمر"], "answer": "الأحمر" },

    // --- الأدب والفنون (41-50) ---
    { "id": 41, "question": "من هو مؤلف رواية 'دون كيشوت'؟", "options": ["ويليام شكسبير", "ميغيل دي ثيربانتس", "فيكتور هوغو", "ليو تولستوي"], "answer": "ميغيل دي ثيربانتس" },
    { "id": 42, "question": "ما اسم اللوحة الشهيرة التي رسمها ليوناردو دافنشي وتظهر فيها امرأة مبتسمة؟", "options": ["العشاء الأخير", "الموناليزا", "ميلاد فينوس", "الصرخة"], "answer": "الموناليزا" },
    { "id": 43, "question": "من هو مؤلف مسرحية 'روميو وجولييت'؟", "options": ["جورج برنارد شو", "أوسكار وايلد", "ويليام شكسبير", "ألبرت كامو"], "answer": "ويليام شكسبير" },
    { "id": 44, "question": "ما هي الجائزة الأرفع في مجال الأدب عالمياً؟", "options": ["جائزة البوكر", "جائزة نوبل للآداب", "جائزة البوليتزر", "جائزة مان بوكر"], "answer": "جائزة نوبل للآداب" },
    { "id": 45, "question": "أين ولد الأديب المصري نجيب محفوظ؟", "options": ["الإسكندرية", "أسوان", "القاهرة", "بورسعيد"], "answer": "القاهرة" },
    { "id": 46, "question": "ما هو مصطلح 'السيمفونية'؟", "options": ["مقطوعة مسرحية", "شعر غنائي", "مؤلفة موسيقية كبيرة", "نوع من الرقص"], "answer": "مؤلفة موسيقية كبيرة" },
    { "id": 47, "question": "من هو الفنان الذي قطع جزءاً من أذنه بنفسه؟", "options": ["فان جوخ", "بابلو بيكاسو", "كلود مونيه", "سلفادور دالي"], "answer": "فان جوخ" },
    { "id": 48, "question": "ما هو الاسم الآخر الذي يطلق على الخط العربي (الثلث)؟", "options": ["الخط الكوفي", "الخط الفارسي", "خط النسخ", "خط الثلث"], "answer": "خط الثلث" }, 
    { "id": 49, "question": "الرمز $(\\pi)$ في الرياضيات يسمى:", "options": ["النسبة الذهبية", "جذر تربيعي", "باي", "الدلتا"], "answer": "باي" },
    { "id": 50, "question": "ما اسم الشاعر الجاهلي الذي اشتهر بلقب 'الفتى القتيل'؟", "options": ["امرؤ القيس", "عنترة بن شداد", "زهير بن أبي سلمى", "طرفه بن العبد"], "answer": "طرفه بن العبد" },

    // --- التقنية ومعلومات متنوعة (51-60) ---
    { "id": 51, "question": "ما اسم الشركة التي طورت نظام التشغيل 'أندرويد'؟", "options": ["أبل", "مايكروسوفت", "غوغل", "سامسونج"], "answer": "غوغل" },
    { "id": 52, "question": "ما هي عملة اليابان؟", "options": ["اليوان", "الوون", "الين", "الروبية"], "answer": "الين" },
    { "id": 53, "question": "ما هي أكبر دولة في العالم من حيث عدد السكان؟", "options": ["الصين", "الهند", "الولايات المتحدة", "روسيا"], "answer": "الهند" },
    { "id": 54, "question": "ما هي المدة التي يحتاجها ضوء الشمس للوصول إلى الأرض (تقريباً)؟", "options": ["دقيقة واحدة", "8 دقائق", "30 دقيقة", "ساعة واحدة"], "answer": "8 دقائق" },
    { "id": 55, "question": "من هو مؤسس موقع التواصل الاجتماعي 'فيسبوك'؟", "options": ["بيل غيتس", "إيلون ماسك", "مارك زوكربيرغ", "جيف بيزوس"], "answer": "مارك زوكربيرغ" },
    { "id": 56, "question": "ما هو اسم الوحدة المستخدمة لقياس مقاومة التيار الكهربائي؟", "options": ["الأمبير", "الفولت", "الوات", "الأوم"], "answer": "الأوم" },
    { "id": 57, "question": "ما هو الاسم العلمي لملح الطعام؟", "options": ["بيكربونات الصوديوم", "كلوريد الصوديوم", "حمض الهيدروكلوريك", "أكسيد الكالسيوم"], "answer": "كلوريد الصوديوم" },
    { "id": 58, "question": "كم يوماً تحتاج الأرض لإكمال دورة واحدة حول الشمس؟", "options": ["30 يوماً", "365.25 يوماً", "180 يوماً", "24 ساعة"], "answer": "365.25 يوماً" },
    { "id": 59, "question": "ما هو أكبر حيوان على وجه الأرض؟", "options": ["الفيل الأفريقي", "الحوت الأزرق", "الزرافة", "الدب القطبي"], "answer": "الحوت الأزرق" },
    { "id": 60, "question": "ما هو الاسم القديم لمدينة إسطنبول؟", "options": ["أنقرة", "القسطنطينية", "أزمير", "طروادة"], "answer": "القسطنطينية" },

    // --- العواصم والمواقع (61-70) ---
    { "id": 61, "question": "ما هي عاصمة إسبانيا؟", "options": ["برشلونة", "فالنسيا", "مدريد", "إشبيلية"], "answer": "مدريد" },
    { "id": 62, "question": "أين يقع برج بيزا المائل؟", "options": ["فرنسا", "إيطاليا", "ألمانيا", "اليونان"], "answer": "إيطاليا" },
    { "id": 63, "question": "ما هي عاصمة أستراليا؟", "options": ["سيدني", "ملبورن", "كانبيرا", "بريزبان"], "answer": "كانبيرا" },
    { "id": 64, "question": "ما هو المضيق الذي يقع بين شبه الجزيرة العربية وقارة أفريقيا؟", "options": ["مضيق هرمز", "مضيق باب المندب", "مضيق جبل طارق", "قناة السويس"], "answer": "مضيق باب المندب" },
    { "id": 65, "question": "ما اسم العملة الرسمية لدولة قطر؟", "options": ["الدرهم", "الدينار", "الريال", "الجنيه"], "answer": "الريال" },
    { "id": 66, "question": "في أي دولة يقع سور الصين العظيم؟", "options": ["الهند", "الصين", "اليابان", "كوريا"], "answer": "الصين" },
    { "id": 67, "question": "ما هي القارة التي لا يوجد بها زواحف أصلية؟", "options": ["آسيا", "أوروبا", "أستراليا", "أنتاركتيكا"], "answer": "أنتاركتيكا" },
    { "id": 68, "question": "ما هو اللون الذي يرمز للسلام في العلم الدولي؟", "options": ["الأخضر", "الأبيض", "الأزرق", "الأصفر"], "answer": "الأبيض" },
    { "id": 69, "question": "ما هو الاسم القديم لمدينة نيويورك؟", "options": ["نيو بوسطن", "نيو أمستردام", "نيو لندن", "هوليوود"], "answer": "نيو أمستردام" },
    { "id": 70, "question": "ما هي ثاني أكبر مدينة في السعودية بعد الرياض؟", "options": ["مكة المكرمة", "جدة", "الدمام", "المدينة المنورة"], "answer": "جدة" }
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
