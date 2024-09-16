import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []); // empty array makes this only run once

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once

  };


  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route exact path='/'>
          <MovieList saved={saved} movieList={movieList} />
        </Route>

        <Route path='/movies/:movieId'>
          <Movie saved={saved} movieList={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
