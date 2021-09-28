import React from "react";
import { Link, useLocation } from "react-router-dom";

function SearchList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map((movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt=""
            />
          </Link>
        ))}
    </ul>
  );
}

export default SearchList;