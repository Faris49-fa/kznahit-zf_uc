// ==========================================
// دالة حفظ أعلى/أفضل درجة
// ==========================================
function saveHighscore(scoreKey, newScore) {
    const oldScore = parseFloat(localStorage.getItem(scoreKey)) || 0;
    let isNewRecord = false;
    if (newScore > oldScore) {
        localStorage.setItem(scoreKey, newScore);
        isNewRecord = true;
    }
    return isNewRecord;
}


// ==========================================
// متغيرات اللعبة
// ==========================================
const SCORE_KEY = "number_sort_score";
const NUMBERS_COUNT = 6;
const GAME_DURATION = 15000; // 15 ثوانٍ

const numbersList = document.getElementById('numbers-list');
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');
const targetOrderText = document.getElementById('target-order-text');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');

let score = 0;
let timeInterval;
let gameRunning = false;
let correctOrder = [];
let isAscending = false; // هل الترتيب تصاعدي (من الأصغر للأكبر)


// ==========================================
// منطق إنشاء التحدي
// ==========================================

function generateNumbers() {
    let numbers = [];
    while (numbers.length < NUMBERS_COUNT) {
        // توليد رقم من ثلاث خانات (بين 100 و 999)
        let num = Math.floor(Math.random() * 900) + 100;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

function generateChallenge() {
    numbersList.innerHTML = '';
    
    // 1. توليد الأرقام العشوائية
    let generatedNumbers = generateNumbers();
    
    // 2. تحديد نوع الترتيب المطلوب
    isAscending = Math.random() > 0.5;
    
    if (isAscending) {
        targetOrderText.textContent = "رتب من الأصغر إلى الأكبر (تصاعدي)";
        // الترتيب الصحيح: نسخ الأرقام وترتيبها تصاعدياً
        correctOrder = [...generatedNumbers].sort((a, b) => a - b);
    } else {
        targetOrderText.textContent = "رتب من الأكبر إلى الأصغر (تنازلي)";
        // الترتيب الصحيح: نسخ الأرقام وترتيبها تنازلياً
        correctOrder = [...generatedNumbers].sort((a, b) => b - a);
    }
    
    // 3. إنشاء بطاقات الأرقام (تظهر بترتيب عشوائي)
    // خلط الأرقام قبل عرضها
    generatedNumbers.sort(() => Math.random() - 0.5); 

    generatedNumbers.forEach(num => {
        const card = document.createElement('div');
        card.classList.add('number-card');
        card.textContent = num;
        card.setAttribute('data-value', num);
        numbersList.appendChild(card);
    });
}


// ==========================================
// منطق التحقق والتحكم
// ==========================================

function checkOrder() {
    if (!gameRunning) return;

    // الحصول على ترتيب الأرقام الحالي في القائمة
    const currentOrderElements = Array.from(numbersList.children);
    const currentOrderValues = currentOrderElements.map(card => parseInt(card.getAttribute('data-value')));

    // مقارنة الترتيب الحالي بالترتيب الصحيح
    const isCorrect = currentOrderValues.every((value, index) => value === correctOrder[index]);

    if (isCorrect) {
        score++;
        updateScore();
        clearInterval(timeInterval);
        // إعادة ضبط المؤقت بالكامل لبدء جولة جديدة
        startGame(); 
    }
}

function startCountdown() {
    clearInterval(timeInterval);
    let startTime = Date.now();
    let duration = GAME_DURATION;

    timeInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(timeInterval);
            endGame('Time Up');
            updateTime(0);
            return;
        }

        updateTime(remaining);
    }, 50);
}

function updateTime(remaining) {
    const seconds = (remaining / 1000).toFixed(2);
    timeDisplay.textContent = `الوقت المتبقي: ${seconds} ثانية`;
}

function updateScore() {
    scoreDisplay.textContent = `النقاط: ${score}`;
}

function startGame() {
    gameRunning = true;
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    
    generateChallenge();
    startCountdown();
}

function endGame(reason) {
    gameRunning = false;
    clearInterval(timeInterval);
    
    const finalScore = score;
    const isNewRecord = saveHighscore(SCORE_KEY, finalScore); 

    document.getElementById('final-score').textContent = `نقاطك النهائية: ${finalScore}`;

    if (reason === 'Time Up') {
        resultsScreen.querySelector('h2').textContent = 'انتهى الوقت! ⏳';
    } 

    if (isNewRecord) {
        document.getElementById('high-score-message').textContent = "🏆 رقم قياسي جديد! تهانينا.";
    } else {
        const oldScore = parseFloat(localStorage.getItem(SCORE_KEY)) || 0;
        document.getElementById('high-score-message').textContent = `أفضل رقم قياسي لديك: ${oldScore}`;
    }

    resultsScreen.classList.remove('hidden');
}


// ==========================================
// تفعيل السحب والإفلات (SortableJS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // تفعيل وظيفة السحب على قائمة الأرقام
    new Sortable(numbersList, {
        animation: 150,
        ghostClass: 'sortable-ghost', // لتنسيق العنصر الشبحي
        onEnd: function (evt) {
            // التحقق من الترتيب فور الانتهاء من السحب
            checkOrder(); 
        },
    });
    
    // ربط زر البدء
    startButton.onclick = startGame; 
});
