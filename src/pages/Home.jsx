import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthContext } from "../context/Auth/authState";
import { imgUrl } from "../utils/helpers";

const Home = () => {
  const { logout, user } = useAuthContext();
  console.log(user, "from home");
  console.log(logout, "logout");
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
        Home Page
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-3"></div>
          <div
            className="col-xl-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card style={{ width: "22rem", padding: 10 }}>
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Title>{user?.name}</Card.Title>
                <Card.Text>{user?.email}</Card.Text>
                <Button onClick={logout}>Logout</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
