/*Llave-Barril
Sarcófago-Bola de cañon
Papiro - Cañon*/


/*Variables*/
var mapa = document.getElementById("mapa");
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

var contObjeto1 = 0;
var contObjeto2 = 0;
var contObjeto3 = 0;

var RandomPosObjeto = [[2,2],[2,6],[2,10],[2,14],[2,18],
                       [5,2],[5,6],[5,10],[5,14],[5,18],
                       [8,2],[8,6],[8,10],[8,14],[8,18]];
var Objeto = ["Barril","BolaCanon","Canon"];
var obj = "";


window.onload = function(){
    

    CrearMapa();
    BarraObjetos();
    document.addEventListener('keydown',mover);
    PonerObjetoPilar();
    
    setInterval(MovimientoEnemigo, 300); //300 son milisegundos
};

/*Detectar movimiento personaje*/
function mover (event) {

    switch(event.key){
        case "a":
            if (mapa2[PJY][PJX-1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                /* Algunos cambios para mover al personaje */
                mapa2[PJY][PJX-1].classList.add("Personaje");
                if (mapa2[PJY][PJX-1].classList.contains("Pisadas")){
                    mapa2[PJY][PJX-1].classList.remove("Pisadas");
                }
                PJX--;
            }
        break;
        case "d":
            if (mapa2[PJY][PJX+1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");                
                /* Algunos cambios para mover al personaje */
                mapa2[PJY][PJX+1].classList.add("Personaje");
                if (mapa2[PJY][PJX+1].classList.contains("Pisadas")){
                    mapa2[PJY][PJX+1].classList.remove("Pisadas");
                }
                PJX++;
            }
        break;
        case "w":
            if (mapa2[PJY-1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY-1][PJX].classList.add("Personaje");
                /* Algunos cambios para mover al personaje */
                if (mapa2[PJY-1][PJX].classList.contains("Pisadas")){
                    mapa2[PJY-1][PJX].classList.remove("Pisadas");
                }
                PJY--;
            }    
        break;
        case "s":
            if (mapa2[PJY+1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY+1][PJX].classList.add("Personaje");
                /* Algunos cambios para mover al personaje */
                if (mapa2[PJY+1][PJX].classList.contains("Pisadas")){
                    mapa2[PJY+1][PJX].classList.remove("Pisadas");
                }
                PJY++;
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
            else if(mapa2[i][j] == 1)div.classList.add("pilar");
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

    //pilares

    //Crear un vector en la que cada posición es uno de los pilares. 15 en total

    //En cada posición del vector de los pilares, ponemos un vector de dos posiciones con la x y la y

    //


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



function PonerObjetoPilar(){

        let cont2 = 0;
    
        while(cont2 < 15){

            var RandomObjeto = Math.floor(Math.random()*15);

            switch(RandomObjeto){
                case 0:
                    mapa2[RandomPosObjeto[0][0]][RandomPosObjeto[0][1]].classList.add(ObjetoRandom());
                break;
                case 1:
                    mapa2[RandomPosObjeto[1][0]][RandomPosObjeto[1][1]].classList.add(ObjetoRandom());
                break;
                case 2:
                    mapa2[RandomPosObjeto[2][0]][RandomPosObjeto[2][1]].classList.add(ObjetoRandom());
                break;
                case 3:
                    mapa2[RandomPosObjeto[3][0]][RandomPosObjeto[3][1]].classList.add(ObjetoRandom());
                break;
                case 4:
                    mapa2[RandomPosObjeto[4][0]][RandomPosObjeto[4][1]].classList.add(ObjetoRandom());
                break;
                case 5:
                    mapa2[RandomPosObjeto[5][0]][RandomPosObjeto[5][1]].classList.add(ObjetoRandom());
                break;
                case 6:
                    mapa2[RandomPosObjeto[6][0]][RandomPosObjeto[6][1]].classList.add(ObjetoRandom());
                break;
                case 7:
                    mapa2[RandomPosObjeto[7][0]][RandomPosObjeto[7][1]].classList.add(ObjetoRandom());
                break;
                case 8:
                    mapa2[RandomPosObjeto[8][0]][RandomPosObjeto[8][1]].classList.add(ObjetoRandom());
                break;
                case 9:
                    mapa2[RandomPosObjeto[9][0]][RandomPosObjeto[9][1]].classList.add(ObjetoRandom());
                break;
                case 10:
                    mapa2[RandomPosObjeto[10][0]][RandomPosObjeto[10][1]].classList.add(ObjetoRandom());
                break;
                case 11:
                    mapa2[RandomPosObjeto[11][0]][RandomPosObjeto[11][1]].classList.add(ObjetoRandom());
                break;
                case 12:
                    mapa2[RandomPosObjeto[12][0]][RandomPosObjeto[12][1]].classList.add(ObjetoRandom());
                break;
                case 13:
                    mapa2[RandomPosObjeto[13][0]][RandomPosObjeto[13][1]].classList.add(ObjetoRandom());
                break;
                case 14:
                    mapa2[RandomPosObjeto[14][0]][RandomPosObjeto[14][1]].classList.add(ObjetoRandom());
                break;
                default: break;
            }
        cont2++;
    }
}

function ObjetoRandom(){

    let RandomNumberObjeto = Math.floor(Math.random()*3);   

    switch(RandomNumberObjeto){
        case 0:
            if(contObjeto1 = 0){
                obj = Objeto[0];
                contObjeto1 = 1;
            }
        break;
        case 1:
            if(contObjeto2 = 0){
                obj = Objeto[1];
                contObjeto2 = 1; 
            }
        break;
        case 2:
            if(contObjeto3 = 0){
                obj = Objeto[2];
                contObjeto3 = 1;
            }
        break;
    }
    return obj;    
}