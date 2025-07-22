import React, {useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAddMovie(title);
            setTitle('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placehodlder="Add movie..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
            </form>
    );
};

export default AddMovieForm;