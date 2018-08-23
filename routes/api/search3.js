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
const YELPBASEURL = "https://api.yelp.com/v3/businesses/search?location=";
const YELPAPIKEY = "cDJdoH87N4Ge3o94InnYAurMHQjMYZTMhpz49LQHeWSl8s2ZacyC4F0iYG4oMQtYhxYWS_rmnUkjYvbdsswZeLVmn6Gx97SpstJuBLyjXlgpnnyDfyoevz92q-HfWnYx"
const PLACESBASEURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
const PLACESAPIKEY = "AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo"
const SEATBASEURL = "https://api.seatgeek.com/2/events?geoip=";
const SEATCLIENTID = "MjkyNzU3MXwxNTI1MjIzMTcyLjgy";

router.route("/form-data")
    .post(function (req, res) {
        // collection=[]
        location = req.body.location;
        startTime = req.body.startTime;
        endTime = req.body.endTime;
        money = req.body.money;
        

        
        // console.log(startTime)
        // console.log(endTime)
        // console.log(`${SEATBASEURL}${location}&datetime_utc.gte=${startTime}&datetime_utc.lte=${endTime}&client_id=${SEATCLIENTID}`)
        // console.log(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=museum&key=${PLACESAPIKEY}`)


        //Geocode
        const GEOBASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
        const GEOAPIKEY = "AIzaSyCucNdXtBt0uv0BwcuhhYAeKa9OgchTqwo"
        // console.log(`${GEOBASEURL}${location}&key=${GEOAPIKEY}`)
        axios.get(`${GEOBASEURL}${location}&key=${GEOAPIKEY}`)
            .then(data => {
                lat = data.data.results[0].geometry.location.lat;
                lng = data.data.results[0].geometry.location.lng;
                
            
                
                //Yelp
                axios.all([
                    axios.get(`${YELPBASEURL}${location}`, {
                        headers: {
                        "Authorization": `Bearer ${YELPAPIKEY}`
                        }
                     }),
                //Places
                    axios.get(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=museum&key=${PLACESAPIKEY}`),
                //Seatgeek
                    axios.get(`${SEATBASEURL}${location}&datetime_utc.gte=${startTime}&datetime_utc.lte=${endTime}&client_id=${SEATCLIENTID}`),
                    axios.get(`${PLACESBASEURL}${lat},${lng}&radius=1500&type=park&key=${PLACESAPIKEY}`)
                ])
                    .then(axios.spread((yelpRes, placesRes, seatRes, parkRes)=>{
                        yelpData = yelpRes.data.businesses;
                        placesData = placesRes.data.results;
                        seatData = seatRes.data.events;
                        parksData= parkRes.data.results;
                        // console.log("yelpRes " + yelpData);
                        // console.log("placesRes " + placesRes.data.results);
                        // console.log("seatRes " + seatRes.data.events);
                        collection.push(yelpData, seatData, placesData, parksData);
                        // collection.push(placesData)
                        
                    }))
                    .then(res.send({collection, lat, lng}))
                    .catch((err)=>{
                        console.log("error", err)
                    })
            })
            // .then(res.send({collection, lat, lng}))
            .catch((err)=>{
                console.log("error", err)
            })
    }
)
    





module.exports = router