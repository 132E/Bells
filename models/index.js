const mongoose = require("mongoose");
const bugSchema = require("./Bug.js");

const Bug = mongoose.model("Bug", bugSchema);

module.exports = {
  Bug,
};
