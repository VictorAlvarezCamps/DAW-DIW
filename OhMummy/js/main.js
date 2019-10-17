/*Variables*/
var mapa = document.getElementById("mapa");

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

    PJ();
};

/*Detectar movimiento personaje*/

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);

    switch(event.key){
        case "a":

        break;
        case "d":

        break;
        case "w":

        break;
        case "s":

        break;
    }

  });

/*Crear mapa*/

function CrearMapa(){
    for(let i = 0; i < mapa2.length ; i++) {
        for (let j = 0; j < mapa2[i].length ; j++) {
            var div = document.createElement("div");
            if (mapa2[i][j] == 2) div.classList.add("fuera");
            else if (mapa2[i][j] == 0) div.classList.add("camino");
            else if (mapa2[i][j] == 1) div.classList.add("pilar");
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

/*InicioPJ*/

function PJ(){
    var X = 0;
    var Y = 11;

    var PJ = document.createElement("div");
    PJ.classList.add("Personaje");
    mapa.appendChild(PJ);
    mapa2[X][Y] = PJ;
}

function Enemigo(){
    for(let i = 0; i < mapa2.length ; i++) {
        for (let j = 0; j < mapa2[i].length ; j++) {
            if (mapa2[i][j] == 0){
             
            }
        }
    }
}

/*Niveles*/
/*Salida*/
/*MatarEnemigo*/
/*ComprobarEnemigos*/
/*ObtenerObjeto*/
/*PonerObjetoEnPilar*/