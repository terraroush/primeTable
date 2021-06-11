import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import { MyApp } from "./MyApp";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyApp />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


