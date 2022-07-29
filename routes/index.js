const { Router, application } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("Bells on bells on bells!"));

router.get("/bug", controllers.getBugs);
router.get("/bug/:id", controllers.getBugById);
router.post("/bug", controllers.createBug);
router.put("/bug/:id", controllers.updateBug);
router.delete("/bug/:id", controllers.deleteBug);

// router.get("/fishes", controllers.getFishes);
// router.get("/fishes/:id", controllers.getFishById);
// router.post("/fishes", controllers.createFish);
// router.put("/fishes/:id", controllers.updateFish);
// router.delete("/fishes/:id", controllers.deleteFish);

// router.get("/seaCritters", controllers.getSeaCritters);
// router.get("/seaCritters/:id", controllers.getSeaCritterById);
// router.post("/seaCritters", controllers.createSeaCritter);
// router.put("/seaCritters/:id", controllers.updateSeaCritter);
// router.delete("/seaCritters/:id", controllers.deleteSeaCritter);

module.exports = router;
