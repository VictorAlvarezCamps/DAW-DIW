/*Llave-Barril
Sarcófago-Bola de cañon
Papiro - Cañon*/


/*Variables*/
var mapa = document.getElementById("mapa");
var PJX = 11;
var PJY = 0;
var EnemigoX = Math.floor(Math.random()*21);
var EnemigoY = Math.floor(Math.random()*10);
var Item = document.createElement("div");
var pilares = new Array(15);

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
var Enemigos = new Array();


window.onload = function(){

    
        /*for(let i=1;i<20;i++){

            CrearMapa();
            for(let i=0;i<mapa2.length;i++){
                for(let j=0;j<mapa2.length;j++){
                    if(mapa2[i][j] == 0 && mapa2[i][j].classList.contains("Enemigo")){
                        Enemigos.push(div.classList.add("Enemigo"));
                    }
                }
            }

            for(let j=0;j<inventario.length;j++){
                if(inventario.classList.contains("Barril") && inventario.classList.contains("BolaCanon") && inventario.classList.contains("Canon")){
                    setInterval(AbrirPuerta, 1000);
                }else{
                    setInterval(CerrarPuerta, 1000);
                }
            }    
            
        }*/
    
    BarraObjetos();
    PonerObjetoPilar();
    CrearMapa();    
    document.addEventListener('keydown',mover);
    setInterval(MovimientoEnemigo, 300); //300 son milisegundos
};

function CerrarPuerta(){
    if(!mapa2[0][11].classList.contains("Personaje")){
        mapa2[0][11].classList.remove("camino");
        mapa2[0][11].classList.remove("Pisadas");
        mapa2[0][11].classList.add("fuera");
    }
}

function AbrirPuerta(){
    if(!mapa2[0][11].classList.contains("Personaje")){        
        mapa2[0][11].classList.remove("fuera");
        mapa2[0][11].classList.add("Camino");
    }
}

/*Detectar movimiento personaje*/
function mover (event) {

     
    switch(event.key){
        case "a":
            if (mapa2[PJY][PJX-1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                /* Algunos cambios para mover al personaje */
                mapa2[PJY][PJX-1].classList.add("Personaje");
                PJX--;
            }
             
        break;
        case "d":
            if (mapa2[PJY][PJX+1].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");                
                /* Algunos cambios para mover al personaje */
                mapa2[PJY][PJX+1].classList.add("Personaje");
                PJX++;
            }
            
        break;
        case "w":
            if (mapa2[PJY-1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY-1][PJX].classList.add("Personaje");
                /* Algunos cambios para mover al personaje */
                PJY--;
            }
            
        break;
        case "s":
            if (mapa2[PJY+1][PJX].className.indexOf("camino") >= 0) {
                mapa2[PJY][PJX].classList.add("Pisadas");
                mapa2[PJY][PJX].classList.remove("Personaje");
                mapa2[PJY+1][PJX].classList.add("Personaje");
                /* Algunos cambios para mover al personaje */
                PJY++;
            } 
                  
        break;
        default: break;
    }

    if(mapa2[PJY][PJX-1].className.indexOf("pilar") >= 0) {
        mapa2[PJY][PJX-1].classList.remove("pilar");
        mapa2[PJY][PJX-1].classList.add("destapado");
        if(mapa2[PJY][PJX-1].className.indexOf("Barril") >= 0){
            inventario.classList.add("Barril");
        }else if(mapa2[PJY][PJX-1].className.indexOf("BolaCanon") >= 0){
            inventario.classList.add("BolaCanon");
        }else if(mapa2[PJY][PJX-1].className.indexOf("Canon") >= 0){
            inventario.classList.add("Canon");
        }
    } 
    if (mapa2[PJY][PJX+1].className.indexOf("pilar") >= 0) {
        mapa2[PJY][PJX+1].classList.remove("pilar");
        mapa2[PJY][PJX+1].classList.add("destapado");
        if(mapa2[PJY][PJX+1].className.indexOf("Barril") >= 0){
            inventario.classList.add("Barril");
        }else if(mapa2[PJY][PJX+1].className.indexOf("BolaCanon") >= 0){
            inventario.classList.add("BolaCanon");
        }else if(mapa2[PJY][PJX+1].className.indexOf("Canon") >= 0){
            inventario.classList.add("Canon");
        }
    }
    if (mapa2[PJY-1][PJX].className.indexOf("pilar") >= 0) {
        mapa2[PJY-1][PJX].classList.remove("pilar");
        mapa2[PJY-1][PJX].classList.add("destapado");
        if(mapa2[PJY-1][PJX].className.indexOf("Barril") >= 0){
            inventario.classList.add("Barril");
        }else if(mapa2[PJY-1][PJX].className.indexOf("BolaCanon") >= 0){
            inventario.classList.add("BolaCanon");
        }else if(mapa2[PJY-1][PJX].className.indexOf("Canon") >= 0){
            inventario.classList.add("Canon");
        }
    }
    if (mapa2[PJY+1][PJX].className.indexOf("pilar") >= 0) {
        mapa2[PJY+1][PJX].classList.remove("pilar");
        mapa2[PJY+1][PJX].classList.add("destapado");
        if(mapa2[PJY+1][PJX].className.indexOf("Barril") >= 0){
            inventario.classList.add("Barril");
        }else if(mapa2[PJY+1][PJX].className.indexOf("BolaCanon") >= 0){
            inventario.classList.add("BolaCanon");
        }else if(mapa2[PJY+1][PJX].className.indexOf("Canon") >= 0){
            inventario.classList.add("Canon");
        }
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
    var contador = 0;
    var camino = false;

    for(let i = 0; i < mapa2.length ; i++) {
        for (let j = 0; j < mapa2[i].length ; j++) {
            let div = document.createElement("div");
            if (mapa2[i][j] == 2) div.classList.add("fuera");
            else if (mapa2[i][j] == 0) {
                div.classList.add("camino");                
                camino = true;
            }
            else if(mapa2[i][j] == 1) {
                div.classList.add("pilar");
                if (camino && ((i - 2)%3 == 0 || i == 2)) { 
                    div.classList.add(pilares[contador]);
                    div.dataset.posicion = contador;                    
                    div.innerText = i + ":" + contador;
                    contador++;
                    camino = false;
                }
                if(div.classList.contains("Barril")){
                    console.log("Barril --- X: "+j+" Y: "+i);
                    RellenaPilar(j,i,"Barril");
                }else if(div.classList.contains("Canon")){
                    console.log("Cañon --- X: "+j+" Y: "+i);
                    //RellenaPilar(j,i,"Canon");
                }else if(div.classList.contains("BolaCanon")){
                    console.log("BolaCañon --- X: "+j+" Y: "+i);
                    //RellenaPilar(j,i,"BolaCanon");
                }
            }
            if((PJY == i) && (PJX == j)) div.classList.add("Personaje");
            if(mapa2[EnemigoY][EnemigoX] == 0 && cont == 0){
                if((EnemigoX == j) && (EnemigoY == i))Enemigos.push(div.classList.add("Enemigo"));
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
    var Inventario = document.createElement("div");
    Inventario.classList.add("CuadroBarra");
    document.querySelector(".hotbar").appendChild(Inventario);
    let cont3=0;
    while(cont3<3){
        Item.classList.add("Objeto");        
        document.querySelector(".CuadroBarra").appendChild(Item);
        cont3++;
    }
}

function RellenaPilar(posX,posY,item){
    //mapa2[posX][posY+1].classList.add(item);
    //mapa2[posX][posY+2].classList.add(item);
    mapa2[posX+1][posY].classList.add(item);
    //mapa2[posX+1][posY+1].classList.add(item);
    //mapa2[posX+1][posY+2].classList.add(item);

}

function PonerObjetoPilar(){
    var i = 0;
    while (i < Objeto.length) {
        let pos = Math.floor(Math.random()*15);
        if (pilares[pos] === undefined) {            
            pilares[pos] = Objeto[i];
            i++;
        }
    }    
}