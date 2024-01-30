"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const database = async () => {
    try {
        const connection = mongoose_1.default.connect("mongodb+srv://danielitoyaojiezele:CeUJuhPW7VsQtDTm@cluster0.u71oxoc.mongodb.net/book_app");
        console.log("MongoDB connected");
    }
    catch (err) {
        console.log(err);
    }
};
exports.database = database;
