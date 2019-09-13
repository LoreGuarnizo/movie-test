import React from 'react';
import { Link } from 'react-router-dom';

import './MovieList.scss';
import { IMAGE_BASE_URL } from '../../helpers/constants';

const MovieList = (props) => (
	<div className="movie-container">
    {props.movies.map((movie) => (
      <Link to={`/detail/${movie.id}`} key={movie.id} className="movie-card">
        <img alt="img" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
      </Link>
    ))}
	</div>
);

export default MovieList;
