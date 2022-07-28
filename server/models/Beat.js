const mongoose = require('mongoose')

const {Schema} = mongoose

const beatSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    tempo: {
        type: String,
        required: true,
        trim: true
    },
})

const Beat = mongoose.model('Beat', beatSchema)

module.exports = Beat