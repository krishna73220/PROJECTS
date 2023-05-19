let input=document.querySelector(".input");
let selection=document.querySelector("#selection");
let Generate=document.querySelector("#Generate");
let Download=document.querySelector("#Download");
let qrBox=document.querySelector(".qrBox");


let size=selection.value;

function generateQRCode(){
    qrBox.innerHTML="";
    new QRCode(qrBox,{
        text:input.value,   
        width:size,
        height:size,
        colorLight:"#fff",
        colorDark:"#000"
    });
}

function EmptyInput(){
    if(input.value.length>0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL")
    }
}

selection.addEventListener("change",(e)=>{
    size=e.target.value;
    let img=document.querySelector(".qrBox img")

    if(img!==null){
        EmptyInput();
    }
    else(
        alert("Enter the text or URL")
    )
})

Generate.addEventListener("click",(e)=>{
    e.preventDefault();  //for page not refres.
    EmptyInput();
})

Download.addEventListener("click",function(){
    let img=document.querySelector(".qrBox img");
    if(img!==null){
        let imgattr=img.getAttribute('src');

    Download.setAttribute("href",imgattr);
    }
    else{
        Download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`) ///canvas for blank rectangle

        // alert("Enter the text or URL")
    
    }
});
