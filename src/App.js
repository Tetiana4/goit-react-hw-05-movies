import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from './helpers/Loader';
import NotFound from './helpers/NotFound';
import Navigation from './components/Navigation/Navigation';

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "HomePage"*/
  ),
);

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "HomePage"*/),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "MoviesPage"*/),
);

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  </>
);

export default App;
