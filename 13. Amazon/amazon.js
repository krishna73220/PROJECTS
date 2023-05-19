




// **************slider***********************

let slider = document.querySelectorAll(".sliderBox");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slider_count = 0

for (i = 0; i < slider.length; i++) {
    slider[i].style.left = `${i * 100}%`;
}

function nextbtn() {

    if (slider_count < slider.length - 1) {
        slider_count++
        for (i = 0; i < slider.length; i++) {
            slider[i].style.transform = `translateX(-${slider_count * 100}%)`
        }
    }


}
next.addEventListener("click", nextbtn);

function prevbtn() {

    if (slider_count > 0) {
        slider_count--
        for (i = 0; i < slider.length; i++) {
            slider[i].style.transform = `translateX(-${slider_count * 100}%)`
        }
    }


}
prev.addEventListener("click", prevbtn);




let time_interval

function set_time() {
    time_interval = setInterval(nextbtn, 2500)
}

set_time();


// ***********************************************************************************

let sliSec = document.querySelectorAll(".sli-js1");
let sliSec2 = document.querySelectorAll(".sli-js2");
let sliSec3 = document.querySelectorAll(".sli-js3");
let sliSec4 = document.querySelectorAll(".sli-js4");
let prev1 = document.querySelector(".prev1");
let next1 = document.querySelector(".next1");
let slider_count1 = 0

for (i = 0; i < sliSec.length; i++) {
    sliSec[i].style.left = `${i * 250}px`;
}
for (i = 0; i < sliSec2.length; i++) {
    sliSec2[i].style.left = `${i * 250}px`;
}
for (i = 0; i < sliSec3.length; i++) {
    sliSec3[i].style.left = `${i * 220}px`;
}

for (i = 0; i < sliSec4.length; i++) {
    sliSec4[i].style.left = `${i * 210}px`;
}

function prevSec() {
    if (slider_count1 > 0) {
        slider_count1--
        for (i = 0; i < sliSec.length; i++) {
            sliSec[i].style.transform = `translateX(-${slider_count1 * 100}%)`
        }
    }
}

prev1.addEventListener("click", prevSec);

function nextSec() {
    if (slider_count1 < sliSec.length - 5) {
        slider_count1++
        for (i = 0; i < sliSec.length; i++) {
            sliSec[i].style.transform = `translateX(-${slider_count1 * 100}%)`
        }

    }
}
next1.addEventListener("click", nextSec);

// *********************************************************************
let prev2 = document.querySelector(".prev2");
let next2 = document.querySelector(".next2");
let slider_count2 = 0
function prevSec1() {
    if (slider_count2 > 0) {
        slider_count2--
        for (i = 0; i < sliSec2.length; i++) {
            sliSec2[i].style.transform = `translateX(-${slider_count2 * 100}%)`
        }
    }
}

prev2.addEventListener("click", prevSec1);

function nextSec1() {
    if (slider_count2 < sliSec2.length - 5) {
        slider_count2++
        for (i = 0; i < sliSec2.length; i++) {
            sliSec2[i].style.transform = `translateX(-${slider_count2 * 100}%)`
        }
    }
}
next2.addEventListener("click", nextSec1);

// ***************************************************************
let prev3 = document.querySelector(".prev3");
let next3 = document.querySelector(".next3");
let slider_count3 = 0
function prevSec2() {
    if (slider_count3 > 0) {
        slider_count3--
        for (i = 0; i < sliSec3.length; i++) {
            sliSec3[i].style.transform = `translateX(-${slider_count3 * 100}%)`
        }
    }
}

prev3.addEventListener("click", prevSec2);

function nextSec2() {
    if (slider_count3 < sliSec3.length - 5) {
        slider_count3++
        for (i = 0; i < sliSec3.length; i++) {
            sliSec3[i].style.transform = `translateX(-${slider_count3 * 100}%)`
        }
    }
}
next3.addEventListener("click", nextSec2);

// *****************************************************

let prev4 = document.querySelector(".prev4");
let next4 = document.querySelector(".next4");
let slider_count4 = 0
function prevSec4() {
    if (slider_count4 > 0) {
        slider_count4--
        for (i = 0; i < sliSec4.length; i++) {
            sliSec4[i].style.transform = `translateX(-${slider_count4 * 100}%)`
        }
    }
}

prev4.addEventListener("click", prevSec4);

function nextSec4() {
    if (slider_count4 < sliSec4.length - 6) {
        slider_count4++
        for (i = 0; i < sliSec4.length; i++) {
            sliSec4[i].style.transform = `translateX(-${slider_count4 * 210}px)`
        }
    }
}
next4.addEventListener("click", nextSec4);

let input = document.querySelector(".input");
let dark = document.querySelector(".dark");
let serch = document.querySelector(".serch");
serch.classList.remove("serch-co");

input.addEventListener("click", function () {
    dark.style.display = "block"
    serch.classList.add("serch-co");
    disableScroll()
})
dark.addEventListener("click", function () {
    dark.style.display = "none"
    serch.classList.remove("serch-co");
    enableScroll()
})


function disableScroll() {

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}