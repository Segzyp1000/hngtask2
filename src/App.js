import './App.css';
import React,{useEffect, useState} from 'react'
import MovieBox from './components/MovieBox';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=beadd6ccf86cde03d94c1a7faa315cf8';
const App = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(()=>{
    fetch(API_URL)
    .then((res)=> res.json())
    .then((data)=> {
      setMovies(data.results.slice(0, 10));
    })
  },[])
  return (
    <div className='container'>
      <div className='movie-grid'>
      {movies.map((data)=> 
      <MovieBox
      title={data.title}
      poster_path={data.poster_path}
      release_date={data.release_date}
      overview={data.overview}
      runtime={data.runtime}
    />
      )}
    
    </div>
    </div> 
)
  }

export default App
