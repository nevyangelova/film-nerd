import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { MoviesAPI } from './movies/api';
import resolvers from './resolverMap';
import { RedisCache } from 'apollo-server-cache-redis';

const app = express();
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    resolvers,
    // cache: new RedisCache(),
    dataSources: () => {
        return {
            moviesAPI: new MoviesAPI(),
        };
    },
});

app.use('*', cors());

app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port: 3000 }, (): void =>
    console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`),
);
