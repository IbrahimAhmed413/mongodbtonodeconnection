const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./Connections/databaseconnection");
const userRoute = require("./Route/User");
app.use(bodyParser.json());


app.use("/users", userRoute);
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
