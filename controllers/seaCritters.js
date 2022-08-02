const { SeaCritter } = require("../models");

// All sea critters
const getAllSeaCritters = async (req, res) => {
  try {
    const seaCritters = await SeaCritter.find();
    return res.status(200).json({ seaCritters });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllSeaCritters,
};
