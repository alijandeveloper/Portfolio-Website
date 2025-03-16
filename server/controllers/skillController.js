import Skill from "../models/Skill.js";

// Add Skill
export const addSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json({ message: "Skill Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Skill
export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Skill Updated", skill });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Skill
export const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Skill Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
