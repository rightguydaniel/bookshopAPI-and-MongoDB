import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import User from "../../models/userModel/userModel";

export const deleteUser = async (req: JwtPayload, res: Response) => {
  try {
    const { email } = req.body;
    const UserToDelete = await User.find({ email: email });
    if (!UserToDelete) {
      return res.status(400).json({
        status: `Failed`,
        message: `User with ${email} does not exist`,
      });
    }
    const deleteUser = await User.deleteOne({ email: email });
    return res.status(200).json({
      status: `Success`,
      message: `User with email ${email} successfully deleted`,
      UserToDelete,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: `Unsuccessful`,
    });
  }
};
