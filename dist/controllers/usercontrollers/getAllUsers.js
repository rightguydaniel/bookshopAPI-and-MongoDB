"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const userModel_1 = __importDefault(require("../../models/userModel/userModel"));
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel_1.default.find({});
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
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: `Unsuccessful`,
        });
    }
};
exports.getAllUsers = getAllUsers;
