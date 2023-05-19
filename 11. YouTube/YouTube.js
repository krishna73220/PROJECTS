let bar = document.querySelector(".bar");
let aside = document.querySelector(".aside");
let small = document.querySelector(".sidemenu_small_Screen");

bar.addEventListener("click", function () {
    aside.classList.toggle("active");
    small.classList.toggle('active1');
})

let search_click = document.querySelector(".search-click");
let input = document.querySelector(".input");
let ovelay = document.querySelector(".ovelay");
let ovelay1 = document.querySelector(".ovelay1");

input.addEventListener("click", function () {
    search_click.classList.remove("not-serch-click");
    ovelay.classList.remove("noneover");
})

ovelay.addEventListener("click", function () {                                                        ///////////////////////////////////////
    search_click.classList.add("not-serch-click");
    ovelay.classList.add("noneover");
    enableScroll()
})

ovelay1.addEventListener("click", function () {
    profile.classList.add("hidden");
    ovelay1.classList.add("noneover1");
    bellClick.classList.add("hidden")
    ovelay1.classList.add("noneover1");
    liveClick.classList.add("hidden1")
    ovelay1.classList.add("noneover1");
    clickMic.classList.add("hidden");
    ovelay1.classList.add("noneover1");
    enableScroll()
})

let mic = document.querySelector(".mic");
let clickMic = document.querySelector(".clickMic");
let cut = document.querySelector(".cut");


mic.addEventListener("click", function1)
cut.addEventListener("click", function2)

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

function function1() {
    clickMic.classList.remove("hidden");
    ovelay1.classList.remove("noneover1");
    disableScroll()
}
function function2() {
    clickMic.classList.add("hidden")
    ovelay1.classList.add("noneover1")
    enableScroll()
}

let live = document.querySelector(".live");
let liveClick = document.querySelector(".liveClick");

live.addEventListener("click", function () {
    liveClick.classList.remove("hidden1")
    ovelay1.classList.remove("noneover1");
    disableScroll()
})

let bell = document.querySelector(".bell");
let bellClick = document.querySelector(".bellClick")


bell.addEventListener("click", function () {
    bellClick.classList.remove("hidden")
    ovelay1.classList.remove("noneover1");
    disableScroll()
})


let dp_main = document.querySelector(".dp-main");
let profile = document.querySelector(".profile");

dp_main.addEventListener("click", function () {
    profile.classList.remove("hidden");
    ovelay1.classList.remove("noneover1");
    disableScroll()
})