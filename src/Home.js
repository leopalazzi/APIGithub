import React, { Component } from "react";
import { TextInput } from "./TextInput.js";
import { AppBar } from "./AppBar.js";
import { Search } from "./Search.js";
import { Repositories } from "./Repositories.js";

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
    const { renderRepos } = this.state;
    return (
      <div>
        <AppBar />
        <body>
          <br />
          <br />
          <br />
          <TextInput
            handleUsername={this.handleUserNameChanged("username")}
            valeur={this.state.username}
          />
          <Search
            handleAvatar={this.handleAvatarChanged}
            handleGit={this.handleGitChanged}
            user={this.state.username}
          />
          <div className="enLigne">
            <p>{this.state.username}</p>
            <img className="roundedImage" src={this.state.avatar} />
            <ul>
              {this.state.git.length && (
                <Repositories
                  repos={this.state.git}
                  user={this.state.username}
                  unmountRepos={this.handleReposUnmount}
                />
              )}
            </ul>
          </div>
        </body>
      </div>
    );
  }
}
