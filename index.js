const express = require("express");
const mongoose = require("mongoose");
const notesRouter = require("./routes/Note");
const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://rahulmujumdar2000:Rahul007@cluster0.f7wc8qe.mongodb.net/Notesdb"
  )
  .then(() => {
    console.log("Database connected!");
  });

App.get("/", (req, res) => {
  res.send("This is HomePage");
});

App.use("/notes", notesRouter);

App.listen(process.env.PORT || 3000, () => {
  console.log("Server running on 3000");
});
