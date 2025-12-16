// ==========================================
// متغيرات اللعبة
// ==========================================
const icons = ['⭐', '💖', '🍎', '🌈', '🌙', '🔑', '💡', '🚀']; // 8 أيقونات
const gameGrid = document.getElementById('memory-grid');
const movesDisplay = document.getElementById('moves-display');
const timeDisplay = document.getElementById('time-display');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');
const resultsTitle = document.getElementById('results-title');
const resultsMessage = document.getElementById('results-message');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let totalPairs = icons.length;
let moves = 0;

let timerInterval;
let startTime;
let gameRunning = false;
let awaitingEndOfMove = false; // لمنع النقر السريع بعد قلب بطاقتين

// ==========================================
// تهيئة اللعبة
// ==========================================
function initializeGame() {
    // 1. إنشاء مصفوفة البطاقات (8 أزواج = 16 بطاقة)
    cards = [...icons, ...icons];
    
    // 2. خلط البطاقات عشوائياً
    cards.sort(() => Math.random() - 0.5);

    // 3. إعادة تهيئة المتغيرات
    moves = 0;
    matchedPairs = 0;
    gameRunning = true;
    movesDisplay.textContent = 'التحركات: 0';
    timeDisplay.textContent = 'الوقت: 00:00';
    flippedCards = [];

    renderGrid();
}

function renderGrid() {
    gameGrid.innerHTML = '';
    cards.forEach((icon, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-icon', icon);
        cardElement.setAttribute('data-index', index);
        cardElement.onclick = () => handleCardClick(cardElement);

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-back">?</div>
                <div class="card-front">${icon}</div>
            </div>
        `;
        gameGrid.appendChild(cardElement);
    });
}

// ==========================================
// منطق النقر والتحقق
// ==========================================
function handleCardClick(card) {
    // إيقاف النقر إذا كانت اللعبة غير فعالة أو في انتظار انتهاء الحركة
    if (!gameRunning || awaitingEndOfMove) return; 
    
    // إيقاف النقر إذا كانت البطاقة بالفعل مقلوبة أو متطابقة
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    // قلب البطاقة
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        // تم قلب بطاقتين: حان وقت التحقق
        awaitingEndOfMove = true;
        moves++;
        movesDisplay.textContent = `التحركات: ${moves}`;
        
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const icon1 = card1.getAttribute('data-icon');
    const icon2 = card2.getAttribute('data-icon');

    if (icon1 === icon2) {
        // تطابق صحيح
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        
        // مسح قائمة البطاقات المقلوبة والعودة لاستقبال النقر
        flippedCards = [];
        awaitingEndOfMove = false;
        
        if (matchedPairs === totalPairs) {
            endGame();
        }

    } else {
        // عدم تطابق: اقلب البطاقات مرة أخرى بعد فترة زمنية قصيرة
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            
            // مسح القائمة والعودة لاستقبال النقر
            flippedCards = [];
            awaitingEndOfMove = false;
        }, 1000); // 1 ثانية قبل إعادة قلبها
    }
}

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
// التحكم باللعبة
// ==========================================
function startGame() {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    
    initializeGame();
    startTimer();
}

function endGame() {
    gameRunning = false;
    clearInterval(timerInterval);

    resultsTitle.textContent = 'تهانينا! اكتمل التحدي! 🎉';
    resultsMessage.innerHTML = `
        لقد أنهيت اللعبة في: <b>${timeDisplay.textContent.replace('الوقت: ', '')}</b><br>
        وبـ: <b>${moves}</b> تحركة.
    `;
    
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

startButton.onclick = startGame;
