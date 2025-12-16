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
const SCORE_KEY = "memory_palm_score";
const ICON_COUNT = 4; // عدد الأيقونات في الشبكة
const PALM_ICONS = ['🌴', '🌰', '🥥', '☀️']; // أيقونات التمر والمحيط

const palmGrid = document.getElementById('palm-grid');
const scoreDisplay = document.getElementById('score-display');
const roundDisplay = document.getElementById('round-display');
const timeDisplay = document.getElementById('time-display');
const gameMessage = document.getElementById('game-message');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');
const resultsTitle = document.getElementById('results-title');
const resultsMessage = document.getElementById('results-message');

let score = 0;
let round = 1;
let gameRunning = false;
let sequence = []; 
let playerSequence = []; 
let timeInterval;
let TIME_LIMIT = 3000; // 3 ثوانٍ للبدء


// ==========================================
// إنشاء واجهة اللعب
// ==========================================

function createGrid() {
    palmGrid.innerHTML = '';
    PALM_ICONS.forEach((icon, index) => {
        const item = document.createElement('div');
        item.classList.add('palm-icon');
        item.textContent = icon;
        item.setAttribute('data-index', index);
        item.onclick = () => handlePlayerTap(index, item);
        palmGrid.appendChild(item);
    });
}


// ==========================================
// منطق إنشاء النمط وتشغيله
// ==========================================

function generateNewStep() {
    // إضافة خطوة جديدة للنمط
    const randomIconIndex = Math.floor(Math.random() * ICON_COUNT);
    sequence.push(randomIconIndex);
}

function showSequence() {
    gameMessage.textContent = "شاهد النمط الآن...";
    
    palmGrid.style.pointerEvents = 'none'; // منع النقر أثناء العرض
    playerSequence = [];
    clearInterval(timeInterval);
    updateTime(TIME_LIMIT);


    let i = 0;
    // سرعة العرض تزيد كل جولة
    const intervalTime = Math.max(300, 700 - (round * 40)); 
    
    const sequenceInterval = setInterval(() => {
        if (i >= sequence.length) {
            clearInterval(sequenceInterval);
            setTimeout(startPlayerTurn, 500); 
            return;
        }

        const iconIndex = sequence[i];
        const iconElement = document.querySelector(`.palm-icon[data-index='${iconIndex}']`);
        
        iconElement.classList.add('highlight');

        setTimeout(() => {
            iconElement.classList.remove('highlight');
        }, intervalTime / 2);

        i++;
    }, intervalTime);
}

function startPlayerTurn() {
    gameMessage.textContent = "الآن دورك: كرر النمط!";
    palmGrid.style.pointerEvents = 'auto'; // السماح بالبدء في النقر
    startCountdown();
}


// ==========================================
// منطق تفاعل اللاعب والتحقق
// ==========================================

function handlePlayerTap(index, item) {
    if (!gameRunning) return;

    // تأثير النقر البصري
    item.classList.add('tapped');
    setTimeout(() => item.classList.remove('tapped'), 100);

    playerSequence.push(index);
    const playerStep = playerSequence.length - 1;

    // 1. تحقق من صحة النقر الحالي
    if (playerSequence[playerStep] !== sequence[playerStep]) {
        endGame('Wrong Tap'); // خطأ!
        return;
    }

    // 2. التحقق من اكتمال النمط
    if (playerSequence.length === sequence.length) {
        score++;
        round++;
        clearInterval(timeInterval);
        updateScore();
        updateRound();
        
        // تقليل الوقت المتاح للجولة التالية
        TIME_LIMIT = Math.max(1000, TIME_LIMIT - 150); 

        gameMessage.textContent = "✅ أحسنت! الجولة القادمة أصعب.";
        
        setTimeout(nextRound, 1500); 
    }
}


// ==========================================
// منطق التحكم والتوقيت
// ==========================================

function startCountdown() {
    clearInterval(timeInterval);
    let startTime = Date.now();
    let duration = TIME_LIMIT;

    timeInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(timeInterval);
            endGame('Time Up'); // انتهاء الوقت!
            updateTime(0);
            return;
        }

        updateTime(remaining);
    }, 50);
}

function updateTime(remaining) {
    const seconds = (remaining / 1000).toFixed(2);
    timeDisplay.textContent = `الوقت: ${seconds} ثانية`;
}

function updateScore() {
    scoreDisplay.textContent = `النقاط: ${score}`;
}

function updateRound() {
    roundDisplay.textContent = `الجولة: ${round}`;
}


function startGame() {
    // تهيئة اللعبة
    score = 0;
    round = 1;
    TIME_LIMIT = 3000;
    sequence = [];

    gameRunning = true;
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    
    updateScore();
    updateRound();
    createGrid();
    
    nextRound();
}


function nextRound() {
    generateNewStep(); 
    showSequence();    
}


function endGame(reason) {
    gameRunning = false;
    clearInterval(timeInterval);
    
    palmGrid.style.pointerEvents = 'none'; // تعطيل النقر

    const finalScore = score;
    const isNewRecord = saveHighscore(SCORE_KEY, finalScore); 

    // تحديث شاشة النتائج
    if (reason === 'Time Up') {
        resultsTitle.textContent = 'انتهى الوقت! ⏳';
    } else if (reason === 'Wrong Tap') {
        resultsTitle.textContent = 'خطأ في النمط! ❌';
    }
    
    const highscoreMessage = isNewRecord 
        ? "🏆 رقم قياسي جديد! تهانينا."
        : `أفضل رقم قياسي لديك: ${parseFloat(localStorage.getItem(SCORE_KEY)) || 0}`;

    resultsMessage.innerHTML = `نقاطك النهائية: <b>${finalScore}</b><br>${highscoreMessage}`;

    resultsScreen.classList.add('active');
    resultsScreen.classList.remove('hidden');
}


// ==========================================
// دوال التحكم بالصفحة (إعادة/عودة)
// ==========================================

function resetGame(){
    // إعادة تحميل الصفحة للبدء من جديد
    location.reload(); 
}

function backToHome(){
    // العودة إلى الصفحة الرئيسية (الافتراض هو مجلدين للخلف)
    location.href = '../../index.html'; 
}


startButton.onclick = startGame;
