import { useState, useEffect } from 'react';
import { useParams, Switch } from 'react-router';

import { Route } from 'react-router-dom';
import { Spinner } from '../../helpers/Loader';
import { getMovieDetailsPage, getActorsById, getReviewsById} from '../../services/api';
import MovieInfoCard from '../MovieInfoCard/MovieInfoCard';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import {List, Item, NavLinkStyle} from './MoviedetailsPage.styled'

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
        {movie && <MovieInfoCard movie={movie}/>}
           <List>
                <Item>
                  <NavLinkStyle to="/movies/:movieId/cast">
                    Show Cast
                  </NavLinkStyle>
                </Item>
                <Item>
                  <NavLinkStyle to="/movies/:movieId/reviews">
                    Show Reviews
                  </NavLinkStyle>
                </Item>
              </List>
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




