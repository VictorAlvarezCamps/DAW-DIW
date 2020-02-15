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


function busqueda(e){
    let input = document.querySelector('input[type="text"]').value;
    return e.name.startsWith(input);
}

/*-----------------------------------------------REACT-----------------------------------*/

class Pokedex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
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

            //console.log(pokemons);

            this.setState({
                loading: false,
                datos: pokemons                
            })

                
        })
        
        const r = this.state.datos.filter(busqueda);

        

    }   

    busqueda(e){
        let input = document.querySelector('input[type="text"]').value;
        return e.name.startsWith(input);
    }

    //componentWillMount() {

        /*r.forEach(p =>{
            
            //console.log(p);
                
            

            switch (seleccionTipo) {
                case "Todos":
                    this.setState({
                        datos: p
                    })
                    break;
                case "Fuego":
                    console.log(p.types);

                    break;
                case "Planta":

                    break;
                case "Electrico":
                    
                    break;
                case "Hielo":

                    break;
                case "Lucha":

                    break;
                case "Veneno":

                    break;
                case "Tierra":
                    
                    break;
                case "Volador":

                    break;
                case "Psiquico":

                    break;
                case "Bicho":

                    break;
                case "Roca":
                    
                    break;
                case "Fantasma":

                    break;
                case "Dragon":

                    break;
                case "Siniestro":

                    break;
                case "Acero":
                
                    break;
                case "Hada":

                    break;
                default:
                    break;
            }
            

        });      */      
    //}


    handleClick = (e,data) =>{

        this.state.datos.map(pokemon => {
            if(data === pokemon.id){
                this.setState({elegido:pokemon});
            }
        })
        
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
                                <div className="Pokemon" name={pokemon.id} onClick={((e) => this.handleClick(e, pokemon.id))}>
                                    <Datos id={pokemon.id} imagen={pokemon.sprites.front_default} nombre={pokemon.name}/>
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