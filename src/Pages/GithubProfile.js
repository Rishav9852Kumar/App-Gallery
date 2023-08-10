import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Github = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("google");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate User", { type: "error" });
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  //put any page behind login//
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }
  return (
    <Container className="mb-5">
      <h3>Github Profile Generator </h3>
      <Row className=" mt-4">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />

            <Button onClick={fetchDetails} color="primary">
              Fetch User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};
export default Github;
