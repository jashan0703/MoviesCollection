import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onToggleFavorite }) => (
    <div> 
        <h2> All Movies</h2>
        {movies.length === 0 ? <p> No movies found.</p> :
        movies.map(movie => (
            <MovieCard 
            key={movie.id}
            movie={movie}
            onToggleFavorite={onToggleFavorite}
            />
        ))
    }
        
    </div>
);

export default MovieList;