import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authoriser = async (
  req: JwtPayload,
  res: Response,
  next: NextFunction
) => {
  try {
    const authoriser = req.headers.authorization;
    if (authoriser === undefined) {
      return res.status(401).json({
        message: `Authorisation failed`,
      });
    }

    const token = authoriser.split(" ")[1];
    if (!token || token === "") {
      return res.status(401).json({
        status: `Failed`,
        message: `Authorisation failed`,
      });
    }
    const decode = jwt.verify(token, `${process.env.APP_SECRET}`);
    console.log(decode);
    if (decode) {
      req.user = decode;
      next();
    }
  } catch (err: any) {
    console.log(err.message);
  }
};
