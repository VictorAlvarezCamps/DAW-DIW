/*Llave-Barril
Sarcófago-Bola de cañon
Papiro - Cañon*/


/*Variables*/
var mapa = document.getElementById("mapa");
var caminoEnemigo = document.getElementsByClassName("camino");
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
var Objeto = ["Barril","BolaCanon","Canon",""];
var esquina = new Array(2);
var esquinaPilar = new Array(2);
var contadorPasos;
var vidaEnemigo = 1;
var contNivel = 0;
var vida = 5;
var puntuacion = 0;
var vidaP = document.createElement("div");
var PuntosP = document.createElement("div");
var TextoObjetos = document.createElement("div");
var BarraInventario = document.createElement("div");
var ObjetoP;
var esquinaPintar1;
var esquinaPintar2;
var Pintado = false;
var contObjeto1 = 0;
var contObjeto2 = 0;
var contObjeto3 = 0;
var objetoRandom = "";
var puerta = false;
var nivel = 1;
var ExisteEnemigo = 0;
var SigNivel = false;
var GuardaPuntos;
var GuardaVidas;
var PonerPuntos;
var PonerVidas;

window.onload = function(){

    /*while(nivel<=2){*/
        //if(contObjeto1 == 0 && contObjeto2 == 0){
            construirMapa();
            //setInterval(nivelCompletado,200);
        //}else if(contObjeto1 == 1 && contObjeto2 == 1){
            //if(mapa2[0][11].classList.contains("Personaje")){
                //GuardaPuntos = puntuacion;
                //GuardaVidas = vida;
                //document.location.reload();
                //sumarPuntos(GuardaPuntos);
                //document.querySelector(".vida").innerHTML = "Vida: "+ GuardaVidas;
                //nivel++;        
                //console.log(nivel);
            //}
        //}
    //}
    

};

/*function nivelCompletado(){
    if(contObjeto1 == 1 && contObjeto2 == 1){
        for(let i = 0; i < mapa2.length ; i++) {
            for (let j = 0; j < mapa2[i].length ; j++) {
                if((PJY == i) && (PJX == j)){
                    if(mapa2[i][j].classList.contains("Personaje")){
                        GuardaVidas = localStorage.getItem("vida");
                        GuardaPuntos = localStorage.getItem("puntuacion"); 
                        document.location.reload();
                        PonerPuntos = localStorag.setItem(GuardaPuntos);
                        PonerVidas = localStorage.setItem(GuardaVidas);       
                        sumarPuntos(PonerPuntos);
                        document.querySelector(".vida").innerHTML = "Vida: "+ PonerVidas;
                        nivel++;
                        contObjeto1 = 0;
                        contObjeto2 = 0;
                        console.log(nivel);
                    }
                } 
            }
        }  
    }
}*/

function construirMapa(){
    console.log("Nivel " + nivel);
    CrearMapa(nivel);
    document.addEventListener('keydown',mover);
    setInterval(MovimientoEnemigo, 400); //300 son milisegundos
    setInterval(matarEnemigo, 100);        
    PJ();
    setInterval(AbrirCerrar, 100);    
}

function matarEnemigo(){
    if(contObjeto3 == 1){
        document.getElementById("2").classList.remove("Canon");
        for(let i = 0; i < caminoEnemigo.length ; i++) {
            caminoEnemigo[i].classList.remove("Enemigo");
            if(!caminoEnemigo[i].classList.contains("Enemigo") && ExisteEnemigo == 0){
                sumarPuntos(1000);
                ExisteEnemigo = 1;
            }
        }
    }    
}

function AbrirCerrar(){

    if(contObjeto1 == 1 && contObjeto2 == 1){
        AbrirPuerta();
    }else{
        CerrarPuerta();
    }

}

function CerrarPuerta(){
    if(!mapa2[0][11].classList.contains("Personaje")){
        mapa2[0][11].classList.remove("camino");
        mapa2[0][11].classList.remove("Pisadas");
        mapa2[0][11].classList.add("fuera");
    }
}

function AbrirPuerta(){
    if(mapa2[0][11].classList.contains("fuera")){
        mapa2[0][11].classList.remove("fuera");  
        mapa2[0][11].classList.add("camino"); 
    }
}

function restart(nivel){
    for(let i = 0; i < caminoEnemigo.length ; i++) {
        caminoEnemigo[i].classList.remove("Personaje");
    }
    mapa2[0][11].classList.add("camino");    
    mapa2[0][11].classList.add("Personaje");
    for(let i = 0; i < caminoEnemigo.length ; i++) {
        caminoEnemigo[i].classList.remove("Personaje");
    }
    vida = 5;
    ExisteEnemigo = 0;
    document.querySelector(".vida").innerHTML = "Vida: "+ vida;
    console.log(nivel);
}

function restarVida(){
    if(vida>0){
        vida -= 1;
    }else if(vida<=0){
        vida = 0;
        alert("Game over");
        document.location.reload();
        console.log(nivel);
    }
    document.querySelector(".vida").innerHTML = "Vida: "+ vida;
}

function sumarPuntos(puntos){
    puntuacion += puntos;
    document.querySelector(".puntuacion").innerHTML = "Puntos: "+ puntuacion;
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
            if(mapa2[PJY][PJX].classList.contains("Enemigo")){
                restarVida();
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
            if(mapa2[PJY][PJX].classList.contains("Enemigo")){
                restarVida();
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
            if(mapa2[PJY][PJX].classList.contains("Enemigo")){
                restarVida();
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
            if(mapa2[PJY][PJX].classList.contains("Enemigo")){
                restarVida();                        
            }
            
        break;
        default: break;
    }

    ComprobarPilar();
       
}

function ComprobarPasos(x,y,Pintar1,Pintar2){
    if(contadorPasos < 14){
        Pintado = false;
        for(let i=0;i<5;i++){           
            for(let j=0;j<=4;j++){               
                if(mapa2[x][y].classList.contains("Pisadas")){
                    contadorPasos++;
                    if(contadorPasos == 14){
                        RellenaPilar(Pintar1,Pintar2,"destapado");                        
                        objetoRandom = ObjetoAleatorio();
                        if(objetoRandom == "Barril" && contObjeto1 == 0){
                            ObjetoPilar(Pintar1,Pintar2,"Barril");
                            if(!document.getElementById("0").classList.contains("Barril")){
                                document.getElementById("0").classList.add("Barril");
                                contObjeto1 = 1;
                            }                            
                        }else if(objetoRandom == "BolaCanon" && contObjeto2 == 0){
                            ObjetoPilar(Pintar1,Pintar2,"BolaCanon");
                            if(!document.getElementById("1").classList.contains("BolaCanon")){
                                document.getElementById("1").classList.add("BolaCanon");
                                contObjeto2 = 1;
                            }
                        }else if(objetoRandom == "Canon" && contObjeto3 == 0){
                            ObjetoPilar(Pintar1,Pintar2,"Canon");
                            if(!document.getElementById("2").classList.contains("Canon")){
                                document.getElementById("2").classList.add("Canon");
                                contObjeto3 = 1;
                            }
                        }
                        sumarPuntos(200);
                        contadorPasos=0;
                    }                                                
                }
                y+=1;                                      
            }
            x+=1;
            y-=5;                                 
        }
        contadorPasos=0;
    }
}

function ComprobarPilar(){
    contadorPasos = 0;
    if(mapa2[PJY][PJX-1].className.indexOf("pilar") >= 0) {
        esquina = buscarEsquina(PJY,PJX-1);
        esquinaPintar1 = esquina[0];
        esquinaPintar2 = esquina[1];
        esquina[0] -= 1;
        esquina[1] -= 1;
        
        ComprobarPasos(esquina[0],esquina[1],esquinaPintar1,esquinaPintar2);
    }
    if (mapa2[PJY][PJX+1].className.indexOf("pilar") >= 0) {
        esquina = buscarEsquina(PJY,PJX+1);
        esquinaPintar1 = esquina[0];
        esquinaPintar2 = esquina[1];
        esquina[0] -= 1;
        esquina[1] -= 1;

        ComprobarPasos(esquina[0],esquina[1],esquinaPintar1,esquinaPintar2);
    }
    if (mapa2[PJY-1][PJX].className.indexOf("pilar") >= 0) {
        esquina = buscarEsquina(PJY-1,PJX);
        esquinaPintar1 = esquina[0];
        esquinaPintar2 = esquina[1];     
        esquina[0] -= 1;
        esquina[1] -= 1;

        ComprobarPasos(esquina[0],esquina[1],esquinaPintar1,esquinaPintar2);
    }
    if (mapa2[PJY+1][PJX].className.indexOf("pilar") >= 0) {
        esquina = buscarEsquina(PJY+1,PJX);
        esquinaPintar1 = esquina[0];
        esquinaPintar2 = esquina[1];
        esquina[0] -= 1;
        esquina[1] -= 1;

        ComprobarPasos(esquina[0],esquina[1],esquinaPintar1,esquinaPintar2);
    }
}

function buscarEsquina(y,x) {
    
    let esquina2 = new Array(2);

    if(!mapa2[y-1][x].classList.contains("camino")) y--;
    //Ya tenemos las coordenadas en la parte superior del pilar

    var salir = false;
    while(!salir) {
        
        if(!mapa2[y][x-1].classList.contains("camino")){
            x--;
        }else{
            salir = true;
        }
        
    }

    esquina2[0] = y;
    esquina2[1] = x;
    return esquina2;
}

function MovimientoEnemigo(){

    var RandomDirection = Math.floor(Math.random()*4);
    var radioDetecta = 0;


    switch(RandomDirection){
        case 0:
        //Arriba
            if (mapa2[EnemigoY-1][EnemigoX].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[--EnemigoY][EnemigoX].classList.add("Enemigo");
                /*console.log("x: "+EnemigoX+"y:"+EnemigoY-5);
                if(mapa2[EnemigoY-5][EnemigoX].classList.contains("Personaje")) {
                    while(radioDetecta<5){
                        console.log("te veo arriba!");
                        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                        mapa2[--EnemigoY][EnemigoX].classList.add("Enemigo");
                        radioDetecta++;
                    }
                }*/
            }
        break;
        case 1:
            //Abajo        
            if(mapa2[EnemigoY+1][EnemigoX].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[++EnemigoY][EnemigoX].classList.add("Enemigo");
                /*console.log("x: "+EnemigoX+"y:"+EnemigoY+5);
                if(mapa2[EnemigoY+5][EnemigoX].classList.contains("Personaje")) {
                    while(radioDetecta<5){
                        console.log("te veo abajo!");
                        radioDetecta++;
                        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                        mapa2[++EnemigoY][EnemigoX].classList.add("Enemigo");
                    }
                }*/
            }
            
        break;
        case 2:
        //Izquierda        
            if (mapa2[EnemigoY][EnemigoX-1].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[EnemigoY][--EnemigoX].classList.add("Enemigo");
                /*console.log("x: "+EnemigoX-5+"y:"+EnemigoY);
                if(mapa2[EnemigoY][EnemigoX-5].classList.contains("Personaje")) {
                    while(radioDetecta<5){
                        console.log("te veo izquierda!");
                        EnemigoX--;
                        radioDetecta++;
                        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                        mapa2[EnemigoY][--EnemigoX].classList.add("Enemigo");
                    }
                }*/
            }
        break;
        case 3:
        //Derecha
            if (mapa2[EnemigoY][EnemigoX+1].classList.contains("camino")) {
                mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                mapa2[EnemigoY][++EnemigoX].classList.add("Enemigo");
                /*console.log("x: "+EnemigoX+5+"y:"+EnemigoY);
                if(mapa2[EnemigoY][EnemigoX+5].classList.contains("Personaje")) {
                    while(radioDetecta<5){
                        console.log("te veo derecha!");
                        EnemigoX++;
                        radioDetecta++;
                        mapa2[EnemigoY][EnemigoX].classList.remove("Enemigo");
                        mapa2[EnemigoY][EnemigoX++].classList.add("Enemigo");
                    }
                }*/
            }
        break;
    }
}

/*Crear mapa*/

function CrearMapa(nivel){ 
    //var contador = 0;
    var camino = false;
    var pos = 0;
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
                    var pil = new Array(2);
                    pil[0] = i;
                    pil[1] = j;
                    pilares[pos] = pil;
                    pos++;
                    //div.classList.add(pilares[contador]);
                    //div.dataset.posicion = contador;                    
                    //div.innerText = i + ":" + contador;
                    //contador++;
                    camino = false;
                }
            }
            if((PJY == i) && (PJX == j)) div.classList.add("Personaje");
            /*if(mapa2[EnemigoY][EnemigoX] == 0 && cont == 0){
                if((EnemigoX == j) && (EnemigoY == i)){
                    div.classList.add("Enemigo");
                }
            }else if(mapa2[EnemigoY][EnemigoX] == 1 || mapa2[EnemigoY][EnemigoX] == 2){
                EnemigoX = Math.floor(Math.random()*21);
                EnemigoY = Math.floor(Math.random()*10);
                cont = 0;
            }*/
            for(let k=0;k<nivel;k++){
                if(mapa2[EnemigoY][EnemigoX] == 0){
                    if((EnemigoX == j) && (EnemigoY == i)){
                        for(let k=0;k<nivel;k++){
                            div.classList.add("Enemigo");
                        }
                    }
                }else if(mapa2[EnemigoY][EnemigoX] == 1 || mapa2[EnemigoY][EnemigoX] == 2){
                    EnemigoX = Math.floor(Math.random()*21);
                    EnemigoY = Math.floor(Math.random()*10);
                }
            }
            mapa.appendChild(div);
            mapa2[i][j] = div;
        }
    }
}

function PJ(){
    /*Vida restante*/
    vidaP.classList.add("vida");
    document.querySelector(".hotbar").appendChild(vidaP);
    vidaP.innerHTML = "Vida: " + 5;
    /*Puntos*/
    PuntosP.classList.add("puntuacion");
    document.querySelector(".hotbar").appendChild(PuntosP);
    PuntosP.innerHTML = "Puntos: " + 0;
    
    /*Inventario*/
    TextoObjetos.classList.add("inventario");
    document.querySelector(".hotbar").appendChild(TextoObjetos);
    TextoObjetos.innerHTML = "Objetos: ";

    /*Objetos ObjetoP*/
    for(let i=0;i<3;i++){
        BarraInventario = document.createElement("div");        
        BarraInventario.className = "Objeto";
        BarraInventario.id = i;
        document.querySelector(".hotbar").appendChild(BarraInventario);
    }

}


function RellenaPilar(posY,posX,item){
    mapa2[posY][posX].classList.remove("pilar");
    mapa2[posY][posX+1].classList.remove("pilar");
    mapa2[posY][posX+2].classList.remove("pilar");
    mapa2[posY+1][posX].classList.remove("pilar");
    mapa2[posY+1][posX+1].classList.remove("pilar");
    mapa2[posY+1][posX+2].classList.remove("pilar");


    mapa2[posY][posX].classList.add(item);
    mapa2[posY][posX+1].classList.add(item);
    mapa2[posY][posX+2].classList.add(item);
    mapa2[posY+1][posX].classList.add(item);
    mapa2[posY+1][posX+1].classList.add(item);
    mapa2[posY+1][posX+2].classList.add(item);
}

function ObjetoPilar(posY,posX,item){
    mapa2[posY][posX].classList.add(item);
    mapa2[posY][posX+1].classList.add(item);
    mapa2[posY][posX+2].classList.add(item);
    mapa2[posY+1][posX].classList.add(item);
    mapa2[posY+1][posX+1].classList.add(item);
    mapa2[posY+1][posX+2].classList.add(item);
}

function ObjetoAleatorio(){
    var objeto = "";
    while(Objeto.length > 0){
        var x = Math.floor(Math.random()*Objeto.length);
        objeto = Objeto[x];        
        return objeto;
    }    
}