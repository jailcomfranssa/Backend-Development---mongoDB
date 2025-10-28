const Book = require("../models/book");
const log = require("../utils/logger");

const getAllBooks = async (req, res) => {};
const getSingleBookById = async (req, res) => {};
const addNewBooks = async (req, res) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if (newlyCreatedBook) {
            log.info("New book added successfully:", newlyCreatedBook);
            res.status(201).json({
                success: true,
                message: "New book added successfully",
                book: newlyCreatedBook
            });
        }

    }catch(error){
        log.error("Error adding new book:", error);
    }
};
const updateBooks = async (req, res) => {};
const deleteBooks = async (req, res) => {};

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBooks,
    updateBooks,
    deleteBooks,
};