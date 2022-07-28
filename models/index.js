const mongoose = require("mongoose");
const bugSchema = require("./Bug.js");

const Bug = mongoose.model("Bug", bugSchema);
// const Brand = mongoose.model("Brand", brandSchema);

module.exports = {
  Bug,
};
