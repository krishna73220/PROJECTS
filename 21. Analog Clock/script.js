const hour = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")



function dispayTime() {

    let date = new Date()



    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let h_rotate = 30 * h + m / 2;
    let m_rotate = 6 * m;
    let s_rotate = 6 * s;


    hour.style.transform = `rotate(${h_rotate}deg)`;
    min.style.transform = `rotate(${m_rotate}deg)`;
    sec.style.transform = `rotate(${s_rotate}deg)`;

}

setInterval(dispayTime, 1000);