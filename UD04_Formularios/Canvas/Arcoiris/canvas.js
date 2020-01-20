/*Variables*/

/*Canvas*/
//lienzo
const lienzo = document.querySelector("#lienzo");
//pincel
const pincel = lienzo.getContext("2d");
pincel.strokeStyle="cyan";
pincel.lineJoin = 'round';
pincel.lineCap = 'round';
pincel.lineWidth = 100;

//Dibujando

let direccion = false;
let posX;
let posY;
let saturacion = 0;

//Fondo
const fondo = new Image();
fondo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HcvYGla5cim4bZJndRnj7GIyKy8U4yNNt456I7KfrOF4BYis&s";

fondo.onload = function(){
    pincel.drawImage(fondo,0,0);
}

function controlTamanyoPincel(){
    if (pincel.lineWidth >100 || pincel.lineWidth <=1){
        direccion = !direccion;
    }
}

function aumentarTamanyoPincel(){
    
}

function dibujar(e){

    if(!dibujando)return;

    pincel.beginPath();
    pincel.strokeStyle = `hsl(${saturacion} ,100%,50%)`;
    pincel.moveTo(posX,posY);
    pincel.lineTo(e.offsetX,e.offsetY);
    pincel.stroke();

    posX = e.offsetX;
    posY = e.offsetY;

    saturacion+=10;

    (pincel.lineWidth>100||pincel.lineWidth<=1)&&(direccion=!direccion);

    direccion?pincel.lineWidth++:pincel.lineWidth--;

}

function dejarDePintar(){
    dibujando = false;
}

function coordenadasRaton(e){
    let pos = lienzo.getBoundingClientRect();
    posX = e.clientX - pos.left;
    posY = e.clientY - pos.top;
    dibujando = true;
}

function init(){
    lienzo.addEventListener("mousemove",dibujar);
    lienzo.addEventListener("mousedown",coordenadasRaton);
    lienzo.addEventListener("mouseup",dejarDePintar);
    lienzo.addEventListener("mouseout",dejarDePintar);
}

