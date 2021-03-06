const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    actor: {
        type: String
    },
    watched: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
    Movie
}