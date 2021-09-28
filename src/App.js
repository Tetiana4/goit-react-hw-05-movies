import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import NotFound from './helpers/NotFound';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <>
    <Navigation />
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
