import React, {useState, Fragment} from 'react';
import { Redirect } from 'react-router-dom';

import './MovieList.scss';
import {IMAGE_BASE_URL} from '../../helpers/constants';

const MovieList = props => {
  const [id, setId] = useState(0);

  const goToDetail = id => {
    setId(id);
  }

  const renderRedirect = () => {
    if (id) {
      return <Redirect to={`/detail/${id}`} />
    }
  }
  
  return (
    <Fragment>
      {renderRedirect()}
      <div className="movie-container">
        {props.movies.map((movie) =>
          (<div key={movie.id} className="movie-card" onClick={() => goToDetail(movie.id)}>
            <img alt='img' key={movie.id} src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
          </div>))
        } 
      </div>
    </Fragment>
  )
};

export default MovieList;