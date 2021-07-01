import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/Auth/authState";
import CustomSpinner from "../components/CustomSpinner";

const Login = () => {
  const { login, loading } = useAuthContext();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(state);
    // toast("Wow so easy !");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
        Login Page
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3"></div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      value={state.password}
                      onChange={handleInputChange}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}
                  <Button type="submit">
                    {!loading ? "Login" : <CustomSpinner size="sm" />}
                  </Button>
                </Form>
                <Link to="/register">Don't Have An Account</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
