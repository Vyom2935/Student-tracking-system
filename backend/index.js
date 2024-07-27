const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDatabase } = require("./DB/dbconnect"); // Import the connectToDatabase function
const authRoutes = require("./AUTH/auth");
const displayForm = require("./routes/displayForm");
const register = require("./routes/register");
const academicForm = require("./routes/academicForm");
const displayAcademicForm = require("./routes/displayAcademicForm");
const personalInfoForm = require("./routes/personalForm");
const retrieveMentor = require("./routes/retrieveMentor");

// Create an Express.js app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// Middleware to parse JSON data
app.use(express.json());

app.use("/auth/login", authRoutes);

app.use("/api/display-form", displayForm);
app.use("/api/register", register);
app.use("/api/addStudentData", academicForm);
app.use("/api/display-student-data", displayAcademicForm);
app.use("/api/submit-form", personalInfoForm);
app.use("/api/send-mentor", retrieveMentor);

// Start the Express.js server
app.listen(port, () => {
  try {
    connectToDatabase();
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
