import React, { Component } from "react";
import { TextInput } from "./TextInput.js";
import { AppBar } from "./AppBar.js";
import { Search } from "./Search.js";
import { Repositories } from "./Repositories.js";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

import "./home.css";

/*Token : a563435158e660517fb17dbca440ec52fa7eda38 */

export class Home extends Component {
  state = {
    username: "",
    avatar: "",
    git: {},
    renderRepos: true
  };

  handleReposUnmount = () => {
    this.setState({ renderRepos: false });
  };
  handleClick = () => {
    console.log("clik");
  };

  handleUserNameChanged = key => userName => {
    this.setState({
      [key]: userName
    });
  };

  handleAvatarChanged = lien => {
    this.setState({
      avatar: lien
    });
  };

  handleGitChanged = valeur => {
    this.setState({
      git: valeur
    });
  };
  render() {
    const { username, git, avatar } = this.state;
    return (
      <div>
        <AppBar />
        <TextInput
          handleUsername={this.handleUserNameChanged("username")}
          valeur={username}
        />
        <Search
          handleAvatar={this.handleAvatarChanged}
          handleGit={this.handleGitChanged}
          user={username}
        />
        <div>
          <Chip
            avatar={<Avatar alt="Pas d'image" src={avatar} />}
            label={username}
          />
          <ul>{git.length && <Repositories repos={git} user={username} />}</ul>
        </div>
      </div>
    );
  }
}
