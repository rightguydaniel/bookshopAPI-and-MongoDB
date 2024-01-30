"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const userModel_1 = __importDefault(require("../../models/userModel/userModel"));
const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        const UserToDelete = await userModel_1.default.find({ email: email });
        if (!UserToDelete) {
            return res.status(400).json({
                status: `Failed`,
                message: `User with ${email} does not exist`,
            });
        }
        const deleteUser = await userModel_1.default.deleteOne({ email: email });
        return res.status(200).json({
            status: `Success`,
            message: `User with email ${email} successfully deleted`,
            UserToDelete,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: `Unsuccessful`,
        });
    }
};
exports.deleteUser = deleteUser;
