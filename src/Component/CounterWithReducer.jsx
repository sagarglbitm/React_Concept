import React, { useReducer } from 'react';

// 1️⃣ Initial state
const initialState = { count: 0 };

// 2️⃣ Reducer function to manage state
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function CounterWithReducer() {
  // 3️⃣ useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default CounterWithReducer;
