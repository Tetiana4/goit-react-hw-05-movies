import axios from 'axios';
// import PropTypes from 'prop-types';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const KEY = 'a97a44bb2f674ee3272cc719c5c287d9';

// export const fetchTrendMovies = async () => {
//   const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
//   return data;
// };

export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=a97a44bb2f674ee3272cc719c5c287d9`,
  );
  return data.results;
};

export async function getMovieDeteilsPage(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a97a44bb2f674ee3272cc719c5c287d9&language=en-US`,
  );
  return data;
}

export async function getActorsById(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a97a44bb2f674ee3272cc719c5c287d9&language=en-US`,
  );
  console.log(data.cast);
  return data.cast;
}
