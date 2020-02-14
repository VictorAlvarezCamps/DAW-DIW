import React,{Component} from 'react';
import './index.css';
import InfoPokemon from './infoPokemon';

class Datos extends Component{

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
            
        );
    }


}

export default Datos;