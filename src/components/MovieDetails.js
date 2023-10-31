import React from "react";

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = ({ title, overview,poster_path }) => {

    const backgroundImageStyle = {
        backgroundImage: `url(${API_IMG + poster_path})`,
      };
    
      return (
        <div className="movie-details" style={backgroundImageStyle}>
          <div className="overlay">
            <div className="content">
              <h2 className="title">{title}</h2>
              <p className="overview">{overview}</p>
            </div>
          </div>
        </div>
      );
  };
  
  export default MovieDetails;