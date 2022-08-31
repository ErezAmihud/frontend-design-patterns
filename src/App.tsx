import './App.css';

import React, { useEffect, useState } from 'react';
import {observer} from 'mobx-react'
import { makeAutoObservable, action } from "mobx"

export class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }

    
    reset = action(() => {
        this.secondsPassed = 0;
    })
}

const TimerView = observer(() => {
    const [timer] = useState(() => new Timer()) // See the Timer definition above.

    useEffect(() => {
      const handle = setInterval(() => {
          timer.increaseTimer()
      }, 1000)
      return () => {
          clearInterval(handle)
      }
    }, [timer])

    return (<div>
      <p>
        {timer.secondsPassed}s
        </p>
        <button className="button" onClick={timer.reset}>
          Reset
        </button>
      </div>
    )
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerView />
      </header>
    </div>
  );
}

export default App;
