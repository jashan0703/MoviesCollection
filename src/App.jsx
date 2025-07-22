import React, { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import FavoriteList from './components/FavoriteList';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', favorite: false },
    { id: 2, title: 'Avengers', favorite: false },
    { id: 3, title: 'Interstellar', favorite: false }
  ]);


  const [searchTerm, setSearchTerm] = useState('');

  const handleAddMovie = (title) => {
    const newMovie = {
      id: Date.now(),
      title,
      favorite: false
    };
    setMovies([...movies, newMovie]);
  };

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie =>
      movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
    ));
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteMovies = movies.filter(movie => movie.favorite);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Movie List 🎬</h1>
      <input
        type="text"
        placeholder="Search movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} onToggleFavorite={toggleFavorite} />
      <FavoriteList favorites={favoriteMovies} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;