import { useState, useEffect } from 'react';
import { useParams, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Spinner } from '../../helpers/Loader';
import { getMovieDetailsPage, getActorsById, getReviewsById} from '../../services/api';
import MovieInfoCard from '../MovieInfoCard/MovieInfoCard';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [reviews, setReviews] = useState([]);
  
    
  useEffect(() => {
    setStatus('pending');
    getMovieDetailsPage(movieId)
      .then(setMovie)
      .catch((e) => console.log(e))
    
    getActorsById(movieId)
      .then(setCasts)
      .catch((e) => console.log(e))
    
    getReviewsById(movieId)
      .then(setReviews)
      .catch((e) => console.log(e))
  }, [movieId]);
    
    return (
      <>
        {status === 'pending' && <Spinner />}
        <MovieInfoCard movie={movie}/>
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
                     {casts &&<Cast casts={casts} ></Cast>} 
                  </Route>
                  <Route path="/movies/:movieId/reviews">
                      {reviews.length !== 0 && <Reviews reviews={reviews}/>}
                  </Route>
                </Switch>
        
        </>
    )
 }

export default MovieDetailsPage;




