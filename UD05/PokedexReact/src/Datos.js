import React,{Component} from 'react';
import './index.css';

class Datos extends Component{

    constructor(props){
        super(props);

        this.state = {
            imagen : this.props.img,
            nombre: this.props.nom,
            id: this.props.id, 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    
    
    
    render(){

        

        return(
            <div className="Pokemon" onClick={this.handleClick}>
                <img className="imagenPokemon" alt={this.props.id} src={this.state.imagen}></img>
                <h1 className="nombrePokemon">{this.state.nombre}</h1>
            </div>
        );
    }


}

export default Datos;