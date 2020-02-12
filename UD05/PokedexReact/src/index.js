/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Datos from './Datos.js';

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
            datos: [{}],
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
        
        console.log(this.state.datos);

        return (
            <div className="ListaPokemon">
                {this.state.datos.map(pokemon => {
                    return (
                        <div className="Pokemon">
                            <img className="imagenPokemon" src={pokemon.sprites}></img>
                            <h1 className="nombrePokemon">{pokemon.name}</h1>
                        </div>
                    )
                })}
            </div>
        );

        /*return[
            <div className="Datos">                
                <button onClick={this.disminuirIDPokemon} className="btnAtras">-</button>
                    <Datos img={this.props.imagen}  nom={this.props.nombre} />
                <button onClick={this.aumentarIDPokemon} className="btnAdelante">+</button>
            </div>
        ];*/

    }

}

window.onload = init;