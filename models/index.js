const mongoose = require("mongoose");
const bugSchema = require("./Bug.js");
const fishSchema = require("./Fish.js");
const seaCritterSchema = require("./SeaCritter.js");
const bugCommentSchema = require("./BugComment.js");

const Bug = mongoose.model("Bug", bugSchema);
const Fish = mongoose.model("Fish", fishSchema);
const SeaCritter = mongoose.model("SeaCritter", seaCritterSchema);
const BugComment = mongoose.model("BugComment", bugCommentSchema);

module.exports = {
  Bug,
  Fish,
  SeaCritter,
  BugComment,
};
