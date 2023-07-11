let rollDice = document.querySelector('.roll-dice');
let imgDice = document.querySelector('.img-dice');
let activeplayer = 0;
let p1active = document.querySelector(".left-main");
let p2active = document.querySelector(".right-main");



let high_score1_fix = 0;
let high_score2_fix = 0;

let curent_score = 0

rollDice.addEventListener('click', function () {
   let random = Math.trunc(Math.random() * 6) + 1;
   // console.log(random);
   imgDice.src = `img/dice-${random}.png`;

   // document.execCommand("Copy", false, null);
   document.querySelector(".congrate").classList.add("congrate-none");

   if (random !== 1) {
      curent_score += random;
      document.querySelector(`.player-${activeplayer}`).textContent = curent_score;   //activeplayer=0


   }
   else {
      curent_score = 0;
      document.querySelector(`.player-${activeplayer}`).textContent = curent_score; //activeplayer=0

      activeplayer = activeplayer === 0 ? 1 : 0;  //now activplayer=1 and loop start
      p1active.classList.toggle('active');
      p2active.classList.toggle('active');


   }
});

let holdbtn = document.querySelector(".hold");



holdbtn.addEventListener('click', function () {




   if (activeplayer == 0) {

      high_score1_fix += curent_score;
      curent_score = 0;
      document.querySelector(`.player-${activeplayer}`).textContent = curent_score;
      document.querySelector(".high-score-1").textContent = high_score1_fix;
      activeplayer = 1;
      // activeplayer = activeplayer === 0 ? 1 : 0;  //now activplayer=1 and loop start
      p1active.classList.toggle('active');
      p2active.classList.toggle('active');

   }

   else if (activeplayer == 1) {
      high_score2_fix += curent_score;
      curent_score = 0
      document.querySelector(`.player-${activeplayer}`).textContent = curent_score;
      document.querySelector(".high-score-2").textContent = high_score2_fix;
      activeplayer = 0
      // activeplayer = activeplayer === 0 ? 1 : 0;  //now activplayer=1 and loop start
      p1active.classList.toggle('active');
      p2active.classList.toggle('active');


   };

   if (high_score1_fix > 10 || high_score2_fix > 10) { 

      document.querySelector(".congrate").classList.remove("congrate-none");
      curent_score = 0
   document.querySelector(".player-0").textContent = curent_score;
   document.querySelector(".player-1").textContent = curent_score;
   high_score1_fix = 0;
   high_score2_fix = 0;
   document.querySelector(".high-score-1").textContent = high_score1_fix;
   document.querySelector(".high-score-2").textContent = high_score2_fix;

   };
  

});
document.querySelector(".congrate").classList.add("congrate-none");

document.querySelector(".new-game").addEventListener("click", function () {
   document.querySelector(".congrate").classList.add("congrate-none");
   curent_score = 0
   document.querySelector(".player-0").textContent = curent_score;
   document.querySelector(".player-1").textContent = curent_score;
   high_score1_fix = 0;
   high_score2_fix = 0;
   document.querySelector(".high-score-1").textContent = high_score1_fix;
   document.querySelector(".high-score-2").textContent = high_score2_fix;

   activeplayer = 0;  //now activplayer=1 and loop start
   p1active.classList.toggle('active');
   p1active.classList.toggle('active');



});



rollDice.addEventListener("mousedown", function () {

   rollDice.style.backgroundColor = 'red';

});
rollDice.addEventListener("mouseup", function () {

   rollDice.style.backgroundColor = '';


});