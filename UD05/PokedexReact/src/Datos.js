import React,{Component} from 'react';
import './index.css';

class Datos extends Component{

    constructor(props){
        super(props);

        this.state = {
            imagen : this.props.img,
            nombre: this.props.nom,
            id: this.props.id, 
            //seleccionado : [] 
        }
    }   

    /*handleClick(e) {
        this.setState({seleccionado: e.target});
    }*/
    
    render(){       

        return(
            <div className="Pokemon">
                <img className="imagenPokemon" alt={this.props.id} src={this.state.imagen}></img>
                <h1 >{this.state.id}</h1>
                <h1 className="nombrePokemon">{this.state.nombre}</h1>
            </div>
        );
    }


}

export default Datos;