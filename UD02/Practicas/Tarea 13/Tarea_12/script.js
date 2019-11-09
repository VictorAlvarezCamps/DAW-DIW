let limiteCajas = 0;
let animarRotacion = false;
let animarEnV = false;
let accion = "";

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
    this.classList.remove("evoluciona");
    this.classList.add("desevoluciona");
    this.addEventListener("mousedown",apareceSer);
}

function apareceSer(){
    this.classList.remove("desevoluciona");
    this.classList.add("ultimate");
    this.addEventListener("click",Animacion);
}

function ponerImagenes(){
    let padre = document.querySelector("header");
    let img1 = document.createElement("div");
    let img2 = document.createElement("div");
    let img3 = document.createElement("div");
    img1.classList.add("rotar");
    img1.addEventListener("click",accionRotar);
    img2.classList.add("girarEnV");
    img2.addEventListener("click",accionEnV);
    img3.classList.add("quitarEfecto");
    img3.addEventListener("click",accionSinNada);
    padre.appendChild(img1);
    padre.appendChild(img2);
    padre.appendChild(img3);
}

function accionRotar(){
    accion = "rotar";
}

function accionEnV(){
    accion = "enV";
}

function accionSinNada(){
    accion = "sinNada";
}

function Animacion(){
    switch(accion){
        case "rotar":
            this.classList.add("rotacion");
        break;
        case "enV":
            console.log("en uvesita");
            this.classList.add("moverV");
        break;
        case "sinNada":
            this.classList.remove('moverV');
            this.classList.remove('rotacion');
        break;
    }
}

window.onload=init;
