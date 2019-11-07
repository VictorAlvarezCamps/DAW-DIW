/* 
 
    ^(;,;)^ : Fragmento perdido

*/

let limiteCajas = 0;
var cuadros = document.querySelectorAll("box");

function init(){
    document.querySelector("button").addEventListener("click",ponerCaja);    
    cuadros.forEach(box => box.addEventListener("mousedown",Poder));
}

function ponerCaja(){
    if(limiteCajas < 20{
        let div = document.createElement("box");
        div.addEventListener("mousedown",Poder);
        let padre = document.querySelector("container");    
        padre.appendChild(div);
        limiteCajas++;
    }
}

function Poder(){    
    console.log("hola");
    this.classList.add("evoluciona");
      
}

window.onload=init;
