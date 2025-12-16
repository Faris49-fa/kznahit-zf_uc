/* ================================================= */
/* 1. التنسيقات العامة والأساسية */
/* ================================================= */

#game-container {
    max-width: 700px; /* زيادة العرض لاستيعاب 5 بطاقات */
    margin: 30px auto;
    padding: 25px;
    background-color: #2c3e50; /* خلفية داكنة */
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
    text-align: center;
    color: #ecf0f1;
    position: relative; 
}

h1 {
    color: #f1c40f; /* لون ذهبي لامع */
    margin-bottom: 15px;
}

/* 2. شريط الحالة */
#status-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3em;
    padding: 15px 10px;
    margin-bottom: 20px;
    background-color: #34495e; 
    border-radius: 10px;
    font-weight: bold;
}

#time-display {
    color: #e67e22; /* لون عنبري للتوقيت */
}

/* 3. بطاقة الهدف (الاتجاه) */
#direction-card-container {
    padding: 10px 0;
}

#direction-card {
    background-color: #e67e22; /* لون عنبري واضح */
    color: #2c3e50;
    font-size: 1.5em;
    font-weight: bold;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* 4. شبكة البطاقات (منطقة اللعب) */
#card-grid {
    display: flex; 
    justify-content: center;
    gap: 15px;
    padding: 10px;
    background-color: #1a252f;
    border-radius: 15px;
}

.number-card {
    width: 120px; /* حجم البطاقة */
    height: 120px;
    background-color: #f1c40f; /* لون ذهبي للبطاقات */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5em; /* حجم كبير للأرقام */
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    box-shadow: 0 5px 0 #d4af37; /* ظل لإعطاء مظهر 3D */
}

.number-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 0 #d4af37;
}

/* تأثير النقر الصحيح (تختفي البطاقة) */
.number-card.correctly-clicked {
    background-color: #2ecc71; /* أخضر للنجاح */
    color: white;
    transform: scale(0.9);
    opacity: 0.1; /* تقريباً تختفي للإشارة إلى النقر */
    pointer-events: none; /* لمنع النقر عليها مرة أخرى */
}

/* تأثير النقر الخاطئ */
.number-card.wrong-clicked {
    background-color: #e74c3c; /* أحمر للخطأ */
    color: white;
    transform: rotate(5deg) scale(1.05);
}

/* 5. شاشات البدء والنتائج */
.screen-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(44, 62, 80, 0.95); 
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    z-index: 100;
}

.screen-panel.hidden { display: none !important; }
.screen-panel.active { display: flex !important; }

.action-buttons button {
    padding: 12px 30px;
    font-size: 1.2em;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px; 
    font-weight: bold;
    transition: background-color 0.2s;
}

.level-buttons .reload-btn {
    background-color: #f1c40f; 
    color: #2c3e50;
}

.level-buttons .home-btn {
    background-color: #e67e22; 
    color: white;
}

#results-title {
    color: #e67e22;
    font-size: 2.5em;
}

.action-buttons .reload-btn {
    background-color: #2ecc71; 
    color: white;
}

.action-buttons .home-btn {
    background-color: #e74c3c; 
    color: white;
}
