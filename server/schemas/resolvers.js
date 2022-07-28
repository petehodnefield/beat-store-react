const {Beat, User} = require('../models')

const resolvers = {
    Query: {
        beats: async () => {
            return await Beat.find()
        },
        users: async () => {
            return await User.find()
        },
    }
}


module.exports = resolvers