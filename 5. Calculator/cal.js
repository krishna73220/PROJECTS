let screen=document.querySelector("#screen");
let buttons=document.querySelectorAll(".btn");

let string="";

let oprator=['+','-','*','/'];

let arry=Array.from(buttons)

arry.forEach(buttom => {
    
buttom.addEventListener("click",(e)=>{
  

    if(e.target.innerText=='='){
        string = eval(string);
        screen.textContent=string;  
        
    }
    else if(e.target.innerText=='c'){
        string = "0";
        screen.textContent=string; 
        
    }
    else{ 

        string=string+e.target.innerText;     
        screen.textContent=string;
        
    }
})




});