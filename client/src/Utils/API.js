import axios from "axios";

const API = {
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/article");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/article", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/article/${id}`);
  },
  //Query NYT API
  getSeatgeek: function (location, startTime, endTime) {
    const BASEURL = "https://api.seatgeek.com/2/events?geoip=";
    const CLIENTID = "MjkyNzU3MXwxNTI1MjIzMTcyLjgy";
    return axios.get(`${BASEURL}${location}&datetime_utc.gte=${startTime}&datetime_utc.lte=${endTime}&client_id=${CLIENTID}`)
  }
};

export default API;