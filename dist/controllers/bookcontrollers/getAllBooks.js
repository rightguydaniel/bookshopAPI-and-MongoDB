"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = void 0;
const bookModel_1 = __importDefault(require("../../models/bookModel/bookModel"));
const getAllBooks = async (request, response) => {
    try {
        const allBooks = await bookModel_1.default.find({});
        return response
            .status(200)
            .json({ message: `All books fetched successfully`, allBooks });
    }
    catch (err) {
        console.log(err.message);
        return response.status(500).json({
            message: `Internal Server Error`,
        });
    }
};
exports.getAllBooks = getAllBooks;
