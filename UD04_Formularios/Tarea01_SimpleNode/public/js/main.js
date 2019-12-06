function f(){

    fetch("http://mapas.valencia.es/lanzadera/opendata/wifi/JSON").then(function(response) {
        return response.json();
    }).then(function(myJson) {

        let tabla = document.createElement("ul");

        console.log(myJson);

        let r = myJson.features;

        for(let i = 1; i < r.length; i++) {  
            let fila = document.createElement("li");
            fila.innerText = "Punto Wifi: "+i+" - Descripción: "+myJson.features[i].properties.descripcion+" - Coordenadas: "+myJson.features[i].geometry.coordinates;
            tabla.appendChild(fila);
        }

        document.querySelector(".resultado").innerHTML="";
        document.querySelector(".resultado").appendChild(tabla);

    });
}

function init(){
    document.querySelector('input[type="button"]').addEventListener("click",f);
}

window.onload = init;