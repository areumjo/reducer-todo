import React from 'react';

const Todo = ({id, completed, item, toggle}) => {
    
    return (
        <div className={completed ? "completed" : null}>
            <p className="todo" onClick={()=>toggle(id)}>{item}</p>
        </div>
    )
}

export default Todo;