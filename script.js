// ==========================================
// مفاتيح حفظ الدرجات (High Score Keys)
// تم تنظيمها حسب الأعمدة في صفحة الدرجات
// ==========================================

// مفاتيح ألعاب الأسئلة (يتم حفظ أعلى عدد نقاط)
const QUESTION_GAME_KEYS = [
    { name: "سكري انجليزي", key: "english_score", unit: "نقطة" },
    { name: "عجوة الرياضيات", key: "math_score", unit: "نقطة" },
    { name: "لبانة عامة", key: "logic_score", unit: "نقطة" },
    { name: "رشودية هندسية", key: "geometry_score", unit: "نقطة" },
    { name: "خضري كروي", key: "football_score", unit: "نقطة" },
    { name: "حلوة السعودية", key: "saudi_score", unit: "نقطة" },
];

// مفاتيح ألعاب التحديات (نفترض أنها تسجل أفضل وقت/أقل رقم أو أعلى نقاط)
const CHALLENGE_GAME_KEYS = [
    { name: "خلاص الحروف", key: "letters_time", unit: "ثانية", bestIsLow: true }, // الأقل هو الأفضل
    { name: "برحي الصد", key: "click_score", unit: "نقطة", bestIsLow: false }, // الأعلى هو الأفضل
    { name: "مجدول المكعبات", key: "cubes_time", unit: "ثانية", bestIsLow: true },
    { name: "صفاوي الذاكرة", key: "memory_time", unit: "ثانية", bestIsLow: true },
    { name: "عنبري الأرقام", key: "numbers_time", unit: "ثانية", bestIsLow: true },
    { name: "صقعي البط", key: "duck_score", unit: "نقطة", bestIsLow: false },
];

const scoresModal = document.getElementById('scores-modal');

// ==========================================
// منطق عرض وحفظ الدرجات
// ==========================================

/**
 * دالة جلب وعرض الدرجات في القائمة المحددة
 */
function renderScores(keys, listId) {
    const listElement = document.getElementById(listId);
    if (!listElement) return;
    listElement.innerHTML = ''; // تفريغ القائمة قبل الملء

    // 1. جمع الدرجات المحفوظة
    let scores = keys.map(game => {
        // قراءة القيمة من LocalStorage
        const value = parseFloat(localStorage.getItem(game.key)) || 0;
        return {
            name: game.name,
            score: value,
            unit: game.unit,
            bestIsLow: game.bestIsLow || false
        };
    });

    // 2. ترتيب الدرجات (الأعلى للنقاط، والأقل للوقت)
    scores.sort((a, b) => {
        if (a.bestIsLow) {
            // للوقت: الأقل هو الأفضل. إذا كانا صفر (لم يلعب)، نتركهما كما هما.
            if (a.score === 0 && b.score === 0) return 0;
            if (a.score === 0) return 1; // الصفر يذهب للأسفل
            if (b.score === 0) return -1;
            return a.score - b.score; 
        } else {
            // للنقاط: الأعلى هو الأفضل.
            return b.score - a.score;
        }
    });

    // 3. عرض القوائم
    let hasScores = false;
    scores.forEach(item => {
        if (item.score > 0) {
            hasScores = true;
            // تنسيق عرض الوقت أو النتيجة
            let scoreText = `${item.score} ${item.unit}`;

            const listItem = document.createElement('li');
            listItem.classList.add('score-item');
            listItem.innerHTML = `
                <span class="score-name">${item.name}</span>
                <span class="score-value">${scoreText}</span>
            `;
            listElement.appendChild(listItem);
        }
    });

    // في حالة عدم وجود أي درجات مسجلة
    if (!hasScores) {
        listElement.innerHTML = '<li class="score-item">لا توجد سجلات مسجلة بعد.</li>';
    }
}

/**
 * دالة فتح/إغلاق النافذة المنبثقة
 */
function toggleScoresModal() {
    if (scoresModal.style.display === 'block') {
        scoresModal.style.display = 'none';
    } else {
        // تحديث الدرجات عند كل فتح
        renderScores(QUESTION_GAME_KEYS, 'questions-scores-list');
        renderScores(CHALLENGE_GAME_KEYS, 'challenges-scores-list');
        scoresModal.style.display = 'block';
    }
}

/**
 * دالة إعادة تعيين جميع الدرجات (متصلة بزر 'إعادة تعيين')
 */
function resetAllScores() {
    if (confirm("هل أنت متأكد من إعادة تعيين جميع الدرجات؟ سيتم مسح سجلات التمر الذهبي بالكامل.")) {
        const allKeys = [...QUESTION_GAME_KEYS, ...CHALLENGE_GAME_KEYS];
        allKeys.forEach(game => {
            localStorage.removeItem(game.key);
        });
        
        // إعادة عرض الدرجات بعد الحذف
        alert("تم مسح جميع سجلات التمر الذهبي بنجاح!");
        renderScores(QUESTION_GAME_KEYS, 'questions-scores-list');
        renderScores(CHALLENGE_GAME_KEYS, 'challenges-scores-list');
        // لا نحتاج لـ location.reload() لأنه يتم التحديث فوراً
    }
}

// **ملاحظة:** يتم استدعاء toggleScoresModal و resetAllScores مباشرة من HTML.
