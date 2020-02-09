/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ActorQuery
// ====================================================

export interface ActorQuery_actor_tables {
  __typename: "MovieSummary";
  year: string;
  film: string;
  role: string | null;
  director: string;
  notes: string | null;
}

export interface ActorQuery_actor {
  __typename: "Actor";
  birthName: string | null;
  birthPlace: string | null;
  summary: string;
  image: string | null;
  tables: ActorQuery_actor_tables[] | null;
}

export interface ActorQuery {
  actor: ActorQuery_actor | null;
}

export interface ActorQueryVariables {
  birthName: string;
}
