/* 1. التنسيقات العامة والأساسية */
#game-container {
    max-width: 500px;
    margin: 30px auto;
    padding: 20px;
    background-color: #1c2833; /* خلفية داكنة */
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    text-align: center;
    color: #ecf0f1;
}

#game-container h1 {
    color: #f1c40f; /* لون التمر الذهبي */
    margin-bottom: 20px;
}

/* 2. شريط الحالة والهدف */
#status-bar {
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
    padding: 10px;
    background-color: #2c3e50;
    border-radius: 8px;
    margin-bottom: 15px;
}

#target-display {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid #e74c3c; /* إطار أحمر للتركيز */
    border-radius: 8px;
    display: inline-block;
}

#target-icon {
    font-size: 1.5em;
    vertical-align: middle;
}

/* 3. شبكة اللعب (مفتاح الترتيب على الجوال) */
#game-grid {
    display: grid;
    /* تحديد 4 أعمدة متساوية */
    grid-template-columns: repeat(4, 1fr); 
    gap: 8px; /* تباعد خفيف بين البطاقات */
    padding: 10px;
    background-color: #2c3e50;
    border-radius: 10px;
    /* لضمان أن الشبكة لا تتدفق خارج الشاشة على الجوال */
    width: 100%;
    box-sizing: border-box;
}

/* تصميم البطاقة */
.grid-item {
    padding: 0;
    height: 65px; /* ارتفاع ثابت للبطاقة */
    line-height: 65px;
    font-size: 2em;
    font-weight: bold;
    background-color: #34495e;
    border: 2px solid #2c3e50;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: transform 0.1s, opacity 0.1s;
}

.grid-item:hover {
    transform: scale(1.05);
}

.grid-item.hit {
    opacity: 0.3; /* تصبح خافتة عند النقر الصحيح */
    pointer-events: none; /* لا يمكن النقر عليها مرة أخرى */
}

/* ألوان التمييز (الخاطئ) */
.grid-item.wrong {
    background-color: #c0392b; /* أحمر داكن */
    animation: shake 0.5s;
}

/* تأثير الاهتزاز عند الخطأ */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}

/* 4. شاشات البدء والنتائج (الترتيب العمودي) */
.screen-panel {
    /* (تنسيقات الشاشات لتظهر فوق اللعبة) */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 40, 51, 0.95); 
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 100;
}

.screen-panel.hidden { display: none !important; }

#start-button, #results-screen button {
    padding: 12px 25px;
    font-size: 1.2em;
    background-color: #f1c40f;
    color: #1c2833;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.2s;
}

/* 5. ترتيب الجوال (التصميم مستجيب بشكل أساسي) */
@media (max-width: 400px) {
    #game-container {
        margin: 10px auto;
        padding: 10px;
    }
    .grid-item {
        height: 50px;
        line-height: 50px;
        font-size: 1.5em; /* تصغير حجم الرمز */
    }
}
