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
import Snova from "./Snovapack";
import ShakeNBake from "./Shakenbake";
import Crud from "./Crud";
import Kraken from "./Kraken";
import Guesstimators from "./Guesstimators";
import Gringotts from "./Gringotts";
import QeOverview from "./QeOverview";

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
    <Route path="/snovapack" component={Snova} />
    <Route path="/shakenbake" component={ShakeNBake} />
    <Route path="/crud" component={Crud} />
    <Route path="/qe_overview" component={QeOverview} />
  </Switch>
);

export default Main;
