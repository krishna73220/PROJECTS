const new_password = document.querySelector(".new-password");

let fleg=0;

function Validate_password() {
    let newPass = new_password.value
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (newPass.match(specialChars)) {

        document.querySelector('.cr5').classList.add("hidden");
        document.querySelector('.co5').classList.remove("hidden");
        document.querySelector('.special-charact').style.color = 'green';
        fleg=1
    }
    else {

        document.querySelector('.cr5').classList.remove("hidden");
        document.querySelector('.co5').classList.add("hidden");
        document.querySelector('.special-charact').style.color = 'red';
        fleg=0
    }
    //-------------------------------------------------------------
    let lowerCaseLetters = /[a-z]/g;
    if (newPass.match(lowerCaseLetters)) {
        document.querySelector('.cr1').classList.add("hidden");
        document.querySelector('.co1').classList.remove("hidden");
        document.querySelector('.lowercase').style.color = 'green'
        fleg=1
    }
    else {
        document.querySelector('.cr1').classList.remove("hidden");
        document.querySelector('.co1').classList.add("hidden");
        document.querySelector('.lowercase').style.color = 'red'
        fleg=0
    }

    // --------------------------------------------------
    let upperCaseLetters = /[A-Z]/g;
    if (newPass.match(upperCaseLetters)) {
        document.querySelector('.cr2').classList.add("hidden");
        document.querySelector('.co2').classList.remove("hidden");
        document.querySelector('.uppercase').style.color = 'green'
        fleg=1
    } else {
        document.querySelector('.cr2').classList.remove("hidden");
        document.querySelector('.co2').classList.add("hidden");
        document.querySelector('.uppercase').style.color = 'red'
        fleg=0

    }
    // ----------------------------------------------
    let number = /[0-9]/g;
    if (newPass.match(number)) {
        document.querySelector('.cr3').classList.add("hidden");
        document.querySelector('.co3').classList.remove("hidden");
        document.querySelector('.number').style.color = 'green'
        fleg=1
    }
    else {

        document.querySelector('.cr3').classList.remove("hidden");
        document.querySelector('.co3').classList.add("hidden");
        document.querySelector('.number').style.color = 'red'
        fleg=0

    }
    // ------------------------------------------------------------

    if (new_password.value.length >= 6 && new_password.value.length <= 13) {
        document.querySelector('.cr4').classList.add("hidden");
        document.querySelector('.co4').classList.remove("hidden");
        document.querySelector('.char_length').style.color = 'green'
        fleg=1
    }
    else {

        document.querySelector('.cr4').classList.remove("hidden");
        document.querySelector('.co4').classList.add("hidden");
        document.querySelector('.char_length').style.color = 'red'
        fleg=0
    }
}

new_password.addEventListener('keyup', () => {

    Validate_password()

})

//-------------Re Enter Password----------------------

let ReEnterPass = document.querySelector('.re-enter-password')
ReEnterPass.addEventListener("keyup", () => {

    if (new_password.value.match(/\S/) && ReEnterPass.value.match(/\S/)) {


        if (new_password.value == ReEnterPass.value) {

            document.querySelector('.match').innerText = 'Password Match successfully';
            document.querySelector('.match').style.color = 'green'

        } else {
            document.querySelector('.match').innerText = 'Re Enter Password Match Failed';
            document.querySelector('.match').style.color = 'red'
        }
    }

})

//----------------------------------------

document.querySelector('.submit-password').addEventListener('click', () => {
    if (new_password.value.match(/\S/) && ReEnterPass.value.match(/\S/)) {
        if (new_password.value == ReEnterPass.value && fleg==1) {
            document.querySelector('.match-fail').style.display = "none";
            document.querySelector('.succsess').style.display = "block";
        }
        else {
            document.querySelector('.match-fail').style.display = "block";
            document.querySelector('.succsess').style.display = "none";
        }
    }
    else {
        alert('Enter Password')
    }
})

// ---------------------------------

setInterval(() => {
    document.querySelector('.match-fail').style.display = "none";
    document.querySelector('.succsess').style.display = "none";

}, 3000);

