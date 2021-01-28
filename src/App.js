import React, {useState, useEffect} from "react";
import './App.css';

function App() {
    const [seconds, setSeconds] = useState(0);
  return (
    <div className="App">
        <div className="Outer-circle"></div><div className="Inner-circle">
          <p className="Timer">0:00</p>
      </div>
          <div className="Buttons">
              <button className="Play-button">
                  <div className="Triangle"></div>
              </button>
              <button className="Pause-button">
                <div className="Sticks">
                    <div className="Stick1"></div>
                    <div className="Stick2"></div>
                </div>
              </button>
              <button className="Stop-button">

              </button>
          </div>
    </div>
  );
}

export default App;
