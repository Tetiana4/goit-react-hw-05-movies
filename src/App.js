import './App.css';
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import NotFound from './views/NotFound';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetailsPage />
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>

      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
