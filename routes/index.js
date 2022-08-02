const { Router } = require("express");
const { bugs, fishes, seaCritters } = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("Bells on bells on bells!"));

// BUGS
router.get("/bugs", bugs.getAllBugs);
router.post("/bugs", bugs.createBug);
router.get("/bugs/:id", bugs.getOneBug);

// FISHES
router.get("/fishes", fishes.getAllFishes);
router.post("/fishes", fishes.createFish);
router.get("/fishes/:id", fishes.getOneFish);

// SEA CRITTERS
router.get("/critters", seaCritters.getAllSeaCritters);

module.exports = router;
