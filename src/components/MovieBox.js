import React  from 'react';
import './Movie.css';


const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieBox = ({ title, poster_path, release_date, overview, runtime, onClick }) => {
 

  return (
    
    <div className='movie-card' onClick={onClick}>  
      <img src={API_IMG + poster_path} alt='Collection of movie' className='movie-card img' />
      <div className='movie-release-date'>
        <p>{release_date}</p>
      </div>  
      <div className='movie-title'>
        <h1>{title}</h1>
      </div>
      <div className='movie-runtime'>  
        <p>{runtime}</p>
      </div>
      <div className='overview'>
        <button className='button'>Overview</button>
        <p className='details'>{overview}</p>
      </div>
    </div>    
  )
}

export default MovieBox;
