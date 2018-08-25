const router = require("express").Router();
const searchRoutes = require("./search");
const intineraryRoutes = require("./itinerary");
const userRoutes = require("./user")

// API routes
router.use("/itinerary", intineraryRoutes);
router.use("/search", searchRoutes);
router.use("/user", userRoutes)


module.exports = router;
