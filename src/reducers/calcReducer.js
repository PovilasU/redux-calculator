const CalcReducer = (state = [[], [], [], []], action) => {
  switch (action.type) {
    case 'ONE':
      if (state[1].length == 0) {
        state[0] += 1;
      } else state[2] += 1;
      return state;
    case 'TWO':
      if (state[1].length == 0) {
        state[0] += 2;
      } else state[2] += 2;
      return state;
    case 'PLUS':
      state[1] = '+';
      return state;
    case 'RESULT':
      if (state[1] == '+') {
        state[3] = Number(state[0]) + Number(state[2]);
      }
      if (state[1] == '-') {
        state[3] = Number(state[0]) - Number(state[2]);
      }
      if (state[1] == '/') {
        state[3] = Number(state[0]) / Number(state[2]);
      }
      if (state[1] == '*') {
        state[3] = Number(state[0]) * Number(state[2]);
      }
      if (state[1] == '%') {
        state[3] = Number(state[0]) % Number(state[2]);
      }

      return state;
    case 'RESET':
      return (state = [[], [], [], []]);
    default:
      return state;
  }
};

export default CalcReducer;
