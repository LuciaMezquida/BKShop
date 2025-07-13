import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // tu backend local
  cache: new InMemoryCache(),
});

export default client;
