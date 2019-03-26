import React, { Component } from "react";
import { getUser, getRepos } from "./API/GithubAPI.js";
import { Button } from "@material-ui/core";
export class Search extends Component {
  handleClick = async () => {
    const { user, handleAvatar, handleGit } = this.props;
    const reponse = await getUser(user);
    const repos = await getRepos(user);
    /* const list_repos = Object.values(repos).map(val => val.name);*/
    handleAvatar(reponse.avatar_url);
    handleGit(repos);
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}> Search</Button>
      </div>
    );
  }
}
