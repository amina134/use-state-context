import React from 'react';
import MovieCard from './MovieCard';
import './App.css';

const MovieList = ({ movies, handleChecked }) => {
    return (
        <div className="movieList">
            {movies.map((movie, index) => (
                <MovieCard key={index} handleChecked={handleChecked} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
