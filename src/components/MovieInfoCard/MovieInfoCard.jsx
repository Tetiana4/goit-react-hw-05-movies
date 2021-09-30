import React from 'react';
import { Card, Discr, Span, List} from './MovieInfoCard.styled'

export default function MovieInfoCard({ movie }) {
    

    return (
        <>
           
            <Card>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="your poster" width="200px"></img>
             
                <Discr>
                    <p>{movie.overview}</p>
                    <p>popularity <Span>{movie.popularity}</Span></p>
                    <p>vote average <Span>{movie.vote_average}</Span></p>
                    {movie.genres && (
                        <List>
                            {movie.genres.map(ganre => (
                                <li key={ganre.id}>{ganre.name}</li>
                            ))}
                        </List>
                    )}
                </Discr>
            
            </Card>
   
        </>
    )
}

 