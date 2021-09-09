import { Route, Switch } from "react-router-dom";

import About from "../Components/About";
import Certificates from "../Components/Certificates";
import Contact from "../Components/Contact";
import HomePage from "../Components/HomePage";
import Portfolio from "../Components/Portfolio";
import React from "react";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/certificates" component={Certificates} />
  </Switch>
);

export default Routes;
