import React from "react";
import {useParams} from 'react-router-dom'

function MovieShow({movies}) {
  const params = useParams()

  const thisMovie = movies[params.movieId]

  return (
    <div>
      <h3>Movies Show Component!</h3>
      <h4> {thisMovie.title} </h4>
    </div>
  );
}

export default MovieShow; 