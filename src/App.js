import React, {useState, useEffect} from "react";
import './App.css';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(false)
    useEffect(() => {
        if (start) {
            console.log('im here');
            window.setInterval(() => {
                console.log('tik tock');
                setSeconds(seconds => seconds+1);
            }, 1000);
        }
    }, [start]);

  return (
    <div className="App">
        <div className="Outer-circle"></div><div className="Inner-circle">
          <p className="Timer">{seconds}</p>
      </div>
          <div className="Buttons">
              <button className="Play-button" onClick={() => setStart(true)}>
                  <div className="Triangle"></div>
              </button>
              <button className="Pause-button" onClick={() => setStart(false)}>
                <div className="Outer-square">
                    <div className="Inner-square"></div>
                </div>
              </button>
              <button className="Stop-button" onClick={() => setStop(true)}>
                    <div className="Square"></div>
              </button>
          </div>
    </div>
  );
}

export default App;
