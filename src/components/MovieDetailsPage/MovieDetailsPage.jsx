import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { useParams, Switch } from 'react-router';
import { FiChevronLeft } from "react-icons/fi";
import { getMovieDetailsPage, getActorsById, getReviewsById} from '../../services/api';
import MovieInfoCard from '../MovieInfoCard/MovieInfoCard';
import { Spinner } from '../../helpers/Loader';
import { List, Item, NavLinkStyle, Button } from './MoviedetailsPage.styled'

const Cast = lazy (()=> import('../Cast/Cast' /*webpackChunkName: "Cast"*/));
const Reviews = lazy (()=>import('../Reviews/Reviews'  /*webpackChunkName: "Reviews"*/));


function MovieDetailsPage() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
    const history = useHistory();

    function onBack() {
        history.push(
            location.state ? `${location.state.from}${location.state.search}` : "/"
        );
    }
    
  useEffect(() => {
    setStatus('pending');
    getMovieDetailsPage(movieId)
      .then(setMovie)
      .catch(e => {
        console.log(e);
        setStatus("rejected");
      });
    
    getActorsById(movieId)
      .then(setCasts)
      .catch(e => {
        console.log(e);
        setStatus("rejected");
      });
    
    getReviewsById(movieId)
      .then(setReviews)
      .catch(e => {
        console.log(e);
        setStatus("rejected");
      });
  }, [movieId]);
    
  return (
    <>
      
      <Button onClick={onBack} type="button">
        <FiChevronLeft/>
      </Button>
      {status === 'pending' && <Spinner />}
      {movie && <MovieInfoCard movie={movie} />}      
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
      
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/movies/:movieId/cast">
            {casts && <Cast casts={casts} ></Cast>}
          </Route>
          <Route path="/movies/:movieId/reviews">
            {reviews.length !== 0 && <Reviews reviews={reviews} />}
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}

export default MovieDetailsPage;




