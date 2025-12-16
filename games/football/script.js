// ==========================================
// 1. مجموعة الأسئلة الكاملة (70 سؤال كروي)
// ==========================================
const fullQuestionPool = [
    // --- كأس العالم والتاريخ (1-10) ---
    { "id": 1, "question": "ما هي الدولة التي استضافت أول بطولة لكأس العالم عام 1930؟", "options": ["البرازيل", "إيطاليا", "أوروغواي", "فرنسا"], "answer": "أوروغواي" },
    { "id": 2, "question": "كم مرة فازت البرازيل بلقب كأس العالم؟", "options": ["4", "5", "6", "7"], "answer": "5" },
    { "id": 3, "question": "من هو الهداف التاريخي لبطولات كأس العالم؟", "options": ["ميروسلاف كلوزه", "بيليه", "رونالدو نازاريو", "جيرد مولر"], "answer": "ميروسلاف كلوزه" },
    { "id": 4, "question": "في أي عام تم إطلاق اسم 'دوري أبطال أوروبا' بدلاً من 'كأس أوروبا للأندية البطلة'؟", "options": ["1990", "1992", "1995", "1998"], "answer": "1992" },
    { "id": 5, "question": "ما هي الدولة الأفريقية التي وصلت لربع نهائي كأس العالم لأول مرة في 1990؟", "options": ["نيجيريا", "الكاميرون", "المغرب", "غانا"], "answer": "الكاميرون" },
    { "id": 6, "question": "من هو اللاعب الوحيد الذي فاز بكأس العالم كلاعب وكمدرب؟", "options": ["ديدييه ديشامب", "ماريو زاغالو", "فرانز بيكنباور", "كلاهما (ديشامب وبيكنباور)"], "answer": "كلاهما (ديشامب وبيكنباور)" },
    { "id": 7, "question": "كم فريقاً شارك في كأس العالم 2022 في قطر؟", "options": ["24", "32", "36", "48"], "answer": "32" },
    { "id": 8, "question": "كم مرة فازت إيطاليا بكأس العالم؟", "options": ["2", "3", "4", "5"], "answer": "4" },
    { "id": 9, "question": "ما اسم الكرة الرسمية لكأس العالم 1970؟", "options": ["تيليستار", "أديداس تانغو", "جابولاني", "فوت بال"], "answer": "تيليستار" },
    { "id": 10, "question": "أين أقيمت أول مباراة دولية رسمية في تاريخ كرة القدم؟", "options": ["إنجلترا", "إسكتلندا", "أوروغواي", "البرازيل"], "answer": "إسكتلندا" },

    // --- الدوريات الأوروبية الكبرى (11-20) ---
    { "id": 11, "question": "ما هو الفريق الذي فاز بأكبر عدد من ألقاب الدوري الإنجليزي الممتاز (منذ 1992)؟", "options": ["ليفربول", "تشيلسي", "مانشستر سيتي", "مانشستر يونايتد"], "answer": "مانشستر يونايتد" },
    { "id": 12, "question": "كم مرة فاز ريال مدريد بدوري أبطال أوروبا حتى عام 2024 (تقريباً)؟", "options": ["12", "13", "14", "15"], "answer": "15" },
    { "id": 13, "question": "ما هو الملعب الرئيسي لنادي برشلونة؟", "options": ["واندا متروبوليتانو", "كامب نو", "سانتياغو برنابيو", "أنفيلد"], "answer": "كامب نو" },
    { "id": 14, "question": "من هو المدرب الأكثر فوزاً بلقب الدوري الإيطالي (سيري آ)؟", "options": ["كارلو أنشيلوتي", "ماسيميليانو أليغري", "جوزيه مورينيو", "جيوفاني تراباتوني"], "answer": "جيوفاني تراباتوني" },
    { "id": 15, "question": "ما هو الفريق الألماني الذي فاز بأكبر عدد من ألقاب البوندسليغا على الإطلاق؟", "options": ["بوروسيا دورتموند", "بايرن ميونخ", "هامبورغ", "شالكه 04"], "answer": "بايرن ميونخ" },
    { "id": 16, "question": "في أي دوري يلعب نادي باريس سان جيرمان؟", "options": ["الليغا الإسبانية", "الدوري الفرنسي (ليغ 1)", "الدوري الإيطالي", "الدوري الألماني"], "answer": "الدوري الفرنسي (ليغ 1)" },
    { "id": 17, "question": "ما اسم الدرع الذي يمنح للفائز بالدوري الإنجليزي الممتاز؟", "options": ["درع الدوري", "درع الفائز", "كأس البريميرليغ", "درع الاتحاد"], "answer": "كأس البريميرليغ" },
    { "id": 18, "question": "ما هو الملعب الذي يعرف باسم 'المسرح العظيم للأحلام'؟", "options": ["ملعب الإمارات", "أولد ترافورد", "سان سيرو", "أليانز أرينا"], "answer": "أولد ترافورد" },
    { "id": 19, "question": "ما اسم الفريق الذي يشارك يوفنتوس في ديربي تورينو؟", "options": ["إيه سي ميلان", "إنتر ميلان", "تورينو", "فيورنتينا"], "answer": "تورينو" },
    { "id": 20, "question": "من هو صاحب الرقم القياسي لأسرع هدف في تاريخ الدوري الإنجليزي الممتاز؟", "options": ["آلان شيرر", "محمد صلاح", "شاين لونغ", "تييري هنري"], "answer": "شاين لونغ" },

    // --- نجوم وأرقام قياسية عالمية (21-30) ---
    { "id": 21, "question": "من هو اللاعب الذي فاز بأكبر عدد من كرات بالون دور (الكرة الذهبية)؟", "options": ["كريستيانو رونالدو", "ليونيل ميسي", "يوهان كرويف", "ميشيل بلاتيني"], "answer": "ليونيل ميسي" },
    { "id": 22, "question": "كم هدفاً دولياً سجل كريستيانو رونالدو (تقريباً حتى 2024)؟", "options": ["أكثر من 100", "أكثر من 130", "أكثر من 150", "أكثر من 200"], "answer": "أكثر من 130" },
    { "id": 23, "question": "ما هو الرقم الذي اشتهر به اللاعب زين الدين زيدان في معظم مسيرته؟", "options": ["7", "10", "5", "9"], "answer": "10" },
    { "id": 24, "question": "من هو أصغر لاعب يسجل في تاريخ نهائيات كأس العالم؟", "options": ["بيليه", "كيليان مبابي", "ليونيل ميسي", "مايكل أوين"], "answer": "بيليه" },
    { "id": 25, "question": "كم بطولة لدوري أبطال أوروبا فاز بها كارلو أنشيلوتي كمدرب (تقريباً حتى 2024)؟", "options": ["3", "4", "5", "6"], "answer": "5" },
    { "id": 26, "question": "من هو اللاعب العربي الوحيد الذي فاز بجائزة أفضل لاعب في العالم؟", "options": ["رياض محرز", "محمد صلاح", "جورج وياه", "سعدان شحاتة"], "answer": "جورج وياه" },
    { "id": 27, "question": "ما هو المركز الذي كان يلعب فيه باولو مالديني؟", "options": ["وسط مهاجم", "مهاجم صريح", "مدافع", "حارس مرمى"], "answer": "مدافع" },
    { "id": 28, "question": "ما هو اسم اللاعب الملقب بـ 'الظاهرة'؟", "options": ["رونالدينيو", "روماريو", "رونالدو نازاريو", "ريفالدو"], "answer": "رونالدو نازاريو" },
    { "id": 29, "question": "من هو المدرب الذي قاد اليونان للفوز ببطولة أوروبا 2004؟", "options": ["يورجن كلوب", "أوتو ريهاغل", "لويس فيغو", "جوزيه مورينيو"], "answer": "أوتو ريهاغل" },
    { "id": 30, "question": "كم عدد البطولات التي فاز بها ليونيل ميسي مع نادي برشلونة (تقريباً)؟", "options": ["25", "35", "40", "45"], "answer": "35" },

    // --- الدوريات العربية وآسيا (31-40) ---
    { "id": 31, "question": "من هو النادي السعودي الأكثر تتويجاً بلقب الدوري السعودي الممتاز؟", "options": ["النصر", "الهلال", "الاتحاد", "الأهلي"], "answer": "الهلال" },
    { "id": 32, "question": "كم مرة فاز المنتخب المصري بكأس الأمم الأفريقية (تقريباً)؟", "options": ["5", "7", "9", "10"], "answer": "7" },
    { "id": 33, "question": "ما هو النادي الذي فاز بلقب دوري أبطال آسيا 5 مرات متتالية (هذا السؤال افتراضي)؟", "options": ["الهلال", "أوراوا ريدز", "فيتوكلوب", "العين"], "answer": "الهلال" },
    { "id": 34, "question": "في أي دولة عربية أقيمت كأس الخليج العربي 25؟", "options": ["الكويت", "قطر", "العراق", "السعودية"], "answer": "العراق" },
    { "id": 35, "question": "ما هو النادي الأكثر فوزاً بدوري أبطال أفريقيا؟", "options": ["الزمالك", "الترجي", "الأهلي المصري", "الوداد"], "answer": "الأهلي المصري" },
    { "id": 36, "question": "من هو الهداف التاريخي للدوري السعودي الممتاز؟", "options": ["ماجد عبد الله", "سامي الجابر", "عمر السومة", "ناصر الشمراني"], "answer": "ماجد عبد الله" },
    { "id": 37, "question": "ما هي أول دولة عربية استضافت كأس العالم؟", "options": ["المغرب", "السعودية", "قطر", "الإمارات"], "answer": "قطر" },
    { "id": 38, "question": "ما هو النادي القطري الذي فاز بلقب دوري أبطال آسيا؟", "options": ["السد", "الريان", "الدحيل", "العربي"], "answer": "السد" },
    { "id": 39, "question": "ما اسم الكرة الرسمية لكأس آسيا 2023 في قطر؟", "options": ["الرحلة", "الهدّاف", "الفانوس", "العيش"], "answer": "الرحلة" },
    { "id": 40, "question": "كم مرة فاز المنتخب السعودي بكأس آسيا؟", "options": ["2", "3", "4", "5"], "answer": "3" },

    // --- قوانين ومفاهيم كروية (41-50) ---
    { "id": 41, "question": "كم عدد التبديلات المسموح بها لكل فريق في المباراة الواحدة بالدوريات الكبرى؟", "options": ["3", "4", "5", "6"], "answer": "5" },
    { "id": 42, "question": "ما هو الحد الأقصى لعدد لاعبي الاحتياط المسموح به في دوري أبطال أوروبا (في قائمة المباراة)؟", "options": ["7", "9", "12", "15"], "answer": "12" },
    { "id": 43, "question": "ماذا تعني قاعدة 'V.A.R' في كرة القدم؟", "options": ["مساعدة الهدف بالفيديو", "تقنية الفيديو المساعدة", "التحقق بالفيديو والهدف", "لا شيء مما سبق"], "answer": "تقنية الفيديو المساعدة" },
    { "id": 44, "question": "كم يبلغ طول ملعب كرة القدم الرسمي المعتمد من الفيفا (تقريباً)؟", "options": ["بين 90 و 100 متر", "بين 100 و 110 متر", "بين 110 و 120 متر", "أكثر من 120 متر"], "answer": "بين 100 و 110 متر" },
    { "id": 45, "question": "متى يتم احتساب تسلل على اللاعب المهاجم؟", "options": ["عندما يلمس الكرة فقط", "عندما يشارك باللعب ويكون أقرب للمرمى من المدافع الأخير وحارس المرمى", "عندما يكون خلف خط الوسط فقط", "عندما يكون في منطقة الجزاء"], "answer": "عندما يشارك باللعب ويكون أقرب للمرمى من المدافع الأخير وحارس المرمى" },
    { "id": 46, "question": "ما اسم البطاقة التي يظهرها الحكم لإنذار اللاعب؟", "options": ["البطاقة الخضراء", "البطاقة الحمراء", "البطاقة الصفراء", "البطاقة الزرقاء"], "answer": "البطاقة الصفراء" },
    { "id": 47, "question": "إذا أوقف الحكم المباراة بشكل مؤقت، كيف تستأنف الكرة إذا لم تكن هناك مخالفة محددة؟", "options": ["رمية تماس", "ركلة حرة مباشرة", "إسقاط الكرة (Drop Ball)", "ركلة جزاء"], "answer": "إسقاط الكرة (Drop Ball)" },
    { "id": 48, "question": "ما هو الحد الأدنى من اللاعبين في الفريق ليتم البدء أو استمرار المباراة؟", "options": ["7 لاعبين", "9 لاعبين", "10 لاعبين", "11 لاعبين"], "answer": "7 لاعبين" },
    { "id": 49, "question": "إذا ارتكب الحارس خطأ داخل منطقة الجزاء ضد مهاجم، فماذا يمنح الفريق المهاجم؟", "options": ["ركلة حرة غير مباشرة", "ركلة ركنية", "ركلة جزاء", "بطاقة صفراء"], "answer": "ركلة جزاء" },
    { "id": 50, "question": "كم يبلغ قطر دائرة منتصف الملعب؟", "options": ["9.15 متر", "10 أمتار", "12 متراً", "15 متراً"], "answer": "9.15 متر" },

    // --- أسئلة متنوعة (51-70) ---
    { "id": 51, "question": "ما هي الدولة التي فازت بأكبر عدد من ألقاب كأس القارات؟", "options": ["البرازيل", "فرنسا", "ألمانيا", "الأرجنتين"], "answer": "البرازيل" },
    { "id": 52, "question": "ما اسم اللاعب الذي لقب بـ 'ملك روما'؟", "options": ["فرانشيسكو توتي", "دانييلي دي روسي", "جبريل باتيستوتا", "كاكا"], "answer": "فرانشيسكو توتي" },
    { "id": 53, "question": "كم هدفاً سجل محمد صلاح في موسم واحد في الدوري الإنجليزي الممتاز (الرقم القياسي له)؟", "options": ["28", "32", "35", "40"], "answer": "32" },
    { "id": 54, "question": "من هو حارس المرمى الذي فاز بالكرة الذهبية؟", "options": ["إيكر كاسياس", "جان لويجي بوفون", "ليف ياشين", "أوليفر كان"], "answer": "ليف ياشين" },
    { "id": 55, "question": "ما هو النادي الذي اشتهر بارتداء قميص 'البيانكونيري'؟", "options": ["روما", "نابولي", "يوفنتوس", "إيه سي ميلان"], "answer": "يوفنتوس" },
    { "id": 56, "question": "في أي مدينة يقع نادي بايرن ميونخ؟", "options": ["برلين", "دورتموند", "ميونخ", "هامبورغ"], "answer": "ميونخ" },
    { "id": 57, "question": "ما هو الفريق الذي فاز بـ 'الثلاثية التاريخية' (دوري، كأس، أبطال) مرتين؟", "options": ["ريال مدريد", "مانشستر يونايتد", "برشلونة", "بايرن ميونخ"], "answer": "بايرن ميونخ" }, 
    { "id": 58, "question": "من هو المدرب الذي لقب بـ 'السبيشال وان'؟", "options": ["بيب غوارديولا", "أليكس فيرغسون", "جوزيه مورينيو", "آرسين فينجر"], "answer": "جوزيه مورينيو" },
    { "id": 59, "question": "ما اسم الملعب الذي استضاف نهائي دوري أبطال أوروبا 2024؟", "options": ["ويمبلي", "سان سيرو", "كامب نو", "باركن"], "answer": "ويمبلي" },
    { "id": 60, "question": "من هو اللاعب الذي سجل هدف 'يد الرب' في كأس العالم 1986؟", "options": ["بيليه", "دييغو مارادونا", "غاري لينيكر", "ميغيل دي ثيربانتس"], "answer": "دييغو مارادونا" },
    { "id": 61, "question": "ما هي الدولة التي لم تخسر أي نهائي لكأس العالم وصلت إليه؟", "options": ["ألمانيا", "إيطاليا", "البرازيل", "أوروغواي"], "answer": "أوروغواي" },
    { "id": 62, "question": "ما هو النادي الذي يطلق عليه لقب 'السيدة العجوز'؟", "options": ["إنتر ميلان", "إي سي ميلان", "روما", "يوفنتوس"], "answer": "يوفنتوس" },
    { "id": 63, "question": "من هو أول لاعب عربي يحصل على جائزة أفضل لاعب في الدوري الإنجليزي الممتاز؟", "options": ["محمد صلاح", "رياض محرز", "نور الدين أمرابط", "حكيم زياش"], "answer": "رياض محرز" },
    { "id": 64, "question": "كم عدد الفرق الإنجليزية التي فازت بدوري أبطال أوروبا؟", "options": ["4", "5", "6", "7"], "answer": "5" },
    { "id": 65, "question": "ما اسم الممثل الذي أدى دور بيليه في فيلم 'بيليه: ميلاد أسطورة'؟", "options": ["ساندرو فيليكس", "ليوناردو كارافاليو", "كيفن دي بولا", "إدسون أرانتس"], "answer": "كيفن دي بولا" },
    { "id": 66, "question": "من هو اللاعب الذي لعب لأكبر عدد من أندية الدوري الإنجليزي الممتاز؟", "options": ["بيتر كراوتش", "نيكولا أنيلكا", "جيرمان ديفو", "واين روني"], "answer": "نيكولا أنيلكا" },
    { "id": 67, "question": "ما هو لقب نادي مانشستر يونايتد؟", "options": ["البلوز", "المدفعجية", "الشياطين الحمر", "الريدز"], "answer": "الشياطين الحمر" },
    { "id": 68, "question": "ما هو أكبر فوز في تاريخ كأس العالم للرجال؟", "options": ["10-1", "9-0", "8-0", "11-0"], "answer": "10-1" },
    { "id": 69, "question": "في أي مدينة يقع مقر الاتحاد الأوروبي لكرة القدم (يويفا)؟", "options": ["باريس", "لندن", "نيون (سويسرا)", "برلين"], "answer": "نيون (سويسرا)" },
    { "id": 70, "question": "من هو اللاعب الفائز بالكرة الذهبية لعام 1998؟", "options": ["رونالدو نازاريو", "زين الدين زيدان", "ديفيد بيكهام", "مايكل أوين"], "answer": "زين الدين زيدان" }
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
    quizQuestions = getShuffledQuizQuestions(fullQuestionPool, 10);
    displayQuestion();
}

// بدء اللعبة
document.addEventListener('DOMContentLoaded', initializeQuiz);
