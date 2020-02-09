/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datos from './Datos.js';

/*VARIABLES*/
let url = "https://pokeapi.co/api/v2/pokedex/";

let nombrePokemon;
let urlPokemon;
let imgPokemon;
let descripcionPokemon;
let tipo1;
let tipo2;
let idPokemon;
let listaTodosLosPokemon = new Array();

function init() {
    
    //API pokedex
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(pokedex) {
        //Recogemos los datos de la pokedex nacional
        fetch(pokedex.results[0].url).then(function(response) {
            return response.json();
        }).then(function(pokedex) {
            //console.log(pokedex);

            let cantidadPokemon = pokedex.pokemon_entries;

            for (let i = 0; i < cantidadPokemon.length; i++) {
                urlPokemon = cantidadPokemon[i].pokemon_species.url;

                fetch(urlPokemon).then(function (response) {
                    return response.json();
                }).then(function (datosPokemon) {


                    let datosDelPokemon = new Object();

                    descripcionPokemon = datosPokemon.flavor_text_entries[3].flavor_text; 
                    idPokemon = datosPokemon.id;              
                    
                    datosDelPokemon.descripcion = descripcionPokemon;
                    datosDelPokemon.id = idPokemon;

                    let urlPokemon2 = datosPokemon.varieties[0].pokemon.url;

                    fetch(urlPokemon2).then(function (response) {
                        return response.json();
                    }).then(function (datosPokemon) {

                        //descripcionPokemon
                        nombrePokemon = datosPokemon.name;
                        imgPokemon = datosPokemon.sprites.front_default;
                        if(datosPokemon.types[1] !== undefined || datosPokemon.types[0] !== undefined){
                            //console.log(datosPokemon.types[1].type.name);
                            //tipo1 = datosPokemon.types[1].type.name;
                            //tipo2 = datosPokemon.types[0].type.name;
                        }

                        datosDelPokemon.nombre = nombrePokemon;
                        datosDelPokemon.img = imgPokemon;

                        /*let datosDelPokemon = {
                            id: idPokemon,
                            nombre: nombrePokemon,
                            imagen: imgPokemon,
                            descripcion: descripcionPokemon
                        }*/

                        listaTodosLosPokemon.push(datosDelPokemon);
                        
                    });
                });                 

            }            
            
        });       

    });   

    ReactDOM.render(<Pokedex listaPokemon={listaTodosLosPokemon}/>, document.getElementById('root'));    

}

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    /*constructor() {
        super();
     
        this.state = {
          idPokemon: 1
        };
      }*/

      constructor(props) {
        super(props);
     
        this.state = {
          lista: this.props.listaPokemon
        };
      }

    disminuirIDPokemon = () => {
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
    }

    obtenerTodaLalista = (list) => {
        
        
        return list.lista;
        
        
    }
    

    render() {

        const { lista } = this.state;

        console.log(this.obtenerTodaLalista({lista}));

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