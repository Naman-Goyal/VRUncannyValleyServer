/* jshint esversion:6 */
import apollo from './schema'

const graphQLServer = apollo;

graphQLServer.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});