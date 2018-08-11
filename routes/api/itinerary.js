const router = require("express").Router();
const intineraryController = require("../../controllers/intineraryController");

// Matches with "/api/article"
router.route("/")
  .get(intineraryController.findAll)
  .post(intineraryController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(intineraryController.findById)
  .put(intineraryController.update)
  .delete(intineraryController.remove);

module.exports = router;
