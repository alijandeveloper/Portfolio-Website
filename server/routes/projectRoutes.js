import express from "express";
import { addProject, getProjects, updateProject, deleteProject } from "../controllers/projectController.js";

const router = express.Router();

router.post("/add", addProject);
router.get("/", getProjects);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
