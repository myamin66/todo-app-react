import React from 'react';
import Todo from './Todo';
export default function TodoList({todos, handleToggle}) {
    return (        
      todos.map(function(todo) {
          return <Todo key ={todo.id} handleToggle={handleToggle} todo={todo} />
      })  
    )
}