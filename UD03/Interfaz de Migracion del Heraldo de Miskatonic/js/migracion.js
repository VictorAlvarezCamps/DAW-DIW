/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

/*

FUNCIONES PERDIDAS
^(;,;)^

*/
/*Hijos de steps*/
let step;
let progress;
let msg;

/*Dataset.step*/
let dataStep;

function actualizarBarra(){
    var progreso = 10;
    this.value += progreso;
}

function startMigration(){

    // Fragmentos perdidos
    // ^(;,;)^

    //Seleccionamos todos los hijos de steps.
    let allSteps = document.querySelectorAll("[data-step]");

    let contador = 1;

    allSteps[contador].classList.add("estabaEscondido");

    if(allSteps[contador].localName == "progress")allSteps[contador].addEventListener("transitionend",actualizarBarra);

    if(allSteps[contador].localName == "finalmsg")allSteps[contador].classList.add("finalmsg");

    contador++;

    allSteps[contador].addEventListener("transitionend",startMigration);
}

function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);
}

// Init the environment when all is ready
window.onload=init;
