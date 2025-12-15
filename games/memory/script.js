let first=null, second=null;
let lock=false;
let timer, time;

function startGame(level){
    document.getElementById("menu").style.display="none";
    document.getElementById("game").style.display="block";

    const board=document.getElementById("board");
    const timerEl=document.getElementById("timer");

    let pairs, duration, cols;

    if(level==="easy"){
        pairs=8;       // 16 بطاقة
        duration=60;   // دقيقة
        cols=4;
    }else{
        pairs=18;      // 36 بطاقة
        duration=120;  // دقيقتين
        cols=6;
    }

    board.style.gridTemplateColumns=`repeat(${cols},1fr)`;
    board.innerHTML="";

    let cards=[];
    for(let i=1;i<=pairs;i++){
        cards.push(i,i);
    }

    cards.sort(()=>Math.random()-0.5);

    cards.forEach(val=>{
        let card=document.createElement("div");
        card.className="card";
        card.dataset.value=val;
        card.onclick=()=>flip(card);
        board.appendChild(card);
    });

    time=duration;
    timerEl.textContent=`الوقت: ${time}`;
    clearInterval(timer);

    timer=setInterval(()=>{
        time--;
        timerEl.textContent=`الوقت: ${time}`;
        if(time<=0){
            clearInterval(timer);
            alert("انتهى الوقت ⏱️");
            location.reload();
        }
    },1000);
}

function flip(card){
    if(lock || card.classList.contains("open") || card.classList.contains("matched")) return;

    card.classList.add("open");
    card.textContent=card.dataset.value;

    if(!first){
        first=card;
    }else{
        second=card;
        lock=true;

        if(first.dataset.value===second.dataset.value){
            first.classList.add("matched");
            second.classList.add("matched");
            reset();
        }else{
            setTimeout(()=>{
                first.classList.remove("open");
                second.classList.remove("open");
                first.textContent="";
                second.textContent="";
                reset();
            },700);
        }
    }
}

function reset(){
    first=null;
    second=null;
    lock=false;
}
