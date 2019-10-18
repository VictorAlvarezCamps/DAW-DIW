/*Variables*/
var mapa = document.getElementById("mapa");
var camino = document.getElementsByClassName("camino");
var PJX = 11;
var PJY = 0;
var EnemigoX = 0;
var EnemigoY = 0;

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
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        ];

   

window.onload = function(){

    CrearMapa();
    BarraObjetos();
    MovimientoEnemigo();
    
    document.addEventListener('keydown',mover);
    //console.table(mapa2);

    setInterval(movimientoEnemigo, 300); //300 son milisegundos
};

/*Detectar movimiento personaje*/
function mover (event) {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);

    switch(event.key){
        case "a":
            if (mapa2[PJY][PJX-1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY][--PJX].classList.add("Personaje");
            }
        break;
        case "d":
            if (mapa2[PJY][PJX+1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY][++PJX].classList.add("Personaje");
            }
        break;
        case "w":
            if (mapa2[PJY-1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[--PJY][PJX].classList.add("Personaje");
            }   
        break;
        case "s":
            if (mapa2[PJY+1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[++PJY][PJX].classList.add("Personaje");
            }            
        break;
        default: break;
    }
}

function MovimientoEnemigo(){

    EnemigoX = Math.floor(Math.random()*23);
    EnemigoY = Math.floor(Math.random()*12);

    //Arriba
    if (mapa2[EnemigoY-1][EnemigoX].className.indexOf("camino") >= 0) {
        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
        mapa2[--EnemigoY][EnemigoX].classList.add("Enemigo");
    }  
    //Abajo
    if (mapa2[EnemigoY+1][EnemigoX].className.indexOf("camino") >= 0) {
        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
        mapa2[++EnemigoY][EnemigoX].classList.add("Enemigo");
    } 
    //Izquierda
    if (mapa2[EnemigoY][EnemigoX-1].className.indexOf("camino") >= 0) {
        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
        mapa2[EnemigoY][--EnemigoX].classList.add("Enemigo");
    } 
    //Derecha
    if (mapa2[EnemigoY][EnemigoX+1].className.indexOf("camino") >= 0) {
        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
        mapa2[EnemigoY][++EnemigoX].classList.add("Enemigo");
    }
}

/*Crear mapa*/

function CrearMapa(){

    for(let i = 0; i < mapa2.length ; i++) {
        for (let j = 0; j < mapa2[i].length ; j++) {
            let div = document.createElement("div");
            if (mapa2[i][j] == 2) div.classList.add("fuera");
            else if (mapa2[i][j] == 0) div.classList.add("camino");
            else if (mapa2[i][j] == 1) div.classList.add("pilar");
            if((PJY == i) && (PJX == j)) div.classList.add("Personaje");
            if((EnemigoX == j) && (EnemigoY == i) && (mapa2[i][j] == 0)) div.classList.add("Enemigo");
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


/*ComprobarEnemigos*/
/*ObtenerObjeto*/
/*PonerObjetoEnPilar*/