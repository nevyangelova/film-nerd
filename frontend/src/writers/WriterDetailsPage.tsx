import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql.macro';
import { WriterQuery, WriterQueryVariables } from './types/WriterQuery';

interface writer {
    name: string;
}

const WRITER_DETAILS = gql`
    query WriterQuery($name: String!) {
        writer(name: $name) {
            name
        }
    }
`;

const WriterDetailsPage: React.FC = props => {
    const writer = useParams<writer>();
    const { loading, error, data } = useQuery<WriterQuery, WriterQueryVariables>(WRITER_DETAILS, {
        variables: { name: writer.name },
    });

    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>{data && data.writer ? data.writer.name : loading}</div>;
};

export default WriterDetailsPage;
