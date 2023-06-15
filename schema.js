const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLFloat } = require('graphql');

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
        },
        price: {
            type: GraphQLFloat,
            resolve : ()=> 100.00
        }
    },
  }),
});

module.exports = schema;