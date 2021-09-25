import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { getTrendMovies } from '../../services/api';


export default function HomePage () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendMovies()
        .then(setMovies);
    }, []);
   
    return (
            <>
            <h1> Home</h1 >
            <ul>
                {movies.map
                    (movie =>
                        <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
                    )}
            </ul>
            </>
        )
    
}

