import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { ACTOR_DETAILS_PATH, DIRECTOR_DETAILS_PATH, WRITER_DETAILS_PATH } from '../routes';
import { MoviesQuery, MoviesQueryVariables, MoviesQuery_movies } from './types/MoviesQuery';
import { MovieList } from './MovieList';

const MOVIES = gql`
    query MoviesQuery($title: String!) {
        movies(title: $title) {
            Title
            Year
        }

        test
    }
`;

const MovieSearchPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const { loading, error, data } = useQuery<MoviesQuery, MoviesQueryVariables>(MOVIES, {
        variables: { title: searchValue },
    });

    if (error) return <p>Error :(</p>;

    return (
        <div id="movies">
            <form className="search-form">
                <input type="text" className="search" onChange={onSearchChange} placeholder="Start typing a name.." />
                {data && <MovieList listOfMovies={data.movies} />}
            </form>
        </div>
    );

    // return (
    //     <div>
    //         {data && (
    //             <>
    //                 <p>{data.movie.Title}</p>
    //                 <p>{data.movie.Year}</p>
    //                 <Link to={DIRECTOR_DETAILS_PATH.replace(':birthName', data.movie.Director)}>{data.movie.Director}</Link>
    //                 <Link to={WRITER_DETAILS_PATH.replace(':birthName', data.movie.Writer)}>{data.movie.Writer}</Link>

    //                 <p>{data.movie.Writer}</p>
    //                 {data.movie.Actors.map((actor: string) => (
    //                     <Link to={ACTOR_DETAILS_PATH.replace(':birthName', actor)}>{actor}</Link>
    //                 ))}</>
    //         )}
    //     </div>
    // );
};

export default MovieSearchPage;
