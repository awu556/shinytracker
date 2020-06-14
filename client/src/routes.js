import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/landingPage";
import Pokedex from "./components/pokedex";

const Routes = () => {
  return (
    <Switch>
      <Route path="/landingPage" component={LandingPage} />
      <Route path="/pokedex" component={Pokedex} />
    </Switch>
  );
};

export default Routes;
