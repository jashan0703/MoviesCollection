import React from 'react';

const MovieCard = ({ movie, onToggleFavorite }) => {
    return (
        <div style={{
            border: '1px solid gray',
            margin: '10px',
            padding: '10px',
            borderRadius: '8px'
        }}>
      <h3> {movie.title}</h3>
      <button onClick={() => onToggleFavorite(movie.id)}>
        {movie.favorite ? 'Unfavorite ' : 'Favorite'}
      </button>

        </div>
    );
};

export default MovieCard;