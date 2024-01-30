import { Request, Response, NextFunction } from "express";
import { hashPassword } from "../../utilities/helpers";
import User from "../../models/userModel/userModel";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, country } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        status: `Failed`,
        message: `User with ${email} already exist`,
      });
    }
    //hash password
    const hash = await hashPassword(password);
    //create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
      country,
    });
    //check if user was successfully created
    if (!newUser) {
      return res.status(400).json({
        status: `Failed`,
        message: `Account creation unsuccessful, try again`,
      });
    }
    return res.status(200).json({
      status: `Successful`,
      message: `Account creation was successful`,
    });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({
      status: "Failed",
      message: "Wahala dey oh",
    });
  }
};
