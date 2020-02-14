import React,{Component} from 'react';
import './index.css';

class InfoPokemon extends Component{

    constructor(props){
        super(props);

        this.state = {
            /*imagen : this.props.img,
            nombre: this.props.nom,
            id: this.props.id,
            descripcion: this.props.descrip*/
            //info: this.props.pok
        }
    }
   

    render(){

        //console.log(this.props.pok.sprites);
        //console.log(this.props.pok.types);
        console.log(this.props.pok.moves);

        return(
            <div className="infoPokemon" >
                <img className="imgPokemon" alt={this.props.pok.id} src={this.props.pok.sprites}></img>
                <p className="numPokemon">#{this.props.pok.id}</p>
                <p className="nombrePokemon">{this.props.pok.name}</p>
                <div className="tipos">
                </div>
                <div className="descripcionPokemon">{this.state.descripcion}</div>
                <div className="extraInfo">
                    <p>Altura: {this.props.pok.height}</p>
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