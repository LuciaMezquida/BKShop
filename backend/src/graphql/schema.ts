import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime

  type SnowBoard {
    id: Int!
    name: String!
    description: String
    price: Float!
    size: Int!
    shape: String!
    brand: String!
    createdAt: DateTime!
  }

  type Query {
    snowboards: [SnowBoard!]!
  }

  type Mutation {
    createSnowboard(
      name: String!
      price: Float!
      description: String
      size: Int!
      shape: String!
      brand: String!
    ): SnowBoard!
  }
`