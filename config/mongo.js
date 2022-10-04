require('dotenv').config()
const mongoose = require('mongoose')
const dbMongo = process.env.DB_URI

mongoose.connect(process.env.DB_URI, {
    
    dbName: 'bookmark_saver',
    useNEWUrlParser: true,
    useUnifiedTopology: true,
}, err => err ? console.log(err) :
console.log(`********* connected to  database`)
)


module.exports = mongoose