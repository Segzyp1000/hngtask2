
import './App.css';
import React,{useEffect, useState} from 'react'
import MovieBox from './components/MovieBox';
import MovieDetails from './components/MovieDetails';
import SearchMovies from "./components/SearchMovies";


const API_SEARCH='https://api.themoviedb.org/3/search/movie?api_key=beadd6ccf86cde03d94c1a7faa315cf8'
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=beadd6ccf86cde03d94c1a7faa315cf8';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (query) => {
    const searchUrl = `${API_SEARCH}&query=${query}`;

    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=> res.json())
    .then((data)=> {
      setMovies(data.results);
    })
    .catch((error)=> {
      console.log('Error fetching search results:', error)
    })
  },[])

  const handleMovieClick = (data) => {
    setSelectedMovie(data);
  };




  return (
    <div className='container'>
       <SearchMovies onSearch={handleSearch} />     
      {selectedMovie && (
        <MovieDetails 
        title={selectedMovie.title} 
        overview={selectedMovie.overview} 
        poster_path={selectedMovie.poster_path}
        handleSearch={handleSearch}
        />
      )}
      <div className='movie-grid'>    
      {movies.map((data)=> (
      <MovieBox
            key={data.id}
            title={data.title}
            poster_path={data.poster_path}
            release_date={data.release_date}
            runtime={data.runtime}
            onClick={() => handleMovieClick(data)}
    />
      ))}  
    </div>
    </div> 
)
  }

export default App   