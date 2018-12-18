import React from 'react';
import {ToDoList} from './ToDoList';
import {ToDoForm} from './ToDoForm';


const mockList = [
    {id: 1, title: 'Send a mail', isDone: false},
    {id: 2, title: 'Send a sms', isDone: true},
    {id: 3, title: 'Send a message', isDone: false},
    ]

export class ToDoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: mockList
        }

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(title) {
        this.setState((prevState) => ({
            todos: [...prevState.todos, {
                id : prevState.todos.length + 1,
                title,
                isDone: false
            }],
        }));
    }

    render () {
        return (
        <div>
            <ToDoForm addTodo={this.addTodo}/>
            <ToDoList todos= {this.state.todos}/>
        </div>
        );
    }
}