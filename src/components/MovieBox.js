import React, { useState } from 'react';
import './Movie.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieBox = ({ title, poster_path, overview, release_date }) => {
  const [showOverview, setShowOverview] = useState(false);

  const handleButtonClick = () => {
    setShowOverview(!showOverview);
  }

  return (
    <div className='movie-card'>  
      <img src={API_IMG + poster_path} alt='Collection of movie' className='movie-card img' />
      <div className='movie-release-date'>
        <p>{release_date}</p>
      </div>  
      <div className='movie-title'>
        <h1>{title}</h1>
      </div>

      <button className='button-type' onClick={handleButtonClick}>view more</button>

      {showOverview && (
        <div className="overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      )}
    </div>    
  )
}

export default MovieBox;
