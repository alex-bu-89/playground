import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { createContext } from './context';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: createContext(),
});

server
    .listen({
        port: 4000,
    })
    .then((info) =>
        console.log(`Server started on http://localhost:${info.port}`)
    );
