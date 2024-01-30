import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import Book from "../../models/bookModel/bookModel";

export const deleteBook = async (request: JwtPayload, response: Response) => {
  try {
    const userId = request.user.userid;
    const { title } = request.body;
    const bookToDelete = await Book.find({ title: title });
    if (!bookToDelete) {
      return response.status(400).json({
        status: `Failed`,
        message: `Book with title ${title} not found`,
      });
    }
    if (bookToDelete) {
      const deleteBook = await Book.deleteOne({ title: title });
      return response.status(200).json({
        status: `Success`,
        message: `Book with title ${title} has been deleted successfully`,
        bookToDelete,
      });
    }
  } catch (err: any) {
    console.log(err.message);
    response.status(500).json({
      message: `Internal Server Error`,
    });
  }
};
