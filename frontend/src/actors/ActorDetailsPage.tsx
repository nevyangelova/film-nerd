import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { ActorQuery, ActorQueryVariables } from './types/ActorQuery';
import { MOVIE_DETAILS_PATH } from '../routes';

interface actor {
    birthName: string;
    birthPlace: string;
}

const ACTOR_DETAILS = gql`
    query ActorQuery($birthName: String!) {
        actor(birthName: $birthName) {
            birthName
            birthPlace
            summary
            image
            tables {
                year
                film
                role
                director
                notes
            }
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

    if (data && data.actor) {
        return (
            <>
                <div>{data.actor.birthName}</div>
                <div>{data.actor.summary}</div>
                {data.actor.image && <img src={data.actor.image} />}
                {data.actor.tables &&
                    data.actor.tables.map(table => (
                        <Link to={MOVIE_DETAILS_PATH.replace(':title', table.film)}>{table.film}</Link>
                    ))}
            </>
        );
    }
    return <div>'borg'</div>;
};

export default ActorDetailsPage;
