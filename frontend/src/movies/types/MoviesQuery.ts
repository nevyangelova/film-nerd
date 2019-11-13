/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MoviesQuery
// ====================================================

export interface MoviesQuery_movie {
  __typename: "Movie";
  Title: string;
  Year: string;
  Director: string;
  Writer: string;
  Actors: string[];
}

export interface MoviesQuery {
  movie: MoviesQuery_movie;
}

export interface MoviesQueryVariables {
  title: string;
}
