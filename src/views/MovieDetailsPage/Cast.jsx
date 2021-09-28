import { useState, useEffect } from 'react';
import { getActorsById } from '../../services/api';
import Loader from 'react-loader-spinner';


function Cast({ movieId }) {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getActorsById(movieId)
      .then(setActors)
      .catch((e) => console.log(e))
      .finally(() => setStatus('resolved'));
  }, [movieId]);


  return (
    <>
      {status === 'pending' && (
        <Loader
          type="Bars"
          color="rgb(56, 56, 56)"
          height={50}
          width={50}
          timeout={300}
        />
      )}

      {status === 'resolved' && (
        <ul>
          {actors.map(actor => (
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
        </ul>
      )}
    </>
  );
}
export default Cast;