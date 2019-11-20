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

function actualizarBarra(e){
    //var barraVideo = document.getElementById("barraVideo");
    var progreso = 10;
    e.value += progreso;
    //console.log(this);
}

function startMigration(){

    // Fragmentos perdidos
    // ^(;,;)^

    //Seleccionamos todos los hijos de steps.
    let allSteps = document.querySelector("steps");
    console.log(allSteps);
    //Accion por cada step, progress y message.
    for(let i=0;i<allSteps.length;i++){
        //Cogemos el step.
        step = allSteps[i].getElementsByTagName("steplabel");
        
        //Cogemos la barra.
        progress = allSteps[i+1];

        //Cogemos el mensaje de completado.
        msg = allSteps[i+2];

        //Le añadimos al step la clase estabaEscondido para volver a mostrarlo.
        step.classList.add("estabaEscondido");

        //Añadimos a la barra la misma clase para mostrarlo de nuevo.
        progress.classList.add("estabaEscondido");
        //Evento para ir completando la barra
        progress.addEventListener("transitionend",actualizarBarra);

        //Cogemos el mensaje y añadimos la clase para mostrarlo de nuevo también.
        msg.classList.add("estabaEscondido");
        //Añadimos la clase neon
        msg.classList.add("finalmsg");
    }
}

function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);
}

// Init the environment when all is ready
window.onload=init;
