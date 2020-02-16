import React,{Component} from 'react';
import './index.css';

class InfoPokemon extends Component{

    constructor(props){
        super(props);

        this.state = {
            datos: {},
            datos2: this.props.pok2,
            descrip: this.props.descripcion
        }
    }
   

    render(){

        //console.log(this.props.pok.sprites);
        //console.log(this.props.pok.types);
        //console.log(this.props.pok.moves)
        console.log(this.props.descripcion);

        return(
            <div>
                <img className="imgPokemon" alt={this.props.pok.id} src={this.state.datos2.sprites.front_default}></img>
                <p className="numPokemon">#{this.props.pok.id}</p>
                <p className="nombrePokemon">{this.props.pok.name}</p>
                <div className="tipos">
                    <p></p>
                    <p></p>
                </div>
                <div className="descripcionPokemon">{this.state.descripcion}</div>
                <div className="extraInfo">
                    <p>Altura: {this.props.pok.height}</p>
                    <br></br>
                    <p>Peso: {this.props.pok.weight}</p>
                    <div className="Movimientos">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }

}

export default InfoPokemon;