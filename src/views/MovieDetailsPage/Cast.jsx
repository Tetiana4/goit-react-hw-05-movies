import React from 'react';

function Cast({ casts }) {

  return (
    <>
          {casts.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} width="240px" />
              <p>
                <span>Actor name: </span>
                {actor.name}
              </p>
              <p>
                <span>Character: </span>
                {actor.character}
              </p>
            </li>
          ))}      
    </>
  );
}
export default Cast;