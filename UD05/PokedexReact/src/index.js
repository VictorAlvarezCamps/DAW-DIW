/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datos from './Datos.js';
import InfoPokemon from './infoPokemon';

/*VARIABLES*/

function init() {

    ReactDOM.render(<Pokedex />, document.getElementById('root'))

}

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: []
        };
    }

    componentDidMount = async () => {

        let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

        const result1 = await fetch(url);

        const pokemons = await result1.json();

        const todosPokemons = pokemons.results.map( async datos => {

            const url2 = await fetch(datos.url);

            const datosPokemon = await url2.json();      

            return datosPokemon;
            
            
        });

        Promise.all(todosPokemons).then(pokemons => {
            this.setState({
                datos: pokemons
            })
        })       

    }

    render() {

        return (
            <div className="contenido">
                <div className="header">
                    <img className="titulo"></img>
                    <div className="porTipos">
                        <div className="Fuego"></div>
                        <div className="Agua"></div>
                        <div className="Planta"></div>
                        <div className="Electrico"></div>
                        <div className="Hielo"></div>
                        <div className="Lucha"></div>
                        <div className="Veneno"></div>
                        <div className="Tierra"></div>
                        <div className="Volador"></div>
                        <div className="Psiquico"></div>
                        <div className="Bicho"></div>
                        <div className="Roca"></div>
                        <div className="Fantasma"></div>
                        <div className="Dragon"></div>
                        <div className="Siniestro"></div>
                        <div className="Acero"></div>
                        <div className="Hada"></div>
                    </div>
                    
                    <input type="text" placeholder="Busca un pokémon aquí!"></input>
                </div>   

                <div className="ListaPokemon">
                        {this.state.datos.map(pokemon => {
                            return (
                                <Datos id={pokemon.id} img={pokemon.sprites.front_default}  nom={pokemon.name} />
                            )
                        })}               
                </div>
                
                <InfoPokemon/>
            </div>
        );

    }

}

window.onload = init;