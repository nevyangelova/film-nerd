/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ActorQuery
// ====================================================

export interface ActorQuery_actor {
    __typename: 'Actor';
    birthName: string | null;
    birthPlace: string | null;
    summary: string;
    image: string | null;
    infoBox: string | null;
}

export interface ActorQuery {
    actor: ActorQuery_actor | null;
}

export interface ActorQueryVariables {
    birthName: string;
}
