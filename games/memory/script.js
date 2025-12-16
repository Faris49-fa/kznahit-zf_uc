let first = null, second = null;
let lock = false;
let timer, time;
let pairsToMatch = 0;
let matchedPairs = 0;

// ==========================================
// وظيفة بدء اللعبة / إعادة اللعب
// ==========================================
function startGame(level){
    // إخفاء شاشة البدء وإظهار اللعبة
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("results-screen").style.display = "none"; // إخفاء شاشة النتائج

    const board = document.getElementById("board");
    const timerEl = document.getElementById("timer");

    let duration, cols;

    if(level === "easy"){
        pairsToMatch = 8; // 16 بطاقة
        duration = 60;    // دقيقة
        cols = 4;
    }else{
        pairsToMatch = 18; // 36 بطاقة
        duration = 120;  // دقيقتين
        cols = 6;
    }
    
    matchedPairs = 0; // تصفير عدد الأزواج المكتشفة

    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.innerHTML = "";

    let cards = [];
    for(let i = 1; i <= pairsToMatch; i++){
        cards.push(i, i);
    }

    cards.sort(() => Math.random() - 0.5);

    cards.forEach(val => {
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.value = val;
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
            // 🔥 استدعاء دالة إنهاء اللعبة عند انتهاء الوقت
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
    card.textContent = card.dataset.value;

    if(!first){
        first = card;
    }else{
        second = card;
        lock = true;

        if(first.dataset.value === second.dataset.value){
            first.classList.add("matched");
            second.classList.add("matched");
            matchedPairs++; // زيادة الأزواج المكتشفة
            checkWin();     // التحقق من الفوز
            reset();
        }else{
            setTimeout(()=>{
                first.classList.remove("open");
                second.classList.remove("open");
                first.textContent = "";
                second.textContent = "";
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
// التحقق من الفوز
// ==========================================
function checkWin(){
    if(matchedPairs === pairsToMatch){
        clearInterval(timer);
        endGame('win'); // استدعاء دالة إنهاء اللعبة عند الفوز
    }
}

// ==========================================
// إنهاء اللعبة وإظهار النتائج
// ==========================================
function endGame(status){
    document.getElementById("game").style.display = "none";
    const resultsScreen = document.getElementById("results-screen");
    resultsScreen.style.display = "block";

    const titleEl = document.getElementById("results-title");
    const messageEl = document.getElementById("results-message");

    if(status === 'win'){
        titleEl.textContent = "🏆 فوز ساحق!";
        messageEl.textContent = `أنهيت اللعبة في ${pairsToMatch} زوج. تبقى من الوقت: ${time} ثانية.`;
        // يمكنك هنا إضافة منطق لحفظ أفضل وقت
    }else{
        titleEl.textContent = "❌ انتهى الوقت!";
        messageEl.textContent = `لم تتمكن من إكمال اللعبة. الأزواج المتبقية: ${pairsToMatch - matchedPairs}.`;
    }
}

// ==========================================
// دوال الأزرار الجديدة
// ==========================================

function resetGame(){
    // إعادة تحميل الصفحة للبدء من جديد واختيار مستوى الصعوبة
    location.reload(); 
}

function backToHome(){
    // العودة إلى الصفحة الرئيسية (الافتراض هو مجلدين للخلف)
    location.href = '../../index.html'; 
}
