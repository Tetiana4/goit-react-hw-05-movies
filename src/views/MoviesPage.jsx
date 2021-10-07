import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { getMoviesByName } from '../services/api';
import SearchList from '../components/SearchList/SearchList';
import SearchBar from '../components/SearchBar/SearchBar';
import { Spinner } from '../helpers/Loader';


const MoviesPage = () => {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get("query");
    setValue(queryValue);
  }, [location.search]);

  useEffect(() => {
    if (!value) return;
    getMoviesByName(value)
      .then((movies) => {
        if (movies.length === 0) {
          toast.error("Please type correct movie name")
        }
        setMovies(movies);
        setStatus('resolved')
      });
  }, [value, setStatus]);


  
  const onSubmit = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setValue(value);
  };
    
    
  return (
    <>
      {status === 'pending' && <Spinner />}
      <SearchBar onSubmit={onSubmit} />
      {value && <SearchList movies={movies} />}
      <Toaster />
    </>
  )
}

export default MoviesPage;

