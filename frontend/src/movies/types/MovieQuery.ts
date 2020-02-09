/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieQuery
// ====================================================

export interface MovieQuery_movie_Ratings {
  __typename: "Ratings";
  Source: string | null;
  Value: string | null;
}

export interface MovieQuery_movie {
  __typename: "Movie";
  Title: string;
  Year: string;
  Director: string;
  Actors: string[];
  Writer: string;
  Plot: string;
  Ratings: MovieQuery_movie_Ratings[];
  imdbRating: string | null;
}

export interface MovieQuery {
  movie: MovieQuery_movie | null;
}

export interface MovieQueryVariables {
  title: string;
}
