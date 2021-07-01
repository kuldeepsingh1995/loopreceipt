import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomSpinner from "../components/CustomSpinner";
import { useAuthContext } from "../context/Auth/authState";

const Register = (props) => {
  const { register, loading } = useAuthContext();
  console.log(loading, "loading");
  console.log(register);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...allFields } = state;
    register(allFields, () => {
      setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    });
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
        Register Page
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3"></div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      value={state.name}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      value={state.email}
                      onChange={handleInputChange}
                      type="email"
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
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      value={state.confirmPassword}
                      onChange={handleInputChange}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    {!loading ? "Register" : <CustomSpinner size="sm" />}
                  </Button>
                </Form>
                <Link to="/login">Have An Account</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
