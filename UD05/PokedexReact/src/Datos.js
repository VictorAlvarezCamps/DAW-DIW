import React,{Component} from 'react';
import './index.css';

class Datos extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: this.props.id,
            imagen: this.props.imagen,
            nombre: this.props.nombre
        }
        
    }
    
    componentDidUpdate(pP,pS){
        //pP -> prevProps , pS -> prevState

        if(this.state.id !== pS.id){
            this.setState({
                id: pS.id,
                imagen: pS.sprites.front_default,
                nombre: pS.name
            });
        }

    }
    
    render(){ 

        return(
            <div>
                <img className="imagenPokemon" alt={this.state.id} src={this.state.imagen}></img>
                <h1 >{this.state.id}</h1>
                <h1 className="nombrePokemon">{this.state.nombre}</h1>
            </div>
        );
    }


}

export default Datos;