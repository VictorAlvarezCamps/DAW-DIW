/*IMPORTS*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Datos from './Datos.js';
import InfoPokemon from './infoPokemon';
import Header from './Header';

/*VARIABLES*/
let seleccionTipo;

function init() {
    

    ReactDOM.render(<Pokedex />, document.getElementById('root'))

    

    let tipos = document.querySelector(".porTipos");

    /*for (let i = 0; i < tipos.children.length; i++) {
        //console.log(tipos.children[i]);
        tipos.children[i].addEventListener("click",recogerTipo);
    }*/



}

function recogerTipo(e){
    seleccionTipo = e.target.dataset.tipo;
}


/*function busqueda(e){
    return e.name.startsWith(input);
}*/

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            datos: [],
            datos2: [],
            descriptions: [],
            elegido: {}     
        }
        this.handleClick = this.handleClick.bind(this);
    }


    

    componentDidMount = async () => {      

        let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

        let url2 = "https://pokeapi.co/api/v2/pokedex/1";

        const result1 = await fetch(url);

        const pokemons = await result1.json();


        const todosPokemons = pokemons.results.map( async datos => {

            const url2 = await fetch(datos.url);

            const datosPokemon = await url2.json();      

            return datosPokemon;
            
            
        });
        

        Promise.all(todosPokemons,).then(pokemons => {

            this.setState({
                loading: false,
                datos: pokemons                
            })

                
        })


        const result2 = await fetch(url2);

        const pokemons2 = await result2.json();

        const todosPokemons2 = pokemons2.pokemon_entries.map( async datos2 => {

            const url3 = await fetch(datos2.pokemon_species.url);

            const datosPokemon2 = await url3.json();

            return datosPokemon2;

        })
        

        Promise.all(todosPokemons2).then(pokemons => {

            let result = [];

            let descripciones = []
            
            pokemons.forEach( async pokemon => {

                const url4 = await fetch(pokemon.varieties[0].pokemon.url);

                const datosPokemon3 = await url4.json();

                result.push(datosPokemon3);
                descripciones.push(pokemon);

            })
            

            this.setState({
                loading: false,
                datos2: result,
                descriptions: descripciones    
            })

            
        })

        const filtrar = function (e) {
            //console.log(e.target.value);

            let lista = document.getElementsByClassName("ListaPokemon");

            //console.log(lista[0].children);

            for (let item of lista[0].children) {
                //console.log(item.dataset.nombre);

                if(e.target.value === ""){
                    console.log(item.dataset.nombre);
                }else{
                    
                }

            }

        }

        let input = document.getElementsByClassName("contenido");

        //console.log(input[0].children[0].children[2]);
        
        input[0].children[0].children[2].addEventListener("input",filtrar);

    }

    


    handleClick = (e,data) =>{

        this.state.datos.map(pokemon => {
            if(data === pokemon.id){
                this.setState({elegido:pokemon});
            }
        })
        
    }

    devolverDescripciones =(nombre) =>{
        let contador = 0;

        let idioma;

        this.state.descriptions.map(pokemon2 => {
            if(nombre === pokemon2.name){
                pokemon2.flavor_text_entries.map(idiomaES => { 
                    if(idiomaES.language.name === "es"){
                        if (contador === 0 ) {
                            contador++;                 
                            idioma = idiomaES.flavor_text;
                        }
                    }
                })                                               
            }
        });

        return idioma;
        
    }

    render() {
        

        if (this.state.loading) {
            return (<div className="Cargando">.</div>);
        }
       
        return (
            <div className="contenido">
                <Header /> 

                <div className="ListaPokemon">                        
                        {this.state.datos.map(pokemon => {
                            return (
                                <div className="Pokemon" data-nombre={pokemon.name} name={pokemon.name} onClick={((e) => this.handleClick(e, pokemon.id))}>
                                    <Datos id={pokemon.id} imagen={pokemon.sprites.front_default} nombre={pokemon.name}/>
                                </div>
                            )
                        })}               
                </div>
                <div className="infoPokemon">
                    {this.state.datos2.map(pokemon => {
                        if(this.state.elegido.name === pokemon.name) {

                            return <InfoPokemon pok={this.state.elegido} pok2={pokemon} descripcion={this.devolverDescripciones(pokemon.name)}/>
                        }
                        
                    })}                    
                </div>
            </div>
        );  

        

    }  


}

window.onload = init;