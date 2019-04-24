import React, { Component } from "react";
import { getUser, getRepos } from "./API/GithubAPI.js";
import Paper from "@material-ui/core/Paper";
import "./repository.css";
import { RepositoryContext } from "./RepositoryContext.js";

export class Repository extends Component {
  render() {
    const tab_infos = JSON.parse(localStorage.getItem("tab_git"));
    return (
      <RepositoryContext.Consumer>
        {({ repository }) => (
          <div>
            <div className="padd">
              <p>Hello</p>
              <div>{repository.name}</div>
              <div>{repository.description}</div>
              <div>{repository.language}</div>
            </div>
          </div>
        )}
      </RepositoryContext.Consumer>
    );
  }
}
