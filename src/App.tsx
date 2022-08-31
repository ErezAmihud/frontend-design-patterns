import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  function reset() {
    setSeconds(0);
  }

  useEffect(() => {
    let interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {seconds}s
        </p>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
