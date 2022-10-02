import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <button
          data-testid="btnminus"
          disabled={disabled}
          onClick={() => setCounter((prev) => prev - 1)}
        >
          {" "}
          -{" "}
        </button>
        <button
          data-testid="btnplus"
          disabled={disabled}
          onClick={() => setCounter((prev) => prev + 1)}
        >
          {" "}
          +{" "}
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          data-testid="on/off-btn"
          onClick={() => setDisabled((prev) => !prev)}
        >
          On/Off
        </button>
      </header>
    </div>
  );
}

export default App;
