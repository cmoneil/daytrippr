import axios from "axios";

const API = {
  // Retrieves saved itinerary from the db
  getItinerary: function() {
    return axios.get("/api/itinerary");
  },
  // Saves a new intinerary to the db
  saveItinerary: function(itineraryObj) {
    return axios.post("/api/itinerary", itineraryObj);
  },
  // Deletes an itinerary from the db
  deleteItinerary: function(id) {
    return axios.delete(`/api/itinerary/${id}`);
  }
 
};

export default API;