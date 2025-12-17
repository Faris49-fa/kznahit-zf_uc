// ==========================================
// دالة تشغيل تأثير الألعاب النارية عند الفوز (تم نقلها للخارج)
// ==========================================
function triggerConfetti() {
    const COUNT = 50; // عدد الجزيئات
    const colors = ['#f1c40f', '#e67e22', '#3498db', '#4CAF50']; // ألوان التمر والنجاح

    for (let i = 0; i < COUNT; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // موقع البدء عشوائي أفقيًا
        confetti.style.left = `${Math.random() * 100}vw`; 
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // تغيير سرعة ومدة التأثير قليلاً لكل جزء (لمظهر طبيعي)
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`; // بين 2 و 4 ثواني
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;

        document.body.appendChild(confetti);
        
        // إزالة الجزيء بعد انتهاء الأنميشن لتنظيف الذاكرة
        setTimeout(() => confetti.remove(), 4000); 
    }
}


// ===== الكلمات السرية (تم زيادة العدد إلى 50 كلمة عربية فصحى) =====
const words = [
    "مدرسة", "حديقة", "سيارة", "طاولة", "كتابة",
    "حقيبة", "مدينة", "مقلمة", "مفتاح", "مصباح",
    "تلفون", "بحيرة", "مطرقة", "سعادة", "شجرة",
    "طبيعة", "وسادة", "زراعة", "حيوان", "طائرة",
    "حدائق", "منازل", "دجاجة", "أمانة", "رسالة",
    // 25 كلمة جديدة
    "قيادة", "قراءة", "منارة", "مسافة", "قبيلة",
    "زراعة", "ولاية", "مواطن", "سعودي", "نحيتي",
    "عدوان", "فراسة", "مصطفى", "عدالة", "كرامة",
    "شهادة", "عربية", "مقدرة", "تفكير", "يطولة",
    "صيانة", "شجاعة", "بلاغة", "يراعة", "حيوية"
];

// *******************************************************************
// ************ تم تعديل عدد المحاولات إلى 7 (ROWS = 7) ************
// *******************************************************************
const MAX_ROWS = 7;
const MAX_COLS = 5;

// اختيار كلمة عشوائية
const secret = words[Math.floor(Math.random() * words.length)];

let currentRow = 0;
let currentCol = 0;
let board = [];
let finished = false;

// عناصر
const boardEl = document.getElementById("board");
const keyboardEl = document.getElementById("keyboard");
const messageEl = document.getElementById("message");
const lastScoreEl = document.getElementById("lastScore");

// آخر نتيجة
lastScoreEl.textContent = localStorage.getItem("lettersScore") || "-";

// إنشاء اللوحة
for (let r = 0; r < MAX_ROWS; r++) { // استخدام MAX_ROWS هنا
    const row = [];
    const rowEl = document.createElement("div");
    rowEl.className = "row";
    for (let c = 0; c < MAX_COLS; c++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        rowEl.appendChild(cell);
        row.push(cell);
    }
    boardEl.appendChild(rowEl);
    board.push(row);
}

// لوحة المفاتيح
const keys = "ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظ".split("");
keys.push("⌫", "⏎");

keys.forEach(k => {
    const btn = document.createElement("div");
    btn.className = "key";
    if (k === "⌫" || k === "⏎") btn.classList.add("big");
    btn.textContent = k;
    btn.onclick = () => handleKey(k);
    // إضافة خاصية data-key لتلوين الأزرار
    btn.setAttribute('data-key', k); 
    keyboardEl.appendChild(btn);
});

function handleKey(key) {
    if (finished) return;

    if (key === "⌫") {
        if (currentCol > 0) {
            currentCol--;
            board[currentRow][currentCol].textContent = "";
        }
        return;
    }

    if (key === "⏎") {
        if (currentCol < MAX_COLS) return;
        checkWord();
        return;
    }

    if (currentCol < MAX_COLS) {
        board[currentRow][currentCol].textContent = key;
        currentCol++;
    }
}

// دالة لتلوين زر الكيبورد
function colorKeyboardKey(key, status) {
    const keyEl = document.querySelector(`#keyboard [data-key='${key}']`);
    if (!keyEl) return;

    // تحديد درجة الأولوية للون (لتجنب تلوين الأخضر بالرصاصي لاحقاً)
    const colorPriority = {
        'correct': 3,
        'present': 2,
        'wrong': 1
    };

    // استخراج الحالة الحالية للزر
    let currentStatus = '';
    if (keyEl.classList.contains('correct')) currentStatus = 'correct';
    else if (keyEl.classList.contains('present')) currentStatus = 'present';
    else if (keyEl.classList.contains('wrong')) currentStatus = 'wrong';

    // إذا كانت الحالة الجديدة لها أولوية أعلى من الحالة الحالية، قم بالتلوين
    if (colorPriority[status] > colorPriority[currentStatus]) {
        // إزالة الحالات الأقل أولوية قبل إضافة الحالة الجديدة
        keyEl.classList.remove('correct', 'present', 'wrong');
        keyEl.classList.add(status);
    }
}


function checkWord() {
    const guess = board[currentRow].map(c => c.textContent).join("");
    if (guess.length !== MAX_COLS) return;

    // تم إنشاء نسخة قابلة للتعديل من الكلمة السرية لحساب الحروف الموجودة بشكل صحيح
    let secretArr = secret.split("");
    let guessArr = guess.split("");

    // مصفوفة لتخزين حالة كل حرف في التخمين (correct, present, wrong)
    const results = Array(MAX_COLS).fill('wrong'); 

    // 1. الفحص الأول: تحديد المطابقة الصحيحة (الأخضر)
    guessArr.forEach((ch, i) => {
        if (ch === secretArr[i]) {
            board[currentRow][i].classList.add("correct");
            results[i] = 'correct';
            secretArr[i] = null; // إزالة الحرف من الكلمة السرية لمنع عده مرة أخرى
        }
    });

    // 2. الفحص الثاني: تحديد الحروف الموجودة في مكان خاطئ (البرتقالي) والغير موجودة (الرصاصي)
    guessArr.forEach((ch, i) => {
        if (results[i] === 'correct') return; // تجاوز الحروف التي تم تلوينها بالأخضر

        const idx = secretArr.indexOf(ch);
        
        if (idx > -1) {
            // موجود في مكان خاطئ (Present)
            board[currentRow][i].classList.add("present");
            results[i] = 'present';
            secretArr[idx] = null; // إزالة النسخة المكتشفة من secretArr
        } else {
            // غير موجود (Wrong)
            board[currentRow][i].classList.add("wrong");
            results[i] = 'wrong';
        }
    });

    // 3. تحديث لوحة المفاتيح
    guessArr.forEach((ch, i) => {
        if (ch) { // تأكد من أن الحرف ليس null
             colorKeyboardKey(ch, results[i]);
        }
    });
    
    // 4. التحقق من الفوز أو الخسارة
    if (guess === secret) {
        messageEl.textContent = "🎉 خلصت التمر!!";
        finished = true;
        localStorage.setItem("lettersScore", "فوز");
        triggerConfetti(); 
        return;
    }
    
    currentRow++;
    currentCol = 0;

    if (currentRow === MAX_ROWS) { // تم التعديل إلى MAX_ROWS (7)
        messageEl.textContent = "❌ خلص التمر وانت باقي – الكلمة: " + secret;
        finished = true;
        localStorage.setItem("lettersScore", "خسارة");
    }
}
