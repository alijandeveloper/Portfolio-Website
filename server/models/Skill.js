import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    percentage: { type: Number, required: true }, // Skill Progress in %
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
