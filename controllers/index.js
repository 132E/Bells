const { Bug } = require("../models/Bug.js");
const { Fish } = require("../models/Fish.js");
const { SeaCritter } = require("../models/SeaCritter.js");

// BUGS
const getBugs = async (req, res) => {
  try {
    const Bugs = await Bug.find();
    return res.status(200).json({ Bugs });
  } catch (error) {
    throw error;
  }
};
const getBugById = async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    return res.status(200).json({ bug });
  } catch (error) {
    throw error;
  }
};
const createBug = async (req, res) => {
  try {
    const newBug = await Bug.create(req.body);
    await newBug.save();
    return res.status(201).json({ newBug });
  } catch (error) {
    throw error;
  }
};
const updateBug = async (req, res) => {
  try {
    const bugId = req.params.id;
    const updatedBug = await Bug.update(req.body, {
      where: { id: bugId },
      returning: true,
    });
    res.send(updatedBug);
  } catch (error) {
    throw error;
  }
};
const deleteBug = async (req, res) => {
  try {
    const bugId = req.params.bugId;
    await Bug.destroy({
      where: { id: bugId },
    });
    res.send({ msg: "bug with ID ${bugId} deleted" });
  } catch (error) {
    throw error;
  }
};

// FISHES
const getFishes = async (req, res) => {
  try {
    const fishes = await Fish.find();
    return res.status(200).json({ fishes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getFishById = async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.id);
    return res.status(200).json({ fish });
  } catch (error) {
    throw error;
  }
};
const createFish = async (req, res) => {
  try {
    const newFish = await Fish.create(req.body);
    await newFish.save();
    return res.status(201).json({ newFish });
  } catch (error) {
    throw error;
  }
};
const updateFish = async (req, res) => {
  try {
    const fishId = req.params.id;
    const updatedFish = await Fish.update(req.body, {
      where: { id: fishId },
      returning: true,
    });
    res.send(updatedFish);
  } catch (error) {
    throw error;
  }
};
const deleteFish = async (req, res) => {
  try {
    const fishId = req.params.fishId;
    await Fish.destroy({
      where: { id: fishId },
    });
    res.send({ msg: "fish with ID ${fishId} deleted" });
  } catch (error) {
    throw error;
  }
};

// SEA CRITTERS
const getSeaCritters = async (req, res) => {
  try {
    const seaCritters = await SeaCritter.find();
    return res.status(200).json({ seaCritters });
  } catch (error) {
    throw error;
  }
};
const getSeaCritterById = async (req, res) => {
  try {
    const seaCritter = await SeaCritter.findById(req.params.id);
    return res.status(200).json({ seaCritter });
  } catch (error) {
    throw error;
  }
};
const createSeaCritter = async (req, res) => {
  try {
    const newSeaCritter = await SeaCritter.create(req.body);
    await newSeaCritter.save();
    return res.status(201).json({ newSeaCritter });
  } catch (error) {
    throw error;
  }
};
const updateSeaCritter = async (req, res) => {
  try {
    const seaCritterId = req.params.id;
    const updatedSeaCritter = await SeaCritter.update(req.body, {
      where: { id: seaCritterId },
      returning: true,
    });
    res.send(updatedSeaCritter);
  } catch (error) {
    throw error;
  }
};
const deleteSeaCritter = async (req, res) => {};

module.exports = {
  getBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug,
  getFishes,
  getFishById,
  createFish,
  updateFish,
  deleteFish,
  getSeaCritters,
  getSeaCritterById,
  createSeaCritter,
  updateSeaCritter,
  deleteSeaCritter,
};
