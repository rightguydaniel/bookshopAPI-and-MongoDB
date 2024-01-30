import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

export interface IBook {
  _id: string;
  title:string
  author: string;
  datePublished: Date;
  description: string;
  pageCount: number;
  genre: string;
  bookId: string;
  publisher: string;
  ownerId: string;
}

const BookSchema = new Schema(
  {
    title: {
        type: String,
        require: [true, `please enter book author`],
      },
    author: {
      type: String,
      require: [true, `please enter book author`],
    },
    datePublished: {
      type: String,
      require: [true, `please enter date book was published`],
    },
    description: {
      type: String,
      require: [true, `please enter book description`],
    },
    pageCount: {
      type: String,
      require: [true, `please enter book page count `],
    },
    genre: {
      type: String,
      require: [true, `please enter book genre`],
    },
    bookId: {
      type: String,
      require: [true, `Book Id not generated`],
      unique: [true],
    },
    publisher: {
      type: String,
      require: [true, `please enter Book publisher `],
    },
    ownerId: {
      type: String,
      require: [true, `Unable to fetch book owner ID `],
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<IBook>("book", BookSchema);

export default Book;
