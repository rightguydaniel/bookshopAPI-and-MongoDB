"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addBook_1 = require("../controllers/bookcontrollers/addBook");
const authoriser_1 = require("../middleware/authoriser");
const deleteBook_1 = require("../controllers/bookcontrollers/deleteBook");
const editBook_1 = require("../controllers/bookcontrollers/editBook");
const getAllBooks_1 = require("../controllers/bookcontrollers/getAllBooks");
const getBook_1 = require("../controllers/bookcontrollers/getBook");
const router = express_1.default.Router();
router.post("/create", authoriser_1.authoriser, addBook_1.addBook);
router.put("/edit", authoriser_1.authoriser, editBook_1.editBook);
router.delete("/delete", authoriser_1.authoriser, deleteBook_1.deleteBook);
router.get("/allbooks", getAllBooks_1.getAllBooks);
router.get("/getbook", getBook_1.getSingleBook);
exports.default = router;
