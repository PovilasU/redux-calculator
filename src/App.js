import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Redux Calculator</h1>
        <p>Counter: 0</p>
        <button className="ui teal button">+</button>
        <button className="ui pink button">-</button>
      </div>
      <div>
        <button style={{ marginTop: '15px' }} class="ui inverted orange button">
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
