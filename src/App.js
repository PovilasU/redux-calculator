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
    </div>
  );
}

export default App;
