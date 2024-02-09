const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

// Index
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error, could not get all books'
            })
        })
})




module.exports = books