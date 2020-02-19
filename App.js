import React from "react";
import logo from "./logo finished.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Spark Of Creativity</code>
        </p>
        <a
          className="App-link"
          href="https://www.sparkofcreativity.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about us
        </a>
      </header>
    </div>
  );
}

export default App;
