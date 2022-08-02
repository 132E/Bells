const { BugComment, Bug } = require("../models");

// All bug comments
const getAllBugComments = async (req, res) => {
  try {
    let bugComments = await BugComment.find({});
    return res.status(200).json({ bugComments });
  } catch (error) {
    throw error;
  }
};

// Create a bug comment
const createBugComment = async (req, res) => {
  try {
    let bug = await Bug.findbyId(req.params.id);
    let commentBody = { ...req.body, bug: req.params.id };
    let createdBugComment = await BugComment.create(commentBody);
    bug.comments.push(createdBugComment);
    bug.save();
  } catch (error) {
    throw error;
  }
};

// Get a bug comment by id
const getComment = async (req, res) => {
  try {
    let comment = await BugComment.findById(req.params.id);
    ("Bug");
    return res.status(200).json({ comment });
  } catch (error) {
    throw error;
  }
};

// Update a bug comment
const updateComment = async (req, res) => {
  try {
    let updatedComment = await BugComment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({ updatedComment });
  } catch (error) {
    throw error;
  }
};

// Delete a bug comment
const deleteComment = async (req, res) => {
  try {
    let deletedComment = await BugComment.findByIdAndDelete(req.params.id);
    return res.status(200).json({ deletedComment });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBugComments,
  createBugComment,
  getComment,
  updateComment,
  deleteComment,
};
