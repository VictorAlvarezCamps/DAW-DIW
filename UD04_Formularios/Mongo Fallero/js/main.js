/*Variables*/

/*JSON*/
const url = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
let fallas;

/*Filtros*/
let SeccionesPrincipal = new Array();
let SeccionesInfantil = new Array();
let s;
let option;
let seleccionado;

/*Tabla fallas*/
let cuadro;
let fila;
let img;
let textoVoto;
let icon;
let tabla;
let btn;
let cont = 0;

/*Mapa ubicación*/
let contenedorMapa;
let aspa;
let coord1;
let coord2;

/*Función que construye cada tarjeta de falla*/
function Fallas(falla){
    //Contenedor de la falla
    cuadro = document.createElement("div");
    cuadro.classList.add("Falla");    
    
    //Texto de la falla   
    fila = document.createElement("li");
    fila.innerText = falla.properties.nombre;
    fila.classList.add("liSquare");
    cuadro.appendChild(fila);

    //Boceto de la falla
    img = document.createElement("img");
    img.src = falla.properties.boceto;
    img.classList.add("Squareimg");    
    cuadro.appendChild(img);

    //Valoración de la falla

    //Texto votar
    textoVoto = document.createElement("h3");
    textoVoto.innerText = "Vota!";
    textoVoto.classList.add("ratingTextSquare");
    cuadro.appendChild(textoVoto);

    for(let i=0;i<5;i++){
        //Iconos 
        icon = document.createElement("input");
        icon.type = "radio";
        icon.name = "rate";
        icon.id = i+1;
        icon.classList.add("ratingSquare"+i);
        cuadro.appendChild(icon);
    }

    //Botón de ubicación

    btn = document.createElement("button");
    btn.innerText = "Ubicación";
    btn.classList.add("btnSquare");
    btn.dataset.num = cont;
    cont++;
    btn.addEventListener("click",mostrarUbicacion);
    cuadro.appendChild(btn);
    
    //Unimos todo a la tabla
    tabla.appendChild(cuadro);   
}

/*Función que abrira un div con el mapa y la Ubicación*/
function mostrarUbicacion(){
    
    //Construimos un div (contenedor) para mostrar la Ubicación del mapa y info
    contenedorMapa = document.getElementById("ContenedorMapa");

    //Mostramos el contenedor
    contenedorMapa.style.display = "block";

    //Añadimos un aspa al contenedor para poder cerrarlo
    aspa = document.createElement("img");
    aspa.classList.add("aspaVentanaUbicacion");
    aspa.id = "aspa";
    aspa.addEventListener("click",cerrarUbicacion);

    //Obtenemos las coordenadas de la falla seleccionada
    coord1 = fallas.features[this.dataset.num].geometry.coordinates[0];
    coord2 = fallas.features[this.dataset.num].geometry.coordinates[1];

    //console.log(coord1);
    //console.log(coord2);

    //Añadimos la latitud y longitud
    L.marker([39.462140, -0.396650]).addTo(map);
    //L.marker([lat, long]).addTo(map);

     // Creating a marker
     var marker = L.marker([coord1, coord2]);
         
     // Adding marker to the map
     marker.addTo(map);


    //Añadimos info de la falla
    divFalla = document.createElement("div");
    divFalla.id = "infoFalla";
    divFalla.classList.add("divTextoFalla");
    
    nombreFalla = document.createElement("h1");
    nombreFalla.classList.add("textoFalla");
    nombreFalla.innerText = "Falla: "+fallas.features[this.dataset.num].properties.nombre;

    //Unimos todo
    contenedorMapa.appendChild(aspa);
    contenedorMapa.appendChild(divFalla);
    divFalla.appendChild(nombreFalla);
    
}

/*Funcion para cerrar la ventana de ubicación*/
function cerrarUbicacion(){
    document.getElementById("resultado").children[0].style.display = "none";    
    contenedorMapa.removeChild(contenedorMapa.children[1]);
    contenedorMapa.removeChild(contenedorMapa.children[1]);
}

/*Función para guardarnos las secciones según sea principal o infantil*/
function cargarSecciones(){

    //Recorremos cada falla
    fallas.features.forEach(falla => {

        //Guardamos las secciones principales
        if(SeccionesPrincipal.indexOf(falla.properties.seccion) < 0) {
            SeccionesPrincipal.push(falla.properties.seccion);
        }

        //Guardamos las secciones infantiles
        if(SeccionesInfantil.indexOf(falla.properties.seccion_i) < 0){
            SeccionesInfantil.push(falla.properties.seccion_i);
        }

    });

    //Ordenamos las secciones principales y infantiles
    SeccionesPrincipal.sort();
    SeccionesInfantil.sort();
}

/*Función para cargar las secciones infantiles*/
function cargarSeccionesInfantil() {
    var op;
    SeccionesInfantil.forEach(opcion => {
        op = document.createElement("option");
        op.innerText = opcion;
        op.value = opcion;
        op.classList.add("select");
        document.getElementById("Seccion").appendChild(op);
    });
}

/*Función para cargar las secciones principales*/
function cargarSeccionesPrincipal() {
    var op;
    SeccionesPrincipal.forEach(opcion => {
        op = document.createElement("option");
        op.innerText = opcion;
        op.value = opcion;
        document.getElementById("Seccion").appendChild(op);
    });
}

/*Función para borrar todas las secciones*/
function borrarSecciones(){
    document.getElementById("Seccion").innerHTML = "";
    var opcion = document.createElement("option");
    opcion.innerText = "Todas";
    document.getElementById("Seccion").appendChild(opcion);
}

/*Función para saber la opción recogida del select*/
function getSelectedOption(sel) {
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}

/*Función para recoger la opción del select*/
function recogerSeleccionado(){
    var opt = getSelectedOption(document.getElementById("Seccion"));

    seleccionado = opt.value;
    //console.log( opt.value );
    //console.log( opt.text );
}

/*Función para filtros de la tabla*/
function cargarFiltros() {

    //Borrar secciones
    borrarSecciones();

    //Comprobar si está seleccionado el radio de principal/infantil    
    if(document.getElementById("Principal").checked) cargarSeccionesPrincipal();
    else cargarSeccionesInfantil();

    //Recogemos la info de las secciones
    cargarSecciones();  
       
}

/*Función que cargará las fallas según los filtros puestos*/
function cargarFallas(){

    document.getElementById("resultado").innerText = "";

    /*Construimos la tabla*/
    tabla = document.createElement("ul");
    tabla.classList.add("Tabla");

    //Recorremos cada falla y según la sección que se ha seleccionado se mostrará las fallas de esa sección
    fallas.features.forEach(falla => {

        //Cogemos la seccion principal e infantil de la falla que recorremos
        var s = falla.properties.seccion;
        var seccionI = falla.properties.seccion_i;
        
        //Cogemos los valores desde una fecha a otra
        desde = document.getElementById("desde").value;
        hasta = document.getElementById("hasta").value;

        console.log(desde);
        console.log(hasta);

        //ifs anidados para fechas y secciones (coger la fecha mas grande y más pequeña)
        /*if(desde>=1800 && hasta<=2020) {
            if(s == seleccionado || seccionI == seleccionado){
                Fallas(falla);
            }
        }*/

        //If si está todo vacío sin filtros

        if("Todas" == seleccionado){
                Fallas(falla);
        }
                    
    });

    //Pasamos la tabla al contenedor grande
    document.getElementById("resultado").appendChild(tabla);   

}

/*Función para cargar sin filtros la tabla*/
function seccionPrincipal(){

    //Recogemos la info de las secciones
    cargarSecciones();

    //Ponemos la sección principal
    cargarSeccionesPrincipal();

    //Creamos la tabla para mostrar la sección principal sin filtros
    tabla = document.createElement("ul");
    tabla.classList.add("Tabla");

    //Recorremos cada falla y se la pasamos al método para construir la tabla
    fallas.features.forEach(falla => {
        //Mostramos las fallas
        Fallas(falla);
                    
    });

    //Pasamos la tabla al contenedor grande
    document.getElementById("resultado").appendChild(tabla);
}

/*Función para recoger el JSON*/
function parseJSON(){
    fetch(url).then(function(e) {
        return e.json();
    }).then(function(fallasJSON) {
        fallas = fallasJSON;
        //Cargamos la sección principal
        seccionPrincipal();
    });
}

/*Función principal*/
function init(){
    parseJSON();
    document.getElementById("Principal").addEventListener("click", cargarFiltros);
    document.getElementById("Infantil").addEventListener("click", cargarFiltros);
    document.getElementById("Seccion").addEventListener("click",recogerSeleccionado);   
    document.getElementById("btnBuscar").addEventListener("click",cargarFallas);
}

/*Llamamos a init al cargar la página*/
window.onload = init;