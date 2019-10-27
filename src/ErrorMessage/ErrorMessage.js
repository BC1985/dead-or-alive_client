import React, { Component } from "react";

class ErrorMessage extends Component {
  render() {
    if (this.props.isInputInvalid) {
      return (
        <p>Please enter alphabetical characters only, no numbers or symbols</p>
      );
    } else if (this.props.isInputEmpty) {
      return <p>Please Enter name</p>;
    } else {
      return <p>...</p>;
    }
  }
}

export default ErrorMessage;
