/*Importar clases*/
import Mapa from './Mapa.js';
import Aventurero from './Aventurero.js';
import Llave from './Llave.js';
import Momia from './Momia.js';
import Pergamino from './Pergamino.js';
import Urna from './Urna.js';

/*Variables*/
let m;


window.onload = function(){

    m = new Mapa();

    m.CrearMapa();

};


