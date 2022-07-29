const { response } = require("express");
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const { Bug } = require("./models/index.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/api", routes);

// Landing page
app.get("/bugs", async (req, res) => {
  const bugs = await Bug.find({}).then((result) =>
    res.status(200).send(result)
  );

  res.json(bugs);
});

app.get("/fishes", async (req, res) => {
  res.send("fishes");
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
