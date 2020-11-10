import React from "react";
import AddTask from './AddTask'
import ListTasks from './ListTask'
import ListPerStatus from './ListPerStatus'
import "../App.scss";
import firebase from '../fire.js';


  class App extends React.Component {
    constructor() {
      super();
      this.state={
        tarefas:[],
        mostraPorTipo:"todos"
      }
      this.adicionaTarefa = this.adicionaTarefa.bind(this);
      this.concluiTarefa = this.concluiTarefa.bind(this);
      this.deletaTarefa = this.deletaTarefa.bind(this);
      this.mostraCompletosIncompletos = this.mostraCompletosIncompletos.bind(this);

    }

    componentDidMount(){
      let self = this;
      var db = firebase.firestore()
      db.collection('todos').get()
      .then((snap)=>{
        let lista=[]
        snap.docs.forEach(doc=>{
          let obj = doc.data()
          obj['id']=doc.id.toString()
          lista.push(obj)
        })
      
        self.setState({
          tarefas:lista
        })
      })
    }

    
    adicionaTarefa(tarefaX){
        let self = this;
        
        self.setState(prevState=>{
          let novaTarefa={tarefa:tarefaX,concluida:false};
          return{
            tarefas:[...prevState.tarefas,novaTarefa]
          }
        })

        
        var db = firebase.firestore()
        db.collection('todos').get()
        .then((snap)=>{
          let lista=[]
          snap.docs.forEach(doc=>{
            let obj = doc.data()
            obj['id']=doc.id.toString()
            lista.push(obj)
          })
        
          self.setState({
            tarefas:lista
          })
        })
    }

    
    mostraCompletosIncompletos(evento){
      let self = this;
      self.setState({
        mostraPorTipo:evento.target.value
      })
    }

    

    concluiTarefa(evento){      
      var db = firebase.firestore()
      let indiceTarefa = evento.target.id.toString();

      let self = this;
      self.setState(function(prevState){
        var listaAtualizada = prevState.tarefas;

        listaAtualizada.forEach(item=>{
          if(item['id']==indiceTarefa){
            item.concluida=!item.concluida
            db.collection('todos').doc(indiceTarefa).update({
              concluida:item.concluida
            })
          }   
        })
          return{
            tarefas:listaAtualizada
          }    
      })
    }

    deletaTarefa(evento){
      var db = firebase.firestore()

      let self = this;
      let indiceTarefa = evento.target.value;

      self.setState(function(prevState){
        var listaAtualizada = prevState.tarefas;
        // listaAtualizada[indiceTarefa].deletada=true;

        listaAtualizada.forEach(item=>{
          if(item['id']==indiceTarefa){
            item.concluida=!item.concluida
            db.collection('todos').doc(indiceTarefa).delete()
          }   
        })

        

        return{
          tarefas:listaAtualizada.filter(item=>{return item.id!=indiceTarefa})
        }
      })
    }



    
    render() {

        return (

          <div className="container">
            <div className="mainWrap">
              <p>LISTA DE TAREFAS REACT / FIRESTORE</p>
              <ListPerStatus status={this.state.mostraPorTipo}
                  mostraCompImp={this.mostraCompletosIncompletos} />

              {
                  (this.state.mostraPorTipo==="completos")?
                  this.state.tarefas.map((item) =>
                  (item.concluida==1)&&
                  <ListTasks tarefas={item} id={item.id}
                  concluiTarefa={this.concluiTarefa}
                  deletaTarefa={this.deletaTarefa} />)

                  :(this.state.mostraPorTipo==="incompletos")?
                  this.state.tarefas.map((item) => 
                  (!item.concluida)&&
                  <ListTasks tarefas={item} id={item.id}
                  concluiTarefa={this.concluiTarefa}
                  deletaTarefa={this.deletaTarefa} />)

                  :this.state.tarefas.map((item) =>                
                  <ListTasks tarefas={item} id={item.id}
                  concluiTarefa={this.concluiTarefa}
                  deletaTarefa={this.deletaTarefa} />)
                }

                
              <AddTask metodoAdiciona={this.adicionaTarefa}/>
            </div>
          </div>
        )
    }
  }



export default App;