import React, { Component } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes
import { TextInput } from "./TextInput.js";
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
    git: {}
  };

  componentDidUpdate(_, prevState) {
    const { git } = this.state;
    if (prevState.git !== git) console.log("changement");
  }
  handleReposUnmount = () => {
    this.setState({ renderRepos: false });
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
      <div className="milieu">
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
          {git.length && (
            <Chip
              avatar={<Avatar alt="Pas d'image" src={avatar} />}
              label={username}
            />
          )}
          <ul>
            {git.length && (
              <Repositories
                repos={git}
                user={username}
                history={this.props.history}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}
