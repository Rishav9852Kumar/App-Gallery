import React from "react";
import {
  Card,
  CardBody,
  NavLink,
  Container,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
const Apps = ({ text, imgURL, link, desc }) => {
  return (
    <Container fluid>
      <NavLink tag={Link} to={link} className="apps">
        <Card className="text-center  mb-2 ">
          <img src={imgURL} className="w-100 hover-shadow" alt="" />
          <CardBody>
            <CardTitle className="text-primary">
              <u>
                <b>{text}</b>
              </u>
            </CardTitle>
            <CardText className="text-info">{desc}</CardText>
          </CardBody>
        </Card>
      </NavLink>
    </Container>
  );
};
export default Apps;
