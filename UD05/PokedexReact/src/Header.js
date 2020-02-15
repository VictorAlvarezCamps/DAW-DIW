import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
   

    render(){
        return(
            <div className="header">
                    <img className="titulo" ></img>
                    <div className="porTipos">
                        <div className="Fuego" data-tipo="Fuego" ></div>
                        <div className="Agua" data-tipo="Agua"></div>
                        <div className="Planta" data-tipo="Planta"></div>
                        <div className="Electrico" data-tipo="Electrico"></div>
                        <div className="Hielo" data-tipo="Hielo"></div>
                        <div className="Lucha" data-tipo="Lucha"></div>
                        <div className="Veneno" data-tipo="Veneno"></div>
                        <div className="Tierra" data-tipo="Tierra"></div>
                        <div className="Volador" data-tipo="Volador"></div>
                        <div className="Psiquico" data-tipo="Psiquico"></div>
                        <div className="Bicho" data-tipo="Bicho"></div>
                        <div className="Roca" data-tipo="Roca"></div>
                        <div className="Fantasma" data-tipo="Fantasma"></div>
                        <div className="Dragon" data-tipo="Dragon"></div>
                        <div className="Siniestro" data-tipo="Siniestro"></div>
                        <div className="Acero" data-tipo="Acero"></div>
                        <div className="Hada" data-tipo="Hada"></div>
                        <div className="Todos" data-tipo="Todos">Todos</div>
                    </div>
                    
                    <input type="text" id="filter" placeholder="Busca un pokémon aquí!"></input>
                </div>  
        );
    }
}

export default Header;