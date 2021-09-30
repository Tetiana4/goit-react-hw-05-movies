import React, { useState, useEffect } from 'react';
import { getTrendMovies } from '../services/api';
import { Container, List, LinkStyle} from './HomePage.styled';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTrendMovies()
            .then(setMovies);
    }, []);
    
    return (
        <Container>
            <List>
                {movies.map
                    (movie =>
                        <li key={movie.id}><LinkStyle to={`/movies/${movie.id}`}>{movie.title}</LinkStyle></li>
                    )}
            </List>
        </Container>
    )
}

