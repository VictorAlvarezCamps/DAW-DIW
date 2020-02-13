import React,{Component} from 'react';
import './index.css';

class InfoPokemon extends Component{

    constructor(props){
        super(props);

        this.state = {
            imagen : this.props.img,
            nombre: this.props.nom,
            id: this.props.id,
        }
    }

    render(){       

        return(
            <div className="infoPokemon">
                <img className="imgPokemon" alt={this.props.id} src={this.state.imagen}></img>
                <p className="numPokemon">{this.props.id}</p>
                <div className="descripcionPokemon">{this.state.nombre}</div>
            </div>
        );
    }

}

export default InfoPokemon;