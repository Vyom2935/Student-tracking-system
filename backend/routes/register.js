// const express = require("express");
// const { Router } = express;
// const bcrypt = require("bcrypt");

// const router = Router();

// const { Student, Mentor, Admin } = require("../models/model3");

// // Define your POST route to handle registration
// router.post("/", async (req, res) => {
//   try {
//     const { username, email, password, userType } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     let user;

//     // Depending on the userType, create and save the user in the appropriate collection
//     if (userType === "student") {
//       user = new Student({
//         username,
//         email,
//         password: hashedPassword,
//         userType,
//         // Add other fields as needed
//       });
//     } else if (userType === "mentor") {
//       user = new Mentor({
//         username,
//         email,
//         password: hashedPassword,
//         userType,
//         // Add other fields as needed
//       });
//     } else if (userType === "admin") {
//       user = new Admin({
//         username,
//         email,
//         password: hashedPassword,
//         userType,
//         // Add other fields as needed
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid user type" });
//     }

//     // Save the user to the appropriate collection
//     await user.save();

//     return res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const bcrypt = require("bcrypt");
const { Student, Mentor, Admin } = require("../models/model3"); // Import your models

const router = express.Router();

// Define your POST route to handle registration
router.post("/", async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;

    // Check if the username or email is already taken
    const existingUser = await Student.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let user;

    // Depending on the userType, create and save the user in the appropriate collection
    if (userType === "student") {
      user = new Student({
        username,
        email,
        password: hashedPassword,
        userType,
        // Add other fields as needed
      });
    } else if (userType === "mentor") {
      user = new Mentor({
        username,
        email,
        password: hashedPassword,
        userType,
        // Add other fields as needed
      });
    } else if (userType === "admin") {
      user = new Admin({
        username,
        email,
        password: hashedPassword,
        userType,
        // Add other fields as needed
      });
    } else {
      return res.status(400).json({ message: "Invalid user type" });
    }

    // Save the user to the appropriate collection
    await user.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
