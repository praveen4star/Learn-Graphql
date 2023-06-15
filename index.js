const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync("**/*", { extensions : ['graphql']} );
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));


async function startApollorServer() {
    const app = express();
    const schema = makeExecutableSchema(
        {
            typeDefs: typesArray,
            resolvers: resolversArray
        }
    )
    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log('Server started on port 3000'));
}

startApollorServer();

