const router = require("express").Router();
const axios = require("axios")

// Matches with "/api/yelp-search"

let location;
let startTime;
let endTime;
let lat;
let lng;
// let money = 0; Not using at this time
let collection = [];
const GEOBASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const YELPBASEURL = "https://api.yelp.com/v3/businesses/search?location=";
const PLACESBASEURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const SEATBASEURL = "https://api.seatgeek.com/2/events?geoip=";
const WEATHERBASEURL ="https://api.darksky.net/forecast";


router.route("/form-data")
    .post(function (req, res) {
        collection = []
        location = req.body.location;
        startTime = req.body.startTime;
        endTime = req.body.endTime;
        // money = req.body.money; Not using yet

     const apiRequests = async ()=>{
         try{
             const geoGet = await axios(`${GEOBASEURL}${location}&key=${process.env.REACT_APP_GEO_KEY}`)
            
             lat = geoGet.data.results[0].geometry.location.lat;
             lng = geoGet.data.results[0].geometry.location.lng;
             
             //Seatgeek API call
             const seatGet = axios(`${SEATBASEURL}${location}&datetime_utc.gte=${startTime}&datetime_utc.lte=${endTime}&client_id=${process.env.REACT_APP_SEAT_KEY}`);
             //Google Museums API Call
             const placesGet = axios(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=museum&key=${process.env.REACT_APP_PLACES_KEY}`);
             //Google Parks API Call
             const parksGet = axios(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=park&key=${process.env.REACT_APP_PLACES_KEY}`);
             //Yelp API Call
             const yelpGet = axios(`${YELPBASEURL}${location}`, {
                headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_YELP_KEY}`
                }
             });
             const weatherGet = axios(`${WEATHERBASEURL}/${process.env.REACT_APP_WEATHER_KEY}/${lat},${lng}`)
             //Return Data
             const [seatData, placesData, yelpData, parksData, weatherData] = await Promise.all([seatGet, placesGet, yelpGet, parksGet, weatherGet])
            //  console.log("seat", seatData.data.events);
            // //  console.log("places", placesData.data.results);
            // //  console.log("yelp", yelpData.data.businesses);
            // console.log(parksData.data.results)
            // console.log(weatherData.data.currently)
             collection.push(yelpData.data.businesses, seatData.data.events, placesData.data.results, parksData.data.results, weatherData.data.currently)
             res.send({collection, lat, lng})
             
         } 
         catch(err){
             console.log(err)
         }
         
         
     }
     apiRequests()
   
    })

    module.exports = router