function makeBubble(){
    let btn = "";
for(let i=1; i<=264; i++){
    let num = Math.floor(Math.random()*10);
    btn += `<div class="bubble">${num}</div>`;
}
document.querySelector(".p-botm").innerHTML = btn;
}
makeBubble();

function TimeInterval(){
    let timerval = 60;
    var timer = setInterval(()=>{
        if(timerval > 0){
            timerval--;
            document.querySelector("#timer").textContent = timerval;
        }
        else{
            clearInterval(timer);
            document.querySelector(".p-botm").innerHTML = " ";
        }
    }, 1000)
}
TimeInterval();

var hit = Math.floor(Math.random()*10);
function NewHits(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}
NewHits();

var score = 0;
function Newscore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".p-botm").addEventListener("click" , function(details){
    let clickedNum = Number(details.target.textContent);
    if(clickedNum === hit){
        Newscore();
        makeBubble();
        NewHits();
    }
});

