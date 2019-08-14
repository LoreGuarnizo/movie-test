import React, { useEffect, useState  } from 'react';

import './Search.scss';
import { getAllMovies, filterMovies } from '../../services/movie.service';
import MovieList from '../MovieList';
import Rating from '../Rating';
import Input from '../Input';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("");

  const getMoviesFromAPI = async(query, rating) => {
    let newMovies = [];
    if(query){
      newMovies = await filterMovies(query);
    }else{
      newMovies = await getAllMovies();
    }
    if(rating) {
      newMovies = newMovies.filter(movie => movie.vote_average > (rating - 2) && movie.vote_average <= rating);
    }
    setMovies(newMovies);
  }

  useEffect(() => {
    getMoviesFromAPI(query, rating);
  },[query, rating]);

  return (
  <div className="search-container">
    <header className="title">Movies</header>
    <div className="search-bar">
      <div className="search-elements">
        <Input query={query} setQuery={setQuery} />
        <Rating rating={rating} setRating={value => setRating(value)} />
      </div>
    </div>
    <MovieList movies={movies} />
    {
      !movies.length &&<p>No Result Found</p>
    }
  </div>
  )
};

export default Search;
