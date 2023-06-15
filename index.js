const path = require('path');
const express = require('express');
const { graphqlHTTP} = require('express-graphql');
const app = express();
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync("**/*", { extensions : ['graphql']} );
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema(
    {
        typeDefs: typesArray,
        resolvers: resolversArray
    }
)

app.use("/graphql", graphqlHTTP({ schema : schema, graphiql : true}));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started on port 3000'));