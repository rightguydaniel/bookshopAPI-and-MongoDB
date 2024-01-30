"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleBook = void 0;
const bookModel_1 = __importDefault(require("../../models/bookModel/bookModel"));
const getSingleBook = async (request, response) => {
    try {
        const { title } = request.body;
        const singleBook = await bookModel_1.default.findOne({ title: title });
        return response.status(200).json({
            message: `Book titled ${title} fetched successfully`,
            singleBook,
        });
    }
    catch (err) {
        console.log(err.message);
        return response.status(500).json({
            message: `Internal Server Error`,
        });
    }
};
exports.getSingleBook = getSingleBook;
