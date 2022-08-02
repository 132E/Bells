const { Schema } = require("mongoose");

const Bug = new Schema(
  {
    number: { type: Number, required: true },
    name: { type: String, required: true },
    iconImage: { type: String, required: true },
    sellPrice: { type: String, required: true },
    location: { type: String, required: true },
    weather: { type: String, required: true },
    timeOfDay: { type: String, required: true },
    totalCatches: { type: Number, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "BugComment" }],
  },
  { timestamps: true }
);
module.exports = Bug;
