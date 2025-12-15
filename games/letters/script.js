// ===== كلمات من 5 حروف (25 كلمة) =====
const words = [
  "مدرسة","حديقة","سيارة","طاولة","كتابة",
  "حقيبة","مدينة","شوارع","مفتاح","مصباح",
  "قلمون","بحيرة","مطرقة","سعادة","مكتوب",
  "طبيعة","وسادة","زراعة","حيوان","طائرة",
  "حدائق","منازل","شبابك","أمانة","رسالة"
];

// اختيار كلمة عشوائية
const secret = words[Math.floor(Math.random()*words.length)];

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
for(let r=0;r<6;r++){
  const row=[];
  const rowEl=document.createElement("div");
  rowEl.className="row";
  for(let c=0;c<5;c++){
    const cell=document.createElement("div");
    cell.className="cell";
    rowEl.appendChild(cell);
    row.push(cell);
  }
  boardEl.appendChild(rowEl);
  board.push(row);
}

// لوحة المفاتيح
const keys = "ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظ".split("");
keys.push("⌫","⏎");

keys.forEach(k=>{
  const btn=document.createElement("div");
  btn.className="key";
  if(k==="⌫"||k==="⏎") btn.classList.add("big");
  btn.textContent=k;
  btn.onclick=()=>handleKey(k);
  keyboardEl.appendChild(btn);
});

function handleKey(key){
  if(finished) return;

  if(key==="⌫"){
    if(currentCol>0){
      currentCol--;
      board[currentRow][currentCol].textContent="";
    }
    return;
  }

  if(key==="⏎"){
    if(currentCol<5) return;
    checkWord();
    return;
  }

  if(currentCol<5){
    board[currentRow][currentCol].textContent=key;
    currentCol++;
  }
}

function checkWord(){
  const guess = board[currentRow].map(c=>c.textContent).join("");
  if(guess.length!==5) return;

  const secretArr = secret.split("");
  const guessArr = guess.split("");

  // أخضر
  guessArr.forEach((ch,i)=>{
    if(ch===secretArr[i]){
      board[currentRow][i].classList.add("correct");
      secretArr[i]=null;
      guessArr[i]=null;
    }
  });

  // أصفر / رمادي
  guessArr.forEach((ch,i)=>{
    if(!ch) return;
    const idx=secretArr.indexOf(ch);
    if(idx>-1){
      board[currentRow][i].classList.add("present");
      secretArr[idx]=null;
    }else{
      board[currentRow][i].classList.add("wrong");
    }
  });

  if(guess===secret){
    messageEl.textContent="🎉 فزت!";
    finished=true;
    localStorage.setItem("lettersScore","فوز");
    return;
  }

  currentRow++;
  currentCol=0;

  if(currentRow===6){
    messageEl.textContent="❌ انتهت المحاولات – الكلمة: "+secret;
    finished=true;
    localStorage.setItem("lettersScore","خسارة");
  }
}
