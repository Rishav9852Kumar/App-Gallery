import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

import { Button, Container, Row, Col } from "reactstrap";
import QuotesCard from "./QuotesCard";
import "./Quotes.css";
const RandomQuotes = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("random");
  const [quote, setquote] = useState({});
  const getquote = async () => {
    try {
      const { data } = await Axios.get(`https://api.quotable.io/${query}`);

      setquote(data);
      console.log({ data });
    } catch (error) {
      toast("Failure while Generating the Quote ", { type: "error" });
    }
  };
  useEffect(() => {
    getquote();
  }, []);
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }
  return (
    <div
      style={{
        minHeight: "75vh",

        backgroundImage: "url(https://picsum.photos/200/300?random=1)",
      }}
    >
      <div class="container" id="quote-container">
        <div id="centered-heading">
          <h1 class="heading" id="QuoteTitle">
            Quote Generator
          </h1>
        </div>
      </div>
      <div class="field has-addons has-addons-centered" id="search-bar">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Find the quote on theme"
          />
        </div>
        <Button color="primary" onClick={getquote}>
          Search
        </Button>
      </div>
      <Container fluid className="p-3  App" style={{ minHeight: "70vh" }}>
        <Row>
          <Col md={4} className="offset-md-4 ">
            <QuotesCard quote={quote} />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="offset-md-5 ">
            <Button className="mt-3 mr-2 " color="warning" onClick={getquote}>
              New Quote
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default RandomQuotes;
