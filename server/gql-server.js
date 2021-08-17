const{ApolloServer} = require('apollo-server')
require('dotenv').config()

const {PORT} = process.env

const typeDefs = `
type Query {
    totalPosts : Int!
}
`;

const resolvers = {
    Query : {
        totalPosts : () => 42
    }
}

const apolloServer = new ApolloServer({
    typeDefs, resolvers
})

apolloServer.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))