import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainPage from "../Routes/MainPage";
import MaskContainer from "../Routes/Mask";

export default () => (
  <Router>
    <>
      <Route exact path="/corona" component={MainPage} />
      <Route exact path="/mask" component={MaskContainer} />
    </>
  </Router>
);
