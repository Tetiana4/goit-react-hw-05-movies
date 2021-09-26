import { useState, useEffect } from 'react';
import { useParams, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { getMovieDeteilsPage } from '../../services/api';
import MovieInfoCard from './MovieInfoCard';
import  Cast  from '../MovieDetailsPage/Cast';

function MovieDetailsPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    // const [actors, setActors] = useEffect;
    
    useEffect(() => {
        getMovieDeteilsPage(movieId)
        .then(setMovie)
    }, [movieId])
    
    return (
        <>
        <MovieInfoCard movie={movie} />
           <ul>
                <li>
                  <NavLink to="/movies/:movieId/cast">
                    Show Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movies/:movieId/reviews">
                    Show Reviews
                  </NavLink>
                </li>
              </ul>
                <Switch>
                  <Route path="/movies/:movieId/cast">
                    <Cast movieId={movieId}></Cast>
                  </Route>
                  {/* <Route path="/movies/:movieId/reviews">
                    <Reviews movieId={movieId}></Reviews>
                  </Route> */}
                </Switch>
        </>
    )
 }

export default MovieDetailsPage;




