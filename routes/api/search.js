const router = require("express").Router();
const axios = require("axios")

// Matches with "/api/yelp-search"

let location;
let startTime;
let endTime;
let money;
let lat;
let lng;
let yelpData;
let seatData;
let placesData;
let collection = [];
const GEOBASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const GEOAPIKEY = "AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo"
const YELPBASEURL = "https://api.yelp.com/v3/businesses/search?location=";
const YELPAPIKEY = "cDJdoH87N4Ge3o94InnYAurMHQjMYZTMhpz49LQHeWSl8s2ZacyC4F0iYG4oMQtYhxYWS_rmnUkjYvbdsswZeLVmn6Gx97SpstJuBLyjXlgpnnyDfyoevz92q-HfWnYx"
const PLACESBASEURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const PLACESAPIKEY = "AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo"
const SEATBASEURL = "https://api.seatgeek.com/2/events?geoip=";
const SEATCLIENTID = "MjkyNzU3MXwxNTI1MjIzMTcyLjgy";

router.route("/form-data")
    .post(function (req, res) {
        collection = []
        location = req.body.location;
        startTime = req.body.startTime;
        endTime = req.body.endTime;
        money = req.body.money;

     const apiRequests = async ()=>{
         try{
             const geoGet = await axios(`${GEOBASEURL}${location}&key=${GEOAPIKEY}`)
            //  console.log(geoGet.data)
             lat = geoGet.data.results[0].geometry.location.lat;
             lng = geoGet.data.results[0].geometry.location.lng;
             console.log("lat", lat);
             console.log("lng", lng);
             //Seatgeek API call
             const seatGet = await axios(`${SEATBASEURL}${location}&datetime_utc.gte=${startTime}&datetime_utc.lte=${endTime}&client_id=${SEATCLIENTID}`);
             //Google Museums API Call
             const placesGet = await axios(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=museum&key=${PLACESAPIKEY}`);
             //Google Parks API Call
             const parksGet = await axios(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=park&key=${PLACESAPIKEY}`);
             //Yelp API Call
             const yelpGet = await axios(`${YELPBASEURL}${location}`, {
                headers: {
                "Authorization": `Bearer ${YELPAPIKEY}`
                }
             });
             //Return Data
             const [seatData, placesData, yelpData, parksData] = await Promise.all([seatGet, placesGet, yelpGet, parksGet])
            //  console.log("seat", seatData.data.events);
            // //  console.log("places", placesData.data.results);
            // //  console.log("yelp", yelpData.data.businesses);
            // console.log(parksGet.data.results)
             collection.push(yelpGet.data.businesses, seatGet.data.events, placesGet.data.results, parksGet.data.results)
             res.send({collection, lat, lng})
             
         } 
         catch(err){
             console.log(err)
         }
         
         
     }
     apiRequests()
   
    })

    module.exports = router