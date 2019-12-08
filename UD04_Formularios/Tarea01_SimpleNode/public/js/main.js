//Función que pasa el texto a mayúsculas de el input text
function mayus(){
    document.querySelector('input[type="text"]').value = document.querySelector('input[type="text"]').value.toUpperCase();
}

//Función que hace de filtro
function busqueda(a){
    let t = document.querySelector('input[type="text"]').value;
    return a.properties.descripcion.startsWith(t);
}

//Función para mostrar el JSON recibido de los datos abiertos
function f(){

    fetch("http://mapas.valencia.es/lanzadera/opendata/wifi/JSON").then(function(response) {
        return response.json();
    }).then(function(myJson) {

        const r = myJson.features.filter(busqueda);

        let tabla = document.createElement("ul");

        let cont=1;

        r.forEach(pWifi => {
            let fila = document.createElement("li");
            fila.innerText = "Punto Wifi: "+cont+" - Descripción: "+pWifi.properties.descripcion+" - Coordenadas: "+pWifi.geometry.coordinates;
            tabla.appendChild(fila);
            cont++;
        });

        document.querySelector(".resultado").innerHTML="";
        document.querySelector(".resultado").appendChild(tabla);

    });
}

//Función inicial que se ejecutará al cargar la ventana
function init(){
    document.querySelector('input[type="button"]').addEventListener("click",f);
    document.querySelector('input[type="text"]').addEventListener("input",mayus);
}

window.onload = init;