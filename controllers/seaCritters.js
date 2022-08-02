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

// Create a sea critter
const createSeaCritter = async (req, res) => {
  try {
    let createdSeaCritter = await SeaCritter.create(req.body);
    res.send(createdSeaCritter);
  } catch (error) {
    throw error;
  }
};

// Get a sea critter by id
const getOneSeaCritter = async (req, res) => {
  try {
    let foundSeaCritter = await SeaCritter.findById(req.params.id);
    if (foundSeaCritter) {
      return res.status(200).json({ foundSeaCritter });
    }
    return res.status(404).send("Sorry, that sea critter does not exist");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSeaCritters,
  createSeaCritter,
  getOneSeaCritter,
};
