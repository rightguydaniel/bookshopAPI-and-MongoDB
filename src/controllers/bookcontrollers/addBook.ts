import { Request, Response } from "express";
import { v4 } from "uuid";
import { JwtPayload } from "jsonwebtoken";
import Book from "../../models/bookModel/bookModel";

export const addBook = async (req: JwtPayload, res: Response) => {
  try {
    const { title, author, description, pageCount, genre, publisher } =
      req.body;
    const userId = req.user.userid;
    // check if book exist
    const bookExist = await Book.findOne({ title: title });
    if (bookExist) {
      return res.status(400).json({
        status: `Failed`,
        message: `Book titled ${title} already exist`,
      });
    }
    //if book does not exist
    const newBook = await Book.create({
      title,
      author,
      datePublished: new Date(),
      description,
      pageCount,
      genre,
      bookId: v4(),
      publisher,
      ownerId: userId,
    });
    return res.status(200).json({
      status: `successful`,
      message: `Book titled ${title} added succesfully`,
      newBook,
    });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({
      message: `Internal Server Error`,
    });
  }
};
