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
const COLORS = [
    { name_ar: "أحمر", name_en: "red", hex: "#E74C3C" },
    { name_ar: "أزرق", name_en: "blue", hex: "#3498DB" },
    { name_ar: "أخضر", name_en: "green", hex: "#2ECC71" },
    { name_ar: "أصفر", name_en: "yellow", hex: "#F1C40F" }
];

const challengeContainer = document.getElementById('challenge-container');
const colorWordDisplay = document.getElementById('color-word');
const buttonContainer = document.getElementById('button-container');
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');

let score = 0;
let timeLimit = 3500; // 1000 ملي ثانية (1 ثانية) للبدء
let currentCorrectColor = '';
let gameTimer;
let gameRunning = false;
let timeCountdown;


// ==========================================
// منطق إنشاء التحدي والأزرار
// ==========================================

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateChallenge() {
    // 1. اختيار اسم الكلمة (ما تقرأه العين)
    const textData = getRandomElement(COLORS); 
    const textWord = textData.name_ar; // مثلاً: "أحمر"

    // 2. اختيار لون الكلمة (ما يجب النقر عليه)
    const colorData = getRandomElement(COLORS);
    currentCorrectColor = colorData.name_en; // مثلاً: "blue"

    // للتأكد من أن الكلمة واللون مختلفان (اختياري لجعلها أكثر صعوبة)
    if (Math.random() > 0.8) { // 20% فقط تكون الكلمة واللون متطابقين
        if (textData.name_en === colorData.name_en) {
            // اختر لوناً مختلفاً إذا تطابقا
            let newColorData;
            do {
                newColorData = getRandomElement(COLORS);
            } while (newColorData.name_en === colorData.name_en);
            currentCorrectColor = newColorData.name_en; 
        }
    }


    // 3. عرض التحدي
    colorWordDisplay.textContent = textWord;
    colorWordDisplay.style.color = colorData.hex;

    // 4. إنشاء الأزرار
    createButtons(currentCorrectColor);
    
    // 5. بدء المؤقت الجديد
    startCountdown();
}

function createButtons(correctColorEn) {
    buttonContainer.innerHTML = '';
    
    // خلط الألوان المتاحة لتجنب تكرار موقع الزر الصحيح
    let shuffledColors = [...COLORS];
    shuffledColors.sort(() => Math.random() - 0.5);

    shuffledColors.forEach(data => {
        const button = document.createElement('button');
        button.classList.add('color-button');
        button.textContent = data.name_ar; // اسم اللون على الزر
        button.setAttribute('data-color', data.name_en); // لون الزر الفعلي (للمقارنة)
        button.style.backgroundColor = data.hex; // تعيين لون الخلفية
        button.style.color = data.name_en === 'yellow' ? '#1a1a1a' : '#fff'; // لجعل النص مرئياً على الأصفر

        button.onclick = () => handleButtonClick(data.name_en);
        buttonContainer.appendChild(button);
    });
}


// ==========================================
// منطق التحكم والتوقيت
// ==========================================

function startCountdown() {
    clearInterval(timeCountdown);
    let startTime = Date.now();
    let duration = timeLimit;

    timeCountdown = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let remaining = duration - elapsed;

        if (remaining <= 0) {
            clearInterval(timeCountdown);
            endGame(false); // انتهى الوقت
            return;
        }

        const seconds = (remaining / 3000).toFixed(2);
        timeDisplay.textContent = `الوقت: ${seconds} ثانية`;
    }, 50);
}

function handleButtonClick(clickedColor) {
    if (!gameRunning) return;

    if (clickedColor === currentCorrectColor) {
        // إجابة صحيحة!
        score++;
        updateScore();
        // زيادة سرعة التحدي (تقليل الوقت المتاح)
        timeLimit = Math.max(300, timeLimit - 15); // الحد الأدنى 300 ملي ثانية
        
        generateChallenge(); // تحدي جديد
    } else {
        // إجابة خاطئة!
        endGame(true);
    }
}

function updateScore() {
    scoreDisplay.textContent = `النقاط: ${score}`;
}

function startGame() {
    score = 0;
    timeLimit = 1000; // إعادة تعيين الوقت
    gameRunning = true;
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    
    updateScore();
    generateChallenge();
}

function endGame(wasError) {
    gameRunning = false;
    clearInterval(timeCountdown);
    
    const finalScore = score;
    const isNewRecord = saveHighscore("color_clash_score", finalScore); 

    resultsScreen.querySelector('#final-score').textContent = `نقاطك النهائية: ${finalScore}`;

    if (wasError) {
        resultsScreen.querySelector('h2').textContent = 'خطأ في التنسيق البصري! ⛔';
    } else {
        resultsScreen.querySelector('h2').textContent = 'انتهى الوقت! ⏳';
    }

    if (isNewRecord) {
        resultsScreen.querySelector('#high-score-message').textContent = "🏆 رقم قياسي جديد! تهانينا.";
    } else {
        const oldScore = parseFloat(localStorage.getItem("color_clash_score")) || 0;
        resultsScreen.querySelector('#high-score-message').textContent = `أفضل رقم قياسي لديك: ${oldScore}`;
    }

    resultsScreen.classList.add('active');
    resultsScreen.classList.remove('hidden');
}


startButton.onclick = startGame;
