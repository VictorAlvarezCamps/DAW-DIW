/*Variables*/
var mapa = document.getElementById("mapa");
var pilar = document.getElementsByClassName("pilar");
var PJX = 11;
var PJY = 0;
var EnemigoX = Math.floor(Math.random()*21);
var EnemigoY = Math.floor(Math.random()*10);
var mapa2 = [[2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];

   

window.onload = function(){
    

    CrearMapa();
    BarraObjetos();
    document.addEventListener('keydown',mover);
    /*ObjetosPilares();*/
    
    
    //console.table(mapa2);
    
    setInterval(MovimientoEnemigo, 300); //300 son milisegundos
};

/*Detectar movimiento personaje*/
function mover (event) {
    const keyName = event.key;

    switch(event.key){
        case "a":
            if (mapa2[PJY][PJX-1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY][--PJX].classList.add("Personaje");                
            }
        break;
        case "d":
            if (mapa2[PJY][PJX+1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY][++PJX].classList.add("Personaje");
            }
        break;
        case "w":
            if (mapa2[PJY-1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[--PJY][PJX].classList.add("Personaje");
            }   
        break;
        case "s":
            if (mapa2[PJY+1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[++PJY][PJX].classList.add("Personaje");
            }            
        break;
        default: break;
    }
}

function MovimientoEnemigo(){

    var RandomDirection = Math.floor(Math.random()*4);
    switch(RandomDirection){
        case 0:
        //Arriba
            if (mapa2[EnemigoY-1][EnemigoX].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[--EnemigoY][EnemigoX].classList.add("Enemigo");
            }
        break;
        case 1:
            //Abajo        
            if(mapa2[EnemigoY+1][EnemigoX].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[++EnemigoY][EnemigoX].classList.add("Enemigo");
            }
        break;
        case 2:
        //Izquierda        
            if (mapa2[EnemigoY][EnemigoX-1].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[EnemigoY][--EnemigoX].classList.add("Enemigo");
            }
        break;
        case 3:
        //Derecha
            if (mapa2[EnemigoY][EnemigoX+1].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[EnemigoY][++EnemigoX].classList.add("Enemigo");
            }
        break;
    }

}

/*Crear mapa*/

function CrearMapa(){

    var cont = 0;

    for(let i = 0; i < mapa2.length ; i++) {
        for (let j = 0; j < mapa2[i].length ; j++) {
            let div = document.createElement("div");
            if (mapa2[i][j] == 2) div.classList.add("fuera");
            else if (mapa2[i][j] == 0) div.classList.add("camino");
            else if (mapa2[i][j] == 1) div.classList.add("pilar");    
            if((PJY == i) && (PJX == j)) div.classList.add("Personaje");
            if(mapa2[EnemigoY][EnemigoX] == 0 && cont == 0){
                if((EnemigoX == j) && (EnemigoY == i))div.classList.add("Enemigo"),cont = 1;
            }else if(mapa2[EnemigoY][EnemigoX] == 1 || mapa2[EnemigoY][EnemigoX] == 2){
                EnemigoX = Math.floor(Math.random()*21);
                EnemigoY = Math.floor(Math.random()*10);
                cont = 0;
            }
            mapa.appendChild(div);
            mapa2[i][j] = div;
        }
    }
}

/*BarraObjetos*/

function BarraObjetos(){

    var CuadroBarra = document.createElement("div");
    CuadroBarra.classList.add("CuadroBarra");
    document.querySelector(".hotbar").appendChild(CuadroBarra);   

    for(let filas=0;filas<3;filas++){
        var Objeto = document.createElement("div");
        Objeto.classList.add("Objeto");
        document.querySelector(".CuadroBarra").appendChild(Objeto);
    }
}

/*Objeto en pilar*/

function ObjetosPilares(){

    var RandomNumber = Math.floor(Math.random()*3);
    for(let i = 0; i < pilar.length ; i++) {
        switch(RandomNumber){
            case 0:
                let objeto1 = document.createElement("span");
                objeto1.classList.add("Barril");
                mapa.appendChild(objeto1);
                mapa2[i] = objeto1;
            break;
            case 1:
                let objeto2 = document.createElement("span");
                objeto2.classList.add("BolaCanon");
                mapa.appendChild(objeto2);
                mapa2[i] = objeto2;
            break;
            case 2:
                let objeto3 = document.createElement("span");
                objeto3.classList.add("Canon");
                mapa.appendChild(objeto3);
                mapa2[i] = objeto3;
            break;                    
        }
    }
}