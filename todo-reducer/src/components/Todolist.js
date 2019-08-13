import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer.js';

import Todo from './Todo.js';

const Todolist = () => {
    
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [todo, setTodo] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: todo});
        setTodo("");
    }

    const toggleCompleted = id => {
        console.log('toggle completed clicked');
        dispatch({type: "TOGGLE", payload: id});
    }

    const handleClear = () => {
        console.log('clear button clicked');
        dispatch({type: "CLEAR"})
    }

    return(
        <div className="todo-list">
            <h2>To-do list</h2>
            {state.todos.map(t => 
                <Todo key={t.id} id={t.id} item={t.item} completed={t.completed} toggle={toggleCompleted}
                    />)}
            <form>
                <input 
                    type="text"
                    name="todo"
                    value={todo}
                    placeholder="more todo..."
                    onChange={e => setTodo(e.target.value)}
                    />
                <button className="addtodo-btn" onClick={handleSubmit}>Add todo</button>
            </form>
            <button className="clear-btn" onClick={handleClear}>Clear completed</button>
        </div>
    )
}

export default Todolist;