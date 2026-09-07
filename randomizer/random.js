const O_R = document.getElementById('O_R');
const manyVar = document.getElementById('manyVar');
const vip = document.getElementById('vip');
const section_O_R = document.querySelector("#section_O_R");
const section_manyVar = document.querySelector("#section_manyVar");
const section_vip = document.querySelector("#section_vip");

const cap = document.getElementById('cap');

const button_O_R = document.querySelector("#button_O_R");
const rezult = document.querySelector("#rezult");
const orel = document.querySelector("#orel");
const reshka = document.querySelector("#reshka");
const reset_O_R = document.querySelector("#reset_O_R");


O_R.addEventListener('click', function() {
    cap.textContent = "ОРЕЛ-РЕШКА";
    section_O_R.style.display = 'block';
    section_manyVar.style.display = 'none';
    section_vip.style.display = 'none';
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

reset_O_R.addEventListener('click', function() {
    count_orel = 0;
    count_reshka = 0; 
    orel.textContent = count_orel;
    reshka.textContent = count_reshka;
    rezult.textContent = '';
});

const addManyVar =[];
const write_var = document.querySelector("#write_var");
const add_var = document.querySelector("#add_var");
const catalogVar = document.querySelector("#catalogVar");

add_var.addEventListener('click', function(){
    const oneVar = write_var.value.trim();
    if (oneVar !== '') {
        addManyVar.push(oneVar);
        catalogVar.textContent = addManyVar.join("\n") ;
        write_var.value = '';
    }});

const buttonVar = document.querySelector("#buttonVar");
const rezultVar = document.querySelector("#rezultVar");

buttonVar.addEventListener('click', function() {
        if(addManyVar.length <3){
            rezultVar.textContent = "минимум 3 значения данных";
        }else{
        const rezManyVar = addManyVar[Math.floor(Math.random() * addManyVar.length)];
        rezultVar.textContent = rezManyVar;
}})

const resetVar = document.querySelector("#resetVar");

 resetVar.addEventListener('click', function(){
        addManyVar.length = 0;
        catalogVar.textContent = '';
        rezultVar.textContent = '';
    }) 


manyVar.addEventListener('click', function() {
    cap.textContent = "Несколько вариантов";
    section_O_R.style.display = 'none';
    section_manyVar.style.display = 'block';
    section_vip.style.display = 'none';

});


vip.addEventListener('click', function() {
    cap.textContent = "ну это ты хорошо придумал";
    section_O_R.style.display = 'none';
    section_manyVar.style.display = 'none';
    section_vip.style.display = 'block';

});


