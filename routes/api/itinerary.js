const router = require("express").Router();
const intineraryController = require("../../controllers/intineraryController");

// Matches with "/api/itinerary:oauthID"
// Retrieves itinerary based on User Id
router.route("/:oauthID")
  .get(intineraryController.findById);

//Creates itinerary
router.route("/")
  .post(intineraryController.create);

// Matches with "/api/intinerary/:id"
//Adds and deletes items from intinerary
router
  .route("/:id")
  .get(intineraryController.findById)
  .put(intineraryController.update)
  .delete(intineraryController.remove);

module.exports = router;
