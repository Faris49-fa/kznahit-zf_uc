// ==========================================
// دالة حفظ أعلى/أفضل درجة (مكررة هنا لعمل اللعبة بشكل مستقل)
// ==========================================
function saveHighscore(scoreKey, newScore, isTimeBased = false) {
    const oldScore = parseFloat(localStorage.getItem(scoreKey)) || 0;
    let isNewRecord = false;

    if (!isTimeBased) {
        // للأعلى هو الأفضل (نقاط)
        if (newScore > oldScore) {
            localStorage.setItem(scoreKey, newScore);
            isNewRecord = true;
        }
    }
    // ملاحظة: تم إهمال منطق الوقت لأن هذه اللعبة نقاط.
    
    return isNewRecord;
}


// ==========================================
// متغيرات اللعبة
// ==========================================
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');
const playArea = document.getElementById('play-area');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');

let score = 0;
let gameTimer;
const GAME_DURATION = 15000; // 15 ثانية بالملي ثانية
let gameRunning = false;
let targetSpawnInterval;
let targetLifetime = 1000; // وقت بقاء الهدف بالملي ثانية (سيتناقص)


// ==========================================
// منطق إنشاء وحذف الأهداف
// ==========================================

function spawnTarget() {
    if (!gameRunning) return;

    const areaWidth = playArea.clientWidth;
    const areaHeight = playArea.clientHeight;
    const targetSize = Math.max(30, 60 - score / 15); // تصغير الهدف ببطء

    // موقع عشوائي داخل حدود منطقة اللعب
    const x = Math.random() * (areaWidth - targetSize);
    const y = Math.random() * (areaHeight - targetSize);

    const target = document.createElement('div');
    target.classList.add('target');
    target.style.width = `${targetSize}px`;
    target.style.height = `${targetSize}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.lineHeight = `${targetSize}px`;

    // معالج النقر على الهدف
    target.onclick = function() {
        if (!gameRunning) return;
        score++;
        updateScore();
        this.remove();
    };

    playArea.appendChild(target);

    // جدولة إزالة الهدف تلقائياً بعد مدة بقائه
    setTimeout(() => {
        if (target.parentNode === playArea) {
            target.remove();
        }
    }, targetLifetime); 
    
    // زيادة سرعة اللعبة قليلاً
    targetLifetime = Math.max(500, targetLifetime - 1); 
}

// ==========================================
// منطق اللعبة والتحكم بالوقت
// ==========================================

function updateScore() {
    scoreDisplay.textContent = `النقاط: ${score}`;
}

function updateTime(remaining) {
    const seconds = (remaining / 1000).toFixed(2);
    timeDisplay.textContent = `الوقت: ${seconds} ثانية`;
}

function startGame() {
    score = 0;
    targetLifetime = 1000; // إعادة ضبط السرعة
    gameRunning = true;
    startScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    playArea.innerHTML = '';
    
    updateScore();
    updateTime(GAME_DURATION);

    // 1. بدء إنشاء الأهداف (كل 500ms)
    targetSpawnInterval = setInterval(spawnTarget, 500); 

    // 2. بدء مؤقت اللعبة الكلي
    let startTime = Date.now();
    gameTimer = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let remaining = GAME_DURATION - elapsed;

        if (remaining <= 0) {
            clearInterval(gameTimer);
            clearInterval(targetSpawnInterval);
            endGame();
            updateTime(0);
            return;
        }

        updateTime(remaining);
    }, 50); // تحديث سريع للوقت لإظهار الدقة

}

function endGame() {
    gameRunning = false;
    playArea.innerHTML = ''; // إزالة كل الأهداف
    
    const finalScore = score;
    const isNewRecord = saveHighscore("speed_score", finalScore, false); // 🔥 حفظ الدرجة

    document.getElementById('final-score').textContent = `نقاطك النهائية: ${finalScore}`;

    if (isNewRecord) {
        document.getElementById('high-score-message').textContent = "🏆 رقم قياسي جديد! تهانينا.";
        document.getElementById('high-score-message').style.color = '#f39c12';
    } else {
        const oldScore = parseFloat(localStorage.getItem("speed_score")) || 0;
        document.getElementById('high-score-message').textContent = `أفضل رقم قياسي لديك: ${oldScore}`;
        document.getElementById('high-score-message').style.color = '#bdc3c7';
    }

    resultsScreen.classList.remove('hidden');
}


// معالج النقر الخاطئ (لتقليل النقاط عند النقر خارج الهدف)
playArea.addEventListener('click', (event) => {
    if (!gameRunning) return;

    // التحقق مما إذا كان النقر على الهدف أم على مساحة اللعب
    if (event.target.classList.contains('target')) {
        // إذا نقر على الهدف، لا تفعل شيئاً (يتم التعامل معها في الدالة onclick للهدف)
        return;
    }

    // 🔥 خصم نقطة عند النقر الخاطئ
    score = Math.max(0, score - 1);
    updateScore();

    // تأثير بصري للنقر الخاطئ
    const wrongClick = document.createElement('div');
    wrongClick.classList.add('wrong-click-effect');
    wrongClick.style.left = `${event.offsetX}px`;
    wrongClick.style.top = `${event.offsetY}px`;
    playArea.appendChild(wrongClick);

    // إزالة التأثير بعد انتهاء الرسوم المتحركة
    wrongClick.addEventListener('animationend', () => {
        wrongClick.remove();
    });
});


startButton.onclick = startGame;
