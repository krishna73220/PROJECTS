
let dark = document.querySelector(".dark");
let login_box = document.querySelector(".login-box");


document.querySelector(".login").addEventListener('click', function () {

    dark.classList.remove("dark-hidden");
    login_box.classList.remove("login-box-hidden");
    document.querySelector('.login-hover').style.display = 'none';
    disableScroll()


});

dark.addEventListener('click', function () {
    dark.classList.add("dark-hidden");
    login_box.classList.add("login-box-hidden");
    document.querySelector('.login-hover').style.display = 'block';
    enableScroll()
});

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

document.querySelector(".input").addEventListener('click', function () {

    document.querySelector(".search-click").classList.remove("not-serch-click");
    document.querySelector(".not-dark").classList.remove("not-dark-remove");

});
document.querySelector(".not-dark").addEventListener('click', function () {
    document.querySelector(".search-click").classList.add("not-serch-click");
    document.querySelector(".not-dark").classList.add("not-dark-remove");

});



document.querySelector(".sign-up").addEventListener('click', function () {

    document.querySelector(".sign-box").classList.remove("sign-box-hidden");
    dark.classList.remove("dark-hidden");
    disableScroll()

});
dark.addEventListener('click', function () {
    dark.classList.add("dark-hidden");
    document.querySelector(".sign-box").classList.add("sign-box-hidden");
    enableScroll()

});


let close_btn = document.querySelectorAll(".cut");

let clos_function = function () {
    login_box.classList.add("login-box-hidden");
    document.querySelector(".sign-box").classList.add("sign-box-hidden");
    dark.classList.add("dark-hidden");
    document.querySelector('.login-hover').style.display = 'block';
}
for (i = 0; i < close_btn.length; i++) {
    close_btn[i].addEventListener('click', clos_function)
    close_btn[i].addEventListener('click', enableScroll)

}
// *******************************slider******************************

let slider = document.querySelectorAll(".slider-img")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let Alldot = document.querySelectorAll(".dot")
let slider_count = 0;


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


// **********************************section-slider*****************************

let slid_sec = document.querySelectorAll(".sl-js");
let slid_sec1 = document.querySelectorAll(".sl1-js");
let slid_sec2 = document.querySelectorAll(".sl2-js");
let slid_sec3 = document.querySelectorAll(".sl3-js");
let next1 = document.querySelector(".next1")
let prev1 = document.querySelector(".prev1")
let slid_sec_count = 0;

prev1.style.visibility = "hidden";

for (i = 0; i < slid_sec.length; i++) {
    slid_sec[i].style.left = `${i * 250}px`;
} 
for (i = 0; i < slid_sec1.length; i++) {
    slid_sec1[i].style.left = `${i * 250}px`;
} 
for (i = 0; i < slid_sec2.length; i++) {
    slid_sec2[i].style.left = `${i * 250}px`;
} 
for (i = 0; i < slid_sec3.length; i++) {
    slid_sec3[i].style.left = `${i * 250}px`;
} 

function next_sec() {
    if (slid_sec_count < slid_sec.length - 4) {
        slid_sec_count++;
        for (i = 0; i < slid_sec.length; i++) {
            slid_sec[i].style.transform = `translateX(-${slid_sec_count * 265}px)`
        }

        if (slid_sec_count == slid_sec.length - 4) {
            next1.style.visibility = "hidden";
        }
        if (slid_sec_count == slid_sec.length - 7) {
            prev1.style.visibility = "visible";
        }
    }
}

next1.addEventListener("click", next_sec);

function prev_sec() {
    if (slid_sec_count > 0) {
        slid_sec_count--;
        for (i = 0; i < slid_sec.length; i++) {
            slid_sec[i].style.transform = `translateX(-${slid_sec_count * 250}px)`
        }
        if (slid_sec_count == slid_sec.length - 5) {
            next1.style.visibility = "visible";
        }
        if (slid_sec_count == 0) {
            prev1.style.visibility = "hidden";
        }
    }
}

prev1.addEventListener("click", prev_sec);



let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");
let c6 = document.querySelector(".c6");
let c7 = document.querySelector(".c7");
let c8 = document.querySelector(".c8");
let c9 = document.querySelector(".c9");
let c10 = document.querySelector(".c10");
let c11 = document.querySelector(".c11");
let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");

c1.addEventListener("mousemove", function () {

    li1.style.display = 'block';
    li2.style.display = 'none';
    li3.style.display = 'none';
    c1.style.backgroundColor = "#eeeeee";
    c1.style.color = "#2874f0";
})

c2.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'block'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c3.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'none'
    li3.style.display = 'block';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c4.addEventListener("mousemove", function () {
    li1.style.display = 'block';
    li2.style.display = 'none'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c5.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'block'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c6.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'none'
    li3.style.display = 'block';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c7.addEventListener("mousemove", function () {
    li1.style.display = 'block';
    li2.style.display = 'none'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c8.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'block'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c9.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'none'
    li3.style.display = 'block';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c10.addEventListener("mousemove", function () {
    li1.style.display = 'block';
    li2.style.display = 'none'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})
c11.addEventListener("mousemove", function () {
    li1.style.display = 'none';
    li2.style.display = 'block'
    li3.style.display = 'none';
    c1.style.backgroundColor = "white";
    c1.style.color = "black";
})

