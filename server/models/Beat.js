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
    key: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    datePosted: {
        type: Date,
        default: Date.now()
    }
})

const Beat = mongoose.model('Beat', beatSchema)

module.exports = Beat