/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MoviesQuery
// ====================================================

export interface MoviesQuery_movies {
    __typename: 'Movie';
    Title: string;
    Year: string;
}

export interface MoviesQuery {
    movies: MoviesQuery_movies[];
}

export interface MoviesQueryVariables {
    title: string;
}
