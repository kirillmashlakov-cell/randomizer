const O_R = document.getElementById('O_R');
const manyVar = document.getElementById('manyVar');
const vip = document.getElementById('vip');

const cap = document.getElementById('cap');

const button_O_R = document.querySelector("#button_O_R");
const rezult = document.querySelector("#rezult");
const orel = document.querySelector("#orel");
const reshka = document.querySelector("#reshka");


O_R.addEventListener('click', function() {
    cap.textContent = "ОРЕЛ-РЕШКА";
});


manyVar.addEventListener('click', function() {
    cap.textContent = "Несколько вариантов";
});


vip.addEventListener('click', function() {
    cap.textContent = "ну это ты хорошо придумал";
});


let count_orel = 0;
let count_reshka = 0; 
button_O_R.addEventListener('click', function () {
    let rez = Math.floor(Math.random() * 2);

      if (rez === 0) {
      count_orel  +=  1;
        rezult.textContent = "Орел";
        orel.textContent = count_orel;
      } else{
        count_reshka  += 1;
        rezult.textContent = "Решка";
        reshka.textContent = count_reshka;
         }
})
