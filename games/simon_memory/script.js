// ==========================================
// متغيرات اللعبة
// ==========================================
const lightButtons = document.querySelectorAll('.light-button');
const roundDisplay = document.getElementById('round-display');
const timeDisplay = document.getElementById('time-display');
const messageDisplay = document.getElementById('message-display');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');

let gameRunning = false;
let pattern = []; // تسلسل الأضواء الحالي
let playerClicks = []; // نقرات اللاعب
let round = 0;
let flashDuration = 700; // مدة الإضاءة الافتراضية (للتحكم في السرعة)
let playerTurn = false;

let timerInterval;
let startTime;

// ==========================================
// منطق التوقيت
// ==========================================
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    timeDisplay.textContent = `الوقت: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ==========================================
// التحكم في الإضاءة
// ==========================================
function flashLight(index) {
    const button = lightButtons[index];
    button.classList.add('active');
    
    // تشغيل الإضاءة لمدة flashDuration
    setTimeout(() => {
        button.classList.remove('active');
    }, flashDuration * 0.5); // وقت الإطفاء أقصر قليلاً
}

async function playPattern() {
    playerTurn = false;
    messageDisplay.textContent = 'راقب النمط... 👀';
    
    // إيقاف مؤقت لأزرار اللاعب
    lightButtons.forEach(btn => btn.style.pointerEvents = 'none');

    // تشغيل النمط بالكامل
    for (let i = 0; i < pattern.length; i++) {
        const index = pattern[i];
        flashLight(index);
        await new Promise(resolve => setTimeout(resolve, flashDuration));
    }

    // بعد انتهاء النمط، تفعيل دور اللاعب
    startPlayerTurn();
}

// ==========================================
// دور اللاعب
// ==========================================
function startPlayerTurn() {
    playerTurn = true;
    playerClicks = [];
    messageDisplay.textContent = 'دورك! كرر النمط 👆';
    
    // تفعيل النقر على الأزرار
    lightButtons.forEach(btn => btn.style.pointerEvents = 'auto');
}

function handleButtonClick(event) {
    if (!playerTurn) return;

    const clickedIndex = parseInt(event.target.getAttribute('data-index'));
    
    // إظهار النقر فوراً
    flashLight(clickedIndex);

    playerClicks.push(clickedIndex);
    
    // التحقق من النقرة الحالية
    const currentStep = playerClicks.length - 1;
    if (playerClicks[currentStep] !== pattern[currentStep]) {
        // خطأ!
        endGame('lost');
        return;
    }

    if (playerClicks.length === pattern.length) {
        // نجاح الجولة!
        round++;
        updateDisplay();
        
        // الانتقال للجولة التالية بعد تأخير بسيط
        setTimeout(nextRound, 1000);
    }
}

// ==========================================
// سير اللعبة
// ==========================================
function nextRound() {
    // 1. إضافة خطوة عشوائية جديدة للنمط
    const newIndex = Math.floor(Math.random() * 4); // 0, 1, 2, 3
    pattern.push(newIndex);
    
    // 2. زيادة سرعة الإضاءة لجعل اللعبة أصعب تدريجياً
    if (flashDuration > 200) { 
        flashDuration -= 25; 
    }

    playPattern();
}

function updateDisplay() {
    roundDisplay.textContent = `الجولة: ${round}`;
}

function startGame(duration) {
    clearInterval(timerInterval);
    flashDuration = duration; // تحديد سرعة النمط بناءً على اختيار اللاعب
    gameRunning = true;
    round = 1;
    pattern = [];
    
    // إخفاء شاشات البداية والنتائج
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    
    updateDisplay();
    startTimer();
    nextRound(); // بدء الجولة الأولى
}

function endGame(status) {
    gameRunning = false;
    playerTurn = false;
    clearInterval(timerInterval);
    lightButtons.forEach(btn => btn.style.pointerEvents = 'none');

    if (status === 'lost') {
        resultsTitle.textContent = 'خلص التمر! 💔';
        resultsMessage.innerHTML = `
            لقد وصلت إلى الجولة: <b>${round}</b><br>
            وكان وقتك الكلي: <b>${timeDisplay.textContent.replace('الوقت: ', '')}</b>
        `;
    } else {
        // يمكننا إضافة شرط للفوز، لكن في هذه اللعبة غالباً تستمر حتى الخطأ
    }

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

// ربط الأزرار بوظيفة النقر
lightButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
