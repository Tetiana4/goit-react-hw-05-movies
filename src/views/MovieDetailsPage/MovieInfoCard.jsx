import React from 'react';
// import { Route } from 'react-router-dom';
// import { Switch, useParams } from 'react-router';
// import Cast from './Cast'
// import { NavLink } from 'react-router-dom';

function MovieInfoCard({ movie }) {
    // const { movieId } = useParams;
    return (
<>
            {movie &&
                <>               
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="your poster" width="200px"></img>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>Vote average: {movie.vote_average}</p>
                </>}
            {/* <NavLink to="/movies/:movieId/cast">Cast</NavLink>
            <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> */}
          {/* <Route path="/movies/:movieId/cast"><Cast/></Route>
            <Route path="/movies/:movieId/reviews"></Route> */}
           
</>
    )
}

export default MovieInfoCard;