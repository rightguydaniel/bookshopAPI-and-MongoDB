"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const userModel_1 = __importDefault(require("../../models/userModel/userModel"));
const getUser = async (req, res) => {
    try {
        const { email } = req.body;
        const singleUser = await userModel_1.default.find({ email: email });
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
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: `Unsuccessful`,
        });
    }
};
exports.getUser = getUser;
