import React from 'react';
// import { NavLink } from 'react-router-dom';
import {Link, Container} from './Navigation.styled'

function Navigation() {
    return (
    <Container>       
            <Link to="/">Home</Link>   
            <Link to="/movies">Movies</Link>
           
    </Container>
    )
}

export default Navigation;