const express = require("express");
const { Router } = express;

const { FormData } = require("../models/model1");

const router = Router();

// Route to fetch data from MongoDB and display it in a table
// Route to fetch data from MongoDB and send it as JSON
router.get("/", async (req, res) => {
  try {
    // Fetch data from MongoDB using your FormData model
    const formData = await FormData.find();

    // Send the data as JSON
    // console.log(formData);
    res.status(200).json(formData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data from the database");
  }
});

module.exports = router;
