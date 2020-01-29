/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieQuery
// ====================================================

export interface MovieQuery_movie {
  __typename: "Movie";
  Title: string;
  Year: string;
  Director: string;
  Actors: string[];
  Writer: string;
}

export interface MovieQuery {
  movie: MovieQuery_movie | null;
}

export interface MovieQueryVariables {
  title: string;
}
