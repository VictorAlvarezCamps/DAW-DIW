/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datos from './Datos.js';

/*VARIABLES*/

let url = "https://pokeapi.co/api/v2/pokedex/";

let nombrePokemon;
let imgPokemon;
let descripcionPokemon;
//let tipo1;
//let tipo2;
let idPokemon;
let listaTodosLosPokemon = [];

const obtenerDatos = (link) => {
    const Datos = fetch(link)
      .then(result => result.json())
      .then(data => {
          return data;
      })
  
      return Datos;
}

function init() {

    let Resultados = obtenerDatos(url);

    Resultados.then(function (pokedex) {

        let url2 = pokedex.results[0].url;

        let pokemones = obtenerDatos(url2);

        pokemones.then(function (pokemon) {

            pokemon.pokemon_entries.forEach(pokemon => {

                let url3 = pokemon.pokemon_species.url;

                let datosPokemon = obtenerDatos(url3);

                datosPokemon.then(function (datos) {

                    let datosDelPokemon = {};

                    descripcionPokemon = datos.flavor_text_entries[3].flavor_text; 
                    idPokemon = datos.id;

                    datosDelPokemon.descripcion = descripcionPokemon;
                    datosDelPokemon.id = idPokemon;

                    let url4 = datos.varieties[0].pokemon.url;

                    let masDatos = obtenerDatos(url4);

                    masDatos.then(function (datos) {

                        nombrePokemon = datos.name;
                        imgPokemon = datos.sprites.front_default;

                        //if(datosPokemon.types[1] !== undefined || datosPokemon.types[0] !== undefined){
                            //console.log(datosPokemon.types[1].type.name);
                            //tipo1 = datosPokemon.types[1].type.name;
                            //tipo2 = datosPokemon.types[0].type.name;
                        //}

                        datosDelPokemon.nombre = nombrePokemon;
                        datosDelPokemon.img = imgPokemon;

                        listaTodosLosPokemon.push(datosDelPokemon);
                    })

                })

            });

        })

    })

    ReactDOM.render(<Pokedex listaPokemon={listaTodosLosPokemon}/>, document.getElementById('root'));    

}

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          lista: this.props.listaPokemon
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

    obtenerTodaLalista = (list) => {
        
        return list.lista;
    }
    

    render() {

        const { lista } = this.state;

        console.log(this.obtenerTodaLalista({lista}));

        //console.log(this.obtenerTodaLalista({lista}).map(pokemon => console.log(pokemon)));

        return[          
            <div className="Datos">                
                <button onClick={this.disminuirIDPokemon} className="btnAtras">-</button>
                    <Datos img={this.props.img} id={this.props.id} nom={this.props.nom} tip1={this.props.tip1} tip2={this.props.tip2} descrip={this.props.descripcion}/>
                <button onClick={this.aumentarIDPokemon} className="btnAdelante">+</button>
            </div>
        ];

        /*return[          
            <div className="Datos">                
                <button onClick={listaTodosLosPokemon.id} className="btnAtras">-</button>
                    <Datos 
                        img={listaTodosLosPokemon[0].img}
                        id={listaTodosLosPokemon[listaTodosLosPokemon.id].id}
                        nom={listaTodosLosPokemon[listaTodosLosPokemon.id].nombre}
                        descrip={listaTodosLosPokemon[listaTodosLosPokemon.id].descripcion}
                    />
                <button onClick={listaTodosLosPokemon.id} className="btnAdelante">+</button>
            </div>
        ];*/

    }

}




window.onload = init;