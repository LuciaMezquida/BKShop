import { snowboardResolvers } from './resolvers/snowboardResolvers'

export const resolvers = {
  Query: {
    ...snowboardResolvers.Query
  },
  Mutation: {
    ...snowboardResolvers.Mutation
  }
}