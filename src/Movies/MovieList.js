import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieList(props) {
  const navigate = useNavigate()
  const onMovieCLick = id => () => {
    navigate(`movies/${id}`)
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails onMovieCLick={onMovieCLick(movie.id)} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { onMovieCLick } = props

  return (
    <div className="movie-card" onClick={onMovieCLick}>
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
