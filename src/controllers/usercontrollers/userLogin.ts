import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utilities/helpers";
import User from "../../models/userModel/userModel";

export const userLogin = async (req: Request, res: Response) => {
  try {
    // Fetch email and password from the request body
    const { email, password } = req.body;
    //check if user exist in database
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        status: `Failed`,
        message: `The user with ${email} does not exist`,
      });
    }
    // Check if user password matches
    const validate = await bcrypt.compare(password, user.password);
    if (!validate) {
      return res.status(400).json({
        status: `Failed`,
        message: `Your password is incorrect, try again`,
      });
    }
    const data = {
      userid: user._id,
      email: user.email,
    };

    const token = generateToken(data);

    return res.status(200).json({
      message: `Login Successful`,
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: `Unsuccessful`,
      message: `Wahala dey oh`,
    });
  }
};
