"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const wikijs_1 = __importDefault(require("wikijs"));
const API_KEY = '362780b3';
class MoviesAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://www.omdbapi.com/';
    }
    getMovieByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`?t=${title}&apikey=${API_KEY}`);
        });
    }
    getActorDetails(birthName) {
        return __awaiter(this, void 0, void 0, function* () {
            return wikijs_1.default({ apiUrl: 'https://en.wikipedia.org/w/api.php' })
                .page(birthName)
                .then((page) => page.info());
        });
    }
}
exports.MoviesAPI = MoviesAPI;
