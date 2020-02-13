import React from 'react';

const Todo = ({id, completed, item, toggle, tag}) => {
    // console.log(tag)
    return (
        <div className={completed ? "completed" : null}>
            <span className="tag">{tag}</span><p className="todo" onClick={()=>toggle(id)}>{item}</p>
        </div>
    )
}

export default Todo;