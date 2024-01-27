let cut = document.querySelector(".cut");

let togal = document.querySelector(".togal");
let aside = document.querySelector(".aside");
togal.addEventListener("click", function () {
    aside.style.width = '240px';
});

cut.addEventListener("click", function () {
    aside.style.width = '0px'
})



let search_input = document.querySelector(".search-input");
let search_click = document.querySelector(".search-click");
let ovelay = document.querySelector(".ovelay");


search_input.addEventListener("click", function () {
    search_click.classList.remove("not-serch-click");
    ovelay.classList.remove("noneover");

})

ovelay.addEventListener("click", function () {
    search_click.classList.add("not-serch-click");
    ovelay.classList.add("noneover");

})


// *********************slider************************************************


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

set_time(1000);