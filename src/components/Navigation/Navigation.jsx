import React from 'react';
import {Link, Container} from './Navigation.styled'

export default function Navigation() {
  return (
    <Container>       
      <Link to="/">Home</Link>   
      <Link to="/movies">Movies</Link>           
    </Container>
  )
}
