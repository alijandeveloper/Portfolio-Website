import express from "express";
import { addProject, getProjects, updateProject, deleteProject } from "../controllers/projectController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // 🛡️ Import middleware

const router = express.Router();

router.post("/add", authMiddleware, addProject);
router.get("/", getProjects);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

export default router;
