import React,{Component} from 'react';

class Datos extends Component{

    /*constructor(){
        super(props);

        this.state = {
            imagen : this.props.img,
            id : this.props.id,
            nombre : this.props.nom,
            descripcion : this.props.descrip,
            tipo1 : this.props.tip1,
            tipo2 : this.props.tip2
        }
    }*/

    
    
    render(){
        return(
            <div className="datosDelPokemon">
                <div className="imagenPokemon"><img src={this.props.img} alt={this.props.id}></img></div>
                        
                <h1>Nº: {this.props.id}</h1>   
                <h1>{this.props.nom}</h1>

                <div className="types">
                    <h1 className="type1">{this.props.tip1}</h1>
                    <h1 className="type2">{this.props.tip2}</h1>
                </div>                        

                <div className="descripcion"> 
                    <h2>{this.props.descrip}</h2>
                </div>

            </div>
        );
    }


}

export default Datos;