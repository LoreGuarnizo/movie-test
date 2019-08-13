import React, {useEffect, useState} from 'react';

import { IMAGE_BASE_URL } from '../../helpers/constants';
import { getMovieById } from '../../services/movie.service';
import './MovieDetail.scss';

const MovieDetail = ({match}) => {
  const [movie, setMovie] = useState({});
  const id = useState(match.params.id)[0];

  const getMovieDetail = async(id) => {
    const datail = await getMovieById(id);
    setMovie(datail);
  } 

  useEffect(() => {
    getMovieDetail(id);
  },[id]);

  return (
    <div className="movie-detail-container">
      <header className="title">{movie.original_title}</header>
      <div className="movie-detail">
        <div className="left-content">
          <img alt='img' src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
        </div>
        <div className="rigth-content">
          <div className="down">
            {movie.genres && movie.genres
              .map((genre,index) => <span>{`${genre.name}${( movie.genres.length > 0 
              && index !== movie.genres.length - 1) ? ' | ' : ''}`}</span>)} 
          </div>
          <div className="centered">{movie.tagline }</div>
          <div className="stars-content">
            <span className="icons">★</span>
            <span className="span-text">
              {movie.vote_average}
              <span className="span-small">
                {movie.vote_count}
              </span>
            </span> 
          </div>
        </div>
      </div>
      <p className="description-text">{movie.overview}</p>
    </div>
  )
};

export default MovieDetail;