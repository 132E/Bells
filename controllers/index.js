const bugs = require("./bugs");
const fishes = require("./fishes");
const seaCritters = require("./seaCritters");

// // SEA CRITTERS

// const getSeaCritters = async (req, res) => {
//   try {
//     const seaCritter = await SeaCritter.find();
//     console.log(seaCritter);
//     return res.status(200).json({ seaCritter });
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };
// const getSeaCritterById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const seaCritter = await SeaCritter.findById(id);
//     if (seaCritter) {
//       return res.status(200).json({ seaCritter });
//     }
//     return res.status(404).send("Sorry, that critter does not exist");
//   } catch (error) {
//     throw error;
//   }
// };
// const createSeaCritter = async (req, res) => {
//   try {
//     const newSeaCritter = await SeaCritter.create(req.body);
//     await newSeaCritter.save();
//     return res.status(201).json({ newSeaCritter });
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  bugs,
  fishes,
  seaCritters,
};
