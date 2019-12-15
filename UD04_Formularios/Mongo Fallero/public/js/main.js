/*Variables*/

/*JSON*/
const url = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

/*Seccion busqueda y contenido fallas*/
let sect,option,PI,s,section,fecha,desde,hasta,tabla,fila,img,btn;

//let JS={};

function Fallas(falla){
    fila = document.createElement("li");
    fila.innerText = "Nombre "+falla.properties.nombre;
    img = document.createElement("img");
    img.src = falla.properties.boceto;
    btn = document.createElement("button");
    btn.innerText = "Ubicación";           
    tabla.appendChild(img);
    tabla.appendChild(fila);
    tabla.appendChild(btn);
}

function filterSection(falla,seccion){
    return falla.properties.seccion.startsWith(seccion);
}


function seccion(JS){
    sect = document.getElementById("Seccion");

    JS.features.forEach(s => {
        option = document.createElement("option");
        option.innerText = s.properties.seccion;
        option.dataset.opt = s.properties.seccion;
        sect.appendChild(option);
    });

    option.innerText = "Todas";
}

function parseJSON(e){
    fetch(url).then(function(e) {
        return e.json();
    }).then(function(falla) {

        seccion(falla);

        tabla = document.createElement("ul"); 

        falla.features.forEach(f => {            

            s = f.properties.seccion;

            fecha = f.properties.anyo_fundacion;

            if(e.value != undefined)section = e.value;

            const r = filterSection(f,section);

            desde = document.getElementById("desde").value;
            hasta = document.getElementById("hasta").value;

            //if(fecha >= desde && fecha <= hasta)

            //Fallas(falla);

            if(r==true || section == "Todas"){               
                (r == s)?Fallas(f):(section == "Todas")?Fallas(f):Fallas(f);
            }

        });

        document.getElementById("resultado").innerHTML="";
        document.getElementById("resultado").appendChild(tabla);                   

    });
}

window.onload = parseJSON;