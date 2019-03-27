import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Home } from "./Home.js";
import AppBar from "@material-ui/core/AppBar";

import { Repository } from "./Repository";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppBar className="entete">GitHub DashBoard </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/repository/:id" component={Repository} />
          <Route render={() => <h1>Error 404 Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
//history.push("/repository/0089789")
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
