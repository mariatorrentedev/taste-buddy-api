require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, CLIENT_ORIGIN } = require("./config");
// const someRouter = require('./some-routers/some-router');

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

const app = express();
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

// app.use("/api/", someRouter);

app.get("/api/", (req, res) => {
  res.send("Hello, TasteBuddy API!");
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error("error");
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
