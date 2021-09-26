import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router';
import { getActorsById } from '../../services/api';

export default function Cast () {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);

    useEffect(() => {
        getActorsById(movieId)
        .then(actors => setActors(actors.cast))
    }, [movieId]);


    
    return (
        <>
       <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} width="240px" />
              <p>
                <span>Actor name: </span>
                {actor.name}
              </p>
            </li>
          ))}
        </ul>
       </>
    )

       
        
    
}
 
