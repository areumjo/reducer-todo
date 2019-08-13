import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer.js';

import Todo from './Todo.js';

const Todolist = () => {
    
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [todo, setTodo] = useState("");

    console.log('state:', state);
    console.log('todo: ', todo);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: todo});
        setTodo("");
    }

    const toggleCompleted = e => {
        console.log('toggle completed clicked')
        // e.preventDefault();
        dispatch({type: "TOGGLE", payload: e});
    }

    return(
        <div className="todo-list">
            <h1>To-do list</h1>
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
                <button onClick={handleSubmit}>add todo</button>
            </form>
        </div>
    )
}

export default Todolist;