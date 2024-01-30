"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authoriser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authoriser = async (req, res, next) => {
    try {
        const authoriser = req.headers.authorization;
        if (authoriser === undefined) {
            return res.status(401).json({
                message: `Authorisation failed`,
            });
        }
        const token = authoriser.split(" ")[1];
        if (!token || token === "") {
            return res.status(401).json({
                status: `Failed`,
                message: `Authorisation failed`,
            });
        }
        const decode = jsonwebtoken_1.default.verify(token, `${process.env.APP_SECRET}`);
        console.log(decode);
        if (decode) {
            req.user = decode;
            next();
        }
    }
    catch (err) {
        console.log(err.message);
    }
};
exports.authoriser = authoriser;
