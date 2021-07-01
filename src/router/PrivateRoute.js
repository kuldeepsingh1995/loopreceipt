import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/Auth/authState";

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
  const { token } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
