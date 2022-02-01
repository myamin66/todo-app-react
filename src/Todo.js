import React from 'react';

export default function Todo({todo, handleToggle}) {
    function handleTodoClick() {
        handleToggle(todo.id);
    }
    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handleTodoClick}/>
                {todo.name}    
            </label>
            
        </div>
    )
}