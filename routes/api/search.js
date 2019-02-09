const router = require("express").Router();
const axios = require("axios")
const opn= require("opn")

// Matches with "/api/search"

let location;
let startTime;
let endTime;
let lat;
let lng;
let placeUrl;
let placeName
let userLocation;
// let money = 0; Not using at this time
let collection = [];
let placesID;
//Geolocate API url
const GEOBASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
//Yelp API url
const YELPBASEURL = "https://api.yelp.com/v3/businesses/search?location=";
//Google Places API url
const PLACESBASEURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
//SeatGeek API url
const SEATBASEURL = "https://api.seatgeek.com/2/events?geoip=";
//DarkSky API url
const WEATHERBASEURL = "https://api.darksky.net/forecast";


router.route("/form-data")
    .post(function (req, res) {
        collection = []
        location = req.body.location;
        startTime = req.body.startTime;
        endTime = req.body.endTime;
        // money = req.body.money; Not using yet

        const apiRequests = async () => {
            try {
                //Geolocate API call
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
                //Darksky API Call
                const weatherGet = axios(`${WEATHERBASEURL}/${process.env.REACT_APP_WEATHER_KEY}/${lat},${lng}`)
                //Return Data
                const [seatData, placesData, yelpData, parksData, weatherData] = await Promise.all([seatGet, placesGet, yelpGet, parksGet, weatherGet])
                //Pushes data into collection array
                collection.push(yelpData.data.businesses, seatData.data.events, placesData.data.results, parksData.data.results, weatherData.data.currently)
                res.send({ collection, lat, lng })

            }
            catch (err) {
                console.log(err)
            }


        }
        apiRequests()

    })

router.route("/url-data")
    .post(function (req, res) {
        placesID = req.body.id;
        userLocation = req.body.location
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placesID}&&key=${process.env.REACT_APP_PLACES_KEY}`)
            .then(response => {
                placeUrl = response.data.result.website;
                placeName = response.data.result.name;
                if (placeUrl === undefined) {
                    opn(`https://www.google.com/search?q=${placeName}+${userLocation}`)
                    
                }
                else {
                    opn(placeUrl)
                }
                res.sendStatus(200)
            })
            .catch(err => {
                console.log(err)
            })
    })
module.exports = router