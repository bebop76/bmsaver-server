require('dotenv').config()
const express = require('express')
const mongoose = require('./config/mongo')
const cors = require('cors')
const bodyParser = require('body-parser')
const bookmarkRoutes = require('./routes/bookmarks')
const tagRoutes = require('./routes/tags')
const userRoutes = require('./routes/users')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const PORT = process.env.PORT

app.use('/api/bookmarks', bookmarkRoutes)
app.use('/api/tags', tagRoutes)
app.use('/api/user', userRoutes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


