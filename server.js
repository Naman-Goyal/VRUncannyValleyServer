/* jshint esversion:6 */
import express from 'express';
import * as bodyParser from 'body-parser';
import apollo from './schema'

const GRAPHQL_PORT = process.env.PORT || 4000;

const graphQLServer = express();

apollo.applyMiddleware({
  app: graphQLServer
});

graphQLServer.listen(GRAPHQL_PORT, () => {
  console.log('GraphQL is now running on https://localhost:4000/graphql');
});
