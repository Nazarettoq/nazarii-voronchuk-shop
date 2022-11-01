import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
})
