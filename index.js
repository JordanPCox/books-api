// Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Middleware
require('dotenv').config()
app.use(express.json())
const PORT = process.env.PORT

// Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error)
    })

// Root index
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Books
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})