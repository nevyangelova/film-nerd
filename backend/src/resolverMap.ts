import { IResolvers } from 'graphql-tools';
import { Test } from './types.generated';

const resolvers: IResolvers = {
    Query: {
        movies: async (_source, { title }, { dataSources }) => {
            let result = await dataSources.moviesAPI.searchMovies(title);

            return result.Search || [];
        },
        movie: async (_source, { title }, { dataSources }) => {
            let result = await dataSources.moviesAPI.getMovieByTitle(title);

            result.Actors = result.Actors.split(', ');

            return result;
        },
        actor: async (_source, { birthName }, { dataSources }) => dataSources.moviesAPI.getDetails(birthName, 'actor'),
        director: async (_source, { name }, { dataSources }) => dataSources.moviesAPI.getDetails(name, 'director'),
        writer: async (_source, { name }, { dataSources }) => dataSources.moviesAPI.getDetails(name, 'writer'),
        test: async () => Test.Value1,
    },
};

export default resolvers;
