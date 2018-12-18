import React from 'react';

export class ToDoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: ''};

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        console.log('title changed', event.target.value, event);
        this.setState({title: event.target.value});
      }

    handleSubmit(event){
        event.preventDefault();
        if (this.state.title){
            this.props.addTodo(this.state.title);
            this.setState(() => ({
                title: '',
            }))
        }
        console.log('nouveau todo = title : ' + this.state.title)
    }

    render() {
    return (
     <form onSubmit={this.handleSubmit}>
        <label>
          Saisir un todo :
          <input type="title" value={this.state.title} onChange={this.handleChangeTitle} />
          <input type="submit" value="Ajouter"/>
        </label>
      </form>
          
        );
    }
}