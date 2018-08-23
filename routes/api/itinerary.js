const router = require("express").Router();
const intineraryController = require("../../controllers/intineraryController");

// Matches with "/api/itinerary"
router.route("/:oauthID")
  .get(intineraryController.findById)

router.route("/")
  .post(intineraryController.create)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(intineraryController.findById)
  .put(intineraryController.update)
  .delete(intineraryController.remove);

module.exports = router;
