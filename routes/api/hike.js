const router = require("express").Router();
const hikeController = require("../../controllers/hikeController")

// Matches with "/api/hikes"
router
  .route("/")
  .get(hikeController.findAll)
  .post(hikeController.create);

// Matches with "/api/hikes/:id"
router
  .route("/:id")
  .get(hikeController.findById)
  .put(hikeController.update)
  .delete(hikeController.remove);

module.exports = router;