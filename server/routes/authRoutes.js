import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

// Admin Registration
router.post("/register", register);

// Admin Login
router.post("/login", login);

export default router;
