/*Importar clases*/
import Mapa from './Mapa.js';
import Aventurero from './Aventurero.js';
import Llave from './Llave.js';
import Momia from './Momia.js';
import Pergamino from './Pergamino.js';
import Urna from './Urna.js';
import Barra from './Barra.js';

/*Variables*/
let m;
let b;
// var mapa = [[1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
//            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
//            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
//            [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];


var mapa2 = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,2]];



window.onload = function(){

    var mapa = document.getElementById("mapa");

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

    // m = new Mapa();

    // m.CrearMapa(mapa);

    // b = new Barra();

    // b.CrearBarra();

    /*for(let i=0;i<20;i++){


    }*/






};

/*Niveles*/

/*InicioPJ*/

function InicioPJ(){

    var PJ = document.createElement("div");
    PJ.classList.add("Personaje");  
    document.querySelector(".mapa").appendChild(PJ);


    m.SetCoordsXYMapa(mapa,0,11);

}

/*Salida*/

/*MatarEnemigo*/

/*ComprobarEnemigos*/

/*BarraObjetos*/

/*ObtenerObjeto*/

/*PonerObjetoEnPilar*/





