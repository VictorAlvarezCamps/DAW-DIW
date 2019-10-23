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

let RandomNumberObjeto;
var Objeto = ["Barril","BolaCanon","Canon"];


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


function RellenaPilar(posX,posY,item){
    mapa2[posX][posY+1].classList.add(item);
    mapa2[posX][posY+2].classList.add(item);
    mapa2[posX+1][posY].classList.add(item);
    mapa2[posX+1][posY+1].classList.add(item);
    mapa2[posX+1][posY+2].classList.add(item);
}

function ObjetoAleatorio(){
        var quitar = Math.floor(Math.random()*Objeto.length);
        return Objeto.splice(quitar,1);
}

/*function ComprobarContenidoPilar(){

    for(let i=1;i<6;i++){
        if(mapa2[1][i].classList.contains("Pisadas")){

        }
        i+=4;
    }
}*/



function PonerObjetoPilar(){

        let cont2 = 0;
    
        while(cont2 < 3){

            var RandomObjeto = Math.floor(Math.random()*15);

            switch(RandomObjeto){
                case 0:
                    mapa2[RandomPosObjeto[0][0]][RandomPosObjeto[0][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[0][0]][RandomPosObjeto[0][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[0][0],RandomPosObjeto[0][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[0][0]][RandomPosObjeto[0][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[0][0],RandomPosObjeto[0][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[0][0]][RandomPosObjeto[0][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[0][0],RandomPosObjeto[0][1],"BolaCanon");
                    }
                break;
                case 1:
                    mapa2[RandomPosObjeto[1][0]][RandomPosObjeto[1][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[1][0]][RandomPosObjeto[1][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[1][0],RandomPosObjeto[1][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[1][0]][RandomPosObjeto[1][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[1][0],RandomPosObjeto[1][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[1][0]][RandomPosObjeto[1][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[1][0],RandomPosObjeto[1][1],"BolaCanon");
                    }
                break;
                case 2:
                    mapa2[RandomPosObjeto[2][0]][RandomPosObjeto[2][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[2][0]][RandomPosObjeto[2][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[2][0],RandomPosObjeto[2][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[2][0]][RandomPosObjeto[2][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[2][0],RandomPosObjeto[2][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[2][0]][RandomPosObjeto[2][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[2][0],RandomPosObjeto[2][1],"BolaCanon");
                    }
                break;
                case 3:
                    mapa2[RandomPosObjeto[3][0]][RandomPosObjeto[3][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[3][0]][RandomPosObjeto[3][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[3][0],RandomPosObjeto[3][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[3][0]][RandomPosObjeto[3][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[3][0],RandomPosObjeto[1][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[3][0]][RandomPosObjeto[3][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[3][0],RandomPosObjeto[3][1],"BolaCanon");
                    }
                break;
                case 4:
                    mapa2[RandomPosObjeto[4][0]][RandomPosObjeto[4][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[4][0]][RandomPosObjeto[4][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[4][0],RandomPosObjeto[4][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[4][0]][RandomPosObjeto[4][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[4][0],RandomPosObjeto[4][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[4][0]][RandomPosObjeto[4][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[4][0],RandomPosObjeto[4][1],"BolaCanon");
                    }
                break;
                case 5:
                    mapa2[RandomPosObjeto[5][0]][RandomPosObjeto[5][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[5][0]][RandomPosObjeto[5][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[5][0],RandomPosObjeto[5][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[5][0]][RandomPosObjeto[5][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[5][0],RandomPosObjeto[5][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[5][0]][RandomPosObjeto[5][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[5][0],RandomPosObjeto[5][1],"BolaCanon");
                    }
                break;
                case 6:
                    mapa2[RandomPosObjeto[6][0]][RandomPosObjeto[6][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[6][0]][RandomPosObjeto[6][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[6][0],RandomPosObjeto[6][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[6][0]][RandomPosObjeto[6][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[6][0],RandomPosObjeto[6][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[6][0]][RandomPosObjeto[6][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[6][0],RandomPosObjeto[6][1],"BolaCanon");
                    }
                break;
                case 7:
                    mapa2[RandomPosObjeto[7][0]][RandomPosObjeto[7][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[7][0]][RandomPosObjeto[7][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[7][0],RandomPosObjeto[7][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[7][0]][RandomPosObjeto[7][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[7][0],RandomPosObjeto[7][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[7][0]][RandomPosObjeto[7][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[7][0],RandomPosObjeto[7][1],"BolaCanon");
                    }
                break;
                case 8:
                    mapa2[RandomPosObjeto[8][0]][RandomPosObjeto[8][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[8][0]][RandomPosObjeto[8][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[8][0],RandomPosObjeto[8][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[8][0]][RandomPosObjeto[8][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[8][0],RandomPosObjeto[8][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[8][0]][RandomPosObjeto[8][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[8][0],RandomPosObjeto[8][1],"BolaCanon");
                    }
                break;
                case 9:
                    mapa2[RandomPosObjeto[9][0]][RandomPosObjeto[9][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[9][0]][RandomPosObjeto[9][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[9][0],RandomPosObjeto[9][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[9][0]][RandomPosObjeto[9][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[9][0],RandomPosObjeto[9][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[9][0]][RandomPosObjeto[9][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[9][0],RandomPosObjeto[9][1],"BolaCanon");
                    }
                break;
                case 10:
                    mapa2[RandomPosObjeto[10][0]][RandomPosObjeto[10][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[10][0]][RandomPosObjeto[10][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[10][0],RandomPosObjeto[10][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[10][0]][RandomPosObjeto[10][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[10][0],RandomPosObjeto[10][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[10][0]][RandomPosObjeto[10][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[10][0],RandomPosObjeto[10][1],"BolaCanon");
                    }
                break;
                case 11:
                    mapa2[RandomPosObjeto[11][0]][RandomPosObjeto[11][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[11][0]][RandomPosObjeto[11][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[11][0],RandomPosObjeto[11][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[11][0]][RandomPosObjeto[11][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[11][0],RandomPosObjeto[11][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[11][0]][RandomPosObjeto[11][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[11][0],RandomPosObjeto[11][1],"BolaCanon");
                    }
                break;
                case 12:
                    mapa2[RandomPosObjeto[12][0]][RandomPosObjeto[12][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[12][0]][RandomPosObjeto[12][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[12][0],RandomPosObjeto[12][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[12][0]][RandomPosObjeto[12][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[12][0],RandomPosObjeto[12][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[12][0]][RandomPosObjeto[12][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[12][0],RandomPosObjeto[12][1],"BolaCanon");
                    }
                break;
                case 13:
                    mapa2[RandomPosObjeto[13][0]][RandomPosObjeto[13][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[13][0]][RandomPosObjeto[13][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[13][0],RandomPosObjeto[13][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[13][0]][RandomPosObjeto[13][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[13][0],RandomPosObjeto[13][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[13][0]][RandomPosObjeto[13][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[13][0],RandomPosObjeto[13][1],"BolaCanon");
                    }
                break;
                case 14:
                    mapa2[RandomPosObjeto[14][0]][RandomPosObjeto[14][1]].classList.add(ObjetoAleatorio());
                    if(mapa2[RandomPosObjeto[14][0]][RandomPosObjeto[14][1]].classList.contains("Barril")){
                        RellenaPilar(RandomPosObjeto[14][0],RandomPosObjeto[14][1],"Barril");
                    }else if(mapa2[RandomPosObjeto[14][0]][RandomPosObjeto[14][1]].classList.contains("Canon")){
                        RellenaPilar(RandomPosObjeto[14][0],RandomPosObjeto[14][1],"Canon");
                    }else if(mapa2[RandomPosObjeto[14][0]][RandomPosObjeto[14][1]].classList.contains("BolaCanon")){
                        RellenaPilar(RandomPosObjeto[14][0],RandomPosObjeto[14][1],"BolaCanon");
                    }
                break;
                default: break;
            }
        cont2++;
    }
}




// vector[ "1 2 3"," 1 3 2" ,"2 3 1","2 1 3"," 3 1 2"," 3 2 1 "] 
