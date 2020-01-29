import { RESTDataSource } from 'apollo-datasource-rest';
import wiki from 'wikijs';

const API_KEY = '362780b3';

export class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://www.omdbapi.com/';
    }

    async searchMovies(title: string) {
        return this.get(`?s=${title}&apikey=${API_KEY}&page=1`);
    }

    async getMovieByTitle(title: string) {
        return this.get(`?t=${title}&apikey=${API_KEY}`);
    }

    async getDetails(birthName: string, type: string) {
        let page: any = await wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).page(birthName);
        const categories = await page.categories();

        if (categories.includes('Category:All disambiguation pages')) {
            page = await wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).page(`${birthName} (${type})`);
        }

        return page.info();
    }
}
