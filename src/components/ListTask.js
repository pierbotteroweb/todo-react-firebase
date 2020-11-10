import React from "react";

class ListTasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const checkboxStyle = {
      background: "lightblue"
    };

    const checkboxCompleteStyle = {
      background: "lightgreen"
    };

    const deletedTaskStyle = {
      display: "none"
    };

    const notDeletedTaskStyle = {
      color: "#000"
    };

    var tarefaConcluida = this.props.tarefas.concluida;
    var tarefaDeletada = this.props.tarefas.deletada;

    return (
      <div
        className="taskWrap"
        style={tarefaDeletada ? deletedTaskStyle : notDeletedTaskStyle}
      >
        <input
          onChange={this.props.concluiTarefa}
          value={this.props.id}
          id={this.props.id}
          checked={tarefaConcluida}
          type="checkbox"
        />
        <label
          className="inputTask"
          style={tarefaConcluida ? checkboxCompleteStyle : checkboxStyle}
          htmlFor={this.props.id}
        >
          {this.props.tarefas.tarefa}
        </label>
        <span>{this.props.tarefas.tarefa}</span>
        <button
          onClick={this.props.deletaTarefa}
          value={this.props.id}
          className="delButton"
        >
        </button>
      </div>
    );
  }
}

export default ListTasks;
