import { combineReducers } from 'redux';
import Counter from './counterReducer';
import LoggedIn from './isLoggedInReducer';
import Calculator from './calcReducer';

const JoinedReducers = combineReducers({
  calc: Calculator,
  count: Counter,
  loggedIn: LoggedIn,
});

export default JoinedReducers;
