import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'a97a44bb2f674ee3272cc719c5c287d9',
};

export const getTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?`);
  return data.results;
};

export async function getMovieDetailsPage(movieId) {
  const { data } = await axios.get(`/movie/${movieId}?`);
  return data;
}

export async function getActorsById(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits?&language=en-US`);
  return data.cast;
}

export async function getMoviesByName(query) {
  const { data } = await axios.get(
    `/search/movie?query=${query}&language=en-US&page=1&include_adult=false`,
  );
  return data.results;
}

export async function getReviewsById(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews?&language=en-US`);
  return data.results;
}
