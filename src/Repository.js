import React, { Component } from "react";
import { getUser, getRepos } from "./API/GithubAPI.js";
import Paper from "@material-ui/core/Paper";
import "./repository.css";

export class Repository extends Component {
  render() {
    const tab_infos = JSON.parse(localStorage.getItem("tab_git"));
    return (
      <div className="padd">
        {tab_infos.map(function(val, index) {
          return (
            <div key={index}>
              <p />
              <Paper>{val}</Paper>
            </div>
          );
        })}
      </div>
    );
  }
}
