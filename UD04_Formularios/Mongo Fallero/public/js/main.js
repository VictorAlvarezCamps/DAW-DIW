/*Variables*/

/*JSON*/
const url = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
let fallas;

/*Menu*/
let num2 = 0;

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
let divRating;
let formRating;

/*Mapa ubicación*/
let contenedorMapa;
let borrarContenedor;
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

    //Iconos puntuacion
    divRating = document.createElement("div");
    divRating.classList.add("cuadroEstrellas");

    //form para enviar la puntuacion con las estrellas
    formRating = document.createElement("form");
    formRating.setAttribute('method',"post");
    //formRating.setAttribute('action',"/puntuaciones");


    for(let i=0;i<5;i++){
        //Iconos 
        icon = document.createElement("div");
        icon.type = "radio";
        icon.name = "rate";
        icon.id = i+1;
        icon.classList.add("ratingSquare");
        formRating.appendChild(icon);
    }

    divRating.appendChild(formRating);
    cuadro.appendChild(divRating);

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
    let contenedorMapa = document.createElement("div");
    contenedorMapa.id = "ContenedorMapa";
    document.body.appendChild(contenedorMapa);
    
    //contenedorMapa.style.display = "block";
    let mapa2 = document.createElement("div")
    mapa2.id = "Mapa";

    contenedorMapa.appendChild(mapa2);    

    //Añadimos un aspa al contenedor para poder cerrarlo
    aspa = document.createElement("img");
    aspa.classList.add("aspaVentanaUbicacion");
    aspa.id = "aspa";
    aspa.addEventListener("click",cerrarUbicacion);

    contenedorMapa.appendChild(aspa);

    nombreFalla = document.createElement("h1");
    nombreFalla.innerText = "Falla: "+fallas.features[this.dataset.num].properties.nombre;

    //Obtenemos las coordenadas de la falla seleccionada
    let coordenadas = fallas.features[this.dataset.num].geometry.coordinates;

    coord1 = parseFloat(coordenadas[0]);
    coord2 = parseFloat(coordenadas[1]);

    let firstProjection = '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs';

    let secondProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

    let iarCoordinate = [coord1, coord2];

    coordenadas = proj4(firstProjection, secondProjection, iarCoordinate);

    var mapa = L.map('Mapa').setView([coordenadas[1], coordenadas[0]], 17);

    let tilerMapUrl = 'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=FeZF25xvZUuP463NS59g';
  
    L.tileLayer(tilerMapUrl, {
      attribution: 'OSM',
    }).addTo(mapa);
  
    L.marker(coordenadas).addTo(mapa);
  
    var punto = new L.Marker([coordenadas[1], coordenadas[0]]);
    punto.addTo(mapa);
    punto.bindPopup(nombreFalla).openPopup();    
    
    
}

/*Funcion para cerrar la ventana de ubicación*/
function cerrarUbicacion(){
    //document.getElementById("ContenedorMapa").style.display = "none";
    document.body.removeChild(document.getElementById("ContenedorMapa"));
    //console.log(document.querySelector("body").children);


    
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


function busqueda(a){
    //let t = document.getElementById("Seccion").value;
    return a.properties.seccion.startsWith(seleccionado);    
}




/*Función que cargará las fallas según los filtros puestos*/
function cargarFallas(){

    document.getElementById("resultado").innerText = "";

    /*Construimos la tabla*/
    tabla = document.createElement("ul");
    tabla.classList.add("Tabla");

    //Función que hara de filtro
    const r = fallas.features.filter(busqueda);
    
    

    if(seleccionado != "Todas"){

    //Recorremos cada falla y según la sección que se ha seleccionado se mostrará las fallas de esa sección
        r.forEach(f =>{

            desde = document.getElementById("desde").value;
            hasta = document.getElementById("hasta").value; 
    
            if(desde == "" && hasta == ""){        
                Fallas(f);
            }else if(desde>=1821 && hasta<=2017){
                Fallas(f);
            }
        });

    }else{

        //Cogemos los valores desde una fecha a otra
        desde = parseInt(document.getElementById("desde").value);
        hasta = parseInt(document.getElementById("hasta").value); 
        
        if(desde == "" && hasta == ""){        
            fallas.features.forEach(falla => {
                Fallas(falla);                        
            });
        }else if(desde>=1821 && hasta<=2017){
            fallas.features.forEach(falla => {
                Fallas(falla);                        
            });
        }

    }   

    //Pasamos la tabla al contenedor grande
    document.getElementById("resultado").appendChild(tabla);

    document.getElementById("desde").value = "";
    document.getElementById("hasta").value = ""; 

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

function abrirCerrarMenu(){
    let header = document.getElementById("header");
    

    if(num2 == 0){
        header.classList.remove("cerrarMenu");
        header.classList.add("abrirMenu");        
        num2=1;
    }else if(num2 == 1){
        header.classList.remove("abrirMenu");
        header.classList.add("cerrarMenu");
        num2=0;
    }

}

/*Función principal*/
function init(){    
    parseJSON();
    document.getElementById("header").classList.add("cerrarMenu");
    document.getElementById("Principal").addEventListener("click", cargarFiltros);
    document.getElementById("Infantil").addEventListener("click", cargarFiltros);
    document.getElementById("Seccion").addEventListener("click",recogerSeleccionado);   
    document.getElementById("btnBuscar").addEventListener("click",cargarFallas);
    document.getElementById("buttonMenu").addEventListener("click",abrirCerrarMenu);
    //document.getElementById("Seccion").addEventListener("change",cargarFallas);  
}

/*Llamamos a init al cargar la página*/
window.onload = init;