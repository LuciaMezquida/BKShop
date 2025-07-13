import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express4'
import cors from 'cors'

const app = express()

// Tu schema GraphQL básico
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hola desde GraphQL + Express + @apollo/server!',
  },
};

// Crear el servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Inicializa Apollo y aplica el middleware
async function startServer() {
  await server.start()

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(4000, () => {
    console.log('🚀 Servidor listo en http://localhost:4000/graphql')
  })
}

startServer()
