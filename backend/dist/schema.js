"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const typeDefs = __importStar(require("./schema/schema.graphql"));
const graphql_tools_1 = require("graphql-tools");
const resolverMap_1 = __importDefault(require("./resolverMap"));
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: resolverMap_1.default
});
exports.default = schema;
