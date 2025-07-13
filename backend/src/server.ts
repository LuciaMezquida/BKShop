import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express4'
import cors from 'cors'
import { resolvers } from "./graphql"
import { typeDefs } from "./graphql/schema"
import { context } from "./context"

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

async function startServer() {
  await server.start()

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => context({ req, res }),
    })
  );

  app.listen(4000, () => {
    console.log('🚀 Server is running on http://localhost:4000/graphql')
  })
}

startServer()
