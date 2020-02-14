/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Datos from './Datos.js';
import InfoPokemon from './infoPokemon';

/*VARIABLES*/
let valorTexto;

function init() {

    ReactDOM.render(<Pokedex />, document.getElementById('root'))

    document.getElementById("filter").addEventListener("keypress",recogerValor);


}

function recogerValor(e){
    //console.log(e.key);
    valorTexto = e.key;
}

const filtrar = (texto) => {
    return this.state.datos.filter(data => {
        return data.toLowerCase().indexOf(texto.toLowerCase()) > -1;
    });
}   

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: [],
            elegido: {}
        }
        this.handleClick = this.handleClick.bind(this);
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

    handleClick = (e,data) =>{

        this.state.datos.map(pokemon => {
            if(data === pokemon.id){
                this.setState({elegido:pokemon});
            }
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
                    
                    <input type="text" id="filter" placeholder="Busca un pokémon aquí!"></input>
                </div>   

                <div className="ListaPokemon">
                        {this.state.datos.map(pokemon => {
                            return (
                                <div className="Pokemon" name={pokemon.id} onClick={((e) => this.handleClick(e, pokemon.id))}>
                                    <img className="imagenPokemon" alt={pokemon.id} src={pokemon.sprites.front_default}></img>
                                    <h1 >{pokemon.id}</h1>
                                    <h1 className="nombrePokemon">{pokemon.name}</h1>
                                </div>
                            )
                        })}               
                </div>
                <InfoPokemon pok={this.state.elegido}/>
            </div>
        );

    }  


}

window.onload = init;