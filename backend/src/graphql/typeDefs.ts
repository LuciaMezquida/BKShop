import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Product {
    id: Int!
    name: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product!
  }
`
