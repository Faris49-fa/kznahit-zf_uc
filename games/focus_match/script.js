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
const PALM_ICONS = ['🌴', '🌰', '🥥', '☀️']; // أيقونات التمر

const palmGrid = document.getElementById('palm-grid');
const scoreDisplay = document.getElementById('score-display');
const roundDisplay = document.getElementById('round-display');
const timeDisplay = document.getElementById('time-display');
const gameMessage = document.getElementById('game-message');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');

let score = 0;
let round = 1;
let gameRunning = false;
let sequence = []; // النمط الصحيح
let playerSequence = []; // نقرات اللاعب
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
    
    // منع النقر أثناء عرض النمط
    palmGrid.style.pointerEvents = 'none'; 
    playerSequence = [];
    clearInterval(timeInterval);
    timeDisplay.textContent = `الوقت: ${ (TIME_LIMIT / 1000).toFixed(2) } ثانية`;


    let i = 0;
    const intervalTime = Math.max(300, 500 - (round * 20)); // سرعة العرض تزيد
    
    const sequenceInterval = setInterval(() => {
        if (i >= sequence.length) {
            clearInterval(sequenceInterval);
            
            // انتهاء عرض النمط، الآن دور اللاعب
            setTimeout(startPlayerTurn, 500); 
            return;
        }

        const iconIndex = sequence[i];
        const iconElement = document.querySelector(`.palm-icon[data-index='${iconIndex}']`);
        
        // إضاءة الأيقونة
        iconElement.classList.add('highlight');

        // إطفاء الأيقونة بعد جزء من الوقت
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
        // خطأ في الترتيب!
        endGame('Wrong Tap');
        return;
    }

    // 2. التحقق من اكتمال النمط
    if (playerSequence.length === sequence.length) {
        // الجولة صحيحة!
        score++;
        round++;
        clearInterval(timeInterval);
        updateScore();
        updateRound();
        
        // تقليل الوقت المتاح للجولة التالية
        TIME_LIMIT = Math.max(1000, TIME_LIMIT - 100); 

        gameMessage.textContent = "✅ أحسنت! الجولة القادمة أصعب.";
        
        // بدء الجولة التالية بعد تأخير
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
            endGame('Time Up');
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
    resultsScreen.classList.add('hidden');
    
    updateScore();
    updateRound();
    createGrid();
    
    nextRound();
}

function nextRound() {
    generateNewStep(); // إضافة خطوة للنمط
    showSequence();    // عرض النمط الجديد
}


function endGame(reason) {
    gameRunning = false;
    clearInterval(timeInterval);
    
    palmGrid.style.pointerEvents = 'none'; // تعطيل النقر
    
    const finalScore = score;
    const isNewRecord = saveHighscore(SCORE_KEY, finalScore); 

    document.getElementById('final-score').textContent = `نقاطك النهائية: ${finalScore}`;

    if (reason === 'Time Up') {
        resultsScreen.querySelector('h2').textContent = 'انتهى الوقت! ⏳';
    } else if (reason === 'Wrong Tap') {
        resultsScreen.querySelector('h2').textContent = 'خطأ في النمط! ❌';
    }

    if (isNewRecord) {
        document.getElementById('high-score-message').textContent = "🏆 رقم قياسي جديد! تهانينا.";
    } else {
        const oldScore = parseFloat(localStorage.getItem(SCORE_KEY)) || 0;
        document.getElementById('high-score-message').textContent = `أفضل رقم قياسي لديك: ${oldScore}`;
    }

    resultsScreen.classList.add('active');
    resultsScreen.classList.remove('hidden');
}


startButton.onclick = startGame;
