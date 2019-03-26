import React, { Component } from "react";
import FilledInput from "@material-ui/core/FilledInput";

export class TextInput extends Component {
  handleChange = event => {
    const { handleUsername } = this.props;
    handleUsername(event.target.value);
  };

  render() {
    return (
      <div>
        <FilledInput
          placeholder="Username"
          onChange={this.handleChange}
          value={this.props.valeur}
        />
      </div>
    );
  }
}
