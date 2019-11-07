let limiteCajas = 0;
let activarRotacion = false;
let activarEnV = false;

function init(){
    document.querySelector("button").addEventListener("click",ponerCaja);
    ponerImagenes();
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
    this.addEventListener("click",rotacion);
    this.addEventListener("click",girarEnV);
}

function ponerImagenes(){
    let padre = document.querySelector("header");
    let img1 = document.createElement("div");
    let img2 = document.createElement("div");
    let img3 = document.createElement("div");
    img1.classList.add("rotar");
    img1.addEventListener("click",encenderRotacion);
    img2.classList.add("girarEnV");
    img2.addEventListener("click",encenderEnV);
    /*img3.classList.add("girarEnV");
    img3.addEventListener("click",girarEnV);*/
    padre.appendChild(img1);
    padre.appendChild(img2);
}

function encenderRotacion(){
    if(encenderRotacion == false)encenderRotacion = true,encenderEnV = false;
}

function encenderEnV(){
    if(encenderEnV == false)encenderRotacion = false,encenderEnV = true;   
}

function rotacion(){
    if(encenderRotacion == true)this.classList.add("rotacion");
}

function girarEnV(){
    if(encenderEnV == true)this.classList.add("moverV");
}

window.onload=init;
