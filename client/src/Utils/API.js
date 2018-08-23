import axios from "axios";

const API = {
  // Saves user
  findUser: function(userObj){
    return axios.get("api/user", userObj);
  },
  // Retrieves saved itinerary from the db
  getItinerary: function(oauthID) {
    return axios.get(`/api/itinerary/${oauthID}`);
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