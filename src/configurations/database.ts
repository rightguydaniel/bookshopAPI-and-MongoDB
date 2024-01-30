import mongoose from "mongoose";
export const database = async () => {
  try {
    const connection = mongoose.connect(
      "mongodb+srv://danielitoyaojiezele:CeUJuhPW7VsQtDTm@cluster0.u71oxoc.mongodb.net/book_app"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
