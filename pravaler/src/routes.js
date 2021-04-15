import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Email from "./pages/School/email";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import School from "./pages/School/index";
import Simulator from "./pages/Simulator/index";
import Student from "./pages/Student/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/School" component={School} />
        <Route path="/Simulator" component={Simulator} />
        <Route path="/Student" component={Student} />
        <Route path="/Email" component={Email} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
