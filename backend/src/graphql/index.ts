import { productResolvers } from './resolvers/productResolvers'

export const resolvers = {
  Query: {
    ...productResolvers.Query
  },
  Mutation: {
    ...productResolvers.Mutation
  }
}