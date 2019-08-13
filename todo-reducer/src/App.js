import React from 'react';
import './App.css';

import Todolist from './components/Todolist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>To-do list using Reducer</p>
      </header>
      <Todolist />
    </div>
  );
}

export default App;
