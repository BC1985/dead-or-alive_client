import React, { Component } from "react";
import "./Form.css";
import Button from "../Button/Button";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <input type="text" name="name-input" id="name-input" />
        <Button>Search</Button>
      </div>
    );
  }
}

export default Form;
