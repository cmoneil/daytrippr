const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
  name: { type: String},
  url: String,
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
