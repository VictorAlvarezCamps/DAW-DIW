/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datos from './Datos.js';

/*VARIABLES*/

function init() {

    ReactDOM.render(<Pokedex />, document.getElementById('root'))

}

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: [{}],
            datos: [],
        };
    }

    /*disminuirIDPokemon = () => {
        if(listaTodosLosPokemon.id - 1 === 0){ 
            this.setState({id: listaTodosLosPokemon.id = 1 });
        }else{
            this.setState({id: listaTodosLosPokemon.id - 1 });
        }
    }
    aumentarIDPokemon = () => {
        if(listaTodosLosPokemon.id + 1 === 721){
            this.setState({id: listaTodosLosPokemon.id = 721 });
        }else{
            this.setState({id: listaTodosLosPokemon.id + 1});
        }
    }*/

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
                <img className="titulo"></img>               

                <input type="text" className="Buscador"></input>
                <input type="button" className="btnEnviar" value="Buscar"></input>

                <div className="ListaPokemon">
                    {this.state.datos.map(pokemon => {
                        return (
                            <Datos id={pokemon.id} img={pokemon.sprites.front_default}  nom={pokemon.name} />
                        )
                    })}
                </div>
            </div>
        );

    }

}

window.onload = init;