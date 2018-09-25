/* jshint esversion:6 */
import apollo from './schema'

const GRAPHQL_PORT = process.env.PORT || 4000;

const graphQLServer = apollo;

graphQLServer.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});