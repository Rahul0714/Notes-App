const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.post("/list", async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.body.userId });
    res.json(notes);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/add", async (req, res) => {
  console.log("tis is adding");
  var res = await Note.deleteOne({ id: req.body.id });
  console.log(res); //;();
  try {
    const newNote = new Note(req.body);
    newNote.save();
    res.json({ message: "Added Successfully!" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Note.deleteOne({ userId: req.body.userId });
    res.json({ message: `deleted ${req.body.userId}` });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
