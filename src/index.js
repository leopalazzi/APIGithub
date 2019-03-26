import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Home } from "./Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
