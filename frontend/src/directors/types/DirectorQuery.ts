/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DirectorQuery
// ====================================================

export interface DirectorQuery_director {
  __typename: "Director";
  name: string | null;
}

export interface DirectorQuery {
  director: DirectorQuery_director | null;
}

export interface DirectorQueryVariables {
  name: string;
}
