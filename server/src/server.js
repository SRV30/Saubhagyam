const express = require("express");
const cors = require("cors");

const env = require("./config/env");
const routes = require("./routes");
const connectDb = require("./db/connect");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(
  cors({
    origin: [
      env.clientUrl,
      env.clientUrlDev,
      env.localUrl,
      "https://saubhagyamastro.in",
      "https://www.saubhagyamastro.in",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Saubhagyam API Running",
  });
});

app.use("/api", routes);

app.use(errorHandler);

connectDb()
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed", error.message);
  });

module.exports = app;