const express = require('express');
const {getAllBooks, getSingleBookById, addNewBooks, updateBooks, deleteBooks} = require('../controllers/book-controller');
const router = express.Router();

//  all books routes will be defined here
router.get('/books', getAllBooks);
router.get('/books/:id', getSingleBookById);
router.post('/books', addNewBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deleteBooks);

module.exports = router;