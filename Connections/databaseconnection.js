const mongoose = require("mongoose");

const dbconnect = mongoose
  .connect(
    "mongodb+srv://ibrahim:ibrahim@cluster0.h6h9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = dbconnect;
