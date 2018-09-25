import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import {makeExecutableSchema} from 'graphql-tools';


// Get typeDefs and resolvers
const typeDefs = importSchema("schema/schemaDefinition.graphql");
import resolvers from '../resolvers';

// Make schema
const executableSchema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const apollo = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
	playground: {
		endpoint: `https://vr-test-server.herokuapp.com/graphql`,
		settings: {
      		'editor.theme': 'dark'
    	}
	},
	engine: {
		apiKey: "service:Naman-Goyal-4755:Z-h8TenAdH37BgaUoCu_TQ"
	},
	introspection:true
});

export default apollo;