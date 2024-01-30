import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import Book from "../../models/bookModel/bookModel";

export const editBook = async (request: JwtPayload, response: Response) => {
  try {
    const { title, author, description, pageCount, genre, bookId, publisher } =
      request.body;
    const userId = request.user.userid;
    // check if book exist
    const bookExist = await Book.findOne({ bookId: bookId });
    if (!bookExist) {
      return response.status(400).json({
        status: `Failed`,
        message: `Book titled ${title} already exist`,
      });
    }
    const updatedBook = await Book.updateOne(
      { bookId: bookId },
      {
        title,
        author,
        datePublished: new Date(),
        description,
        pageCount,
        genre,
        publisher,
        ownerId: userId,
        updatedAt: new Date(),
      }
    );
    return response.status(200).json({
      status: `Operation successful`,
      message: `The book with title ${title} has been edited successfully`,
      updatedBook,
    });
  } catch (err: any) {
    console.log(err.message);
    response.status(500).json({
      message: `Internal Server Error`,
    });
  }
};
