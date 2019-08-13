import React from 'react';
import './App.css';

import Todolist from './components/Todolist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list using Reducer</h1>
      </header>
      <div className="outer-todo-list">
        <div className="lines"></div>
          <Todolist />
        </div>
    </div>
  );
}

export default App;
