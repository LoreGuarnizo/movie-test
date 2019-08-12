import React from 'react';

import './MovieList.scss';
import {IMAGE_BASE_URL} from '../../helpers/constants';

const MovieList = props => {
  
  return (
  <div className="movie-container">
    {props.movies.map((movie,index) =>
      (<div key={index} className="movie-card">
        <img alt='img' key={index} src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
      </div>))
    } 
  </div>
  )
};

export default MovieList;