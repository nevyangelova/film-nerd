/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Test } from "./../../types/global";

// ====================================================
// GraphQL query operation: MoviesQuery
// ====================================================

export interface MoviesQuery_movies {
  __typename: "Movie";
  Title: string;
  Year: string;
}

export interface MoviesQuery {
  movies: MoviesQuery_movies[];
  test: Test;
}

export interface MoviesQueryVariables {
  title: string;
}
