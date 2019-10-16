export default class Mapa{    

    /*Pos [0][11] Inicio Aventurero*/

    CrearMapa(){

        let mapa = [[1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    
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

    /*SetCoordsMapa(x,y){

        for(let filas=0;filas<15;filas++){
            for(let columnas=0;columnas<21;columnas++){             
                mapa[x][y];          
            }            
        }
    }*/
    
}