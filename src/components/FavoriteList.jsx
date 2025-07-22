import React from 'react';
import MovieCard from './MovieCard';


const FavoriteList = ({ favorites, onToggleFavorite }) => (
    <div>
        <h2>Favorites </h2>
        {favorites.length === 0 ? <p>No favorite movies yet.</p>:
        favorites.map(movie => (
            <MovieCard
            key={movie.id}
            movie={movie}
            onToggleFavorite={onToggleFavorite}
            />
        ))
        }
    </div>
);

export default FavoriteList;