const express = require("express");
const { Router } = express;

const router = Router();

const Student = require("../models/model2");

// route to handle academics form
// In your Express.js server code
router.get("/", async (req, res) => {
  try {
    // Fetch student data from MongoDB using your Student model
    const students = await Student.find(
      {},
      "name studentClass rollNo mentorName competitionsImage projectpresentationsImage paperPresentationsImage onlineCourseImage copyrightImage internshipImage certificationImage"
    );

    // Map the students data to include base64 certificate URLs
    const studentsWithBase64Images = students.map((student) => {
      return {
        _id: student._id,
        name: student.name,
        studentClass: student.studentClass,
        rollNo: student.rollNo,
        mentorName: student.mentorName,
        // Add base64 URLs for certificate images
        competitionsImage: student.competitionsImage
          ? `data:image/jpeg;base64,${student.competitionsImage.toString(
              "base64"
            )}`
          : null,
        projectpresentationsImage: student.projectpresentationsImage
          ? `data:image/jpeg;base64,${student.projectpresentationsImage.toString(
              "base64"
            )}`
          : null,
        paperPresentationsImage: student.paperPresentationsImage
          ? `data:image/jpeg;base64,${student.paperPresentationsImage.toString(
              "base64"
            )}`
          : null,
        onlineCourseImage: student.onlineCourseImage
          ? `data:image/jpeg;base64,${student.onlineCourseImage.toString(
              "base64"
            )}`
          : null,
        copyrightImage: student.copyrightImage
          ? `data:image/jpeg;base64,${student.copyrightImage.toString(
              "base64"
            )}`
          : null,
        internshipImage: student.internshipImage
          ? `data:image/jpeg;base64,${student.internshipImage.toString(
              "base64"
            )}`
          : null,
        certificationImage: student.certificationImage
          ? `data:image/jpeg;base64,${student.certificationImage.toString(
              "base64"
            )}`
          : null,
      };
    });

    res.json(studentsWithBase64Images); // Send the data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching student data" });
  }
});

module.exports = router;
