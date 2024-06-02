import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";



function App() {
  const [counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App;
