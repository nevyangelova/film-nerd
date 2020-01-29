import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { DirectorQuery, DirectorQueryVariables } from './types/DirectorQuery';

const DIRECTOR_DETAILS = gql`
    query DirectorQuery($name: String!) {
        director(name: $name) {
            name
        }
    }
`;

const DirectorDetailsPage: React.FC = props => {
    const director = useParams<any>();
    const { loading, error, data } = useQuery<DirectorQuery, DirectorQueryVariables>(DIRECTOR_DETAILS, {
        variables: { name: director.name },
    });
    console.log(director);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>{data && data.director ? data.director.name : loading}</div>;
};

export default DirectorDetailsPage;
