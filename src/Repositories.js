import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { RepositoryContext } from "./RepositoryContext.js";
export class Repositories extends Component {
  handleClick = () => {};
  render() {
    const { history, repos } = this.props;
    return (
      <ul>
        {repos.map(repo => (
          <RepositoryContext.Consumer key={repo.id}>
            {({ setRepository }) => (
              <Paper
                onClick={() => {
                  setRepository(repo);
                  history.push(`/repository`);
                }}
              >
                {repo.name}
              </Paper>
            )}
          </RepositoryContext.Consumer>
        ))}
      </ul>
    );
  }
}
Repositories.propTypes = {
  repos: PropTypes.array.isRequired
};
