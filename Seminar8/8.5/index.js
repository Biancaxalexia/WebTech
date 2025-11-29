//Exemplu + exercitiu
"use strict";

const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");
//require("dotenv").config();

const app = express();

/*const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};*/

//app.use(logger);

const middleware = (req, res, next) => {
  console.log(`method: ${req.method}\nurl: ${req.url}`);
  next();
};

app.use(middleware);

app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

//app.set("port", process.env.PORT || 7000);
app.set("port", 7000);

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
