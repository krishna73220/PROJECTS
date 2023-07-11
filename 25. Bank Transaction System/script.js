const btn = document.querySelector("#btn")
const user = document.querySelector(".user")
const pass = document.querySelector(".pass")
const sec1 = document.querySelector("#sec1")
const sec2 = document.querySelector("#sec2")
const transactionDiv = document.querySelector('.transection')
const transferBtn = document.querySelector('.transfer_btn')
const total_balnce = document.querySelector('.total_balnce')


/////////////////////ole method/////////////////////////
// const useracount = {

//     userid: {
//         username: 'krishna',
//         password: '123',
//         activity: [-2000, 8000, 700, 4000, 3000]
//     },
//     userid1: {
//         username: 'kumar',
//         password: '1234',
//         activity: [1000, -8000, -790, 1000, -3000]
//     },
//     userid2: {
//         username: 'raju',
//         password: '1235',
//         activity: [-5000, 7000, 390, 100, 3000, 1500, 8296, -2334, 9000, -700, 8000]
//     },

//     userid3: {
//         username: '',
//         password: '',
//         activity: [-5000, 7000, 390, 100, 3000, 1500, 8296, -2334, 9000, -700, 8000]
//     },


// }



// let currentUser;

// let depositAmount = 0;
// let withdrawalAmount = 0;
// let html;
//  let excuted=0;


// function totalpesa() {
//     total_amount = 0;
//     useracount[currentUser].activity.forEach((a) => {
//         total_amount += a
//     }
//     )
//     total_balnce.innerHTML = total_amount
// }

// function intrestcal() {
//     let p = total_amount
//     let r = 5
//     let t = 1

//     let SI = (p * t * r) / 100;

//     document.querySelector(".interest_amount").textContent = SI
// }




// btn.addEventListener("click", function () {
//     const username1 = user.value;
//     const password1 = pass.value;

//     for (let [y, x] of Object.entries(useracount)) {

//         if (x.username == username1 && x.password == password1) {
//             sec1.classList.add('hidden')
//             sec2.classList.remove('hidden')
//             document.querySelector('.user_title').innerHTML = x.username;

//             displayActivity(x.activity)
//             currentUser = y;
//             break;

//         }
//         else {
//             excuted ++;
//         }
//     }

//     if(excuted==3){
//         document.querySelector('.wrong').textContent = 'wrong Username or Password'
//     }


//     totalpesa()
//     intrestcal()



//     function startTimer(duration, display) {
//         var timer = duration, minutes, seconds;
//         setInterval(function () {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);

//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;

//             display.textContent = minutes + ":" + seconds;

//             if (--timer < 0) {
//                 timer = duration;
//                 logout1()
//                 document.querySelector('.wrong').textContent = ''
//             }
//         }, 1000);
//     }

//     timerr = function () {
//         let fiveMinutes = 60 * 5,
//             display = document.querySelector('.timer');
//         startTimer(fiveMinutes, display);
//     };
//     timerr()
// })


// function displayActivity(activity) {
//     activity.forEach(function (act, i) {

//         let activity_type;
//         if (act > 0) {
//             depositAmount += act;
//             activity_type = 'deposit'
//         } else {
//             activity_type = 'withdrawal'
//             withdrawalAmount += act;
//         }

//         html = `
//         <div class="tran-dtl "><p><span class="${activity_type}">${i + 1} ${activity_type}</span> <span>19/06/2023</span></p><p><span>${act}</span>₹</p></div>
//         `
//         transactionDiv.insertAdjacentHTML('afterbegin', html);

//         document.querySelector('.in_amount').innerHTML = depositAmount;
//         document.querySelector('.out_amount').innerHTML = withdrawalAmount;
//     })

// }

// let total_amount = 0;
// let tranfername = document.querySelector(".tranfername")

// transferBtn.addEventListener('click', function () {

//     let tamountValue = parseInt(document.querySelector('#transfer_amount').value);
//     if (tamountValue > 0) {
//         useracount[currentUser].activity.push(-tamountValue)
//         html = ''
//         transactionDiv.innerHTML = html;
//         depositAmount = 0;
//         withdrawalAmount = 0;
//         displayActivity(useracount[currentUser].activity);
//         totalpesa();
//         intrestcal();


//         let aa;
//         for (aa of Object.values(useracount))
//             console.log(aa.username)
//         console.log(aa.username)
//         if (aa.username == tranfername.value) {
//             useracount[currentUser].activity.push(tamountValue)
//         } else {
//             alert('Invalid Usename')
//         }


//     } else {
//         alert('Please Enter a Number')
//     }
//     // tamountValue = "";
//     document.querySelector('#transfer_amount').value = ""


// })



// document.querySelector(".addmony").addEventListener('click', function () {
//     let add_tamountValue = parseInt(document.querySelector('.addpesa').value);
//     if (add_tamountValue > 0) {
//         useracount[currentUser].activity.push(add_tamountValue)
//         html = ''
//         transactionDiv.innerHTML = html;
//         depositAmount = 0;
//         withdrawalAmount = 0;
//         displayActivity(useracount[currentUser].activity);
//         totalpesa()
//         intrestcal()

//     } else {
//         alert('Please Enter a Number')
//     }
//     document.querySelector('.addpesa').value = "";



// })


// let Closusr = document.querySelector(".Closusr")
// let closePass = document.querySelector(".closePass")

// document.querySelector('.closbtn').addEventListener("click", () => {


//     if (useracount[currentUser].username == Closusr.value && useracount[currentUser].password == closePass.value) {

//         sec1.classList.remove('hidden')
//         sec2.classList.add('hidden')
//         document.querySelector('.wrong').textContent = ''
//     }
//     else {
//         alert('Wrong Username or Password ')
//     }
// })

// document.querySelector('.logout').addEventListener("click", () => {
//     document.querySelector('.wrong').textContent = ''
//     logout1()
// })

// function logout1() {
//     sec1.classList.remove('hidden')
//     sec2.classList.add('hidden')
//     html = ''
//     transactionDiv.innerHTML = html;
// }

// ////////////////////////////date/////////////////////////////


// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();
// today_date = `${dd}-${mm}-${yyyy}`


// document.querySelector(".CurentDate").textContent = today_date


////////////////////////new method/////////////////////////////

const userid = {
    username: 'krishna',
    password: '123',
    activity: [-2000, 8000, 700, 4000, 3000],
    activityDate: [
        '2023-06-05T18:30:00.000Z',
        '2023-06-09T18:30:00.000Z',
        '2023-06-11T18:30:00.000Z',
        '2023-06-22T18:30:00.000Z',
        '2023-06-23T18:30:00.000Z'

    ]
}
const userid1 = {
    username: 'kumar',
    password: '1234',
    activity: [1000, -8000, -790, 1000, -3000],
    activityDate: [
        '2023-06-05T18:30:00.000Z',
        '2023-06-09T18:30:00.000Z',
        '2023-06-22T18:30:00.000Z',
        '2023-06-23T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z'
    ]
}
const userid2 = {
    username: 'raju',
    password: '12345',
    activity: [-5000, 7000, 390, 100, 3000, 1500, 8296, -2334, 9000, -700, 8000],
    activityDate: [
        '2023-06-05T18:30:00.000Z',
        '2023-06-09T18:30:00.000Z',
        '2023-06-11T18:30:00.000Z',
        '2023-06-22T18:30:00.000Z',
        '2023-06-23T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z',
        '2023-06-24T18:30:00.000Z'
    ]
}

const userid3 = {
    username: 'ramesh',
    password: '123456',
    activity: [-5000, 7000, 390, 9000, -700, 8000],
    activityDate: [
        '2023-06-05T18:30:00.000Z',
        '2023-06-08T18:30:00.000Z',
        '2023-06-13T18:30:00.000Z',
        '2023-06-21T18:30:00.000Z',
        '2023-06-22T18:30:00.000Z',
        '2023-06-23T18:30:00.000Z',
    ]
}



let alluser = [userid, userid1, userid2, userid3]


let depositAmount = 0;
let withdrawalAmount = 0;
let html;

let currentUserUser;

function calcDate(tDate) {

    function dayPassed(date1,date2){
        return Math.round((date2 - date1)/(1000*60*60*24))
    }
    const totaldayPassed = dayPassed(tDate, new Date())
    if(totaldayPassed === 0) return 'Today'
    if(totaldayPassed === 1) return 'Yesterday'
    if(totaldayPassed <=7) return `${totaldayPassed} day ago`
    else{
        const trDate = String(tDate.getDate() - 1).padStart(2, 0);
    const cMonth = String(tDate.getMonth() + 1).padStart(2, 0);
    const FullYear = tDate.getFullYear();
    return `${trDate}/${cMonth}/${FullYear}`
    }
    
    
}

btn.addEventListener("click", function () {
    const username1 = user.value;
    const password1 = pass.value;

    currentUserUser = alluser.find((val) => {
        return val.username == username1
    })


    if (currentUserUser?.password == password1) {  //use channing //? //not proces if undifine ,null
        sec1.classList.add('hidden')
        sec2.classList.remove('hidden')
        document.querySelector('.user_title').innerHTML = currentUserUser.username;
    }
    else {
        console.log('wrong')
    }


   

    displayActivity(currentUserUser.activity)

    function displayActivity(activity) {
        activity.forEach(function (act, i) {
            let tDate = new Date(currentUserUser.activityDate[i]);


            let activity_type;
            if (act > 0) {


                activity_type = 'deposit'

            } else {
                activity_type = 'withdrawal'

            }

            html = `
        <div class="tran-dtl "><p><span class="${activity_type}">${i + 1} ${activity_type}</span> <span>${calcDate(tDate)}</span></p><p><span>${act}</span>₹</p></div>
        `
            transactionDiv.insertAdjacentHTML('afterbegin', html);


        })
    }

    function displaySummary() {
        let deposit1 = (currentUserUser.activity).filter((value) => {
            return value > 0  ////condition 
        })
        console.log(deposit1)
    }
    displaySummary()

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
                logout1()
                document.querySelector('.wrong').textContent = ''
            }
        }, 1000);
    }

    timerr = function () {
        let fiveMinutes = 60 * 5,
            display = document.querySelector('.timer');
        startTimer(fiveMinutes, display);
    };
    timerr()

    totalpesa()

})


/////////////////////////////////////////////////////////////////////


document.querySelector('.logout').addEventListener("click", () => {
    document.querySelector('.wrong').textContent = ''
    logout1()
})

function logout1() {
    sec1.classList.remove('hidden')
    sec2.classList.add('hidden')
    html = ''
    transactionDiv.innerHTML = html;
}


////////////////////////////////////////////////////////////////

let today = new Date();
let dd = today.getDate();
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today_date = `${dd}-${mm}-${yyyy}`


document.querySelector(".CurentDate").textContent = today_date


/////////////////////////////////////////////////////



let Closusr = document.querySelector(".Closusr")
let closePass = document.querySelector(".closePass")

document.querySelector('.closbtn').addEventListener("click", () => {


    if (currentUserUser.username == Closusr.value && currentUserUser.password == closePass.value) {

        sec1.classList.remove('hidden')
        sec2.classList.add('hidden')
        document.querySelector('.wrong').textContent = ''
        let currentuserIndex = alluser.indexOf(currentUserUser)
        alluser.splice(currentuserIndex, 1);

    }
    else {
        alert('Wrong Username or Password ')
    }

})


//////////////////////////////////////////////////////////

function totalpesa() {
    total_amount = 0;
    currentUserUser.activity.forEach((a) => {
        total_amount += a
    }
    )
    total_balnce.innerHTML = total_amount

}
