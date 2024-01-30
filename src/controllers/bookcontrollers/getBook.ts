import { Request, Response } from "express";
import Book from "../../models/bookModel/bookModel";

export const getSingleBook = async (request: Request, response: Response) => {
  try {
    const { title } = request.body;
    const singleBook = await Book.findOne({ title: title });

    return response.status(200).json({
      message: `Book titled ${title} fetched successfully`,
      singleBook,
    });
  } catch (err: any) {
    console.log(err.message);
    return response.status(500).json({
      message: `Internal Server Error`,
    });
  }
};
