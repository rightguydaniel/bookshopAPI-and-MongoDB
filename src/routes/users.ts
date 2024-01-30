import express from "express";
import { registerUser } from "../controllers/usercontrollers/userRegister";
import { userLogin } from "../controllers/usercontrollers/userLogin";
import { deleteBook } from "../controllers/bookcontrollers/deleteBook";
import { getUser } from "../controllers/usercontrollers/getUser";
import { getAllUsers } from "../controllers/usercontrollers/getAllUsers";
import { deleteUser } from "../controllers/usercontrollers/deleteUser";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.delete("/delete", deleteUser);
router.get("/getuser", getUser);
router.get("/getalluser", getAllUsers);

export default router;
