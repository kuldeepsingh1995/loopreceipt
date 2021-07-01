import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import AuthState from "../context/Auth/authState";

const HomeRouter = () => {
  return (
    <>
      <Router>
        <AuthState>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </AuthState>
      </Router>
    </>
  );
};

export default HomeRouter;
