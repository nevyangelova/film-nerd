import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { ACTOR_DETAILS_PATH, DIRECTOR_DETAILS_PATH, WRITER_DETAILS_PATH } from '../routes';
import { MoviesQuery, MoviesQueryVariables } from './types/MoviesQuery';

const MOVIES = gql`
    query MoviesQuery($title: String!) {
        movie(title: $title) {
            Title
            Year
            Director
            Writer
            Actors
        }
    }
`;

const MovieSearchPage: React.FC = () => {
    const { loading, error, data } = useQuery<MoviesQuery, MoviesQueryVariables>(MOVIES, { variables: { title: 'Country' } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            {data && (
                <>
                    <p>{data.movie.Title}</p>
                    <p>{data.movie.Year}</p>
                    <Link to={DIRECTOR_DETAILS_PATH.replace(':birthName', data.movie.Director)}>{data.movie.Director}</Link>
                    <Link to={WRITER_DETAILS_PATH.replace(':birthName', data.movie.Writer)}>{data.movie.Writer}</Link>

                    <p>{data.movie.Writer}</p>
                    {data.movie.Actors.map((actor: string) => (
                        <Link to={ACTOR_DETAILS_PATH.replace(':birthName', actor)}>{actor}</Link>
                    ))}</>
            )}
        </div>
    );
};

export default MovieSearchPage;
