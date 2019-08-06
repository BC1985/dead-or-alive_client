import React from "react";
import "./Button.css";

function Button(props) {
  return <button id="button">{props.children}</button>;
}

export default Button;
