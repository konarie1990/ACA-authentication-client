import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import cookie from "cookie";
import Home from "./components/Home";
import Dashboard from "./containers/Dashboard";
import NotFound from "./components/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authToken") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <PrivateRoute path="/dashboard" component={Dashboard} />

    <Route component={NotFound} />
  </Switch>
);

export default Router;
