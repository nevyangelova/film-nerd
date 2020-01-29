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
const en_1 = __importDefault(require("faker/locale/en"));
const fakeMovie = () => ({
    Title: en_1.default.name.findName(),
    Year: en_1.default.date.past().toString(),
});
const resolvers = {
    Query: {
        movies: (_source, { title }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            let result = yield dataSources.moviesAPI.searchMovies(title);
            return result.Search || [];
        }),
        movie: (_source, { title }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            let result = yield dataSources.moviesAPI.getMovieByTitle(title);
            result.Actors = result.Actors.split(', ');
            return result;
        }),
        actor: (_source, { birthName }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () { return dataSources.moviesAPI.getDetails(birthName, 'actor'); }),
        director: (_source, { name }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () { return dataSources.moviesAPI.getDetails(name, 'director'); }),
        writer: (_source, { name }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () { return dataSources.moviesAPI.getDetails(name, 'writer'); }),
    },
};
exports.default = resolvers;
