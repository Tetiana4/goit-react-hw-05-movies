import React from 'react';
import { Container, Item, Image } from './Cast.styled'

function Cast({ casts }) {

  return (
    <Container>
          {casts.map(actor => (
            <Item key={actor.id}>
              <Image src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} width="240px" />
              <p>
                {actor.name}
              </p>
              <p>
                <span>Character: </span>
                {actor.character}
              </p>
            </Item>
          ))}      
    </Container>
  );
}
export default Cast;