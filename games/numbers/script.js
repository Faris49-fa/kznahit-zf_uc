// ==========================================
// متغيرات اللعبة
// ==========================================
const SCORE_KEY_PREFIX = "sort_speed_score_"; 
const NUM_CARDS = 5; // عدد البطاقات
const MAX_NUMBER = 999;
const MIN_NUMBER = 100;

// العناصر الرسومية
const cardGrid = document.getElementById('card-grid');
const directionCard = document.getElementById('direction-card');
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const resultsTitle = document.getElementById('results-title');
const resultsMessage = document.getElementById('results-message');

let score = 0; // عدد الجولات المكتملة
let gameTime = 0;
let timeInterval;
let gameRunning = false;
let currentLevel = 'easy'; 

let correctSequence = []; // الترتيب الصحيح للأرقام في الجولة الحالية
let nextClickIndex = 0; // مؤشر على الرقم التالي الذي يجب النقر عليه

// ==========================================
// الدوال المساعدة للحفظ
// ==========================================
function saveHighscore(level, newScore) {
    const scoreKey = SCORE_KEY_PREFIX + level;
    const oldScore = parseInt(localStorage.getItem(scoreKey)) || 0;
    let isNewRecord = false;
    if (newScore > oldScore) {
        localStorage.setItem(scoreKey, newScore);
        isNewRecord = true;
    }
    return isNewRecord;
}

function getHighscore(level) {
    return parseInt(localStorage.getItem(SCORE_KEY_PREFIX + level)) || 0;
}

// ==========================================
// تهيئة وإعداد الشبكة
// ==========================================
function generateNumbersAndDirection() {
    // 1. توليد 5 أرقام فريدة بثلاث خانات
    let numbers = new Set();
    while (numbers.size < NUM_CARDS) {
        numbers.add(Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER);
    }
    let uniqueNumbers = Array.from(numbers);

    // 2. اختيار اتجاه الترتيب عشوائياً
    const isAscending = Math.random() < 0.5; // True = تصاعدي (أصغر للأكبر)

    // 3. تحديد الترتيب الصحيح وعرض التعليمات
    if (isAscending) {
        // تصاعدي: من الأصغر للأكبر
        correctSequence = uniqueNumbers.slice().sort((a, b) => a - b);
        directionCard.textContent = 'رتب من: الأصغر للأكبر ⬆️';
    } else {
        // تنازلي: من الأكبر للأصغر
        correctSequence = uniqueNumbers.slice().sort((a, b) => b - a);
        directionCard.textContent = 'رتب من: الأكبر للأصغر ⬇️';
    }
    
    // 4. تهيئة الجولة
    nextClickIndex = 0;
    renderGrid(uniqueNumbers);
}

function renderGrid(numbers) {
    cardGrid.innerHTML = '';
    numbers.forEach(num => {
        const card = document.createElement('div');
        card.classList.add('number-card');
        card.textContent = num;
        card.setAttribute('data-value', num);
        card.onclick = () => handleCardClick(card);
        cardGrid.appendChild(card);
    });
}

// ==========================================
// منطق النقر والتحقق
// ==========================================
function handleCardClick(card) {
    if (!gameRunning) return;
    if (card.classList.contains('correctly-clicked')) return; 

    const tappedValue = parseInt(card.getAttribute('data-value'));
    const expectedValue = correctSequence[nextClickIndex];

    if (tappedValue === expectedValue) {
        // نقرة صحيحة
        card.classList.add('correctly-clicked');
        nextClickIndex++;

        if (nextClickIndex === NUM_CARDS) {
            // اكتملت الجولة بنجاح
            score++;
            updateDisplay();
            
            // تهيئة جولة جديدة 
            setTimeout(generateNumbersAndDirection, 500);
        }

    } else {
        // نقرة خاطئة
        card.classList.add('wrong-clicked');
        setTimeout(() => { card.classList.remove('wrong-clicked'); }, 300);
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
    scoreDisplay.textContent = `الجولات: ${score}`;
}

// ==========================================
// بدء وإنهاء اللعبة
// ==========================================
function startGame(level) {
    currentLevel = level;
    // تحديد الوقت حسب المستوى: 15 للسهل، 12 للصعب
    gameTime = (level === 'easy') ? 15 : 12; 

    gameRunning = true;
    score = 0; 

    // إخفاء شاشة البداية وعرض شاشة اللعب
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    
    updateDisplay();
    generateNumbersAndDirection();
    startCountdown();
}

function endGame(reason) {
    gameRunning = false;
    clearInterval(timeInterval);
    
    const finalScore = score;
    const isNewRecord = saveHighscore(currentLevel, finalScore); 

    const levelName = currentLevel === 'hard' ? 'الصعب' : 'السهل';

    if (reason === 'Time Up') {
        resultsTitle.textContent = 'انتهى الوقت! ⏳';
    } else if (reason === 'Wrong Tap') {
        resultsTitle.textContent = 'خطأ في الترتيب! ❌';
    }
    
    const highscoreMessage = isNewRecord 
        ? "🏆 رقم قياسي جديد! تهانينا."
        : `أفضل رقم قياسي لديك في مستوى ${levelName}: ${getHighscore(currentLevel)}`;

    resultsMessage.innerHTML = `عدد الجولات المكتملة: <b>${finalScore}</b><br>${highscoreMessage}`;

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
