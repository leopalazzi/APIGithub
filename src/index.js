import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Home } from "./Home.js";
import AppBar from "@material-ui/core/AppBar";

import { Repository } from "./Repository";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RepositoryContext } from "./RepositoryContext.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateRepo = value => {
      this.setState({ repository: value });
    };
    this.state = {
      repository: {},
      setRepository: this.updateRepo
    };
  }
  render() {
    return (
      <BrowserRouter>
        <AppBar className="entete">GitHub DashBoard </AppBar>
        <RepositoryContext.Provider value={this.state}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/repository" component={Repository} />
            <Route render={() => <h1>Error 404 Not Found</h1>} />
          </Switch>
        </RepositoryContext.Provider>
      </BrowserRouter>
    );
  }
}
//history.push("/repository/0089789")
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
