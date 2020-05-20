import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import Repositories from "./Repositories";
import Repository from "./Repository";

const AuthenticatedApplication = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/repositories">
          <Repositories />
        </Route>

        <Route path="/repositories/:id">
          <Repository />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <div>This path doesn't exist</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthenticatedApplication;
