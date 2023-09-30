const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({
  path: ".env",
});
const morgan = require("morgan");

const plogRouter = require("./routes/plogRoutes");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/plog/", plogRouter);

const port = 3000;
app.listen(port, () => {
  console.log("listening on port " + port);
});

mongoose.connect(process.env.DB_URI).then(() => {
  console.log("Connect to database successfully");
});
