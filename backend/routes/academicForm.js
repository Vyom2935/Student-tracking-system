const multer = require("multer"); // For handling file uploads
const Student = require("../models/model2");

const express = require("express");
const { Router } = express;

const router = Router();

// Set up Multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage });

// Handle form submission for student data
router.post(
  "/",
  upload.fields([
    { name: "competitionsImage", maxCount: 1 },
    { name: "projectpresentationsImage", maxCount: 1 },
    { name: "paperPresentationsImage", maxCount: 1 },
    { name: "onlineCourseImage", maxCount: 1 },
    { name: "copyrightImage", maxCount: 1 },
    { name: "internshipImage", maxCount: 1 },
    { name: "certificationImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, studentClass, rollNo, mentorName } = req.body;

      if (!studentClass) {
        return res.status(400).json({ error: "studentClass is required" });
      }

      const student = new Student({
        name,
        studentClass,
        rollNo,
        mentorName,
      });

      // Save uploaded images as buffers
      const saveImagePromises = Object.keys(req.files).map(
        async (fieldName) => {
          const file = req.files[fieldName][0];
          student[fieldName] = file.buffer; // Store the file buffer in the document
        }
      );

      await Promise.all(saveImagePromises);

      await student.save();

      res.status(200).json({ message: "Student data added successfully!" });
    } catch (error) {
      console.error("Error adding student data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while adding student data" });
    }
  }
);

module.exports = router;
