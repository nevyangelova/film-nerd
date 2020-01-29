import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { ACTOR_DETAILS_PATH, DIRECTOR_DETAILS_PATH, WRITER_DETAILS_PATH } from '../routes';
import { MovieQuery, MovieQuery_movie, MovieQueryVariables } from './types/MovieQuery';
import { MovieList } from './MovieList';

const MOVIE = gql`
    query MovieQuery($title: String!) {
        movie(title: $title) {
            Title
            Year
            Director
            Actors
            Writer
        }
    }
`;

const MovieDetailsPage = (props: RouteComponentProps<{ title: string }>) => {
    const { loading, error, data } = useQuery<MovieQuery, MovieQueryVariables>(MOVIE, {
        variables: { title: props.match.params.title },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data && data.movie && (
                <>
                    <p>{data.movie.Title}</p>
                    <p>{data.movie.Year}</p>
                    <Link to={DIRECTOR_DETAILS_PATH.replace(':name', data.movie.Director)}>{data.movie.Director}</Link>
                    <Link to={WRITER_DETAILS_PATH.replace(':name', data.movie.Writer)}>{data.movie.Writer}</Link>

                    <p>{data.movie.Writer}</p>
                    {data.movie.Actors.map((actor: string) => (
                        <Link to={ACTOR_DETAILS_PATH.replace(':birthName', actor)}>{actor}</Link>
                    ))}
                </>
            )}
        </div>
    );
};
export default MovieDetailsPage;
