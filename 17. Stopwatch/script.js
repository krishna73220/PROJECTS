let min1=document.querySelector(".min");
let sec1=document.querySelector(".sec");
let msec1=document.querySelector(".msec");

let start=document.querySelector("#start")
let stop=document.querySelector("#stop")
let reset=document.querySelector("#reset")

let min='0';
let sec='0';
let msec='0';

min1.value='00';
sec1.value='00';
msec1.value='00';

let timer;

start.addEventListener("click",function(){

    if(timer!==null){
        clearInterval(timer)
    }

   timer= setInterval(starttimer,10);
})
stop.addEventListener("click",function(){

    clearInterval(timer)

})
reset.addEventListener("click",function(){

    clearInterval(timer);
    min1.value='00';
    sec1.value='00';
    msec1.value='00';
    min='0';
    sec='0';
    msec='0';

})

function starttimer(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }
    let mins= min < 10 ? `0${min}`:min;
    let secs= sec < 10 ? `0${sec}`:sec;
    let msecs= msec < 10 ? `0${msec}`:msec;
    
    min1.value=mins;
    sec1.value=secs;
    msec1.value=msecs;

}

