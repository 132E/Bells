const { Bug } = require("../models");

// All bugs
const getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    console.log(bugs);
    return res.status(200).json({ bugs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Create a bug
const createBug = async (req, res) => {
  try {
    let createdBug = await Bug.create(req.body);
    res.send(createdBug);
  } catch (error) {
    throw error;
  }
};

// Get a bug by id
const getOneBug = async (req, res) => {
  try {
    let foundBug = await Bug.findById(req.params.id).populate("BugComments");
    if (foundBug) {
      return res.status(200).json({ foundBug });
    }
    return res.status(404).send("Sorry, that bug does not exist");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBugs,
  createBug,
  getOneBug,
};
