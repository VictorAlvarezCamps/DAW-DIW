export default class Barra{


    constructor(cantidad){
    
        this.cantidad = cantidad;    
    
    }

    CrearBarra(){

        var CuadroBarra = document.createElement("div");

        CuadroBarra.classList.add("CuadroBarra");

        document.querySelector(".hotbar").appendChild(CuadroBarra); 

        for(let filas=0;filas<5;filas++){               
                 
                
                var Objeto = document.createElement("div");

                Objeto.classList.add("Objeto");

                document.querySelector(".CuadroBarra").appendChild(Objeto);
        }   
    }

    
}   