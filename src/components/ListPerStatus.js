import React from "react";

class ListPerStatus extends React.Component{
    constructor(props){
        super();
    }

render(){
    const pro = this.props;
    return(   
     
    <div className="tabs">
        <div className="tab">
        <input type="radio" id="tab-1" name="tab-group-1" value="todos" 
                    checked={pro.status==="todos"}
                    onChange={pro.mostraCompImp} /> <label htmlFor="tab-1">  Todos</label>
        </div>
        <div className="tab">
        <input type="radio" id="tab-2" name="tab-group-1" value="completos" 
                    checked={pro.status==="completos"}
                    onChange={pro.mostraCompImp} /> <label 
                    style={{background: (pro.status==="completos") && 'lightgreen'}} htmlFor="tab-2">  Completos</label>
        </div>
        <div className="tab">
        <input type="radio" id="tab-3" name="tab-group-1" value="incompletos"  
                    checked={pro.status==="incompletos"}
                    onChange={pro.mostraCompImp} /> <label 
                    style={{background: (pro.status==="incompletos") && 'lightblue'}} htmlFor="tab-3">  Incompletos</label>
        </div>
    </div>)
    }
}

export default ListPerStatus;