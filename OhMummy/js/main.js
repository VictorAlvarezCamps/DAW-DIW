/*Variables*/

/*Construcción del mapa*/
let dibujoMapa = document.querySelector(".mapa");
var mapa = [[2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2],
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
let nivel = 1;
let pantallaJuego;
let divNivel;

/*Enemigos*/
let enemigos = new Array();
Enemigo.x = 1;
Enemigo.y = 10;
let dir;
let vidaEnemigo = 1;
let cantidadEnemigos = 1;

/*Personaje*/
Jugador.x = 11; 
Jugador.y = 0;
let dirPJ;
let vida = 5;
let puntuacion = 0;

/*Pilares*/
let coordsEsquina;
let esquina = new Array(2);
let coordenadasEsquina = new Array(2);
let contadorPasos = 0;
let objetoAleatorio = "";
let buscar;

/*Inventario*/
let vidaP = document.createElement("div");
let PuntosP = document.createElement("div");
let TextoObjetos = document.createElement("div");
let BarraInventario = document.createElement("div");
let textoNivel = document.createElement("div");
let Objetos = document.getElementsByClassName(".Objeto");
let Objeto1 = 0;
let Objeto2 = 0;
let Objeto3 = 0;
let Objeto = ["Barril","BolaCanon","Canon",""];
let item = "";

/*main*/

window.onload = function(){
    crearMapa();
    setInterval(moverEnemigo, 400);
    setInterval(AbrirCerrar, 400);
}

/*Evento teclas personaje*/

window.addEventListener('keydown',moverJugador);

/*Pintar el mapa*/

function crearMapa(){
    for(let i=0;i<mapa.length;i++){
        for(let j=0;j<mapa[i].length;j++){
            let div = document.createElement("div");
            if (mapa[i][j] == 2)div.classList.add("fuera");
            else if (mapa[i][j] == 0)div.classList.add("camino");
            else if(mapa[i][j] == 1) div.classList.add("pilar");
            if((Jugador.y == i && Jugador.x == j)) div.classList.add("Personaje");
            //if(Enemigo.y == i && Enemigo.x == j)agregarEnemigo(Enemigo.x,Enemigo.y), div.classList.add("Enemigo");
            dibujoMapa.appendChild(div);
            mapa[i][j] = div;
        }
    }
    Inventario();
    ponerEnemigos(nivel);
    AbrirCerrar();
}

/*Puerta*/
function AbrirCerrar(){
    if(Objeto1 == 1){
        AbrirPuerta();
    }else{
        CerrarPuerta();
    }
}

function CerrarPuerta(){
    if(!mapa[0][11].classList.contains("Personaje")){
        mapa[0][11].classList.remove("camino");
        mapa[0][11].classList.remove("Pisadas");
        mapa[0][11].classList.add("fuera");
    }
}

function AbrirPuerta(){
    if(mapa[0][11].classList.contains("fuera")){
        mapa[0][11].classList.remove("fuera");  
        mapa[0][11].classList.add("camino"); 
    }
}

/*Creación de enemigos*/

/*Crear objeto enemigo*/
function Enemigo(x=0,y=0){
    this.x = x;
    this.y = y;
}

/*Devuelve un enemigo*/
function crearEnemigo(x,y){
    const enemigo = new Enemigo(x,y);
    return enemigo;
}

/*Agregar enemigos*/

function agregarEnemigo(x,y){
    enemigos.push(crearEnemigo(x,y));
}

function ponerEnemigos(num){    
    for(let i=0;i<num;i++){
        enemigos.push(crearEnemigo(Enemigo.x,Enemigo.y));
    }
}

/*Mata 1 enemigo*/
function matarEnemigo(){
    enemigos.pop();
}

/*Añade 1 enemigo*/
function recogerBomba(){
    document.getElementById("1").classList.remove("BolaCanon");
    agregarEnemigo(Enemigo.x,Enemigo.y);
    cantidadEnemigos++;
    Objeto2 = 0;
}

/*Mover enemigo*/

function moverEnemigo(){
    for(let i=0;i<enemigos.length;i++){
        //Arriba
        if(enemigos[i].y > Jugador.y){
            if(mapa[enemigos[i].y-1][enemigos[i].x].className.indexOf("camino") >=0){
                mapa[enemigos[i].y][enemigos[i].x].classList.remove("Enemigo");
                mapa[enemigos[i].y-1][enemigos[i].x].classList.add("Enemigo");
                enemigos[i].y--;
            }
            if(mapa[enemigos[i].y][enemigos[i].x].classList.contains("Personaje"))restarVida();
        }
        //izquierda
        if(enemigos[i].x > Jugador.x){
            if(mapa[enemigos[i].y][enemigos[i].x-1].className.indexOf("camino") >=0){
                mapa[enemigos[i].y][enemigos[i].x].classList.remove("Enemigo");
                mapa[enemigos[i].y][enemigos[i].x-1].classList.add("Enemigo");
                enemigos[i].x--;
            }
            if(mapa[enemigos[i].y][enemigos[i].x].classList.contains("Personaje"))restarVida();
        }
        //abajo
        if(enemigos[i].y < Jugador.y){
            if(mapa[enemigos[i].y+1][enemigos[i].x].className.indexOf("camino") >=0){
                mapa[enemigos[i].y][enemigos[i].x].classList.remove("Enemigo");
                mapa[enemigos[i].y+1][enemigos[i].x].classList.add("Enemigo");
                enemigos[i].y++;
            }
            if(mapa[enemigos[i].y][enemigos[i].x].classList.contains("Personaje"))restarVida();
        }
        //derecha
        if(enemigos[i].x < Jugador.x){
            if(mapa[enemigos[i].y][enemigos[i].x+1].className.indexOf("camino") >=0){
                mapa[enemigos[i].y][enemigos[i].x].classList.remove("Enemigo");
                mapa[enemigos[i].y][enemigos[i].x+1].classList.add("Enemigo");
                enemigos[i].x++;
            }
            if(mapa[enemigos[i].y][enemigos[i].x].classList.contains("Personaje"))restarVida();
        }
    }
}

/*Creación del personaje inicial*/

/*Crear objeto enemigo*/

function Jugador(x=0,y=0){
    this.x = x;
    this.y = y;
}

/*Devuelve un personaje*/

function crearJugador(x,y){
    const jugador = new Jugador(x,y);
    return jugador;
}

/*Mover jugador*/

function moverJugador(e){
    const tecla = e.keyCode;
    //Arriba
    if(tecla == 87)moverArriba();
    //izquierda
    if(tecla == 65)moverIzquierda();
    //abajo
    if(tecla == 83)moverAbajo();
    //derecha
    if(tecla == 68)moverDerecha();
    //matar enemigo (m)
    if(tecla ==77)document.getElementById("2").classList.remove("Canon"),matarEnemigo();
    //pasar nivel (n)
    if(tecla ==78)comprobarNivel();
}

function moverArriba(){
    if(Jugador.y >0){
        if(mapa[Jugador.y-1][Jugador.x].className.indexOf("camino") >=0){
            mapa[Jugador.y][Jugador.x].classList.add("Pisadas");
            mapa[Jugador.y][Jugador.x].classList.remove("Personaje");                    
            mapa[Jugador.y-1][Jugador.x].classList.add("Personaje");
            Jugador.y--;  
        }
        if(mapa[Jugador.y][Jugador.x].classList.contains("Enemigo"))restarVida();
        /*Comprobando el pilar*/
        comprobarPilar();
    }  
}
function moverIzquierda(){
    if(mapa[Jugador.y][Jugador.x-1].className.indexOf("camino") >=0){
        mapa[Jugador.y][Jugador.x].classList.add("Pisadas");
        mapa[Jugador.y][Jugador.x].classList.remove("Personaje");        
        mapa[Jugador.y][Jugador.x-1].classList.add("Personaje");
        Jugador.x--;
    }
    if(mapa[Jugador.y][Jugador.x].classList.contains("Enemigo"))restarVida();
    /*Comprobando el pilar*/
    comprobarPilar();   
}
function moverAbajo(){
    if(mapa[Jugador.y+1][Jugador.x].className.indexOf("camino") >=0){
        mapa[Jugador.y][Jugador.x].classList.add("Pisadas");
        mapa[Jugador.y][Jugador.x].classList.remove("Personaje");        
        mapa[Jugador.y+1][Jugador.x].classList.add("Personaje");  
        Jugador.y++;
    }          
    if(mapa[Jugador.y][Jugador.x].classList.contains("Enemigo"))restarVida();
    /*Comprobando el pilar*/
    comprobarPilar();  
}
function moverDerecha(){
    if(mapa[Jugador.y][Jugador.x+1].className.indexOf("camino") >=0){
        mapa[Jugador.y][Jugador.x].classList.add("Pisadas");
        mapa[Jugador.y][Jugador.x].classList.remove("Personaje");       
        mapa[Jugador.y][Jugador.x+1].classList.add("Personaje");
        Jugador.x++;
    }
    if(mapa[Jugador.y][Jugador.x].classList.contains("Enemigo"))restarVida();
    /*Comprobando el pilar*/
    comprobarPilar();  
}

/*Restar vida*/

function restarVida(){
    if(vida>0){
        vida -= 1;
        document.querySelector(".vida").innerHTML = "Vida: "+ vida;
    }else if(vida==0){
        vida = 0;
        alert("Has perdido!, pulsa F5 para volver a jugar");
    }    
}

/*Pilares*/

/*Comprobar el pilar*/
function comprobarPilar(){
    contadorPasos = 0;
    if(Jugador.y >0)if(mapa[Jugador.y-1][Jugador.x].className.indexOf("pilar") >= 0)comprobar(Jugador.y-1,Jugador.x);
    if(mapa[Jugador.y+1][Jugador.x].className.indexOf("pilar") >= 0)comprobar(Jugador.y+1,Jugador.x);
    if(mapa[Jugador.y][Jugador.x-1].className.indexOf("pilar") >= 0)comprobar(Jugador.y,Jugador.x-1);
    if(mapa[Jugador.y][Jugador.x+1].className.indexOf("pilar") >= 0)comprobar(Jugador.y,Jugador.x+1);
}

function comprobar(y,x){
    esquina = comprobarEsquina(y,x);
    coordenadasEsquina[0] = esquina[0];
    coordenadasEsquina[1] = esquina[1];
    esquina[0] -= 1;
    esquina[1] -= 1;
    comprobarPasos(esquina[1],esquina[0],coordenadasEsquina[1],coordenadasEsquina[0]);
}

/*Comprobar la esquina*/
function comprobarEsquina(y,x){
    coordsEsquina = new Array(2);
    if(!mapa[y-1][x].classList.contains("camino")) y--;
    buscar = false;
    while(!buscar)if(!mapa[y][x-1].classList.contains("camino"))x--;else buscar = true;
    coordsEsquina[0]=y;
    coordsEsquina[1]=x;
    return coordsEsquina;
}

/*Comprobar los pasos al rodear pilar*/

function comprobarPasos(x,y,colorearX,colorearY){
    //y+=1;
    for(let i=0;i<5;i++){        
        for(let j=0;j<4;j++){
            if(mapa[y][x].classList.contains("Pisadas")){      
                contadorPasos++;                
                if(contadorPasos == 14){  
                    objetoAleatorio = devuelveAleatorio();
                    if(objetoAleatorio == "Barril" && Objeto1 == 0)objetoPilar(colorearY,colorearX,objetoAleatorio),comprobarInventario(objetoAleatorio);
                    if(objetoAleatorio == "BolaCanon" && Objeto1 == 0)objetoPilar(colorearY,colorearX,objetoAleatorio),comprobarInventario(objetoAleatorio);
                    if(objetoAleatorio == "Canon" && Objeto1 == 0)objetoPilar(colorearY,colorearX,objetoAleatorio),comprobarInventario(objetoAleatorio);
                    sumarPuntos(200);
                    contadorPasos=0;
                }
            }
            y+=1;    
        }
        x+=1;
        y-=4;
    }
    contadorPasos=0;    
}

/*Comprobar que el objeto no esté en el inventario*/
function comprobarInventario(objeto){    
    if(objeto=="Barril")if(!document.getElementById("0").classList.contains("Barril"))document.getElementById("0").classList.add("Barril"),Objeto1 = 1;
    if(objeto=="BolaCanon")if(!document.getElementById("1").classList.contains("BolaCanon"))document.getElementById("1").classList.add("BolaCanon"),Objeto2 = 1,recogerBomba();
    if(objeto=="Canon")if(!document.getElementById("2").classList.contains("Canon"))document.getElementById("2").classList.add("Canon"),Objeto3 = 1;
}


/*Objeto aleatorio para el pilar*/
function devuelveAleatorio(){
    var objeto = "";
    while(Objeto.length > 0){
        var x = Math.floor(Math.random()*Objeto.length);
        objeto = Objeto.splice(x,1);        
        return objeto;
    }    
}

/*Rellenar pilar con objeto*/
function objetoPilar(y,x,item){
    mapa[y][x].classList.remove("pilar");
    mapa[y][x+1].classList.remove("pilar");
    mapa[y][x+2].classList.remove("pilar");
    mapa[y+1][x].classList.remove("pilar");
    mapa[y+1][x+1].classList.remove("pilar");
    mapa[y+1][x+2].classList.remove("pilar");

    mapa[y][x].classList.add(item);
    mapa[y][x+1].classList.add(item);
    mapa[y][x+2].classList.add(item);
    mapa[y+1][x].classList.add(item);
    mapa[y+1][x+1].classList.add(item);
    mapa[y+1][x+2].classList.add(item);
}

/*Inventario*/

/*Pintar inventario*/
function Inventario(){
    if (nivel <= 1) {
        /*Vida restante*/
        vidaP.classList.add("vida");
        document.querySelector(".hotbar").appendChild(vidaP);
        vidaP.innerHTML = "Vida: " + 5;
        
        /*Puntos*/
        PuntosP.classList.add("puntuacion");
        document.querySelector(".hotbar").appendChild(PuntosP);
        PuntosP.innerHTML = "Puntos: " + 0;
    
        /*Nivel*/    
        textoNivel.classList.add("nivel");
        document.querySelector(".hotbar").appendChild(textoNivel);
        textoNivel.innerHTML = "Nivel: "+nivel;
        
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
}

/*Puntuación*/
function sumarPuntos(puntos){
    puntuacion += puntos;
    document.querySelector(".puntuacion").innerHTML = "Puntos: "+ puntuacion;
}

/*Niveles*/

/*Nivel*/
function subirNivel(level){
    nivel += level;
    document.querySelector(".nivel").innerHTML = "Nivel: "+ nivel;
}

/*Comprobar nivel completado*/ 
function comprobarNivel(){
    if(mapa[0][11].classList.contains("Personaje")){
        //Si tengo el barril que es la llave, paso de nivel
        if(Objeto1==1)cambiarNivel();
    }
}

/*Función para reiniciar variables eliminar mapa y poner uno nuevo*/
function cambiarNivel(){
    limpiarInventario();
    reiniciarVariables();
    subirNivel(1);
    crearMapa();
    cantidadEnemigos = cantidadEnemigos + 1;
    for(let i=0;i<cantidadEnemigos;i++){
        agregarEnemigo(Enemigo.x,Enemigo.y);
    }
}

/*Quitar todos los objetos del inventario*/
function limpiarInventario(){
    if(document.getElementById("0").classList.contains("Barril"))document.getElementById("0").classList.remove("Barril"),Objeto1 = 0;
    if(document.getElementById("1").classList.contains("BolaCanon"))document.getElementById("1").classList.remove("BolaCanon"),Objeto2 = 0;
    if(document.getElementById("2").classList.contains("Canon"))document.getElementById("2").classList.remove("Canon"),Objeto3 = 0;
}

/*Borrar todo el mapa*/
function borrarMapa(){
    const padre = document.getElementById("PantallaJuego");
    const hijo = document.querySelector(".mapa");
    padre.removeChild(hijo);
}

/*Reiniciar variables*/
function reiniciarVariables(){
    /*Borramos el mapa*/
    borrarMapa();

    /*Creamos nuevo nivel*/
    pantallaJuego = document.getElementById("PantallaJuego");
    divNivel = document.createElement("div");
    divNivel.classList.add("mapa");
    pantallaJuego.appendChild(divNivel);

    /*Construcción del mapa*/
    dibujoMapa = document.querySelector(".mapa");
    mapa = [[2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2],
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

    /*Enemigos*/
    Enemigo.x = 1;
    Enemigo.y = 10;
    dir;
    vidaEnemigo = 1;

    /*Personaje*/
    Jugador.x = 11; 
    Jugador.y = 0;
    dirPJ;

    /*Pilares*/
    coordsEsquina = new Array(2);
    esquina = new Array(2);
    coordenadasEsquina = new Array(2);
    buscar = false;
    contadorPasos = 0;
    objetoAleatorio = "";

    /*Inventario*/
    vidaP = document.createElement("div");
    PuntosP = document.createElement("div");
    TextoObjetos = document.createElement("div");
    BarraInventario = document.createElement("div");
    if(nivel <= 1)textoNivel = document.createElement("div");
    Objetos = document.getElementsByClassName(".Objeto");
    Objeto1 = 0;
    Objeto2 = 0;
    Objeto3 = 0;
    Objeto = ["Barril","BolaCanon","Canon",""];
    item = "";
}