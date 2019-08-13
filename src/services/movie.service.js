import {API_KEY} from '../helpers/constants';

export const getAllMovies = async() => {
  const movies = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
  const moviesToJson = await movies.json();
  return moviesToJson.results;
}

export const filterMovies = async query => {
  const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
  const moviesToJson = await movies.json();
  return moviesToJson.results;
}


export const getMovieById = async id => {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const movieToJson = await movie.json();
  return movieToJson;
}