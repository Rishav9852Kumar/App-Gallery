import React, { useContext } from "react";
import { useState } from "react";
import ThemeContext from "../TicTacToeContext/ThemeContext";
import AppTheme from "../Colors";
const Hero = ({ onResetGame }) => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const themeHook = useState("light");

    const handleChangeBackgroundColor = () => {
      // Simulate an action that triggers game reset on the first click
      const num = Math.random();
      if (num > 0.5) {
        onResetGame();
      } else {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }
    };

  return (
    <div
      id="borderes"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <div class="container" id="quote-container">
        <div id="centered-heading">
          <h1 class="heading" id="QuoteTitle">
            Tic Tac Toe X-O
          </h1>
        </div>
      </div>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: `${themeHook[0] === "light" ? "grey	" : "black"}`,
          fontSize: "20px",
          margin: "20px",
          padding: "10px",
          fontWeight: "bold",
          fontFamily: "cursive",
          color: "white",
          border: `${currentTheme.border}`,
        }}
      >
        Change Background
      </button>
      <button
        onClick={() => {
          onResetGame();
          handleChangeBackgroundColor();
        }}
        style={{
          backgroundColor: `${themeHook[0] === "light" ? "grey	" : "black"}`,
          fontSize: "20px",
          margin: "20px",
          padding: "10px",
          fontWeight: "bold",
          fontFamily: "cursive",
          color: "white",
          border: `${currentTheme.border}`,
        }}
      >
        Reset The Game
      </button>
    </div>
  );
};

export default Hero;
