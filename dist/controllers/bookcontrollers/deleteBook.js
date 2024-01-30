"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = void 0;
const bookModel_1 = __importDefault(require("../../models/bookModel/bookModel"));
const deleteBook = async (request, response) => {
    try {
        const userId = request.user.userid;
        const { title } = request.body;
        const bookToDelete = await bookModel_1.default.find({ title: title });
        if (!bookToDelete) {
            return response.status(400).json({
                status: `Failed`,
                message: `Book with title ${title} not found`,
            });
        }
        if (bookToDelete) {
            const deleteBook = await bookModel_1.default.deleteOne({ title: title });
            return response.status(200).json({
                status: `Success`,
                message: `Book with title ${title} has been deleted successfully`,
                bookToDelete,
            });
        }
    }
    catch (err) {
        console.log(err.message);
        response.status(500).json({
            message: `Internal Server Error`,
        });
    }
};
exports.deleteBook = deleteBook;
