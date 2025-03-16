import Project from "../models/Project.js";

// Add Project
export const addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: "Project Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Project Updated", project });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
