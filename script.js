let timer = 60;
let randomhit = 0;
let score = 0;
let gamePanel = document.querySelector(".main-btm")
function runtimer(){
    let time = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }else{
            clearInterval(time);
            document.querySelector(".main-btm").innerHTML = `<h1> Time Up</h1>`;
        }
    }, 1000);
}
function makebubble(){
    let clutter = "";
    for(let i = 1; i<= 207; i++){
        let random = Math.floor(Math.random()*10)
        clutter+= `<div class="bubble">${random}</div>`
    }
    gamePanel .innerHTML = clutter;
}

function newhittarget(){
    randomhit  = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = randomhit;
}

function increasescore(){
   score += 10;
    document.querySelector("#scorevalue").innerHTML = score;
}

gamePanel.addEventListener("click",(detail)=>{

    if(detail.target.classList.contains("bubble")){
        let clickedNumber = Number(detail.target.textContent);
        if(clickedNumber === randomhit){
        makebubble();
        increasescore();   
        timer = 60;
        newhittarget();
        }
              
    }
    




})









newhittarget();
makebubble();
runtimer();