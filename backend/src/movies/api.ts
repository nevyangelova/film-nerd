import { RESTDataSource } from 'apollo-datasource-rest';

const API_KEY = '362780b3';

export class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://www.omdbapi.com/';
    }

    async getMovieByTitle(title: String) {
        return this.get(`?t=${title}&apikey=${API_KEY}`);
    }
}
