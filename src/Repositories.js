import React, { Component } from "react";
import { getUser, getRepos } from "./API/GithubAPI.js";
import Paper from "@material-ui/core/Paper";

export class Repositories extends Component {
  handleClick = () => {};
  render() {
    return (
      <div>
        {Object.values(this.props.repos).map(function(val, index) {
          return (
            <div key={index + 1}>
              <Paper key={index}>{val.name}</Paper>
              <br key={index + 2} />
            </div>
          );
        })}
      </div>
    );
  }
}
