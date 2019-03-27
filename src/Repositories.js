import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

export class Repositories extends Component {
  handleClick = () => {};
  render() {
    const { history } = this.props;
    return (
      <div>
        {Object.values(this.props.repos).map(function(val, index) {
          return (
            <div key={index + 1}>
              <Paper
                key={index}
                name={val.name}
                onClick={() => {
                  const tab = new Array();
                  history.push(`/repository/${val.id}`);

                  tab.push("Maj le: " + val.updated_at);
                  tab.push("Crée le: " + val.created_at);
                  tab.push("Description: " + val.description);
                  tab.push("Nom: " + val.name);
                  tab.push("Language: " + val.language);
                  tab.push("Lien: " + val.html_url);
                  localStorage.setItem("tab_git", JSON.stringify(tab));
                }}
              >
                {val.name}
              </Paper>
              <br key={index + 2} />
            </div>
          );
        })}
      </div>
    );
  }
}
Repositories.propTypes = {
  repos: PropTypes.array.isRequired
};
