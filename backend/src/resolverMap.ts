import { IResolvers } from 'graphql-tools';
import faker from 'faker/locale/en';
import { Movie_Ext } from './movies/types';

const fakeMovie = (): Movie_Ext => ({
    Title: faker.name.findName(),
    Year: faker.date.past().toString(),
});

const resolvers: IResolvers = {
    Query: {
        helloWorld(_: void, args: void): string {
            return `👋 Hello world! 👋`;
        },
        fakeMovie(_: void, args: void): Movie_Ext {
            return fakeMovie();
        },
        movie: async (_source, { title }, { dataSources }) => {
            return dataSources.moviesAPI.getMovieByTitle('Country');
        },
    },
};

export default resolvers;
