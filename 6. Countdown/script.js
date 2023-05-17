let inputs=document.querySelectorAll("input");
 let endDate="20 july 2023 10:50 AM";
document.querySelector(".enddate").innerText=endDate;





function clock(){

let end=new Date(endDate);
let now=new Date()
let diff=(end-now)/1000;

if(diff<0) 
return;

inputs[0].value=Math.floor(diff/(60*60*24));  //day
inputs[1].value=Math.floor(diff/(60*60))%24; //hour
inputs[2].value=Math.floor(diff/(60))%60; //min
inputs[3].value=Math.floor(diff%60); //sec
// inputs[4].value=Math.floor(diff*5); //sec

}


clock();

setInterval(
    ()=>{
        clock();
    },
    1000
)
