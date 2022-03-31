import { useState } from 'react';
import './App.css';

export function App() {

  return (
    <div className="App">
      <p>Enter new to-do item below:</p>
      <div id='box-and-button'>
        <input type="text" />
        <button>add</button>
      </div>
    </div>
  );
}
