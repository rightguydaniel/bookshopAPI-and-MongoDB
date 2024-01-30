"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = void 0;
const uuid_1 = require("uuid");
const bookModel_1 = __importDefault(require("../../models/bookModel/bookModel"));
const addBook = async (req, res) => {
    try {
        const { title, author, description, pageCount, genre, publisher } = req.body;
        const userId = req.user.userid;
        // check if book exist
        const bookExist = await bookModel_1.default.findOne({ title: title });
        if (bookExist) {
            return res.status(400).json({
                status: `Failed`,
                message: `Book titled ${title} already exist`,
            });
        }
        //if book does not exist
        const newBook = await bookModel_1.default.create({
            title,
            author,
            datePublished: new Date(),
            description,
            pageCount,
            genre,
            bookId: (0, uuid_1.v4)(),
            publisher,
            ownerId: userId,
        });
        return res.status(200).json({
            status: `successful`,
            message: `Book titled ${title} added succesfully`,
            newBook,
        });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({
            message: `Internal Server Error`,
        });
    }
};
exports.addBook = addBook;
