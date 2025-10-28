const Book = require("../models/book");
const log = require("../utils/logger");

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            log.info("Fetched all books successfully:", allBooks);
            res.status(200).json({
                success: true,
                message: "Fetched all books successfully",
                books: allBooks
            })

        }else{
            log.warn("No books found in the database.");
            res.status(404).json({
                success: false,
                message: "No books found in the database."
            });
        }

    } catch (error) {
        log.error("Error fetching all books:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching books.",
            error: error.message
        });
    }
};
const getSingleBookById = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsById =  await Book.findById(getCurrentBookId);
        if(!bookDetailsById){
            log.warn(`Book with ID ${getCurrentBookId} not found.`);
            res.status(404).json({
                success: false,
                message: `Book with ID ${getCurrentBookId} not found.`
            });
        }
        log.info("Fetched book by ID successfully:", bookDetailsById);
        res.status(200).json({
            success: true,
            message: "Fetched book by ID successfully",
            book: bookDetailsById
        });

    } catch (error) {
        log.error("Error fetching book by ID:");
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the book.",
            error: error.message
        });
    }
};

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