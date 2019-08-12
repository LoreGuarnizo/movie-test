import React from 'react';

import './Input.scss';

const MovieList = ({query, setQuery}) => {
  return (
    <input
      placeholder="search for a movie"
      className="input-text"
      type="text"
      value={query}
      onChange={event => setQuery(event.target.value)}>
    </input>
  )
};

export default MovieList;