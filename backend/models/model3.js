// for username and password using login create a schema here

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["student", "mentor", "admin"],
    required: true,
  },
  // Add more fields as needed for user registration
});

// Define your Mongoose models and schemas for different user types
const Student = mongoose.model("Student", userSchema);
const Mentor = mongoose.model("Mentor", userSchema);
const Admin = mongoose.model("Admin", userSchema);

module.exports = {
  Student,
  Mentor,
  Admin,
};
