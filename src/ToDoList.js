import React from 'react';

import {ToDoItem} from './ToDoItem';

export function ToDoList(props){
    return (
        <div>
          {
            props.todos.map((item)=> <ToDoItem key= {item.id} todoItem={item.title} todoIsDone={item.isDone}/>)
          }
        
        </div>
          
    );
}