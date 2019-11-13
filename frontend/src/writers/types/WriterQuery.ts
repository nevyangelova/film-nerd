/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WriterQuery
// ====================================================

export interface WriterQuery_writer {
  __typename: "Writer";
  name: string | null;
}

export interface WriterQuery {
  writer: WriterQuery_writer | null;
}

export interface WriterQueryVariables {
  name: string;
}
