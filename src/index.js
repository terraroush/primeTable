import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import { MyApp } from "./MyApp";

ReactDOM.render(
  <Router>
    <MyApp />
  </Router>,

  document.getElementById("root")
);
