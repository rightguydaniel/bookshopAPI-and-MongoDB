"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBook = void 0;
const bookModel_1 = __importDefault(require("../../models/bookModel/bookModel"));
const editBook = async (request, response) => {
    try {
        const { title, author, description, pageCount, genre, bookId, publisher } = request.body;
        const userId = request.user.userid;
        // check if book exist
        const bookExist = await bookModel_1.default.findOne({ bookId: bookId });
        if (!bookExist) {
            return response.status(400).json({
                status: `Failed`,
                message: `Book titled ${title} already exist`,
            });
        }
        const updatedBook = await bookModel_1.default.updateOne({ bookId: bookId }, {
            title,
            author,
            datePublished: new Date(),
            description,
            pageCount,
            genre,
            publisher,
            ownerId: userId,
            updatedAt: new Date(),
        });
        return response.status(200).json({
            status: `Operation successful`,
            message: `The book with title ${title} has been edited successfully`,
            updatedBook,
        });
    }
    catch (err) {
        console.log(err.message);
        response.status(500).json({
            message: `Internal Server Error`,
        });
    }
};
exports.editBook = editBook;
