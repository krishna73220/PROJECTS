const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"

const numberSet = "0123456789"
const symbolset = "!@#$%^&*()_+/?><:;{}|"

let display = document.querySelector("#display")
let totalLen = document.querySelector(".k1")
let upp = document.querySelector(".k2")
let low = document.querySelector("#low")
let num = document.querySelector("#num")
let sym = document.querySelector("#sym")
let btn = document.querySelector("#btn")



const randomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]

}

const generatePassword = (password="") => {
    if (upp.checked) {
        password += randomdata(upperset)
   

    }
    if (low.checked) {
        password += randomdata(lowerSet)

    }
    if (num.checked) {
        password += randomdata(numberSet)
    }
    if (sym.checked) {
        password += randomdata(symbolset)

    }
    

    if (password.length < totalLen.value) {
        return generatePassword(password)
    }

    display.value= truncateString(password, totalLen.value);
   
}

generatePassword();

btn.addEventListener("click", generatePassword())

btn.addEventListener("click",function(){
    generatePassword()
})


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}