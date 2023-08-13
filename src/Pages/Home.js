import React, { useContext } from "react";

import { Row, Col, Container } from "reactstrap";

import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Apps from "../components/AppIntroComponent";
import news from "../Gallery/images.jpg";
import github from "../Gallery/download.jpg";

const Home = () => {
  const context = useContext(UserContext);

  //put any page behind login//
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }
  return (
    <Container className="mb-5 " fluid>
      <Row className=" mt-2">
        <Col>
          <Apps
            text="Github Progile Generator"
            imgURL={github}
            link="/github"
            desc="You can get any company/Group/individual's presonal details, repo details with most used language and links to projects "
          />

          <Apps
            text="TIC TAC TOE "
            imgURL="https://thumbs.dreamstime.com/b/tic-tac-toe-26431470.jpg"
            link="/tictactoe"
            desc='The name Tic Tac Toe or "Tit Tat Toe". Achieve 3 pieces in a line securing the winning combination '
          />
        </Col>

        <Col>
          <Apps
            text="News Updates "
            imgURL={news}
            link="/news"
            desc="Here you can get all current and trending news/articles and reports along with tag specific search "
          />

          <Apps
            text="Movie Recommendation "
            imgURL="https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg"
            link="/testingpage2"
            desc=". . . . . . . . . . . "
          />
        </Col>

        <Col>
          <Apps
            text="Quotes-Pedia "
            imgURL="https://repository-images.githubusercontent.com/300838341/14d2d900-d9e6-11eb-9456-7bec7042c083"
            link="/randomquotes"
            desc="Quotes by famous presonalities are a good way to prove your point in any discussion or to showcase your knowledge of literature "
          />
          <Apps
            text="Bank Atm "
            imgURL="https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg"
            link="/testingpage2"
            desc=". . . . . . . . . . . "
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
