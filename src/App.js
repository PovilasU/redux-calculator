import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import { one, two, plus, result, reset } from './actions/calcActions';
import { loggedIn } from './actions/isLoggedInAction';

function App() {
  const firstNum = useSelector((state) => state.calc[0]);
  const operator = useSelector((state) => state.calc[1]);
  const secondNum = useSelector((state) => state.calc[2]);
  const answer = useSelector((state) => state.calc[3]);
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
        <div className="column" style={{ marginTop: '15px' }}>
          <span>firsrNum: {firstNum}</span>
          <br></br>
          <span>operator: {operator}</span>
          <br></br>
          <span>secondNum: {secondNum}</span>
          <br></br>
          <span>Result: {answer}</span>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button" onClick={() => dispatch(reset())}>
            AC
          </button>
          <button className="ui grey button">+/-</button>
          <button className="ui grey button">%</button>
          <button className="ui grey button">/</button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">7</button>
          <button className="ui grey button">8</button>
          <button className="ui grey button">9</button>
          <button className="ui grey button">X</button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">4</button>
          <button className="ui grey button">5</button>
          <button className="ui grey button">6</button>
          <button className="ui grey button">-</button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button" onClick={() => dispatch(one())}>
            1
          </button>
          <button className="ui grey button" onClick={() => dispatch(two())}>
            2
          </button>
          <button className="ui grey button">3</button>
          <button className="ui grey button" onClick={() => dispatch(plus())}>
            +
          </button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button">0</button>
          <button className="ui grey button">.</button>
          <button className="ui grey button" onClick={() => dispatch(result())}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
