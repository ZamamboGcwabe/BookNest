const express = require('express');
const Book = require('./book.model');
const { postBook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

router.post("/create-book", verifyAdminToken, postABook)

router.get("/", getAllBooks);

router.get("/", getSingleBook);

router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteBook)


module.exports = router;