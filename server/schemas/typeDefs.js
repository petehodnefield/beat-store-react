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

    type Query {
        beats: [Beat]
    }
`

module.exports = typeDefs