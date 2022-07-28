const {gql} = require('apollo-server-express')

const typeDefs = gql `
    type Beat {
        _id: ID,
        name: String
        tempo: String,
        key: String,
        genre: String,
        datePosted: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        beats: [Beat],
        users: [User]
    }
`

module.exports = typeDefs