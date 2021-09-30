import React from 'react';
import { Container, Item, Image } from './Cast.styled'

export default function Cast({ casts }) {
  return (
    <Container>
          {casts.map(actor => (
            <Item key={actor.id}>
              <Image src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt='Poster'/>
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
