const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.post('/bookcreate', bookController.createBook);

router.get('/books', bookController.getBooks);

router.get('/books/:id', bookController.getBookById);

router.put('/books/:id', bookController.updateBook);

router.delete('/books/:id', bookController.deleteBook);



module.exports = router;
