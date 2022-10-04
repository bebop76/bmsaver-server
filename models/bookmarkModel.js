const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookmarkSchema = new Schema({
  titolo: {
    type: String,
    required: true
  },
  descrizione: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
  },
  colore: {
    type: String,
  }
}, { timestamps: true })

module.exports = mongoose.model('Bookmark', bookmarkSchema)