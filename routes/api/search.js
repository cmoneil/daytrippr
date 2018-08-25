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
const WEATHERBASEURL ="https://api.darksky.net/forecast";
const WEATHERAPIKEY ="c59f673673d7f6ba89c1223cec579e9a"

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
             
             //Seatgeek API call
             const seatGet = axios(`${SEATBASEURL}${location}&datetime_utc.gte=${startTime}&datetime_utc.lte=${endTime}&client_id=${SEATCLIENTID}`);
             //Google Museums API Call
             const placesGet = axios(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=museum&key=${PLACESAPIKEY}`);
             //Google Parks API Call
             const parksGet = axios(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=park&key=${PLACESAPIKEY}`);
             //Yelp API Call
             const yelpGet = axios(`${YELPBASEURL}${location}`, {
                headers: {
                "Authorization": `Bearer ${YELPAPIKEY}`
                }
             });
             const weatherGet = axios(`${WEATHERBASEURL}/${WEATHERAPIKEY}/${lat},${lng}`)
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