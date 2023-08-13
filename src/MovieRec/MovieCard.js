import React from "react";
import './Movie.css'; // Make sure to link the CSS file

const MovieCard = ({ title, genre, year }) => {
  return (
    <div className="movie-card">
      <div>
        <h2 className="movie-title">{title}</h2>
        <p className="movie-info">
          {genre} | {year}
        </p>
      </div>
      <button className="movie-button">Recommend</button>
    </div>
  );
};

export default MovieCard;
