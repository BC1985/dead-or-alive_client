import React, { Component } from "react";
import "./Form.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

class Form extends Component {
  state = {};

  render() {
    return (
      <div className="form">
        <input type="text" name="name-input" id="name-input" />
        {!this.props.alive ? (
          <Link to="/results-dead">
            <Button>Search</Button>
          </Link>
        ) : (
          <Link to="/results-alive">
            <Button>Search</Button>
          </Link>
        )}
      </div>
    );
  }
}

export default Form;
