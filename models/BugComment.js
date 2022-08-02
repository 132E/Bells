const { Schema } = require("mongoose");

const bugCommentSchema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: "Bugs" },
  },
  { timestamps: true }
);

module.exports = bugCommentSchema;
