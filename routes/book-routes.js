const express = require('express');

const router = express.Router();

//  all books routes will be defined here
router.get('/books');
router.get('/books/:id');
router.post('/books');
router.put('/books/:id');
router.delete('/books/:id');

module.exports = router;