// ==========================================
// متغيرات اللعبة
// ==========================================
const SCORE_KEY = "anbari_speed_score";
const VISIBLE_NUMBERS = 5; // عدد الأرقام الظاهرة
const TIME_BONUS = 0.5; // مكافأة الوقت لكل نقرة صحيحة

// العناصر الرسومية (بدون تغيير)
const numberGrid = document.getElementById('number-grid');
const scoreDisplay = document.getElementById('score-display');
const targetDisplay = document.getElementById('target-display');
const timeDisplay = document.getElementById('time-display');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const resultsTitle = document.getElementById('results-title');
const resultsMessage = document.getElementById('results-message');

let score = 0;
let nextTarget = 1;
let gameTime = 0;
let timeInterval;
let gameRunning = false;
let allNumbers; // مصفوفة الأرقام الظاهرة (5 عناصر)

// متغيرات خاصة بالمستوى
let MIN_NUMBER = 1;
let MAX_NUMBER = 99;
let INITIAL_TIME = 15; // الافتراضي للسهل
let currentLevel = 'easy'; 

// ==========================================
// الدوال المساعدة للحفظ (بدون تغيير)
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
// تهيئة المستوى
// ==========================================
function setupLevel(level) {
    currentLevel = level;
    if (level === 'hard') {
        MIN_NUMBER = 100;
        MAX_NUMBER = 999;
        INITIAL_TIME = 12; // 12 ثانية للصعب
    } else {
        // الإعدادات الافتراضية للسهل
        MIN_NUMBER = 1;
        MAX_NUMBER = 99;
        INITIAL_TIME = 15; // 15 ثانية للسهل
    }
}

// ==========================================
// تهيئة وإعداد الشبكة (إنشاء 5 أرقام عشوائية)
// ==========================================
function generateRandomNumbers() {
    let numbers = new Set();
    const range = MAX_NUMBER - MIN_NUMBER + 1;

    // توليد 5 أرقام فريدة (من ضمنها الرقم المستهدف)
    while (numbers.size < VISIBLE_NUMBERS) {
        let num;
        if (numbers.size === VISIBLE_NUMBERS - 1) {
             num = nextTarget;
        } else {
             num = Math.floor(Math.random() * range) + MIN_NUMBER;
        }
        
        // يجب أن نضمن أن الرقم ليس أصغر من الهدف الحالي إذا كان الهدف أكبر من 1
        if (nextTarget > 1 && num < nextTarget && num !== nextTarget) {
            continue; 
        }

        numbers.add(num);
    }
    
    // الأرقام الظاهرة يتم ترتيبها تصاعدياً لسهولة العرض، لكن اللاعب يضغط عليها تصاعدياً (من الهدف)
    allNumbers = Array.from(numbers).sort((a, b) => a - b); 
    renderGrid();
}

function renderGrid() {
    numberGrid.innerHTML = '';
    allNumbers.forEach(num => {
        const cell = document.createElement('div');
        cell.classList.add('number-cell');
        cell.textContent = num;
        cell.setAttribute('data-value', num);
        cell.onclick = () => handleTap(cell);
        
        // تمييز الرقم المستهدف بصريًا
        if (num === nextTarget) {
             cell.style.border = '2px solid #f1c40f'; 
        } else {
             cell.style.border = 'none';
        }
        
        numberGrid.appendChild(cell);
    });
}

// ==========================================
// منطق النقر والتحقق 
// ==========================================
function handleTap(cell) {
    if (!gameRunning) return;

    const tappedValue = parseInt(cell.getAttribute('data-value'));

    if (tappedValue === nextTarget) {
        // نقرة صحيحة
        score++;
        cell.classList.add('matched');
        gameTime += TIME_BONUS; // مكافأة الوقت
        
        nextTarget++;
        updateDisplay();
        
        // تحديث الشبكة بعد نقرة صحيحة
        setTimeout(generateRandomNumbers, 100); 
        
    } else {
        // نقرة خاطئة
        cell.style.backgroundColor = '#e74c3c'; 
        setTimeout(() => { cell.style.backgroundColor = '#34495e'; }, 300);
        endGame('Wrong Tap');
    }
}

// ==========================================
// منطق التوقيت 
// ==========================================
function startCountdown() {
    clearInterval(timeInterval);
    let startTime = Date.now();
    let duration = gameTime * 1000; 

    timeInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(timeInterval);
            endGame('Time Up'); 
            updateTime(0);
            return;
        }

        gameTime = remaining / 1000;
        updateTime(gameTime);
    }, 50);
}

function updateTime(remaining) {
    const seconds = remaining.toFixed(2);
    timeDisplay.textContent = `الوقت: ${seconds} ثوانٍ`;
}

function updateDisplay() {
    scoreDisplay.textContent = `النقاط: ${score}`;
    targetDisplay.textContent = `ابحث عن: ${nextTarget}`;
}

// ==========================================
// بدء وإنهاء اللعبة 
// ==========================================
function startGame(level) {
    setupLevel(level); // إعداد المستوى

    // إخفاء شاشة البداية وعرض شاشة اللعب
    gameRunning = true;
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    
    // تهيئة المتغيرات
    score = 0;
    nextTarget = MIN_NUMBER; // البدء دائماً من الرقم الأصغر في النطاق
    gameTime = INITIAL_TIME;

    updateDisplay();
    generateRandomNumbers();
    startCountdown();
}

function endGame(reason) {
    gameRunning = false;
    clearInterval(timeInterval);
    
    const finalScore = nextTarget - 1; // الرقم الأخير الذي تم النقر عليه
    const isNewRecord = saveHighscore(SCORE_KEY + '_' + currentLevel, finalScore); 

    const levelName = currentLevel === 'hard' ? 'الصعب (100-999)' : 'السهل (1-99)';

    if (reason === 'Time Up') {
        resultsTitle.textContent = 'انتهى الوقت! ⏳';
    } else if (reason === 'Wrong Tap') {
        resultsTitle.textContent = 'خطأ في الترتيب! ❌';
    }
    
    const highscoreMessage = isNewRecord 
        ? "🏆 رقم قياسي جديد! تهانينا."
        : `أفضل رقم قياسي لديك: ${parseFloat(localStorage.getItem(SCORE_KEY + '_' + currentLevel)) || 0}`;

    resultsMessage.innerHTML = `نقاطك النهائية في المستوى ${levelName}: <b>${finalScore}</b><br>${highscoreMessage}`;

    resultsScreen.classList.add('active');
    resultsScreen.classList.remove('hidden');
}


// ==========================================
// دوال التحكم بالصفحة (إعادة/عودة)
// ==========================================
function resetGame(){
    location.reload(); 
}

function backToHome(){
    location.href = '../../index.html'; 
}
