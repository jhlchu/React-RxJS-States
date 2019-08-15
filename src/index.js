import React from "react";
import ReactDOM from "react-dom";

import View1 from "./Components/View1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <View1 />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
