import './App.css';

import React, { useReducer, useEffect, useRef } from 'react';

interface State {
  counter: number
}

const initialState: State = {
  counter: 0
};

type CounterIncreaseMsg = {
  type: "CounterIncreaseMsg";
};

type ResetCounterMsg = {
  type: "ResetCounterMsg";
};

type Msg = CounterIncreaseMsg | ResetCounterMsg;


function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

function update(state: State, msg: Msg) {
  switch (msg.type) {
    case "CounterIncreaseMsg": {
      return { ...state, counter: state.counter+1 };
    }
    case "ResetCounterMsg": {
      return { ...state, counter: 0 };
    }
  }

  return assertUnreachable(msg);
}




function App() {
  const [state, dispatch] = useReducer(update, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "CounterIncreaseMsg" });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {state.counter}s
        </p>
        <button className="button" onClick={(e) => dispatch({type: "ResetCounterMsg"})}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
