let gameSeq=[];
let userSeq=[];

let btns= ["skyblue","pink","blue","orange"];

let started= false;
let level= 0;

let highSc=0;
let h3= document.querySelector("h3");
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started= true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=  `level ${level}`;
    //random btn choose
    let random= Math.floor(Math.random() * 4 );
    let randclr= btns[random];
    let randbtn= document.querySelector(`.${randclr}`);
    gameSeq.push(randclr);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkBtn(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your Score was<b> ${level} </b> <br>Press any key to Start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 500);
        if(level > highSc) {
            highSc = level;
            h3.innerText = `Highest Score = ${highSc}`;
        }
        reset();
    }
}

function btnpress(){
    let btn= this;
    userflash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for( btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

document.addEventListener("DOMContentLoaded", function() {
    h3.innerText = `Highest Score = ${highSc}`;
});