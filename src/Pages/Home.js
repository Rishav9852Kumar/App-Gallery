import React, {useContext } from "react";


import {
  Row,
  Col,
  Container,
} from "reactstrap";

import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Tools from "../components/Tools";
const Home=()=>{
    const context =useContext(UserContext)
  
    //put any page behind login//
    if(!context.user?.uid)
    {
      return <Navigate to="/signin"/>;
    }
    return (
        <Container className="mb-5" fluid>
          <Row className=" mt-2">
            <Col >
            <Tools text="Github Progile Generator" imgURL="https://mdbootstrap.com/img/new/standard/city/041.webp" link="/github" desc=".."/>
            </Col>
            <Col>
            <Tools text="Github Progile Generator" imgURL="https://mdbootstrap.com/img/new/standard/city/041.webp" link="/github" desc=".."/>
            </Col>
            <Col>
            <Tools text="Github Progile Generator" imgURL="https://mdbootstrap.com/img/new/standard/city/041.webp" link="/github" desc=".."/>
            </Col>
          </Row>
        
        </Container>
      );
};
export default Home;