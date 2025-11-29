//Exercitiu
const express = require("express");
const { books } = require("../app2.js");
const status = express.Router();

status.get("/", (req, res) => {
  res.status(200).send("The server is working!");
});

module.exports = status;
