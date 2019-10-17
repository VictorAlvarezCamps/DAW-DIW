export default class Mapa{

    CrearMapa(mapa){
    
        for(let filas=0;filas<15;filas++){
            for(let columnas=0;columnas<21;columnas++){            
                var Div = document.createElement("div");
                if(mapa[filas][columnas]==0){
                    Div.classList.add("camino");
                }else if(mapa[filas][columnas]==1){
                    Div.classList.add("pilar");
                }else if(mapa[filas][columnas]==2){
                    Div.classList.add("camino");
                }
                document.querySelector(".mapa").appendChild(Div);
                
            }            
        }    
    }

    GetCoordsXYMapa(mapa,x,y){

        var c = 0; 

        c = mapa[x][y];
        
        return c;
    }

    SetCoordsXYMapa(mapa,x,y){

        var c;

        c = mapa[x][y];

        return c;

    }
    
}