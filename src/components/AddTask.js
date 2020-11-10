import React from "react";
import firebase from '../fire.js';




class AddTask extends React.Component{
    constructor(props){
        super();
        this.state={
           enviou:false
        }

        this.insereTarefa = this.insereTarefa.bind(this)
    }

    insereTarefa(element){

        var db = firebase.firestore()
        element.preventDefault();
        let textoInserido = element.target.getElementsByTagName('input')[0],
        texto = textoInserido.value;
        
        console.log(textoInserido.value)
        if(texto!==""){
        db.collection('todos').add({
          tarefa:textoInserido.value,
          concluida:false
        })
        this.props.metodoAdiciona(texto);
        document.getElementsByTagName('form')[0].reset()
        }


    }

    render(){

        return(
            <div className="blocoEnviaTarefa">
             <form onSubmit={this.insereTarefa}>
                  <button>+</button>
                  <input/>
             </form>
            </div>)
    }
} 


export default AddTask;