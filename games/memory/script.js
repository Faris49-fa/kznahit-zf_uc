let first = null, second = null;
let lock = false;
let timer, time;
let pairsToMatch = 0;
let matchedPairs = 0;
let currentLevel = ''; 

// مصفوفة الإيموجيات (18 زوجاً مختلفاً)
const EMOJIS = ['🌴', '🍯', '💡', '📚', '⚽', '🚗', '✈️', '⛵', '🔥', '🔑', '⏰', '👑', '🎉', '🍎', '🍇', '🍉', '🍕', '🍩'];

// ==========================================
// الدوال المساعدة للتحكم بالصفحة
// ==========================================

function resetGame() {
    // إعادة اللعب بنفس المستوى الحالي
    if (currentLevel) {
        document.getElementById("results-screen").style.display = "none";
        document.getElementById("game").style.display = "block";
        startGame(currentLevel);
    } else {
        location.reload(); 
    }
}

function backToHome() {
    // افتراض أن اللعبة داخل مجلدين فرعيين
    location.href = '../../index.html'; 
}


// ==========================================
// وظيفة بدء اللعبة / إعادة اللعب
// ==========================================
function startGame(level){
    currentLevel = level;
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("results-screen").style.display = "none";

    const board = document.getElementById("board");
    const timerEl = document.getElementById("timer");

    let duration, cols;
    let requiredEmojis;

    if(level === "easy"){
        pairsToMatch = 8; // 16 بطاقة
        duration = 60;    // دقيقة
        cols = 4;
        requiredEmojis = EMOJIS.slice(0, 8); // استخدام أول 8 إيموجيات
    }else{
        pairsToMatch = 18; // 36 بطاقة
        duration = 120;  // دقيقتين
        cols = 6;
        requiredEmojis = EMOJIS; // استخدام كل الـ 18 إيموجي
    }
    
    matchedPairs = 0; 

    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.innerHTML = "";

    let cards = [];
    requiredEmojis.forEach(emoji => {
        cards.push(emoji, emoji); // إضافة كل إيموجي مرتين
    });

    cards.sort(() => Math.random() - 0.5);

    cards.forEach(val => {
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.value = val;
        // إنشاء الغلاف الداخلي لتطبيق الأنميشن
        card.innerHTML = `<div class="card-inner">
                            <div class="card-back"></div>
                            <div class="card-front">${val}</div>
                          </div>`;
        card.onclick = () => flip(card);
        board.appendChild(card);
    });

    time = duration;
    timerEl.textContent = `الوقت: ${time}`;
    clearInterval(timer);

    timer = setInterval(() => {
        time--;
        timerEl.textContent = `الوقت: ${time}`;
        
        if(time <= 0){
            clearInterval(timer);
            endGame('lose'); 
        }
    }, 1000);
}

// ==========================================
// وظيفة قلب البطاقة
// ==========================================
function flip(card){
    if(lock || card.classList.contains("open") || card.classList.contains("matched")) return;

    card.classList.add("open");

    if(!first){
        first = card;
    }else{
        second = card;
        lock = true;

        if(first.dataset.value === second.dataset.value){
            first.classList.add("matched");
            second.classList.add("matched");
            matchedPairs++; 
            checkWin();     
            reset();
        }else{
            setTimeout(()=>{
                first.classList.remove("open");
                second.classList.remove("open");
                reset();
            }, 700);
        }
    }
}

function reset(){
    first = null;
    second = null;
    lock = false;
}

// ==========================================
// التحقق من الفوز وإنهاء اللعبة
// ==========================================
function checkWin(){
    if(matchedPairs === pairsToMatch){
        clearInterval(timer);
        endGame('win'); 
    }
}

function endGame(status){
    document.getElementById("game").style.display = "none";
    const resultsScreen = document.getElementById("results-screen");
    resultsScreen.style.display = "block";

    const titleEl = document.getElementById("results-title");
    const messageEl = document.getElementById("results-message");
    
    const levelName = currentLevel === 'easy' ? 'السهل (16 بطاقة)' : 'الصعب (36 بطاقة)';

    if(status === 'win'){
        titleEl.textContent = "🏆 فوز ساحق!";
        messageEl.innerHTML = `أنهيت مستوى ${levelName} في الوقت المحدد.<br> تبقى من الوقت: <b>${time}</b> ثانية.`;
    }else{
        titleEl.textContent = "❌ انتهى الوقت!";
        messageEl.innerHTML = `لم تتمكن من إكمال مستوى ${levelName}.<br> الأزواج المتبقية: <b>${pairsToMatch - matchedPairs}</b>.`;
    }
}
