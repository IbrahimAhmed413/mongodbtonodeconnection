const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const User = require('./models/user')
mongoose
  .connect(
    "mongodb+srv://ibrahim:ibrahim@cluster0.h6h9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.post('/users/create', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json({ success: true, data: newUser });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });
  app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
  })