import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
    const { loading, error, data } = useQuery(MOVIES, { variables: { title: 'Country' } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <p>{data.movie.Title}</p>
            <p>{data.movie.Year}</p>
            <p>{data.movie.Director}</p>
            <p>{data.movie.Writer}</p>
            {data.movie.Actors.map((actor: string) => (
                <p>{actor}</p>
            ))}
        </div>
    );
};

export default MovieSearchPage;
