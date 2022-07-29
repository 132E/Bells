const { Bug } = require("../models/index.js");

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

module.exports = {
  getBugs,
  getBugById,
  createBug,
  updateBug,
  deleteBug,
};
