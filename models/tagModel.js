const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tagSchema = new Schema({
  nome: {
      type: String,
      unique: true
  },
  
  
})
//   isChecked: {
//     type: Boolean,
//   },

module.exports = mongoose.model('Tag', tagSchema)