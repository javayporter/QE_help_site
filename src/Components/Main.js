import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import Automation from "./Automation";
import Resources from "./Resources";
import Procedures from "./Procedures";
import Helpful from "./Helpful";
import RegistrationForm from "./Login/RegistrationForm";
import userLoginForm from "./Login/userLoginForm";
import Applications from "./Tools";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/tools" component={Applications} />
    <Route path="/automation" component={Automation} />
    <Route path="/resources" component={Resources} />
    <Route path="/procedures" component={Procedures} />
    <Route path="/helpful" component={Helpful} />
    <Route path="/register" component={RegistrationForm} />
    <Route path="/login" component={userLoginForm} />
  </Switch>
);

export default Main;
