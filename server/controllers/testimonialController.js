import Testimonial from "../models/Testimonial.js";

// Add Testimonial
export const addTestimonial = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json({ message: "Testimonial Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Testimonials
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Testimonial Updated", testimonial });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Testimonial Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
