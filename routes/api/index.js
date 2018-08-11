const router = require("express").Router();
const searchRoutes = require("./search");
const intineraryRoutes = require("./itinerary");

// API routes
router.use("/itinerary", intineraryRoutes);
router.use("/search", searchRoutes);


module.exports = router;
