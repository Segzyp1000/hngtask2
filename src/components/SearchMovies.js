import React, { useState } from 'react';
import './SearchMovies.css';


const SearchMovies = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className='search-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      
      />
      <button className='search-button' type="submit">Search</button>
    </form>
  );
};

export default SearchMovies;
