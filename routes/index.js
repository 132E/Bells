const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("Bells on bells on bells!"));

// BUGS
router.get("/bug", controllers.getBugs);
router.get("/bug/:id", controllers.getBugById);
router.post("/bug", controllers.createBug);
router.put("/bug/:id", controllers.updateBug);
router.delete("/bug/:id", controllers.deleteBug);

// FISHES
router.get("/fish", controllers.getFishes);
router.get("/fish/:id", controllers.getFishById);
router.post("/fish", controllers.createFish);
// router.put("/fish/:id", controllers.updateFish);
// router.delete("/fish/:id", controllers.deleteFish);

// // SEA CRITTERS
router.get("/seaCritters", controllers.getSeaCritters);
router.get("/seaCritters/:id", controllers.getSeaCritterById);
router.post("/seaCritters", controllers.createSeaCritter);
// router.put("/seaCritters/:id", controllers.updateSeaCritter);
// router.delete("/seaCritters/:id", controllers.deleteSeaCritter);

module.exports = router;
