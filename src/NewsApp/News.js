import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Newss from "./NewsCards";
import NewsHeadline from "./NewsHeadlines";
const News = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [headlines, setHeadlines] = useState(null);
  const [page, setPage] = useState(1);
  const fetchDefaultHeadlines = async () => {
    {
      console.log(page);
    }
    try {
      const { data } = await Axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_97776e46c9f98699cb4593e514b06ea64cac&language=en&category=top&country=in,us&q=${query}`
      );

      setHeadlines(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to find the topic ", { type: "error" });
    }
  };
  const fetchDefault = async () => {
    {
      console.log(page);
    }
    try {
      const { data } = await Axios.get(
        `https://content.guardianapis.com/world?page=${page}&api-key=a200c175-5024-4bcb-8e9c-101e5399d1fb&page-size=13`
      );

      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to find the topic ", { type: "error" });
    }
  };
  const fetchDetails = async () => {
    {
      console.log(page);
    }
    try {
      const { data } = await Axios.get(
        `https://content.guardianapis.com/search?page=${page}&q=${query}&api-key=a200c175-5024-4bcb-8e9c-101e5399d1fb&page-size=13`
      );

      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to find the topic ", { type: "error" });
    }
  };
  const getnextpage = async () => {
    setPage(page + 1);
    if (query == "") {
      fetchDefault();
    } else {
      fetchDetails();
    }
  };

  const getprevpage = async () => {
    if (page > 1) {
      setPage(page - 1);
      if (query == "") {
        fetchDefault();
      } else {
        fetchDetails();
      }
    }
  };
  const alldefault = async () => {
    setPage(1);

    fetchDefault();
    setQuery("");
  };
  const sportsnews = async () => {
    setQuery("sports");
    fetchDetails();
    fetchDefaultHeadlines();
  };
  const politicsnews = async () => {
    setQuery("politics");
    fetchDetails();
    fetchDefaultHeadlines();
  };
  const fashionnews = async () => {
    setQuery("Fashion");
    fetchDetails();
    fetchDefaultHeadlines();
  };
  const financenews = async () => {
    setQuery("Finance");
    fetchDetails();
  };
  const technologynews = async () => {
    setQuery("Technology");
    fetchDetails();
    fetchDefaultHeadlines();
  };

  useEffect(() => {
    alldefault();
    fetchDefaultHeadlines();
  }, []);
  //put any page behind login//
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }
  return (
    <Container className="mb-2">
      <div class="container" id="quote-container">
        <div id="centered-heading">
          <h1 class="heading" id="QuoteTitle">
            News Shorts
          </h1>
        </div>
      </div>

      <Row className=" mt-4">
        <Col md="5">
          <InputGroup>
            <Input
              className=" is-rounded is-small  is-loading is-primary "
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the topic"
            />
            <Button
              onClick={fetchDetails}
              color="primary"
            >
              search
            </Button>
          </InputGroup>

          <div class="buttons mt-1">
            <button class="button is-info is-light" onClick={sportsnews}>
              Sports
            </button>
            <button class="button is-success is-light" onClick={technologynews}>
              Tech
            </button>
            <button class="button is-warning is-light" onClick={politicsnews}>
              Politics
            </button>
            <button class="button is-primary is-light" onClick={fashionnews}>
              Fashion
            </button>
            <button class="button is-link is-light" onClick={financenews}>
              Finance
            </button>
            <Button outline color="info" onClick={alldefault}>
              Refresh{" "}
            </Button>
          </div>
          <h5 className="is-uppercase has-text-weight-semibold has-text-centered has-text-weight-bold	">
            Top Headlines
          </h5>

          {headlines?.results.map((result) => (
            <NewsHeadline key={result} user={result} />
            // Here is the news api
          ))}
        </Col>
        <Col md="">
          <h2 className="is-uppercase has-text-weight-semibold">
            Ordered By: {query}
          </h2>
          <nav
            class="pagination is-rounded is-small"
            role="navigation"
            aria-label="pagination"
          >
            <button
              onClick={getprevpage}
              className="pagination-previous "
              title="This is the first page"
            >
              prev
            </button>
            <button
              onClick={fetchDetails}
              className="pagination-previous "
              title="This is the first page"
            >
              {" "}
              Current :{user?.response.currentPage}
            </button>
            <button onClick={getnextpage} className="pagination-next">
              next
            </button>
          </nav>

          {user?.response?.results.map((result) => (
            <Newss key={result.id} user={result} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default News;
