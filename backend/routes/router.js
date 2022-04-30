import express from "express";
import { adminLogin, adminSignup, createUser, loginUser } from "../controller/user-controller.js";

const router = express.Router();

// Signup
router.post("/signup", createUser);
router.post("/admin-signup", adminSignup);


// login
router.post("/login", loginUser);
router.post("/admin-login", adminLogin);


export default router;
