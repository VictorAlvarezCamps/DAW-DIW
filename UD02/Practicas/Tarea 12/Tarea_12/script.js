let limiteCajas = 0;
var cuadros = document.querySelectorAll("box");

function init(){
    document.querySelector("button").addEventListener("click",ponerCaja);
}

function ponerCaja(){
    if(limiteCajas < 20){
        let div = document.createElement("box");
        div.addEventListener("mousedown",Poder);
        let padre = document.querySelector("container");    
        padre.appendChild(div);
        limiteCajas++;
    }
}

function Poder(){
    this.classList.add("evoluciona");
    this.addEventListener("mousedown",quitarEvolucion);
}

function quitarEvolucion(){
    this.classList.add("desevoluciona");
    this.addEventListener("mousedown",apareceSer);
}

function apareceSer(){
    this.classList.add("ultimate");
}

window.onload=init;
