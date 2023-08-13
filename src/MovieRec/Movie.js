import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Movie.css";
import MovieCard from "./MovieCard";
const Movie = () => {
  const context = useContext(UserContext);
  
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }
  return (
    <div className="movieBackground">
      <h1 className="movieTitle">Hello movie fans</h1>
      <div className="movie">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00338629-adeyjbxpah-portrait.jpg" />
        <img src="https://timesofindia.indiatimes.com/photo/81274581.cms" />
        <img src="https://www.justwatch.com/images/poster/301409738/s332/adipurush" />
        <img src="https://timesofindia.indiatimes.com/photo/82424835.cms" />
        <img src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg" />
      </div>
    </div>
  );
};
export default Movie;
