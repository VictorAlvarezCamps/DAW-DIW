/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

/*

FUNCIONES PERDIDAS
^(;,;)^

*/

/*Contador para los steps*/
let contador=0;

/*Hijos de steps*/
let step;
let progress;
let msg;

function startMigration(){

    // Fragmentos perdidos
    // ^(;,;)^
    step = document.querySelectorAll("[data-step]");
    if(contador<step.length){
        step[contador].classList.add("estabaEscondido");
        if(step[contador].localName == "progress")actualizaBarra(step[contador]);
        step[contador].addEventListener("transitionend",startMigration);
        contador++;
    }
}

async function actualizaBarra(barra){
    let salir = false;
    while(!salir){
        barra.value += 1;
        await sleep(20);
        if(barra.value == 100)salir = true;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);
}

// Init the environment when all is ready
window.onload=init;
