const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/article"
router.route("/")
  .get(userController.findAll)
  .put(userController.update);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(intineraryController.update)
//   .delete(intineraryController.remove);

module.exports = router;
