import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import User from "../../models/userModel/userModel";

export const getUser = async (req: JwtPayload, res: Response) => {
  try {
    const { email } = req.body;
    const singleUser = await User.find({ email: email });
    if (!singleUser) {
      return res.status(400).json({
        status: `Failed`,
        message: `User with ${email} does not exist`,
      });
    }
    if (singleUser) {
      return res.status(200).json({
        status: `Success`,
        message: `User successfully fetched`,
        singleUser,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unsuccessful`,
    });
  }
};
