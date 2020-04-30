const CalcReducer = (state = [[], [], [], []], action) => {
  let isNum2 = state[1].length == 0;
  switch (action.type) {
    case 'ZERO':
      isNum2 ? (state[0] += 0) : (state[2] += 0);
      return state;
    case 'ONE':
      isNum2 ? (state[0] += 1) : (state[2] += 1);
      return state;
    case 'TWO':
      isNum2 ? (state[0] += 2) : (state[2] += 2);
      return state;
    case 'THREE':
      isNum2 ? (state[0] += 3) : (state[2] += 3);
      return state;
    case 'FOUR':
      isNum2 ? (state[0] += 4) : (state[2] += 4);
      return state;
    case 'FIVE':
      isNum2 ? (state[0] += 5) : (state[2] += 5);
      return state;
    case 'SIX':
      isNum2 ? (state[0] += 6) : (state[2] += 6);
      return state;
    case 'SEVEN':
      isNum2 ? (state[0] += 7) : (state[2] += 7);
      return state;
    case 'EIGHT':
      isNum2 ? (state[0] += 8) : (state[2] += 8);
      return state;
    case 'NINE':
      isNum2 ? (state[0] += 9) : (state[2] += 9);
      return state;
    case 'DOT':
      isNum2 ? (state[0] += '.') : (state[2] += '.');
      return state;
    case 'PLUS':
      state[1] = '+';
      return state;
    case 'RESULT':
      let num1 = Number(state[0]);
      let num2 = Number(state[2]);
      if (state[1] == '+') {
        state[3] = num1 + num2;
      }
      if (state[1] == '-') {
        state[3] = num1 - num2;
      }
      if (state[1] == '/') {
        state[3] = num1 / num2;
      }
      if (state[1] == '*') {
        state[3] = num1 * num2;
      }
      if (state[1] == '%') {
        state[3] = num1 % num2;
      }

      return state;
    case 'RESET':
      return (state = [[], [], [], []]);
    default:
      return state;
  }
};

export default CalcReducer;
