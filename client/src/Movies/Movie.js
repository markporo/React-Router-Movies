import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function Movie(props) {
  const { movieList, saved } = props;
  const [movie, setMovie] = useState();

  const params = useParams();
  console.log(params, "params")

  let movieId = movieList.find(movie => movie.id == Number(params.movie));
  //const heros = hero.find(item => item.id === Number(params.hero));
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
        console.log(response.data, "setMovie res.data from Movie component")
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [movieId]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }


  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <MovieCard movie={movie} />
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
