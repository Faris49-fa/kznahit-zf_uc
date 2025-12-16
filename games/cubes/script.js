// ==========================================
// متغيرات اللعبة
// ==========================================
const BOARD_SIZE = 3; 
const TOTAL_TILES = BOARD_SIZE * BOARD_SIZE; 
const EMPTY_TILE_VALUE = 0; 

const puzzleBoard = document.getElementById('puzzle-board');
const movesDisplay = document.getElementById('moves-display');
const timeDisplay = document.getElementById('time-display');
const startScreen = document.getElementById('start-screen');
const resultsScreen = document.getElementById('results-screen');
const startButton = document.getElementById('start-button');
const resultsTitle = document.getElementById('results-title');
const resultsMessage = document.getElementById('results-message');

let flatBoard = []; 
let emptyTileIndex = 0; 

let moves = 0;
let timerInterval;
let startTime;
let gameRunning = false;

// ==========================================
// الدوال المساعدة للتحقق من قابلية الحل
// ==========================================
function isSolvable(tiles) {
    let inversions = 0;
    const puzzle = tiles.filter(tile => tile !== EMPTY_TILE_VALUE); 
    const n = puzzle.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (puzzle[i] > puzzle[j]) {
                inversions++;
            }
        }
    }
    // لغز 3x3 قابل للحل إذا كان عدد الانعكاسات زوجياً
    return inversions % 2 === 0;
}

// ==========================================
// تهيئة وإعداد اللوحة
// ==========================================
function initializeBoard() {
    let tiles = [];
    for (let i = 1; i < TOTAL_TILES; i++) {
        tiles.push(i);
    }
    tiles.push(EMPTY_TILE_VALUE); 

    // خلط المكعبات حتى نجد ترتيباً قابلاً للحل
    do {
        tiles.sort(() => Math.random() - 0.5);
    } while (!isSolvable(tiles));

    flatBoard = tiles; 
    emptyTileIndex = flatBoard.indexOf(EMPTY_TILE_VALUE);

    renderBoard();
}

function renderBoard() {
    puzzleBoard.innerHTML = '';
    flatBoard.forEach((value, index) => {
        const tile = document.createElement('div');
        tile.classList.add('puzzle-tile');
        if (value === EMPTY_TILE_VALUE) {
            tile.classList.add('empty');
            tile.textContent = '';
        } else {
            tile.textContent = value;
        }
        tile.setAttribute('data-index', index);
        tile.onclick = () => handleTileClick(index);
        puzzleBoard.appendChild(tile);
    });
}

// ==========================================
// منطق النقر والتحريك
// ==========================================
function handleTileClick(index) {
    if (!gameRunning) return;

    // تحديد الصف والعمود للمربع الذي تم النقر عليه والمربع الفارغ
    const clickedRow = Math.floor(index / BOARD_SIZE);
    const clickedCol = index % BOARD_SIZE;
    const emptyRow = Math.floor(emptyTileIndex / BOARD_SIZE);
    const emptyCol = emptyTileIndex % BOARD_SIZE;

    // التحقق إذا كان المكعب مجاوراً للمربع الفارغ
    const isAdjacent = 
        (Math.abs(clickedRow - emptyRow) === 1 && clickedCol === emptyCol) || 
        (Math.abs(clickedCol - emptyCol) === 1 && clickedRow === emptyRow);   

    if (isAdjacent) {
        // تبديل قيم المكعبات
        [flatBoard[index], flatBoard[emptyTileIndex]] = [flatBoard[emptyTileIndex], flatBoard[index]];
        emptyTileIndex = index;
        moves++;
        movesDisplay.textContent = `التحركات: ${moves}`;
        renderBoard();
        checkWin();
    }
}

// ==========================================
// التحقق من الفوز
// ==========================================
function checkWin() {
    // الترتيب الصحيح هو 1, 2, 3, 4, 5, 6, 7, 8, 0 (الفارغ في النهاية)
    const solvedOrder = Array.from({ length: TOTAL_TILES - 1 }, (_, i) => i + 1);
    solvedOrder.push(EMPTY_TILE_VALUE);

    for (let i = 0; i < TOTAL_TILES; i++) {
        if (flatBoard[i] !== solvedOrder[i]) {
            return false; 
        }
    }
    endGame('win'); 
    return true;
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
// بدء وإنهاء اللعبة
// ==========================================
function startGame() {
    gameRunning = true;
    moves = 0;
    movesDisplay.textContent = `التحركات: 0`;
    timeDisplay.textContent = `الوقت: 00:00`;

    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    resultsScreen.classList.remove('active');
    resultsScreen.classList.add('hidden');
    
    initializeBoard(); 
    startTimer();
}

function endGame(status) {
    gameRunning = false;
    clearInterval(timerInterval);

    if (status === 'win') {
        resultsTitle.textContent = 'تهانينا! لقد فزت! 🎉';
        resultsMessage.innerHTML = `لقد رتبت المكعبات في <b>${moves}</b> حركة<br> وخلال وقت: <b>${timeDisplay.textContent.replace('الوقت: ', '')}</b>`;
    }

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
