import { Request, Response } from "express";
import Book from "../../models/bookModel/bookModel";

export const getAllBooks = async (request: Request, response: Response) => {
  try {const allBooks = await Book.find({});

    return response
      .status(200)
      .json({ message: `All books fetched successfully`, allBooks });
    
  } catch (err: any) {
    console.log(err.message);
    return response.status(500).json({
      message: `Internal Server Error`,
    });
  }
};

