import React from "react";
import Results from "./Results";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Results />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer.create(<Results />).toJSON();
  expect(tree).toMatchSnapshot();
});
