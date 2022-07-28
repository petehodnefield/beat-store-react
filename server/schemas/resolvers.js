const {Beat} = require('../models')

const resolvers = {
    Query: {
        beats: async () => {
            return await Beat.find()
        }
    }
}


module.exports = resolvers