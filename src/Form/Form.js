import React from "react";
import "./Form.css";
import Button from "../Button/Button";

function Form() {
  return (
    <div className="form">
      <input type="text" name="name-input" id="name-input" />
      <Button>Search</Button>
    </div>
  );
}

export default Form;
