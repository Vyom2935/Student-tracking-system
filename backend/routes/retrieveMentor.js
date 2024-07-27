const express = require("express");
const { Router } = express;

const router = Router();

const { Mentor } = require("../models/model3");

// Define your POST route to handle registration
router.get("/", async (req, res) => {
  try {
    const names = await Mentor.find({}, "username");
    // console.log(names);

    res.status(201).json({ success: true, data: names });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

module.exports = router;
