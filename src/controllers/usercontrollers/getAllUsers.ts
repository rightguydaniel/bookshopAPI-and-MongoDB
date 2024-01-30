import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import User from "../../models/userModel/userModel";

export const getAllUsers = async (req: JwtPayload, res: Response) => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) {
      return res.status(400).json({
        status: `Failed`,
        message: `Unable to fetch all users at the moment, please try again`,
      });
    }
    if (allUsers.length < 1) {
      return res.status(200).json({
        status: `Success`,
        message: `No user to display currently`,
      });
    }
    if (allUsers) {
      return res.status(200).json({
        status: `Success`,
        message: `All users successfully fetched`,
        allUsers,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unsuccessful`,
    });
  }
};
