import React, {useState, useEffect} from "react";
import {useDocTitle} from './customHooks';
import './App.scss';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [intervalID, setIntervalID] = useState(null);

    useEffect(() => {
        if (running) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds+1);
            }, 1000);
            setIntervalID(id);
        } else {
            window.clearInterval(intervalID);
        }
    }, [running]);
    document.title = seconds;
  return (
    <div className="App">
        <div className="Outer-circle"></div><div className="Inner-circle">
          <p className="Timer">{seconds}</p>
      </div>
          <div className="Buttons">
              { running ? (
                  <button className="Pause-button" onClick={() => setRunning(false)}>
                      <div className="Outer-square">
                          <div className="Inner-square"></div>
                      </div>
                  </button>
                  ) : (
                  <button className="Play-button" onClick={() => setRunning(true)}>
                      <div className="Triangle"></div>
                  </button>
                  )
              }
              <button className="Stop-button" disabled={!running}
                      onClick={() => {
                          setRunning(false);
                          setSeconds(0);
                      }}>
                    <div className="Square"></div>
              </button>
          </div>
    </div>
  );
}

export default App;
