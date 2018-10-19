
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8080).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
