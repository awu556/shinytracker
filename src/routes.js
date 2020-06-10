import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/landingPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/landingPage" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
