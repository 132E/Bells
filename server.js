const { response } = require("express");
const express = require("express");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

// Landing page
app.get("/", (req, res) => {
  res.send("Bell Stacking Landing Page");
});

// Fish API
app.get("/fishes", (req, res) => {
  res.send("All the fishes");
});

app.get("/fishes/:id", (req, res) => {
  res.send(`One fish ${req.params.id}`);
});

// Bugs API
app.get("/bugs", (req, res) => {
  res.send("All the bugs");
});

app.get("/bugs/:id", (req, res) => {
  res.send(`One bug ${req.params.id}`);
});

// seaCreatures API
app.get("/seaCritters", (req, res) => {
  res.send("All the sea creatures");
});

app.get("/seaCritters/:id", (req, res) => {
  res.send(`One sea creature ${req.params.id}`);
});
