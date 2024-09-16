import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default function MovieList({ movieList }) {
  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <Link to={`/movies/${movie.id}`}><MovieDetails key={movie.id} movie={movie} /></Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie, key }) {
  const { metascore, director, title } = movie;
  console.log(movie, "movie details props...should be key and movie")

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
