import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { ActorQuery, ActorQueryVariables } from './types/ActorQuery';

interface actor {
    birthName: string;
    birthPlace: string;
}

const ACTOR_DETAILS = gql`
    query ActorQuery($birthName: String!) {
        actor(birthName: $birthName) {
            birthName
            birthPlace
        }
    }
`;

const ActorDetailsPage: React.FC = props => {
    const actor = useParams<actor>();
    const { loading, error, data } = useQuery<ActorQuery, ActorQueryVariables>(ACTOR_DETAILS, {
        variables: { birthName: actor.birthName },
    });
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>{data && data.actor ? data.actor.birthName : loading}</div>;
};

export default ActorDetailsPage;
