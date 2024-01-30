import express from "express";
import { addBook } from "../controllers/bookcontrollers/addBook";
import { authoriser } from "../middleware/authoriser";
import { deleteBook } from "../controllers/bookcontrollers/deleteBook";
import { editBook } from "../controllers/bookcontrollers/editBook";
import { getAllBooks } from "../controllers/bookcontrollers/getAllBooks";
import { getSingleBook } from "../controllers/bookcontrollers/getBook";

const router = express.Router();

router.post("/create", authoriser, addBook);
router.put("/edit", authoriser, editBook);
router.delete("/delete", authoriser, deleteBook);
router.get("/allbooks", getAllBooks);
router.get("/getbook", getSingleBook);

export default router;
