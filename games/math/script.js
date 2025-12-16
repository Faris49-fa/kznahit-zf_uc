/* ====== إعدادات عامة ====== */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #ffffff; /* الخلفية بيضاء */
  display: flex;
  justify-content: center;
  padding: 30px;
}

/* ====== الصندوق الرئيسي ====== */
.box {
  width: 100%;
  max-width: 520px;
}

/* ====== الأعلى (رقم السؤال + المؤقت) ====== */
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-weight: bold;
}

#qNum {
  color: #000;
}

#timer {
  color: #e53935; /* أحمر */
  background: #000;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: bold;
}

/* ====== بطاقة السؤال ====== */
.question-card {
  background: #000;
  color: #fff;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 20px;
  text-align: center;
}

/* ====== الخيارات ====== */
.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.option {
  background: #000;
  color: #fff;
  padding: 14px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;
}

.option:hover {
  opacity: 0.85;
}

/* ====== ألوان النتيجة ====== */
.correct {
  background: #2e7d32 !important; /* أخضر */
  color: #fff;
}

.wrong {
  background: #c62828 !important; /* أحمر */
  color: #fff;
}

.unanswered {
  background: #9e9e9e !important; /* رمادي */
  color: #fff;
}

/* ====== صفحة النتائج ====== */
#result {
  margin-top: 20px;
}

/* بطاقة كل سؤال في النتائج */
.result-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 10px;
  color: #000;
}

/* ====== زر العودة ====== */
.back {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
