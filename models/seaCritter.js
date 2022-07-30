const { Schema } = require("mongoose");

const seaCritter = new Schema(
  {
    number: { type: Number, required: true },
    name: { type: String, required: true },
    iconImage: { type: String, required: true },
    sellPrice: { type: String, required: true },
    shadow: { type: String, required: true },
    shadowMovement: { type: String, required: true },
    timeOfDay: { type: String, required: true },
    totalCatches: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = seaCritter;
