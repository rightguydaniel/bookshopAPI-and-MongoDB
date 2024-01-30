import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import usersRouter from "./routes/users";
import bookRouter from "./routes/books";
import { database } from "./configurations/database";
import cors from 'cors'
const app = express();
app.use(cors())
dotenv.config();
database();
//middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/book", bookRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listing from port ${process.env.PORT}`);
});
module.exports = app;
