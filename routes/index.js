const { Router } = require("express");
const { bugs, fishes, seaCritters, BugComment } = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("Bells on bells on bells!"));

// BUGS
router.get("/bugs", bugs.getAllBugs);
router.post("/bugs", bugs.createBug);
router.get("/bugs/:id", bugs.getOneBug);
router.post("/bugs/:id/comments", BugComment.createBugComment);

// FISHES
router.get("/fishes", fishes.getAllFishes);
router.post("/fishes", fishes.createFish);
router.get("/fishes/:id", fishes.getOneFish);

// SEA CRITTERS
router.get("/critters", seaCritters.getAllSeaCritters);
router.post("/critters", seaCritters.createSeaCritter);
router.get("/critters/:id", seaCritters.getOneSeaCritter);

// BUG COMMENTS
router.get("/comments", BugComment.getAllBugComments);
router.get("/comments/:id", BugComment.getComment);
router.put("/comments/:id", BugComment.updateComment);
router.delete("/comments/:id", BugComment.deleteComment);

module.exports = router;
