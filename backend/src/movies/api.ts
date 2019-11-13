import { RESTDataSource } from 'apollo-datasource-rest';
import wiki from 'wikijs';

const API_KEY = '362780b3';

export class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://www.omdbapi.com/';
    }

    async getMovieByTitle(title: string) {
        return this.get(`?t=${title}&apikey=${API_KEY}`);
    }

    async getActorDetails(birthName: string) {
        return wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' })
            .page(birthName)
            .then((page: any) => page.info());
    }
}
