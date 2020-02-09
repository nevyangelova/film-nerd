import { RESTDataSource } from 'apollo-datasource-rest';
import wiki from 'wikijs';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { memoize } from '../utils/memoize';

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

    getDetails = memoize(async (birthName: string, type: string) => {
        let page: any = await wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).page(birthName);
        try {
            const categories = await page.categories();

            if (categories.includes('Category:All disambiguation pages')) {
                page = await wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' }).page(`${birthName} (${type})`);
            }
        } catch (err) {
            console.log('cant get categories');
        }
        try {
            const info = await page.info();

            return {
                birthName: JSON.stringify(info.birthName),
                summary: await page.summary(),
                image: await extractImage(info.image),
                infoBox: JSON.stringify(await page.fullInfo()),
            };
        } catch (error) {
            console.log('cant get info');
            throw error;
        }
    });
}

async function extractImage(infoUrl: string): Promise<string | undefined> {
    const imagePage = await fetch(`https://en.wikipedia.org/wiki/File:${infoUrl.replace(/\s/g, '_')}`);
    const imagePageText = await imagePage.text();
    const $ = cheerio.load(imagePageText);
    const imageLink = $('.fullImageLink a');
    const imageUrl = imageLink.attr('href');

    if (imageUrl) {
        return `https:${imageUrl}`;
    }
}
