const express = require("express");
const app = express()

app.use(express.json());

// Cors
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// DOTENV
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Welcome</h1>");
});

const everything = require('./routes/everything.js');
const top = require('./routes/top.js');

app.use("/everything", everything);
app.use("/top", top)

// Routes inexistantes
app.get("*", (_req, res) => {
  res.status(404).send("Error 404, cette page n'existe pas");
});

// Listen
app.listen(8000, () => {
  console.log("Listen on port 8000");
});