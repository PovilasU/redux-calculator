import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import { loggedIn } from './actions/isLoggedInAction';

function App() {
  const counter = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <i className="lt flag"></i>
        <h1>React Redux Calculator</h1>
        <p>Counter: {counter}</p>
        <button
          className="ui teal button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="ui pink button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        {!isLoggedIn ? (
          <button
            style={{ marginTop: '15px' }}
            className="ui inverted orange button"
            onClick={() => dispatch(loggedIn())}
          >
            Login
          </button>
        ) : (
          <div>
            <p>You are loggedIn</p>
            <button
              className="ui inverted red button"
              onClick={() => dispatch(loggedIn())}
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div>
        <div class="column" style={{ marginTop: '15px' }}>
          <span>Answer: 0</span>
        </div>
        <div class="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">AC</button>
          <button className="ui grey button">+/-</button>
          <button className="ui grey button">%</button>
          <button className="ui grey button">/</button>
        </div>
        <div class="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">7</button>
          <button className="ui grey button">8</button>
          <button className="ui grey button">9</button>
          <button className="ui grey button">X</button>
        </div>
        <div class="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">4</button>
          <button className="ui grey button">5</button>
          <button className="ui grey button">6</button>
          <button className="ui grey button">-</button>
        </div>
        <div class="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">1</button>
          <button className="ui grey button">2</button>
          <button className="ui grey button">3</button>
          <button className="ui grey button">+</button>
        </div>
        <div class="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">0</button>
          <button className="ui grey button">.</button>
          <button className="ui grey button">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
