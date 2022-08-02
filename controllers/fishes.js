const { Fish } = require("../models");

// All fish
const getAllFishes = async (req, res) => {
  try {
    const fishes = await Fish.find({});
    return res.status(200).json({ fishes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Create a fish
const createFish = async (req, res) => {
  try {
    let createdFish = await Fish.create(req.body);
    res.send(createdFish);
  } catch (error) {
    throw error;
  }
};

// Get a fish by id
const getOneFish = async (req, res) => {
  try {
    let foundFish = await Fish.findById(req.params.id);
    if (foundFish) {
      return res.status(200).json({ foundFish });
    }
    return res.status(404).send("Sorry, that fish does not exist");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllFishes,
  createFish,
  getOneFish,
};
