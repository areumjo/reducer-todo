import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer.js';

const Todolist = () => {
    const [todo, setTodo] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);
    
    console.log(state);
    
    return(
        <div className="todo-list">
            <h1>To-do list</h1>
            <p>{state.item}</p>
        </div>
    )
}

export default Todolist;