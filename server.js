const { response } = require("express");
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

// Landing page
app.get("/", (req, res) => {
  res.send("Bells Landing Page");
});
