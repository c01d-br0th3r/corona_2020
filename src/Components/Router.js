import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "../Routes/MainPage";

export default () => (
  <Router>
    <>
      <Route exact path="/corona" component={MainPage} />
    </>
  </Router>
);
