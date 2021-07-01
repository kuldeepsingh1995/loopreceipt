import React from "react";
import { Spinner } from "react-bootstrap";

const CustomSpinner = (props) => {
  return (
    <Spinner animation="border" role="status" {...props}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default CustomSpinner;
