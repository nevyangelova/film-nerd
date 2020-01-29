import React, { useState } from 'react';
import { MoviesQuery_movies } from './types/MoviesQuery';
import { MOVIE_DETAILS_PATH } from '../routes';
import { Link } from 'react-router-dom';

interface Props {
    listOfMovies: MoviesQuery_movies[];
}

export const MovieList: React.FC<Props> = props => {
    return (
        <ul className="suggestions">
            {props.listOfMovies.map((movie, index) => (
                <li key={index}>
                    <Link to={MOVIE_DETAILS_PATH.replace(':title', movie.Title)}>
                        <span className="name">{movie.Title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
