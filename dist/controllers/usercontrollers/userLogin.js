"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const helpers_1 = require("../../utilities/helpers");
const userModel_1 = __importDefault(require("../../models/userModel/userModel"));
const userLogin = async (req, res) => {
    try {
        // Fetch email and password from the request body
        const { email, password } = req.body;
        //check if user exist in database
        const user = await userModel_1.default.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                status: `Failed`,
                message: `The user with ${email} does not exist`,
            });
        }
        // Check if user password matches
        const validate = await bcryptjs_1.default.compare(password, user.password);
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
        const token = (0, helpers_1.generateToken)(data);
        return res.status(200).json({
            message: `Login Successful`,
            token,
            user,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            status: `Unsuccessful`,
            message: `Wahala dey oh`,
        });
    }
};
exports.userLogin = userLogin;
