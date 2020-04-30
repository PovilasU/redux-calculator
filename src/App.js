import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  result,
  reset,
  dot,
} from './actions/calcActions';
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
        {/* <p>Counter: {counter}</p>
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
        </button> */}
      </div>
      {/* <div>
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
      </div> */}
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
          <button className="ui grey button" onClick={() => dispatch(seven())}>
            7
          </button>
          <button className="ui grey button" onClick={() => dispatch(eight())}>
            8
          </button>
          <button className="ui grey button" onClick={() => dispatch(nine())}>
            9
          </button>
          <button className="ui grey button">X</button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button" onClick={() => dispatch(four())}>
            4
          </button>
          <button className="ui grey button" onClick={() => dispatch(five())}>
            5
          </button>
          <button className="ui grey button" onClick={() => dispatch(six())}>
            6
          </button>
          <button className="ui grey button">-</button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button" onClick={() => dispatch(one())}>
            1
          </button>
          <button className="ui grey button" onClick={() => dispatch(two())}>
            2
          </button>
          <button className="ui grey button" onClick={() => dispatch(three())}>
            3
          </button>
          <button className="ui grey button" onClick={() => dispatch(plus())}>
            +
          </button>
        </div>
        <div className="column" style={{ marginTop: '15px' }}>
          <button className="ui grey button" onClick={() => dispatch(zero())}>
            0
          </button>
          <button className="ui grey button" onClick={() => dispatch(dot())}>
            .
          </button>
          <button className="ui grey button" onClick={() => dispatch(result())}>
            =
          </button>
        </div>

        <h2>About:</h2>
        <p>
          This is my Calculator implementation using React-Redux. I used example
          code of simple counter and modified it to develop calculator
        </p>
        <p>
          <a href="https://github.com/PovilasU/redux-calculator">
            Code link to GitHub
          </a>
        </p>
        <p>For styling I used "semantic-ui" framework</p>
        <p>Date: 1/5/2020</p>
      </div>
    </div>
  );
}

export default App;
