import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from './helpers/Loader';
import NotFound from './helpers/NotFound';
import Navigation from './components/Navigation/Navigation';

const AsyncMovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "HomePage"*/
  ),
);

const AsyncHomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "HomePage"*/),
);

const AsyncMoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "MoviesPage"*/),
);

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={AsyncHomePage} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
