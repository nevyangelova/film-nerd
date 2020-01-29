import React, { useState } from 'react';
import { MoviesQuery_movies } from './types/MoviesQuery';

interface Props {
    listOfMovies: MoviesQuery_movies[];
}

export const MovieList: React.FC<Props> = props => {
    return (
        <ul className="suggestions">
            {props.listOfMovies.map((movie, index) => (
                <li key={index}>
                    <span className="name">{movie.Title}</span>
                </li>
            ))}
        </ul>
    );
};
