import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
}

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: [true, `please enter your firstname`],
    },
    lastName: {
      type: String,
      require: [true, `please enter your lastname`],
    },
    email: {
      type: String,
      require: [true, `please enter your email`],
      unique: [true],
    },
    password: {
      type: String,
      require: [true, `please enter your password`],
    },
    country: {
      type: String,
      require: [true, `please enter your country`],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("user", userSchema);

export default User;
