import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import Icon from "./TicTacToeComponents/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import ThemeContext from "./TicTacToeContext/ThemeContext";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Hero from "./TicTacToeComponents/Hero";

const itemArray = new Array(9).fill("empty");

const TicTacToe = () => {
  const themeHook = useState("light");
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const context = useContext(UserContext);
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };
  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[4] === itemArray[5] &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[7] === itemArray[8] &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[4] === itemArray[7] &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[5] === itemArray[8] &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[4] === itemArray[8] &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[4] === itemArray[6] &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage(`we have a Draw`);
    }
  };
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }
    checkIsWinner();
  };
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }
  return (
    <div
      style={{
        backgroundColor: `${themeHook[0] === "light" ? "#bec4c4" : "black"}`, //  this is that changes the background color //
      }}
    >
      <ThemeContext.Provider value={themeHook}>
        <Hero onResetGame={reloadGame} />
        {/* It here helps in Passing the reloadGame function */}
      </ThemeContext.Provider>
      <Container className="p-3">
        <ToastContainer position="bottom-center" />
        <Row className="row">
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-uppercase text-center text-success">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>
                  Reload the game{" "}
                </Button>
              </div>
            ) : (
              <h2
                className="text-center "
                style={{
                  color: `${themeHook[0] === "light" ? "black" : "white"}`,
                }}
              >
                {isCross ? "Cross's " : "Circle's "} turns
              </h2>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card
                  style={{
                    backgroundColor: `${
                      themeHook[0] === "light" ? "#DB0B5F" : "#ffc107"
                    }`,
                  }}
                  onClick={() => changeItem(index)}
                >
                  <CardBody className="box,boxi">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TicTacToe;
