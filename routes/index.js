const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/");

router.get("/bugs", controllers.getBugs);
router.get("/bugs/:id", controllers.getBugById);
router.post("/bugs", controllers.createBug);
router.put("/bugs/:id", controllers.updateBug);
router.delete("/bugs/:id", controllers.deleteBug);

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
