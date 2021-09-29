import React from "react";
import { useLocation } from "react-router-dom";
import { Gallery, Image, LinkStyle} from "./SearchList.styled";

function SearchList({ movies }) {
  const location = useLocation();

  return (
    <Gallery>
      {movies &&
        movies.map((movie) => (
          <LinkStyle
            key={movie.id}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="Poster"
            />
           
          </LinkStyle>
        ))}
    </Gallery>
  );
}

export default SearchList;