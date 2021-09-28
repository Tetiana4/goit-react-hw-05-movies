import React from 'react';

function MovieInfoCard({ movie }) {

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
</>
    )
}

export default MovieInfoCard;