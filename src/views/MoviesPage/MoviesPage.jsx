import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { getMoviesByName } from '../../services/api';
import SearchList from './SearchList';


const MoviesPage = () => {
  
    const [value, setValue] = useState(null);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get("query");
    setValue(queryValue);
  }, [location.search]);

  useEffect(() => {
    if (!value) return;
    getMoviesByName(value).then((movies) => {
      if (movies.length === 0) toast.error("Please type correct movie name");
      setMovies(movies);
    });
  }, [value]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchValue.value;
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setValue(query);
    };
    
    
    return (
        <>
        <form onSubmit={handleFormSubmit}>
        <input
          placeholder="type to search movies..."
          name="searchValue"
          type="text"
          autoComplete="off"
        ></input>
        <button type="submit">
        </button>
      </form>

            {MoviesPage && <SearchList movies={movies} />}
      <Toaster />
       </>
    )
}

export default MoviesPage;

