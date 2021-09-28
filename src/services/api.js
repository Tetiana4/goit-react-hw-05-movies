import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'a97a44bb2f674ee3272cc719c5c287d9';

export const getTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return data.results;
};

export async function getMovieDetailsPage(movieId) {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
  return data;
}

export async function getActorsById(moviId) {
  const { data } = await axios.get(
    `/movie/${moviId}/credits?api_key=${KEY}&language=en-US`,
  );
  console.log(data.cast);

  return data.cast;
}

export async function getMoviesByName(query) {
  const { data } = await axios.get(
    `/search/movie?query=${query}api_key=${KEY}&language=en-US&page=1&include_adult=false`,
  );
  return data.results;
}
