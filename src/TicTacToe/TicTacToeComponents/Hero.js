import React,{useContext} from 'react';
import {useState} from "react";
import ThemeContext from "../TicTacToeContext/ThemeContext";
import AppTheme from "../Colors";
const Hero =()=>{
    const [themeMode,setThemeMode] = useContext(ThemeContext);
    const theme=useContext(ThemeContext)[0]
    const currentTheme=AppTheme[theme]
    const themeHook =useState("light");
    return(
        <div id="borderes"
        style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:'center'
        }}>
            <h1
       style={{
          textAlign:"center",
          padding:"0px",
          fontSize:"40px",
          fontWeight:"bold",
          color:"#ff0000",
          fontFamily:"cursive"
       }}>Tic Tac Toe Game </h1>
          <p>To change the background</p>
          <button
          onClick={()=>{
            setThemeMode(themeMode ==="light"?"dark":"light"); 
         }}
          style={{
              backgroundColor:`${themeHook[0]==="light"?"#ffd83d":"#f7f179"}`,
              padding:"10px 100px",
              fontSize:"10px",
              color:`${themeHook[0]==="light"?"black":"red"}`,
              border:`${currentTheme.border}`
          }}>
              Click Me 
          </button>
        </div>
    );
}

export default Hero;