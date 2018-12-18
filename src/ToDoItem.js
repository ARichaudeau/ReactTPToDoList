import React from 'react';

export class ToDoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {isDone: props.todoIsDone};

    this.handleChange = this.handleChange.bind(this);
}



handleChange() {
  this.setState((prevState) => ({
    isDone: !prevState.isDone
  }))
}

render() {
  return (
    <label>
      <p>
        {this.props.todoItem.toUpperCase()}
        <input type="checkbox" checked={this.state.isDone} onChange={this.handleChange}></input>
      </p> 
    </label>
    );
  }
}

