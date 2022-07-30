const { Bug, Fish, SeaCritter } = require("../models/index.js");

// BUGS
const getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    console.log(bugs);
    return res.status(200).json({ bugs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getBugById = async (req, res) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findById(id);
    if (bug) {
      return res.status(200).json({ bug });
    }
    return res.status(404).send("Sorry, that bug does not exist");
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
    console.log(fishes);
    return res.status(200).json({ fishes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getFishById = async (req, res) => {
  try {
    const { id } = req.params;
    const fish = await Fish.findById(id);
    if (fish) {
      return res.status(200).json({ fish });
    }
    return res.status(404).send("Sorry, that fish does not exist");
  } catch (error) {
    throw error;
  }
};
const createFish = async (req, res) => {
  try {
    const newBug = await Fish.create(req.body);
    await newBug.save();
    return res.status(201).json({ newFish });
  } catch (error) {
    throw error;
  }
};

// SEA CRITTERS

const getSeaCritters = async (req, res) => {
  try {
    const seaCritter = await SeaCritter.find();
    console.log(seaCritter);
    return res.status(200).json({ seaCritter });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getSeaCritterById = async (req, res) => {
  try {
    const { id } = req.params;
    const seaCritter = await SeaCritter.findById(id);
    if (seaCritter) {
      return res.status(200).json({ seaCritter });
    }
    return res.status(404).send("Sorry, that critter does not exist");
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

module.exports = {
  getBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug,

  getFishes,
  getFishById,
  createFish,

  getSeaCritters,
  getSeaCritterById,
  createSeaCritter,
};
