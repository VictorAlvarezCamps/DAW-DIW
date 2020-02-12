/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Datos from './Datos.js';

/*VARIABLES*/

/*const obtenerDatos = (link) => {
    const Datos = fetch(link)
      .then(result => result.json())
      .then(data => {
          return data;
      })
  
      return Datos;
}*/

function init() {

    ReactDOM.render(<Pokedex />, document.getElementById('root'))

    /*let Resultados = obtenerDatos(url);

    Resultados.then(function (pokedex) {

        pokedex.results.forEach(pokemon => {

            let infoPokemon = obtenerDatos(pokemon.url);

            infoPokemon.then(function (datosPokemon) { 

                //Recogemos datos
                id = datosPokemon.id;
                nombrePokemon = datosPokemon.name;
                imgPokemon = datosPokemon.sprites.front_default;

                //guardamos datos
                let datosDelPokemon = {};
                datosDelPokemon.id = id;
                datosDelPokemon.nombre = nombrePokemon;
                datosDelPokemon.imagen = imgPokemon;

                listaTodosLosPokemon.push(datosDelPokemon);

                //este then saca siempre mismo resultado 
            })//.then(()=>ReactDOM.render(<Pokedex lista={listaTodosLosPokemon}/>, document.getElementById('root')))

        });//ForEach

        //undefined
    }).then(()=>ReactDOM.render(<Pokedex listaPokemon={listaTodosLosPokemon}/>, document.getElementById('root')))*/




}

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: [{}],
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

        this.setState({
            lista: pokemons.results
        })

    }

    render() {

        console.log(this.state.lista[0].name);

        


        return (
            <div className="Datos">
                {this.state.lista.map(pokemon => {
                    return (<h3>{pokemon.url}</h3>)
                })}
                hola
            </div>
        );

        /*return[
            <div className="Datos">                
                <button onClick={this.disminuirIDPokemon} className="btnAtras">-</button>
                    <Datos img={this.props.imagen}  nom={this.props.nombre} />
                <button onClick={this.aumentarIDPokemon} className="btnAdelante">+</button>
            </div>
        ];*/

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