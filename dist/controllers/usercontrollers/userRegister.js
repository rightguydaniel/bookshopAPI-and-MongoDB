"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const helpers_1 = require("../../utilities/helpers");
const userModel_1 = __importDefault(require("../../models/userModel/userModel"));
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, country } = req.body;
        const user = await userModel_1.default.findOne({ email: email });
        if (user) {
            return res.status(400).json({
                status: `Failed`,
                message: `User with ${email} already exist`,
            });
        }
        //hash password
        const hash = await (0, helpers_1.hashPassword)(password);
        //create new user
        const newUser = await userModel_1.default.create({
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
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({
            status: "Failed",
            message: "Wahala dey oh",
        });
    }
};
exports.registerUser = registerUser;
