import React, {useContext } from "react";


import {
  Row,
  Col,
  Container,
} from "reactstrap";

import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Tools from "../components/Tools";
import news from "../Gallery/images.jpg";
import github from "../Gallery/download.jpg";
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
            <Tools text="Github Progile Generator" imgURL={github} link="/github" desc="You can get any company/Group/individual's presonal details, repo details with most used language and links to projects "/>
            </Col>
            <Col>
            <Tools text="Animal Predictor " imgURL="https://mdbootstrap.com/img/new/standard/city/041.webp" link="/animal" desc=".."/>
            </Col>
            <Col>
            <Tools text="News Updates " imgURL={news} link="/news" desc="Here you can get all current and trending news/articles and reports along with tag specific search "/>
            </Col>
          </Row>
        
        </Container>
      );
};
export default Home;